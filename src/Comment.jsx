import React, { useState } from "react";

const Comment = ({ content, addReply, onDelete }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [newReplyContent, setNewReplyContent] = useState("");
  const [nestedReplies, setNestedReplies] = useState([]);
  const [paddingValue, setPaddingValue] = useState(10);
  const [paddingInput, setPaddingInput] = useState(10);

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
    setPaddingInput(paddingInput + 20);
  };

  const handleReplyChange = (event) => {
    setNewReplyContent(event.target.value);
  };

  const addNestedReply = () => {
    if (newReplyContent.trim() !== "") {
      const newReply = { content: newReplyContent };
      setNestedReplies([...nestedReplies, newReply]);
      addReply();
      setNewReplyContent("");
      setShowReplyForm(false);
      setPaddingValue(paddingValue + 20);
    }
  };


  const handleDelete = () => {
    onDelete();
  };

  const handleReplyDelete = () => {
    console.log("##");
  };

  return (
    <div className="comment">
      <span className="">
        <p className="padding replyClass">{content}</p>
        <button className="padding btn-reply" onClick={toggleReplyForm}>Reply</button>
        <button className="padding btn-delete" onClick={handleDelete}>Delete</button>
      </span>

      {showReplyForm && (
        <div style={{ paddingLeft: `${paddingInput}px`,paddingTop:'1rem' }}>
          <input
            type="text"
            placeholder="Write a reply"
            value={newReplyContent}
            onChange={handleReplyChange}
          />
          <button className="buttonAdd" onClick={addNestedReply}>Add Reply</button>
        </div>
      )}
      <div className="replies" style={{ paddingLeft: `${paddingValue}px` }}>
        {nestedReplies.map((reply, index) => (
          <Comment
            key={index}
            content={reply.content}
            addReply={addNestedReply}
            onDelete={handleReplyDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
