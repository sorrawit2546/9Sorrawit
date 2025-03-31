"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { createPost, getPost } = require('../controllers/post_controller');
const { createPositivepost } = require('../controllers/positivepost_controller');
router.post('/post', createPost);
router.get('/post', getPost);
router.post('/positivepost', createPositivepost);
module.exports = router;
