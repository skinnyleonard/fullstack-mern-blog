import React, { useEffect, useState } from "react";
import { createBlogRequest } from "../api/blosg.api";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
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
    document.querySelector("button").disabled = true;
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

  useEffect(() => {
    if(newUser.length == 0 && newPost.length == 0){
      document.querySelector("button").disabled = true;
    }
    else{
      document.querySelector("button").disabled = false;
    }
  })

  return (
    <>
    <FontAwesomeIcon icon={faUserPen} className="faUser" />
    <h1 className="posteaTitle">{params.id ? "edita el post" : "Postea algo "}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="escribi tu nombre..."
          onChange={(e) => setNewUser(e.target.value)}
          value={newUser}
          required
        />
        <br />
        <textarea
          name="post"
          cols="100"
          rows="10"
          placeholder="escribi algo dale..."
          onChange={(e) => setNewPost(e.target.value)}
          value={newPost}
          required
        ></textarea>
        <br />
        <h3>Subi una foto...</h3>
        <input type="file"
          onChange={handleFile}
        />
        <br />
        <button type="submit">Publicar <FontAwesomeIcon icon={faThumbsUp} /></button>
      </form>
    </>
  );
}

export default Poster;
