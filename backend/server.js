

const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')


// Connecting with mongo db
mongoose
  .connect('mongodb://127.0.0.1:27017/tourismdatabase')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
// Setting up port with express js
const adminchambresroute = require('../backend/routes/adminchambres.route')
const admincriteresroute = require('../backend/routes/admincriteres.route')
const adminhotelPhotosroute = require('../backend/routes/adminhotelPhotos.route')
const adminhotelsroute = require('../backend/routes/adminhotels.route')
const adminnoteAgencesroute = require('../backend/routes/adminnoteAgence.route')
const adminnoteHotelroute = require('../backend/routes/adminnoteHotel.route')
const adminreservationDetailsroute = require('../backend/routes/adminreservationDetails.route')
const adminreservationsroute = require('../backend/routes/adminreservations.route')
const adminusersroute = require('../backend/routes/adminusers.route')

const clientchambresroute = require('../backend/routes/clientchambres.route')
const clientcriteresroute = require('../backend/routes/clientcriteres.route')
const clienthotelPhotosroute = require('../backend/routes/clienthotelPhotos.route')
const clienthotelsroute = require('../backend/routes/clienthotels.route')
const clientnoteAgencesroute = require('../backend/routes/clientnoteAgence.route')
const clientnoteHotelroute = require('../backend/routes/clientnoteHotel.route')
const clientreservationDetailsroute = require('../backend/routes/clientreservationDetails.route')
const clientreservationsroute = require('../backend/routes/clientreservations.route')
const clientusersroute = require('../backend/routes/clientusers.route')

const userapiuser = require('../backend/routes/clientusers.route')
const agencechambresroute = require('../backend/routes/agencechambres.route')
const agencecriteresroute = require('../backend/routes/agencecriteres.route')
const agencehotelPhotosroute = require('../backend/routes/agencehotelPhotos.route')
const agencehotelsroute = require('../backend/routes/agencehotels.route')
const agencenoteAgencesroute = require('../backend/routes/agencenoteAgence.route')
const agencenoteHotelroute = require('../backend/routes/agencenoteHotel.route')
const agencereservationDetailsroute = require('../backend/routes/agencereservationDetails.route')
const agencereservationsroute = require('../backend/routes/agencereservations.route')
const agenceusersroute = require('../backend/routes/agenceusers.route')









const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))
app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))

app.use("/public", express.static("public"));


app.use('/adminapichambres', adminchambresroute)
app.use('/adminapicriteres', admincriteresroute)
app.use('/adminapihotelPhotos', adminhotelPhotosroute)
app.use('/adminapihotels', adminhotelsroute)
app.use('/adminapinoteAgence', adminnoteAgencesroute)
app.use('/adminapinoteHotel', adminnoteHotelroute)
app.use('/adminapireservationDetails', adminreservationDetailsroute)
app.use('/adminapireservation', adminreservationsroute)
app.use('/adminapiusers', adminusersroute)

app.use('/clientapichambres', clientchambresroute)
app.use('/clientapicriteres', clientcriteresroute)
app.use('/clientapihotelPhotos', clienthotelPhotosroute)
app.use('/clientapihotels', clienthotelsroute)
app.use('/clientapinoteAgence', clientnoteAgencesroute)
app.use('/clientapinoteHotel', clientnoteHotelroute)
app.use('/clientapireservationDetails', clientreservationDetailsroute)
app.use('/clientapireservation', clientreservationsroute)
app.use('/clientapiusers', clientusersroute)


app.use('/agenceapichambres', agencechambresroute)
app.use('/agenceapicriteres', agencecriteresroute)
app.use('/agenceapihotelPhotos', agencehotelPhotosroute)
app.use('/agenceapihotels', agencehotelsroute)
app.use('/agenceapinoteAgence', agencenoteAgencesroute)
app.use('/agenceapinoteHotel', agencenoteHotelroute)
app.use('/agenceapireservationDetails', agencereservationDetailsroute)
app.use('/agenceapireservation', agencereservationsroute)
app.use('/agenceapiusers', agenceusersroute)

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404))
})
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message) // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message
})