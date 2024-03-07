import {pool} from '../db.js'

export const getBlogs = async (req, res) => {
    // res.send('obteniendo blogs')
    const [result] = await pool.query('SELECT * FROM blogs ORDER BY createAt ASC')
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

export const createBlog = async(req, res) => {
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
