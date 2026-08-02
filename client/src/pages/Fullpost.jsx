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

  var mql = window.matchMedia("(max-aspect-ratio: 9/16)")

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
    mql.matches ? document.querySelector(".comment").style.display = "none" : document.querySelector(".comment").style.display = "block";
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
          <div className="blogList">
            <div className="blogs">
            <img src={e.image}/>
            <h1>{e.post}</h1>
            <h2>{e.name}</h2>
            <p><small>{e.createAt}</small></p>
          </div>
          </div>
        ))}
      <hr />

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

      <h2>{counter} comentarios</h2>
      <button className="commentBtn" onClick={() => 
        document.querySelector(".comment").style.display = "block"
      }>comenta algo</button>
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
