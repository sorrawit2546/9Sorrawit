import express from 'express';
const router = express.Router();

const {createPost, getPost } = require('../controllers/post_controller');

router.post('/post' , createPost);
router.get('/post', getPost);

module.exports = router;