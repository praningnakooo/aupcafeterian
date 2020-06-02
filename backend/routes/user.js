const router = require('express').Router();
let User = require('../menu/user.menu');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const id = Number(req.body.id);
    const address = req.body.address;

    const newUser = new User({
        username,
        id,
        address,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;