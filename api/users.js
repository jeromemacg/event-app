const express = require('express');
const router = express.Router();
const Users = require('../models/user');


router.get('/getUsers', (req, res) => {
    Users.find({})
        .exec((err, users) => {
            if (err) {
                console.log(error);
            } else {
                res.json(users)
            }
        })
});

router.get('/user/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(users => {
            if (!users) {
                return res.status(404).end();
            }
            console.log(req);
            return res.status(200).json(users);
        })
        .catch(err => console.log(err));
});

router.put('/update/:id', (req, res) => {
    console.log(req.body);
    Users.findByIdAndUpdate(req.params.id, req.body
        , {
            new: true
        },
        (err, updatedUser) => {
            if (err) {
                res.send("Error")

            } else {
                res.send(updatedUser);
                console.log(req)
            }
        }
    )
});



module.exports = router;
