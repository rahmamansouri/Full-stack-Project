




const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let reservations = new Schema({

   
 agence_id: {
    type: String
 },
 
 user_id: {
    type: String
   },
   hotel_id: {
    type: String
 },
   
   date: {
    type: Date
 },
 etat: {
    type: String
 },
 paiement: {
    type: String
 },
 remarque: {
    type: String
 }

 


}, {
   collection: 'reservations'
})
module.exports = mongoose.model('reservations', reservations)