const { Post } = require('../models');

const postData = [{
        title: 'Trial Post',
        post_text: 'Testing to see if creates a post',
        user_id: 1

    },
    {
        title: 'Second Test Post',
        post_text: 'Testing',
        user_id: 2
    },
    {
        title: 'Third Test Post',
        post_text: 'Testing',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;