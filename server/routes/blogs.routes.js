import { Router } from "express";
import { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } from '../controller/blogs.controller.js'

const router = Router()

router.get('/blogs', getBlogs)

router.get('/blogs/:id', getBlog)

router.post('/blogs', createBlog)

router.put('/blogs/:id', updateBlog)

router.delete('/blogs/:id', deleteBlog)

export default router