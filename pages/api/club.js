import mongoMiddleware from "../../utils/mongo-middleware";
import apiHandler from "../../utils/apiHandler";

export default mongoMiddleware(async (req, res, models) => {
  const { method, body } = req;
  const { Club } = models;

  apiHandler(res, method, {
    POST: async (response) => {
      console.log("hi");
      const newClub = JSON.parse(body);
      try {
        const newClubModel = await new Club(newClub).save();
        response.status(200).json({ data: newClubModel });
      } catch (err) {
        response.status(400).json("Error:" + err);
      }
    },
  });
});
