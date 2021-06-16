const { Comments } = require('../models');

const commentData = [{
        comment_text: "Testing Comment",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Second Test Comment",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Third Test Comment",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;