import express from 'express'
import cors from 'cors'
import {PORT} from './config.js'
import indexRoutes from './routes/index.routes.js'
import blogRoutes from './routes/blogs.routes.js'

const app = express()

app.use(express.json())
const corsOption = {
    credentials: true,
    origin: ['http://localhost:5173', 'crotoblog.netlify.app']
}
app.use(cors(corsOption))

app.use(indexRoutes)
app.use(blogRoutes)

app.listen(PORT)
console.log(`server running on port ${PORT}`)