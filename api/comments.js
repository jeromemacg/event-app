const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');


router.get('/getComments', (req, res) => {
    Comment.find({})
        .exec((err, comments) => {
            if (err) {
                console.log(error);
            } else {
                res.json(comments)
            }
        })
});

router.get('/comment/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comments => {
            if (!comments) {
                return res.status(404).end();
            }
            console.log(req);
            return res.status(200).json(comments);
        })
        .catch(err => console.log(err));
});

router.put('/comment/:id', (req, res) => {
    console.log(req.body);
    Comment.findByIdAndUpdate(req.params.id, req.body
        , {
            new: true
        },
        (err, comment) => {
            if (err) {
                res.send("Error")

            } else {
                res.send(comment);
                console.log(req)
            }
        }
    )
});



module.exports = router;
