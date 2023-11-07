import React, { useState } from "react";
import styles from "./Comment.module.css";
import connection from "../../assets/Group 4.svg";
import getAvatarSvg from "../../utils/getAvatarSvg";

const Comment = ({
  comment,
  onReply,
  isReply,
  setParentCommentId,
  setComment,
}) => {
  const [showReplies, setShowReplies] = useState(false);

  const handleReply = (id, user) => {
    setShowReplies(true);
    setParentCommentId(id);
    // should be a chip component or similar
    setComment("@" + user);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const segments = comment.text.split(/(https?:\/\/\S+)/);

  const numReplies = onReply(comment.id).length;

  return (
    <>
      <div key={comment.id} className={styles.CommentContainer}>
        {isReply && (
          <div>
            <img src={connection} alt="connection" />
          </div>
        )}
        <div className={styles.Avatar}>
          <img src={getAvatarSvg(comment.author.picture)}></img>
        </div>
        <div className={styles.ContentContainer}>
          <div className={styles.Content}>
            <p>{comment.author.name}</p>
            <p>
              {segments.map((segment, index) => {
                if (segment.startsWith("http")) {
                  return (
                    <a
                      key={index}
                      href={segment}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.LinkText}
                    >
                      {segment}
                    </a>
                  );
                }
                return <span key={index}>{segment}</span>;
              })}
            </p>
          </div>
          <div className={styles.Info}>
            <span>{formatTimestamp(comment.timestamp)}</span>

            <button
              className={styles.ReplyButton}
              onClick={() => handleReply(comment.id, comment.author.name)}
            >
              Reply {numReplies > 0 && !comment.parent_id && `(${numReplies})`}
            </button>
          </div>
        </div>
      </div>
      {comment.id &&
        showReplies &&
        onReply &&
        onReply(comment.id).map((reply) => (
          <>
            <Comment
              key={reply.id}
              comment={reply}
              onReply={onReply}
              isReply={true}
              setParentCommentId={setParentCommentId}
              setComment={setComment}
            />
          </>
        ))}
    </>
  );
};

export default Comment;
