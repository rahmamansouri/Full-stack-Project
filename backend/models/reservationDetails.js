




const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let reservationDetails = new Schema({

   reservation_id: {
    type: String
   },
   chambre_id: {
    type: String
   },
   NbrAdulte: {
      type: String
   },
   NbrEnfant: {
    type: String
 },
 NbrBebe: {
    type: String
 },
ageenfant: {
   type: String
},

 debut: {
    type: Date
 },
 fin: {
    type: Date
 },
 demandeSpeciale: {
    type: String
 },
 etat: {
  type: String
},
remarque: {
  type: String
},
nbjours: {
   type: String
 }

 


}, {
   collection: 'reservationDetails'
})
module.exports = mongoose.model('reservationDetails', reservationDetails)