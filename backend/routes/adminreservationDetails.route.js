const express = require('express');
const app = express();
const reservationDetailsRoute = express.Router();
// reservationDetails model
let reservationDetails = require('../models/reservationDetails');
//------------------------------------------------------------------------------
const checkAuth = require("../middlewares/check-auth");
//------------------------------------------------------------------------------

// Add reservationDetails




reservationDetailsRoute.route('/create').post((req, res, next) => {
  reservationDetails.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

reservationDetailsRoute.route('/create1').post((req, res, next) => {



  const profile = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profile.save();




});


/////////////////////////////////////////////////////////////////////////////
reservationDetailsRoute.route('/create2').post((req, res, next) => {



  const profile = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profile.save();


  const profiles = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant2,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles.save();



});
/////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////
reservationDetailsRoute.route('/create3').post((req, res, next) => {



  const profile = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profile.save();


  const profiles = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant2,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles.save();




  const profiles3 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant3,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles3.save();





});
/////////////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////////////
reservationDetailsRoute.route('/create4').post((req, res, next) => {



  const profile = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profile.save();


  const profiles = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant2,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles.save();




  const profiles3 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant3,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles3.save();


  const profiles4 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant4,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles4.save();



});
/////////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////////
reservationDetailsRoute.route('/create5').post((req, res, next) => {



  const profile = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profile.save();


  const profiles = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant2,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles.save();




  const profiles3 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant3,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles3.save();


  const profiles4 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant4,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles4.save();

  const profiles5 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant5,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles5.save();


});
/////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////
reservationDetailsRoute.route('/create6').post((req, res, next) => {



  const profile = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profile.save();


  const profiles = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant2,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles.save();




  const profiles3 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant3,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles3.save();


  const profiles4 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant4,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles4.save();

  const profiles5 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant5,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles5.save();



  const profiles6 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant6,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles6.save();



});
/////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////////////////////////
reservationDetailsRoute.route('/create7').post((req, res, next) => {



  const profile = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profile.save();


  const profiles = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant2,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles.save();




  const profiles3 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant3,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles3.save();


  const profiles4 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant4,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles4.save();

  const profiles5 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant5,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles5.save();



  const profiles6 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant6,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles6.save();



  const profiles7 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant7,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles7.save();



});
/////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////////////////////////
reservationDetailsRoute.route('/create8').post((req, res, next) => {



  const profile = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profile.save();


  const profiles = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant2,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles.save();




  const profiles3 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant3,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles3.save();


  const profiles4 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant4,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles4.save();

  const profiles5 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant5,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles5.save();



  const profiles6 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant6,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles6.save();



  const profiles7 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant7,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles7.save();


  const profiles8 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant8,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles8.save();


});
/////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////
reservationDetailsRoute.route('/create9').post((req, res, next) => {



  const profile = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profile.save();


  const profiles = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant2,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles.save();




  const profiles3 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant3,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles3.save();


  const profiles4 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant4,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles4.save();

  const profiles5 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant5,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles5.save();



  const profiles6 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant6,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles6.save();



  const profiles7 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant7,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles7.save();


  const profiles8 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant8,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles8.save();



  const profiles9 = new reservationDetails({

  reservation_id: req.body.reservation_id,
  chambre_id: req.body.chambre_id,
  NbrAdulte: req.body.NbrAdulte,
  NbrEnfant: req.body.NbrEnfant,
  NbrBebe: req.body.NbrBebe,
  ageenfant: req.body.ageenfant9,
  debut: req.body.debut,
  fin: req.body.fin,
  demandeSpeciale: req.body.demandeSpeciale,
  etat: req.body.etat,
  remarque: req.body.remarque,
  nbjours: req.body.nbjours


 })
 profiles9.save();




});
/////////////////////////////////////////////////////////////////////////////



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


reservationDetailsRoute.route('/readdetailreservations/:id').get((req, res) => {
  reservationDetails.find({reservation_id:req.params.id}, (error, data) => {
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