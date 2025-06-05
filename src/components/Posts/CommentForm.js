import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "../../redux/modules/posts";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { text });
    setText("");
  };

  return (
    <div className="post-card">
      <p className="form-title center">Leave a Comment</p>
      <hr></hr>
      <form onSubmit={onSubmit}>
        <div>
          <textarea
            placeholder="Enter your comment"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Post" className="btn btn-primary"></input>
      </form>
    </div>
  );
};
export default connect(null, { addComment })(CommentForm);
