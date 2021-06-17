//This is copy from mini project 
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comments } = require('../models');
const withAuth = require('../utils/auth');

// Get all post and JOIN with user data
router.get('/', async (req, res) => {
  try {  
    const posts = await Post.findAll({
      include: [
        {
          model: Comments,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {model:User, attributes: ['username']}
        },
        {
            model: User,
            attributes: ['username']
        }
      ],
    });

    // Serialize data so the template can read it
    const postData = posts.map((post) => post.get({ plain: true }));
    console.log(postData)
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      postData, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Single-Post and Join with user data
router.get('/post/:id', async (req, res) => {
  try {
    const posts = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: { model: User, attributes: ['username']}
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    if (!posts) {
      res
        .status(400)
        .json({ message: 'No Post found with this id.' });
      return;
    }

    const postData = posts.get({ plain: true });

    res.render('single-post', {
      postData,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// If Logged in redirect to user's dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
      const posts = await Post.findAll({
          where: {
              user_id: req.session.user_id
          }
      });
      const postData = posts.get({ plain: true });
      res.render('dashboard', {
          ...postData,
          logged_in: req.session.logged_in
      });
  } catch (err) {
      res.status(500).json(err);
  }
});

// If the user is already logged in, redirect the request to another route
router.get('/login', (req, res) => { 
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Route for users who need the sign-up form

router.get('/signup', (req, res) => {

  res.render('signup');
});

module.exports = router;
