const functions = require('firebase-functions')
const admin = require('firebase-admin')
var serviceAccount = require('./serviceAccountKey.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})
const db = admin.firestore()
const express = require('express')
const parseUrl = express.urlencoded({ extended: false })
const parseJson = express.json({ extended: false })
const cors = require('cors')


const WebsiteApis = express();
WebsiteApis.use(cors({ origin: true }));

WebsiteApis.get("/", async (req, res) => {
    console.log("Testing Api");
    return res.status(200).send("Testing Api");
});

WebsiteApis.post("/NewsLetter", [parseUrl, parseJson], async (req, res) => {
    console.log("NewsLetter Api");
    db.collection("NewsLetter").add({
        name:req.body.name,
        email:req.body.email,
        createdAt : new Date()
    });
    return res.status(200).send("Newsletter Api");
});

WebsiteApis.post("/Demo", [parseUrl, parseJson], async (req, res) => {
    console.log("Demo Api");
    db.collection("Demo").add({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message,
        createdAt : new Date()
    });
    return res.status(200).send("Demo Api");
});

exports.WebsiteApis = functions.https.onRequest(WebsiteApis)
