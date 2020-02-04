const express = require("express");
const imageRouter = express.Router();
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");
const Image = require("../../../database/models/Image");
const url = require("url");

require("dotenv").config();

const s3 = new aws.S3({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  Bucket: "creature-images"
});

const creatureImageUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "creature-images",
    acl: "public-read",
    key: function(req, file, cb) {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          "-" +
          Date.now() +
          path.extname(file.originalname)
      );
    }
  }),
  limits: { fileSize: 2000000 },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single("profileImage");

function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

imageRouter.post("/upload", (req, res) => {
  creatureImageUpload(req, res, error => {
    if (error) {
      res.json({ error: error });
    } else {
      //if file not found
      if (req.file === undefined) {
        res.json("Error: No File Selected!");
      } else {
        //success
        const imageName = req.file.key;
        const imageLocation = req.file.location;
        //save file name into database
        res.json({
          image: imageName,
          location: imageLocation
        });
      }
    }
  });
});

imageRouter.post("/", (req, res) => {
  return new Image(req.body)
    .save()
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = imageRouter;
