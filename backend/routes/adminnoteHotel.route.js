const express = require('express');
const app = express();
const noteHotelsRoute = express.Router();
// noteHotels model
let noteHotels = require('../models/noteHotel');
//------------------------------------------------------------------------------
const checkAuth = require("../middlewares/check-auth");
//------------------------------------------------------------------------------

// Add noteHotels
noteHotelsRoute.route('/create').post((req, res, next) => {
  noteHotels.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All noteHotelss
noteHotelsRoute.route('/').get((req, res) => {
  noteHotels.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single noteHotels
noteHotelsRoute.route('/read/:id').get((req, res) => {
  noteHotels.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update noteHotels
noteHotelsRoute.route('/update/:id').put((req, res, next) => {
  noteHotels.findByIdAndUpdate(req.params.id, {
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
// Delete noteHotels
noteHotelsRoute.route('/delete/:id').delete((req, res, next) => {
  noteHotels.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = noteHotelsRoute;