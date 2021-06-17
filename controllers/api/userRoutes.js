
const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth'); 

//Create new user
router.post('/', async (req, res) => {
  try {
    const users = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(users);
    req.session.save(() => {
      req.session.user_id = users.id;
      req.session.username = users.username;
      req.session.logged_in = true;
      console.log("redirect")
      res
        .status(200)
        .json({ message: 'You are now sign up!' });
    
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Login
router.post('/login', async (req, res) => {
  try {
    const users = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    const validPassword = users.checkPassword(req.body.password);
   
    if (!validPassword) {
      console.log(validPassword, "line46");
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }

    user = users.toJSON()
    console.log(user, "line36")
    if (!user) {
      res
        .status(400)
        .json({ message: 'No user with that username. Please try again!' });
      return;
    }
console.log(req.body.password)
    
      console.log(users)
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username
      req.session.logged_in = true;

      res
        .status(200)
        .json({ user: user, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
