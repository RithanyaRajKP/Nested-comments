import React, { useState } from 'react';

const Display = ({ content, replies, addReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [newReplyContent, setNewReplyContent] = useState('');
  const [nestedReplies, setNestedReplies] = useState(replies || []);

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  const handleReplyChange = (event) => {
    setNewReplyContent(event.target.value);
  };

  const submitReply = () => {
    if (newReplyContent.trim() !== '') {
      const newReply = { content: newReplyContent, replies: [] };
      setNestedReplies([...nestedReplies, newReply]);
      addReply(newReply); // Notify the parent component
      setNewReplyContent('');
      setShowReplyForm(false);
    }
  };

  return (
    <div className="comment">
      <p>{content}</p>
      <button onClick={toggleReplyForm}>Reply</button>
      {showReplyForm && (
        <div>
          <textarea value={newReplyContent} onChange={handleReplyChange} />
          <button onClick={submitReply}>Submit</button>
        </div>
      )}
      <div className="replies">
        {nestedReplies.map((reply, index) => (
          <Display key={index} content={reply.content} replies={reply.replies} addReply={addReply} />
        ))}
      </div>
    </div>
  );
};

export default Display;
