import express from 'express'
import cors from 'cors'
import {PORT} from './config.js'
import cloudinary from 'cloudinary'
import multer from 'multer'
import path from 'path'
import indexRoutes from './routes/index.routes.js'
import blogRoutes from './routes/blogs.routes.js'

const app = express()

app.use(express.json())
app.use(cors());

cloudinary.config({ 
    cloud_name: 'dkdlexz2l', 
    api_key: '655773924856397', 
    api_secret: 'EAjM2a6Fk6YLaZMPu8QEklN8e34'
});

app.use(indexRoutes)
app.use(blogRoutes)

app.listen(PORT)
console.log(`server running on port ${PORT}`)