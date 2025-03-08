import express from 'express';
const router = express.Router();

const {createPost, getPost } = require('../controllers/post_controller');
const {createPositivepost} = require('../controllers/positivepost_controller');

router.post('/post' , createPost);
router.get('/post', getPost);
router.post('/positivepost' , createPositivepost);

module.exports = router;