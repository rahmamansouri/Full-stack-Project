const express = require('express');
const app = express();
const criteresRoute = express.Router();
// criteres model
let criteres = require('../models/criteres');
// Add criteres
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






criteresRoute.post("/createazerty", upload.single("avatar"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const user = new criteres({
    hotel_id: req.body.hotel_id,
    critere: req.body.critere,
    valeur: req.body.valeur,
    description: req.body.description,
    avatar: url + "/public/" + req.file.filename,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "User registered successfully!",
        userCreated: {
          hotel_id: result.hotel_id,
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
criteresRoute.route("/create",multer({ storage: storage }).single("image"),
    (req, res, next) => {
        console.log(req.body)
        const url = req.protocol + "://" + req.get("host")
        console.log(url)

        
        const post = new criteres({
            hotel_id: req.body.hotel_id,
            critere: req.body.critere,
            valeur: req.body.valeur,
            description: req.body.description,
            imagePath: url + "/images/" + req.file.filename,
            postDate: req.body.postDate,
        })
        post.save().
            then(post => {
                if(post){
                    res.status(201).json({
                        message: "Post added successfully",
                        post: {
                            ...post,
                            id: post._id
                        }
                    })
                }
                else{
                    res.status(500).json({ message: "Error Adding Post" });
                }
                
            })
            .catch(e => {
                console.log(e)
            })
    })
////////////////////////////////------------------------




// Get All criteress
criteresRoute.route('/').get((req, res) => {
  criteres.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single criteres
criteresRoute.route('/read/:id').get((req, res) => {
  criteres.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

criteresRoute.route('/readhotel/:id').get((req, res) => {
  criteres.find({hotel_id:req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})





// Update criteres
criteresRoute.route('/update/:id').put((req, res, next) => {
  criteres.findByIdAndUpdate(req.params.id, {
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
// Delete criteres
criteresRoute.route('/delete/:id').delete((req, res, next) => {
  criteres.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = criteresRoute;