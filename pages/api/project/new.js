import mongoMiddleware from "utils/mongo-middleware";
import apiHandler from "utils/apiHandler";
import {
  LETTER,
  PETITION,
  POSTER,
  DISPLAY,
  FUNDRAISING,
  VIDEO,
} from "appConstants";

export default mongoMiddleware(async (req, res, models) => {
  const { method, body } = req;
  const {
    Club,
    Petition,
    Letter,
    Video,
    Poster,
    Display,
    Fundraising,
  } = models;

  apiHandler(res, method, {
    POST: async (response) => {
      const newProject = JSON.parse(body);
      let newProjectModel;

      try {
        const clubModel = await Club.findOne({ _id: newProject.club._id });

        if (newProject.type === PETITION) {
          newProjectModel = await new Petition(newProject).save();
        } else if (newProject.type === LETTER) {
          newProjectModel = await new Letter(newProject).save();
        } else if (newProject.type === VIDEO) {
          newProjectModel = await new Video(newProject).save();
        } else if (newProject.type === DISPLAY) {
          newProjectModel = await new Display(newProject).save();
        } else if (newProject.type === FUNDRAISING) {
          newProjectModel = await new Fundraising(newProject).save();
        } else if (newProject.type === POSTER) {
          newProjectModel = await new Poster(newProject).save();
        }

        clubModel.projects[`${newProjectModel.type}s`].push(newProjectModel);
        await clubModel.save();
        response.status(200).json({ data: newProjectModel });
      } catch (err) {
        response.status(400).json("Error:" + err);
      }
    },
  });
});
