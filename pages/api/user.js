import mongoMiddleware from "../../utils/mongo-middleware";
import apiHandler from "../../utils/authHandler";

export default mongoMiddleware(async (req, res, models) => {
  const { method, body } = req;

  apiHandler(res, method, {
    POST: async (response) => {
      const newUser = JSON.parse(body);
      const { User } = models;
      try {
        const newUserModel = await new User(newUser).save();
        response.status(200).json({ data: newUserModel });
      } catch (err) {
        response.status(400).json("Error:" + err);
      }
    },
  });
});
