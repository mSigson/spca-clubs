import mongoMiddleware from "utils/mongo-middleware";
import apiHandler from "utils/apiHandler";

export default mongoMiddleware(async (req, res, models) => {
  const { method } = req;
  const { Club } = models;

  apiHandler(res, method, {
    GET: async (response) => {
      try {
        const _id = req.url.split("/")[3];

        const clubWIthPopulatedProjects = await Club.findOne({ _id })
          .populate("projects.petitions")
          .populate("projects.displays")
          .populate("projects.posters")
          .populate("projects.videos")
          .populate("projects.fundraisings")
          .populate("projects.letters");

        const projects = Object.keys(clubWIthPopulatedProjects.projects)
          .reduce((a, b) => {
            a.push(clubWIthPopulatedProjects.projects[b]);
            return a;
          }, [])
          .filter((project) => project !== true)
          .flat(Infinity);

        response.status(200).json({ data: projects });
      } catch (err) {
        response.status(400).json("Error:" + err);
      }
    },
  });
});
