import mongoMiddleware from "utils/mongo-middleware";
import apiHandler from "utils/apiHandler";

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

        if (newProject.type === "petition") {
          newProjectModel = await new Petition(newProject).save();
        } else if (newProject.type === "letter") {
          newProjectModel = await new Letter(newProject).save();
        } else if (newProject.type === "video") {
          newProjectModel = await new Video(newProject).save();
        } else if (newProject.type === "display") {
          newProjectModel = await new Display(newProject).save();
        } else if (newProject.type === "fundraising") {
          newProjectModel = await new Fundraising(newProject).save();
        } else if (newProject.type === "poster") {
          newProjectModel = await new Poster(newProject).save();
        }

        console.log(newProjectModel.type);

        clubModel.projects[`${newProjectModel.type}s`].push(newProjectModel);
        await clubModel.save();
        response.status(200).json({ data: newProjectModel });
      } catch (err) {
        response.status(400).json("Error:" + err);
      }
    },
  });
});
