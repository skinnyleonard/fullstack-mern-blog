import React, { useEffect, useState } from "react";
import { createBlogRequest } from "../api/blosg.api";
import { useParams } from "react-router-dom";

function Poster() {
  const [newUser, setNewUser] = useState("");
  const [newPost, setNewPost] = useState("");

  const params = useParams()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(targeted)
    try {
      const response = await createBlogRequest(targeted)
      response.status = 200;
      console.log(response)
    } catch (error) {
      console.error(error)
    }
    setNewUser('')
    setNewPost('')
  }
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
        <button type="submit">Subir</button>
      </form>
    </>
  );
}

export default Poster;
