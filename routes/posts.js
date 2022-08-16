const express = require('express');
const router = express.Router();

const Post = require('../models/Post.js');

// this gets back all posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err})
    }
});

//this submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description

    });
    try{
    const savedPost = await post.save()
    res.json(savedPost);
    }
    catch(err) {
        res.json({message: err})
    }
});

//this gets back a specific post
router.get('/:postId', async (req, res) => {

    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);

    }catch(err){
        res.json({message: err});
    }
});

//delete a post
router.delete('/:postId', async (req,res) => {
    try{
    const rem = await Post.deleteOne({_id: req.params.postId });
    res.json(rem);
    }catch(err){
        res.json({message: err})
    }
});

//update a post
router.patch('/:postId', async (req,res) => {
    try{
        const update = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: {title: req.body.title}}
            );
        res.json(update);
    }catch(err){
        res.json({message: err})
    }
});

module.exports = router;