import mongoMiddleware from '../../utils/mongo-middleware';
import apiHandler from '../../utils/apiHandler';

export default mongoMiddleware(async (req, res, models) => {
  const {
    method
  } = req

  apiHandler(res, method, {
    GET: async (response) => {
      await models.User.find({}, (error, user) => {
        if (error) {
          response.status(500).json({ error });
        } else {
          response.status(200).json(user);
        }
      })
    }
  });
})