//Load library
const express = require("express");
var admin = require("firebase-admin");
var cors = require('cors');
const bodyParser = require("body-parser");

//Create constant
const API_URI = "/api";

//Create an instance of Express application
const app = express();

//Connect to Firebase
const credFile = process.env.SERVICEACC_CRED_FILE || "./waterfall.json";
var serviceAccount = require(credFile);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trackeat-e0ddc.firebaseio.com"
});

//Access database collections
var db = admin.firestore();
var stallCollection = db.collection('stalls');

//Create routes
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: "50mb"}));

app.get(API_URI + '/stalls', (req, res) => {
  if(!req.query.location.trim()){
    stallCollection.get()  
    .then(snapshot => {
      let stallArr = [];
      snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      stallArr.push(doc.data()); 
      });
      res.status(200).json(stallArr);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }
  else {
    let location = req.query.location;
    stallCollection
    .where('area', '==', location)
    .get()
    .then(snapshot => {
        let stallArr = [];
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            stallArr.push(doc.data()); 
        });
        res.status(200).json(stallArr);
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });
  };
});
 

//Start the server
const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;
app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`);
});