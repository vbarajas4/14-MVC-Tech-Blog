//is the dashboard what the user sees once they sign in

const router = require('express').Router();
const { User, Post, Comments } = require('../models');
const withAuth = require('../utils/auth');

// get all user posts
router.get('/', withAuth, async (req, res) => {
    try {
      const posts = await Post.findAll({
        where: {user_id: req.session.user_id},
        include: [
          {
            model: User,
            attributes: ['username']
          },
          {
            model: Comments,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {model:User, attributes: ['username']}
          } 
        ]
    });
    console.log(posts)
    // Serialize data so the template can read it
    const postData = posts.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard-post', { 
      layout: "dashboard",
      postData, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//get a single post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const posts = await Post.findByPk(req.params.id, {  
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comments,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: { model: User, attributes: ['username']}
        }
      ]
    });

    if (!posts) {
        res
          .status(404)
          .json({ message: 'No Post found with this id.' });
        return;
      }
  
      const postData = posts.get({ plain: true });
  
      res.render('edit-post', {
        layout: 'dashboard',
        postData,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

   //Create a new post 
  router.get('/new', (req, res) => {
    res.render('new-post', {layout: 'dashboard', logged_in: true});
});
        //should i do the above or the one below for new post and how to serialize it
// router.post('/', async (req, res) => {
//     try {
//       const posts = await Post.create(req.body);
//       res.status(200).json(posts);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

//Delete a post and how to serialize it
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const posts = await Post.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!posts) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;

