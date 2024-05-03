const express = require('express');
const app = express();
const hotelPhotosRoute = express.Router();
// hotelPhotos model
let hotelPhotos = require('../models/hotelPhotos');
// Add hotelPhotos
//------------------------------------------------------------------------------
const checkAuth = require("../middlewares/check-auth");
//------------------------------------------------------------------------------


const multer = require("multer");

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/gif": "gif"
};






hotelPhotosRoute.route('/create').post((req, res, next) => {
  hotelPhotos.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
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