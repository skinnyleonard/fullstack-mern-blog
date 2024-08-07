import {pool} from '../db.js'
import cloudinary from 'cloudinary'
import multer from 'multer'
import path from 'path'

export const getBlogs = async (req, res) => {
    // res.send('obteniendo blogs')
    const [result] = await pool.query('SELECT * FROM blogs ORDER BY createAt DESC')
    console.log(result)
    res.json(result)
}

export const getBlog = async (req, res) => {
    // res.send('obteniendo el blog')
    console.log(req.params.id)
    const [result] = await pool.query('SELECT * FROM blogs WHERE id = ?', [req.params.id])

    if (result.length == 0){
        return res.status(404).json({message: 'Blog no encontrado'})
    }

    res.json(result[0])
}

export const createBlog = async (req, res) => {
    const {name, post} = req.body
    const [result] = await pool.query('INSERT INTO blogs (name, post) VALUES (?, ?)',[
        name, post
    ])
    return res.json({
        id: result.insertId, name, post,
    })
    console.log(result)
    res.send('creando blogs')
}

export const receiveImage = async (req, res) => {
    const resultUrl = await cloudinary.v2.uploader.upload(req.file.path)
    pool.query('update blogs set image = (?) order by id desc limit 1',[
        resultUrl.url
    ])
}

export const updateBlog = async(req, res) => {
    // res.send('actualizando blogs')
    const [result] = await pool.query('UPDATE blogs SET ? WHERE id = ?', [req.body, req.params.id])
    res.json(result)
}

export const deleteBlog = async(req, res) => {
    // res.send('borrando blog')
    console.log(req.params.id)
    const [result] = await pool.query('DELETE FROM blogs WHERE id = ?', [req.params.id])

    if (result.affectedRows == 0){
        return res.status(404).json({message: 'Blog no encontrado'})
    }

    res.sendStatus(204)
}

export const getComment = async(req, res) => {
    const [result] = await pool.query('SELECT * FROM comments WHERE id = ? ORDER BY createAt desc', [req.params.id])
    res.json(result)
}

export const addComment = async(req, res) => {
    const {name, comment} = req.body
    const [result] = await pool.query(`INSERT INTO comments (id, name, comment) VALUES (?, ?, ?)`,[
        req.params.id, name, comment
    ])
    return res.json({
        id: result.insertId, name, comment,
    })
    console.log(result)
    res.send('creando comentario')
}