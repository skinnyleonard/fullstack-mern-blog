import express from 'express'
import cors from 'cors'
import {PORT} from './config.js'
import indexRoutes from './routes/index.routes.js'
import blogRoutes from './routes/blogs.routes.js'

const app = express()

app.use(express.json())
const corsOptions = {
    origin: 'https://crotoblog.netlify.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // If you need to send cookies or authentication headers
};
app.use(cors(corsOptions));

app.use(indexRoutes)
app.use(blogRoutes)

app.listen(PORT)
console.log(`server running on port ${PORT}`)