import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/modules/posts";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addPost({ text });
    setText("");
  };
  return (
    <div className="post-card">
      <p className="form-title center">Create Post</p>
      <hr></hr>
      <form onSubmit={onSubmit}>
        <div>
          <textarea
            placeholder="What's on your mind"
            value={text}
            name="text"
            required
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Post" className="btn btn-primary"></input>
      </form>
    </div>
  );
};

export default connect(null, { addPost })(PostForm);
