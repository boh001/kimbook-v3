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
