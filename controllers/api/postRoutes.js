const router = require('express').Router();
const { Post, User, Comments } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');


//Create Post 
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
    } catch(err) {
      res.status(500).json(err);
    }
});


//update posts by id
router.put('/:id', withAuth, async (req, res) => {
  try {
    const posts = await Post.update(req.body, {
       where: {id: req.params.id}
    });

    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json(err);
  }

});

//delete post by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const posts = await Post.destroy({
       where: {
           id: parseInt(req.params.id),
           user_id: req.session.user_id
       }
    });

    if (!posts) {
        res.status(404).json({message: 'No post found with this id.'});
        return;
    }

    res.status(200).json(posts)
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;