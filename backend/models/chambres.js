




const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let chambres = new Schema({


   agence_id: {
    type: String
   },
   hotel_id: {
    type: String
   },
   NumChambre: {
      type: String
   },
   type: {
    type: String
 },
 datedebut: {
    type: String
 },
 datefin: {
   type: String
},
 etat: {
    type: String
 },
 prixAchat: {
    type: String
 },
 prixVente: {
    type: String
 },
 avatar: {
   type: Array,
 },

 


}, {
   collection: 'chambres'
})
module.exports = mongoose.model('chambres', chambres)