import axios from 'axios'

export const getBlogsRequest = async () =>{
    await axios.get('https://fullstack-mern-blog.onrender.com/blogs',)
}
// await axios.post('https://fullstack-mern-blog.onrender.com/blogs', blog)

export const createBlogRequest = async (blog) =>{
    await axios({
        method: "post",
        url: "https://fullstack-mern-blog.onrender.com/blogs",
        headers: { "Content-type": "application/json" },
        data: blog,
      })
}

export const deleteBlogRequest = async (id) => {
    await axios.delete(`https://fullstack-mern-blog.onrender.com/blogs/${id}`)
}

export const createCommentRequest = async (comment, id) => {
    await axios.post(`https://fullstack-mern-blog.onrender.com/blogs/${id}`, comment)
}