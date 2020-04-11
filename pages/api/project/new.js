import mongoMiddleware from "utils/mongo-middleware";
import apiHandler from "utils/apiHandler";

export default mongoMiddleware(async (req, res, models) => {
  const { method, body } = req;
  const { Club, Petition, Letter } = models;

  apiHandler(res, method, {
    POST: async (response) => {
      const newProject = JSON.parse(body);

      let newProjectModel;
      try {
        const clubModel = await Club.findOne({ _id: newProject.club._id });

        if (newProject.type === "petition") {
          newProjectModel = await new Petition(newProject).save();
          clubModel.projects.petitions.push(newProjectModel);
        } else if (newProject.type === "letter") {
          newProjectModel = await new Letter(newProject).save();

          console.log(newProjectModel.letters);
          clubModel.projects.letters.push(newProjectModel);
        }

        await clubModel.save();
        response.status(200).json({ data: newProjectModel });
      } catch (err) {
        response.status(400).json("Error:" + err);
      }
    },
  });
});
