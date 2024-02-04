const Post = require('../models/post');

exports.createPost = async (req, res) => {
  try {
    const newPost = new Post({
      user: req.body.userId,
      content: req.body.content
    });

    const savedPost = await newPost.save();
    res.status(201).json({ message: 'Post created', post: savedPost });
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
};

exports.updatePosts = async (req, res) => {
  try {
    const postId = req.params.postId; // req.params üzerinden post ID'yi al
    const { content } = req.body; // Güncellenmiş içerik bilgisini al

    // Postu bul ve güncelle
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $set: { content } }, // Güncellenecek alan ve değerini belirt
      { new: true } // Güncellenmiş postu döndür
    );

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post updated', post: updatedPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
