const firebase = require("./../config/firebase")
const admin = require("../config/admin");
const db = admin.firestore();
const shortid = require("shortid");

exports.addUserDetail = async(req, res) => {
    try {
        const id = req.body.email;
        const userJson = {
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob,
            YearOfPassing: req.body.YearOfPassing,
            gender: req.body.gender,
            phone: req.body.phone,
            collegeName: req.body.collegeName,
            collegeState: req.body.collegeState,
            referral_code: "CA-" + shortid.generate(),
            invites: 0,
            points: 0
        };
        const response = await db.collection("CA").doc(id).set(userJson);
        console.log("updated successfully");
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

exports.getUserDetail = async(req, res) => {
    try {
        const snapshot = await db.collection("CA").get();
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        list.sort((a, b) => (a.points > b.points ? -1 : 1));
        var temp
        list.forEach(async(element, i) => {
            if (element.email === req.body.id) {
                temp = element;
                const element2 = {...element, rank: i + 1 };
                res.status(200).json(element2);
            }
        })
        if (temp === undefined || temp === null) { res.status(400).json("not found") }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.leaderBoard = async(req, res) => {
    try {
        const snapshot = await db.collection("CA").get();
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(list);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
exports.phoneUpdate = async(req, res) => {
    try {
        db.collection("CA").doc(req.body.email).update({ 'phone': req.body.phone });
        res.status(200).send("Phone Updated successfully");
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
}