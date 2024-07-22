import React, { useEffect, useState } from "react";
import { createBlogRequest } from "../api/blosg.api";
import { useParams } from "react-router-dom";
import axios from "axios";

function Poster() {
  const [newUser, setNewUser] = useState("");
  const [newPost, setNewPost] = useState("");
  const [file, setFile] = useState();
  const formdata = new FormData();

  const params = useParams()
  
  const handleFile = (e) => {
    setFile(e.target.files[0])
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Array.from(formdata)); 
    if(file == undefined){
      console.log('no hay imagenes')
    }else {axios.post('https://fullstack-mern-blog.onrender.com/images', formdata)}
    console.log(targeted)
    try {
      const response = await createBlogRequest(targeted)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
    setNewUser('')
    setNewPost('')
  }
  formdata.append('image', file)
  const targeted = {name: newUser, post: newPost}

  return (
    <>
    <h1>{params.id ? "edita el post" : "Postea algo "}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="escribi tu nombre..."
          onChange={(e) => setNewUser(e.target.value)}
          value={newUser}
        />
        <br />
        <textarea
          name="post"
          cols="30"
          rows="10"
          placeholder="escribi algo dale..."
          onChange={(e) => setNewPost(e.target.value)}
          value={newPost}
        ></textarea>
        <br />
        <h3>Subi una foto...</h3>
        <input type="file"
          onChange={handleFile}
        />
        <br />
        <button type="submit">Publicar</button>
      </form>
    </>
  );
}

export default Poster;
