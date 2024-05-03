const express = require('express');
const app = express();
const reservationDetailsRoute = express.Router();
// reservationDetails model
let reservationDetails = require('../models/reservationDetails');
// Add reservationDetails
//------------------------------------------------------------------------------
const checkAuth = require("../middlewares/check-auth");
//------------------------------------------------------------------------------

reservationDetailsRoute.route('/create').post((req, res, next) => {
  reservationDetails.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All reservationDetailss
reservationDetailsRoute.route('/').get((req, res) => {
  reservationDetails.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single reservationDetails
reservationDetailsRoute.route('/read/:id').get((req, res) => {
  reservationDetails.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update reservationDetails
reservationDetailsRoute.route('/update/:id').put((req, res, next) => {
  reservationDetails.findByIdAndUpdate(req.params.id, {
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
// Delete reservationDetails
reservationDetailsRoute.route('/delete/:id').delete((req, res, next) => {
  reservationDetails.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = reservationDetailsRoute;