const express = require('express');
const app = express();
const chambresRoute = express.Router();
// chambres model
let chambres = require('../models/chambres');
// Add chambres
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
chambresRoute.post("/create-chambres", upload.array("avatar", 6), (req, res, next) => {
  const reqFiles = [];
  const url = req.protocol + "://" + req.get("host");
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + "/public/" + req.files[i].filename);
  }

  const user = new chambres({

    agence_id: req.body.agence_id,
    hotel_id: req.body.hotel_id,
    NumChambre: req.body.NumChambre,
    type: req.body.type,
    datedebut: req.body.datedebut,
    datefin: req.body.datefin,
    etat: "reserved",
    prixAchat: req.body.prixAchat,
    prixVente: req.body.prixVente,
    avatar: reqFiles,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Done upload!",
        userCreated: {
          _id: result._id,
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


chambresRoute.route('/createssss/:id').post((req, res, next) => {

  const profile = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profile.save();





 

});


chambresRoute.route('/createsssstwho/:id').post((req, res, next) => {

  const profile = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profile.save();

 const profilessss = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre2,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profilessss.save();




 

});


chambresRoute.route('/createssssthreee/:id').post((req, res, next) => {

  const profile = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profile.save();

 const profilessss = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre2,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profilessss.save();



 const profilessssss = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre3,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profilessssss.save();


 

});






chambresRoute.route('/createssssfour/:id').post((req, res, next) => {

  const profile = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profile.save();

 const profilessss = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre2,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profilessss.save();



 const profilessssssppp = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre3,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profilessssssppp.save();


 


 const profilessssss = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre4,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profilessssss.save();



});













chambresRoute.route('/createssssfive/:id').post((req, res, next) => {

  const profile = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profile.save();

 const profilessss = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre2,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profilessss.save();



 const profilessssssppp = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre3,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profilessssssppp.save();


 


 const profilessssss = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre4,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profilessssss.save();



 const profilessssssommer = new chambres({

  agence_id: req.body.agence_id,
  hotel_id: req.body.hotel_id,
  NumChambre: req.body.NumChambre5,
  type: req.body.type,
  datedebut: req.body.datedebut,
  datefin: req.body.datefin,
  etat: "reserved",
  prixAchat: req.body.prixAchat,
  prixVente: req.body.prixVente


 })
 profilessssssommer.save();




});













chambresRoute.route('/create').post((req, res, next) => {

    const profile = new chambres({

    agence_id: req.body.agence_id,
    hotel_id: req.body.hotel_id,
    NumChambre: req.params.id,
    type: req.body.type,
    datedebut: req.body.datedebut,
    datefin: req.body.datefin,
    etat: "reserved",
    prixAchat: req.body.prixAchat,
    prixVente: req.body.prixVente


   })
   profile.save();



});
















// Get All chambress
chambresRoute.route('/').get((req, res) => {
  chambres.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single chambres
chambresRoute.route('/read/:id').get((req, res) => {
  chambres.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update chambres
chambresRoute.route('/update/:id').put((req, res, next) => {
  chambres.findByIdAndUpdate(req.params.id, {
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
// Delete chambres
chambresRoute.route('/delete/:id').delete((req, res, next) => {
  chambres.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = chambresRoute;