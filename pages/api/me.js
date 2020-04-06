import mongoMiddleware from "../../utils/mongo-middleware";
import apiHandler from "../../utils/apiHandler";

export default mongoMiddleware(async (req, res, models) => {
  const { method } = req;

  apiHandler(res, method, {
    GET: async (response) => {
      try {
        // const newUserModel = await new User(newUser).save();
        // response.status(200).json({ data: newUserModel });
        response.status(200);
      } catch (err) {
        response.status(400).json("Error:" + err);
      }
    },
  });
});
