import routes from "./routes";
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import fs from "fs";
import path from "path";
import User from "./models/User";

const s3 = new aws.S3({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_KEY,
});

const upload = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    },
    bucket: (req, file, cb) => {
      const {
        user: { nickname },
      } = req;
      const { mimetype } = file;
      const bucket = `kimbook-v3/${nickname}/${mimetype.split("/")[0]}`;
      cb(null, bucket);
    },
  }),
});

export const multerMiddleware = upload.array("uploadFiles[]");
