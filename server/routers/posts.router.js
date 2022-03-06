import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.controller.js'

const router = express.Router();

// localhost:5000/posts
router.get('/', getPosts);

router.post('/', createPost);

router.post('/update', updatePost)

export default router;
