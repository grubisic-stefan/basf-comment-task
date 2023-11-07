import React, { useState } from "react";
import Comment from "../Comment/Comment";
import data from "../../data.json";
import styles from "./CommentList.module.css";
import { getCurrentDate } from "../../utils/getCurrentDate";

const CommentList = () => {
  const [comments, setComments] = useState(data.data.comments);
  const [comment, setComment] = useState("");
  const [parentCommentId, setParentCommentId] = useState(null);

  const rootComments = comments.filter((comment) => !comment.parent_id);

  const getReplies = (parentId) => {
    return comments.filter((comment) => comment.parent_id === parentId);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() === "") {
      return;
    }

    const newComment = {
      id: (Math.random() * 100000).toFixed(0),
      parent_id: parentCommentId,
      author: {
        name: "User",
      },
      text: comment,
      timestamp: Date.now(),
    };

    setComments([...comments, newComment]);
    setComment("");
    setParentCommentId(null);
  };

  return (
    <div className={styles.CommentListWrapper}>
      <div className={styles.Timestamp}>{getCurrentDate()}</div>
      <div className={styles.Comments}>
        {rootComments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onReply={getReplies}
            setParentCommentId={setParentCommentId}
            setComment={setComment}
          />
        ))}
      </div>

      <div className={styles.InputWrapper}>
        <textarea
          placeholder="...type something"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={() => handleCommentSubmit()}>Submit</button>
      </div>
    </div>
  );
};

export default CommentList;
