import { Router } from "express";
import { getBlogs, getBlog, createBlog, updateBlog, 
    deleteBlog, getComment, addComment } from '../controller/blogs.controller.js'

const router = Router()

router.get('/blogs', getBlogs)

router.get('/blogs/:id', getBlog)

router.post('/blogs', createBlog)

router.put('/blogs/:id', updateBlog)

router.delete('/blogs/:id', deleteBlog)

router.get('/comments/:id', getComment)

router.post('/blogs/:id', addComment)

export default router