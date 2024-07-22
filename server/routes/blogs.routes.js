import { Router } from "express";
import multer from "multer";
import path from "path";
import { getBlogs, getBlog, createBlog, updateBlog, 
    deleteBlog, getComment, addComment, receiveImage } from '../controller/blogs.controller.js'

const router = Router()

router.get('/blogs', getBlogs)

router.get('/blogs/:id', getBlog)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './server/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})

router.post('/blogs', createBlog)

router.post('/images', upload.single('image'), receiveImage)

router.put('/blogs/:id', updateBlog)

router.delete('/blogs/:id', deleteBlog)

router.get('/comments/:id', getComment)

router.post('/blogs/:id', addComment)

export default router