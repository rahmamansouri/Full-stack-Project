const express = require('express');
const app = express();
const hotelsRoute = express.Router();
// hotels model
let hotels = require('../models/hotels');
// Add hotels
//------------------------------------------------------------------------------
const checkAuth = require("../middlewares/check-auth");
//------------------------------------------------------------------------------


hotelsRoute.route('/create').post((req, res, next) => {
  hotels.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All hotelss
hotelsRoute.route('/').get((req, res) => {
  hotels.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single hotels
hotelsRoute.route('/read/:id').get((req, res) => {
  hotels.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update hotels
hotelsRoute.route('/update/:id').put((req, res, next) => {
  hotels.findByIdAndUpdate(req.params.id, {
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
// Delete hotels
hotelsRoute.route('/delete/:id').delete((req, res, next) => {
  hotels.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = hotelsRoute;