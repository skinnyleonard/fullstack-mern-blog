import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBlogs } from "./components/BlogContext";
import { createCommentRequest } from "../api/blosg.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from '@fortawesome/free-solid-svg-icons' 

function Fullpost() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const { blogs, loadBlogs, comments, loadComments } = useBlogs();
  useEffect(() => {
    loadBlogs();
  }, []);
  useEffect(() => {
    loadComments(id);
  }, [comments]);

  let counter = 0
  for (const obj of comments){
    counter++
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.querySelector(".comment").style.display = none;
    await createCommentRequest(targeted, id);
    setName("");
    setComment("");
  };
  const targeted = { id: id, name: name, comment: comment };

  return (
    <>
      {blogs
        .filter((e) => e.id == id)
        .map((e) => (
          <div className="blogs">
            <img src={e.image}/>
            <h1>{e.post}</h1>
            <h2>{e.name}</h2>
            <p><small>{e.createAt}</small></p>
          </div>
        ))}
      <hr />
      <button className="commentBtn" onClick={() => 
        document.querySelector(".comment").style.display = "block"
      }>comenta algo</button>
      <h2>{counter} comentarios</h2>
      <form className="comment" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nombre..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <textarea
          type="text"
          placeholder="comenta..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button type="submit">comentar</button>
      </form>
          
      <div className="comments">
        {comments.map((e) => (
          <div className="commentBox">
            <FontAwesomeIcon icon={faUserTie} className="faUserTie"/>
            <h2>{e.name} <small>comento:</small></h2>
            <h3>{e.comment}</h3>
            <p><small>{e.createAt}</small></p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Fullpost;
