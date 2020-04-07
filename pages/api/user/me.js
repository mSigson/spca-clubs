import mongoMiddleware from "../../../utils/mongo-middleware";
import apiHandler from "../../../utils/apiHandler";
import auth0 from "../../../utils/auth/auth0";

export default mongoMiddleware(async (req, res, models) => {
  const { method } = req;
  const { User } = models;

  apiHandler(res, method, {
    GET: async (response) => {
      try {
        const { user } = await auth0.getSession(req);

        const existingUser = await User.findOne({ user_id: user.sub });
        let returnPayload = existingUser;

        if (!existingUser) {
          const newUser = {
            given_name: user.given_name,
            family_name: user.family_name,
            nickname: user.nickname,
            name: user.name,
            picture: user.picture,
            locale: user.locale,
            user_id: user.sub,
          };

          returnPayload = await new User(newUser).save();
        }

        response.status(200).json(returnPayload);
      } catch (err) {
        response.status(400).json("Error:" + err);
      }
    },
  });
});
