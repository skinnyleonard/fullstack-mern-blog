import express from 'express'
import cors from 'cors'
import {PORT} from './config.js'
// import indexRoutes from './routes/index.routes.js'
import blogRoutes from './routes/blogs.routes.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use(indexRoutes)
app.use(blogRoutes)

app.listen(PORT)
console.log(`server running on port ${PORT}`)