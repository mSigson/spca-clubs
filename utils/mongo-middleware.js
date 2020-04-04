import dbConnect from './dbConnect';

const mongoMiddleware = handler => async (req, res) => {
  await dbConnect();
  try {
    await handler(req, res);
  } catch (e) {
    res.status(500).json({ error: e.message || "something went wrong" });
  }
}

export default mongoMiddleware