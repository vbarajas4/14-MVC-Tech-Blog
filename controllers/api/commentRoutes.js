const router = require('express').Router();
const { Post, User, Comments } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');


//Create a comment
router.post('/', withAuth, async (req, res) => {
   try {
      const newComment = await Comments.create({
        ...req.body,  
        user_id: req.session.user_id,
        post_id: req.body.post_id
      });

      res.status(200).json(newComment);
    } catch(err) {
        res.status(500).json(err);
    }
}); 

// UPDATE a Comment by its `id` value
router.put('/:id', withAuth, async (req, res) => {
    try {
        const comments = await Comments.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(comments);
    } catch (err) {
        res.status(400),json(err);
    }
});

// DELETE a Comment
router.delete('/:id', withAuth, async (req, res) => {
    console.log(req.params.id);
    try {
        const comments = await Comments.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });
        if (!comments) {
            res.status(404).json({message: 'No comment found with this id'});
            return;
        }
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

