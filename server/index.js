import express from 'express'
import cors from 'cors'
import {PORT} from './config.js'
// import indexRoutes from './routes/index.routes.js'
import blogRoutes from './routes/blogs.routes.js'

const app = express()

app.use(express.json())
// app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
app.options('/*', (_, res) => {
    res.sendStatus(200);
});


// app.use(indexRoutes)
app.use(blogRoutes)

app.listen(PORT)
console.log(`server running on port ${PORT}`)