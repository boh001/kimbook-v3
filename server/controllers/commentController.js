import Comment from "../models/Comment";
import Content from "../models/Content";
import routes from "../routes";

export const uploadComment = async (req, res) => {
  const {
    body: { idx, text, contentId },
  } = req;
  const {
    user: { _id: authorId },
  } = req;
  try {
    const createComment = await Comment.create({
      authorId,
      text,
    });
    await Content.findOneAndUpdate(
      { _id: contentId },
      { $push: { comments: createComment._id } }
    );
    const comment = await Comment.findOne({ _id: createComment._id }).populate([
      {
        path: "authorId",
        model: "User",
      },
    ]);
    console.log(comment);
    res.status(200).send({ idx, comment });
  } catch (error) {
    console.log(error);
  }
};
