import mongoMiddleware from "utils/mongo-middleware";
import apiHandler from "utils/apiHandler";
import auth0 from "utils/auth/auth0";

export default mongoMiddleware(async (req, res, models) => {
  const { method, body } = req;
  const { User, Club } = models;

  apiHandler(res, method, {
    POST: async (response) => {
      const newClub = JSON.parse(body);

      try {
        const { user } = await auth0.getSession(req);
        const userModel = await User.findOne({ user_id: user.sub });
        const newClubModel = await new Club(newClub).save();
        userModel.clubs.push(newClubModel);
        await userModel.save();
        response.status(200).json({ data: newClubModel });
      } catch (err) {
        response.status(400).json("Error:" + err);
      }
    },
  });
});
