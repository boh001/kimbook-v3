import Content from "../models/Content";
import User from "../models/User";
import routes from "../routes";

export const uploadContent = async (req, res) => {
  const {
    body: { writeText },
  } = req;
  const {
    user: { _id },
  } = req;
  const files = [];
  req.files.forEach((file) => {
    const { originalname, location, mimetype } = file;
    files.push({ originalname, fileUrl: location, contentType: mimetype });
  });
  const createAt = new Date();
  try {
    const newContent = await Content.create({
      authorId: _id,
      files,
      text: writeText,
      createAt,
    });
    await User.findByIdAndUpdate(_id, {
      $push: { myContents: newContent._id },
    });
    res.redirect(routes.ME);
  } catch (error) {
    console.log(error);
  }
};
export const upLike = async (req, res) => {
  const {
    body: { idx, contentId },
  } = req;
  const {
    user: { _id },
  } = req;
  try {
    const content = await Content.findOne({ _id: contentId });
    const { likeUsers } = content;
    if (likeUsers.includes(_id)) {
      await content.updateOne({
        $pull: { likeUsers: _id },
      });
      res.status(200).send({ likeCheck: false, idx });
    } else {
      await content.updateOne({
        $push: { likeUsers: _id },
      });
      res.status(200).send({ likeCheck: true, idx });
    }
  } catch (e) {
    console.log(e);
  }
};
export const upMark = async (req, res) => {
  const {
    body: { idx, contentId },
  } = req;
  const {
    user: { _id },
  } = req;
  try {
    const user = await User.findOne({ _id });
    const { markContents } = user;
    if (markContents.includes(contentId)) {
      await user.updateOne({
        $pull: { markContents: contentId },
      });
      res.status(200).send({ result: false });
    } else {
      await user.updateOne({
        $push: { markContents: contentId },
      });
      res.status(200).send({ result: true });
    }
  } catch (e) {
    console.log(e);
  }
};
