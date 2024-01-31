const Post = require('../models/post'); 


exports.createPost = async (req, res) => {
    try {
        const newPost = new Post({
            user: req.body.userId,
            content: req.body.content,
        });

        const savedPost = await newPost.save(); 
        res.status(201).json({ message: 'Post oluşturuldu', post: savedPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.displayPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'username'); 
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


