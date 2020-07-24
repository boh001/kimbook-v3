import Content from "../models/Content";
import routes from "../routes";

export const uploadContent = async (req, res) => {
  const {
    body: { writeText },
  } = req;
  const {
    user: { _id },
  } = req;
  let files = [];
  req.files.forEach((file) => {
    console.log(file);
    const { originalname, location, mimetype } = file;
    files.push({ originalname, fileUrl: location, contentType: mimetype });
  });
  try {
    await Content.create({
      authorId: _id,
      files,
      text: writeText,
    });
    res.redirect(routes.ME);
  } catch (error) {
    console.log(error);
  }
};
export const upLike = async (req, res) => {
  const {
    body: { contentId },
  } = req;
  const {
    user: { _id },
  } = req;
  console.log(contentId);
  try {
    const content = await Content.findOne({ _id: contentId });
    const likeUsers = content.likeUsers;
    if (likeUsers.includes(_id)) {
      await content.updateOne({
        $inc: { like: -1 },
        $pull: { likeUsers: _id },
      });
      res.status(200).send({ result: true });
    } else {
      await content.updateOne({
        $inc: { like: 1 },
        $push: { likeUsers: _id },
      });
      res.status(200).send({ result: false });
    }
  } catch (e) {
    console.log(e);
  }
};
