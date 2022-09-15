const express = require('express');
const router = express.Router();

const Post = require('../models/Post.js');
/*
// this gets back all posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err})
    }
});
*/

//this submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        game: req.body.game,
        letterCount: req.body.letterCount,
        word: req.body.word,
        category: req.body.category
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
/*router.get('/:postId', async (req, res) => {

    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);

    }catch(err){
        res.json({message: err});
    }
});*/

router.get('/:word', async (req, res) => {

    try{
    const post = await Post.find(req.params.word);
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
            {$set: {game: req.body.game,
                letterCount: req.body.letterCount,
                word: req.body.word,
                category: req.body.category}}
            );
        res.json(update);
    }catch(err){
        res.json({message: err})
    }
});

//get random
router.get('/', async (req, res) => {
    try {
        const total = await Post.estimatedDocumentCount();
        const randomNum =  Math.floor(Math.random() * total); 
        Post.findOne()
            .skip(randomNum)
            .then((info) => {
                return res.json({info: info});
            });

    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;