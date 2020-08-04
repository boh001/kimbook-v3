import Comment from "../models/Comment";
import Content from "../models/Content";

export const uploadComment = async (req, res) => {
  const {
    body: { idx, text, contentId },
  } = req;
  const {
    user: { _id: authorId },
  } = req;
  const createAt = new Date();
  try {
    const createComment = await Comment.create({
      authorId,
      text,
      createAt,
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
    res.status(200).send({ idx, comment });
  } catch (error) {
    res.status(400);
    res.send({ error });
  }
};
