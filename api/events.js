const express = require('express');
const router = express.Router();
const Event = require('../models/event');


router.get('/getEvents', (req, res) => {
    Event.find({})
        .exec((err, event) => {
            if (err) {
                console.log(error);
            } else {
                res.json(event)
            }
        })
});

router.get('/event/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            if (!event) {
                return res.status(404).end();
            }
            console.log(req);
            return res.status(200).json(event);
        })
        .catch(err => console.log(err));
});

router.put('/update/:id', (req, res) => {
    console.log(req.body);
    Event.findByIdAndUpdate(req.params.id, req.body
        , {
            new: true
        },
        (err, event) => {
            if (err) {
                res.send("Error")

            } else {
                res.send(event);
                console.log(req)
            }
        }
    )
});



module.exports = router;
