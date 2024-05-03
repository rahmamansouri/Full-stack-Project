




const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let hotelPhotos = new Schema({

   
   hotel_id: {
    type: String
   },
   type: {
    type: String
 },
 avatar: {
   type: Array,
 },

 


}, {
   collection: 'hotelPhotos'
})
module.exports = mongoose.model('hotelPhotos', hotelPhotos)