import mongoMiddleware from "utils/mongo-middleware";
import apiHandler from "utils/apiHandler";

export default mongoMiddleware(async (req, res, models) => {
  const { method, body } = req;
  const { Petition, Club } = models;

  apiHandler(res, method, {
    POST: async (response) => {
      const newProject = JSON.parse(body);

      let newProjectModel;
      try {
        if (newProject.type === "petition") {
          newProjectModel = await new Petition(newProject).save();
          const clubModel = await Club.findOne({ _id: newProject.club._id });
          clubModel.projects.petitions.push(newProjectModel);
          await clubModel.save();
        }

        response.status(200).json({ data: newProjectModel });
      } catch (err) {
        response.status(400).json("Error:" + err);
      }
    },
  });
});
