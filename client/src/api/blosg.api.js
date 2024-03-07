import axios from 'axios'

export const getBlogsRequest = async () =>{
    await axios.get('http://localhost:4000/blogs',)
}

export const createBlogRequest = async (blog) =>{
    await axios.post('http://localhost:4000/blogs', blog)
}

export const deleteBlogRequest = async (id) => {
    await axios.delete(`http://localhost:4000/blogs/${id}`)
}