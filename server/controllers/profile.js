const firebase = require("./../config/firebase")
const admin = require("../config/admin");
const db = admin.firestore();
const shortid = require("shortid");

exports.addUserDetail = (req, res) => {
    try {
        const id = req.body.email;
        const userJson = {
            name: req.body.name,
            email: req.body.email,
            // pic: req.body.pic,
            idCard: req.body.idCard,
            dob: req.body.dob,
            YearOfPassing: req.body.YearOfPassing,
            gender: req.body.gender,
            phone: req.body.phone,
            collegeName: req.body.collegeName,
            collegeState: req.body.collegeState,
            referral_code: "CA-" + shortid.generate(),
            invite: 0,
        };
        const response = db.collection("CA").doc(id).set(userJson);
        console.log("updated successfully");
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getUserDetail = async(req, res) => {
    try {
        const snapshot = await db.collection("CA").get()
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        var temp
        list.forEach(element => {
            if (element.email === req.body.id) {
                temp = element
                res.status(200).json(element)
            }
        })
        if (temp === undefined || temp === null) { res.status(400).json("not found") }
    } catch (error) {
        console.log("error");
        res.status(500).send(error);
    }
}

exports.leaderBoard = async(req, res) => {
    try {
        const snapshot = await db.collection("CA").get();
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(list);
    } catch (error) {
        console.log("error");
        res.status(500).send(error);
    }
}