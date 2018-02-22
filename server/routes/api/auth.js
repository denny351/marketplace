const express = require('express');
const router = express.Router();

const User = require('../../models/user');

const { auth } = require('../../middleware/auth');


router.post('/register', (req,res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false });

    return res.status(200).json({ success: true, user: doc });
  });
})

router.post('/login', (req, res) => {
	User.findOne({ email: req.body.email }, (err, user) => {
		if (!user)
			return res.json({
				isAuth: false,
				message: 'Auth failed, email not found'
			});

		user.comparePassword(req.body.password, (err, isMatch) => {
			if (!isMatch)
				return res.json({ isAuth: false, message: 'Wrong password' });

			user.generateToken((err, user) => {
				if (err) return res.status(400).send(err);
				res.cookie('auth', user.token).json({
					isAuth: true,
					id: user._id,
					email: user.email
				});
			});
		});
	});
});

router.get('/logout', auth, (req, res) => {
	req.user.deleteToken(req.token, (err, user) => {
		if (err) return res.status(400).send(err);
		res.sendStatus(200);
	});
});


module.exports = router;