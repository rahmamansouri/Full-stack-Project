const express = require('express');
const app = express();
const hotelPhotosRoute = express.Router();
// hotelPhotos model
let hotelPhotos = require('../models/hotelPhotos');
// Add hotelPhotos

const multer = require("multer");
//------------------------------------------------------------------------------
const checkAuth = require("../middlewares/check-auth");
//------------------------------------------------------------------------------
// Multer File upload settings
const DIR = "./public/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5
  // },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});







////////////////////////////////------------------------
hotelPhotosRoute.post("/createhotelsphotos", upload.single("avatar"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const user = new hotelPhotos({
    hotel_id: req.body.hotel_id,
    type: req.body.type,
    avatar: url + "/public/" + req.file.filename,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "User registered successfully!",
        userCreated: {
          _id: result._id,
          hotel_id: result.hotel_id,
          type: result.type,
          avatar: result.avatar,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});
////////////////////////////////------------------------


















// Get All hotelPhotoss
hotelPhotosRoute.route('/').get((req, res) => {
  hotelPhotos.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single hotelPhotos
hotelPhotosRoute.route('/read/:id').get((req, res) => {
  hotelPhotos.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update hotelPhotos
hotelPhotosRoute.route('/update/:id').put((req, res, next) => {
  hotelPhotos.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete hotelPhotos
hotelPhotosRoute.route('/delete/:id').delete((req, res, next) => {
  hotelPhotos.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = hotelPhotosRoute;