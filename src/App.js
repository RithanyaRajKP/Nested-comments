import React, { useState } from 'react';
import Comment from './Comment';
import './App.css';

const App = () => {
  const [comments, setComments] = useState([]);
  const [newCommentContent, setNewCommentContent] = useState('');

  const handleNewCommentChange = (event) => {
    setNewCommentContent(event.target.value);
  };

  const addComment = () => {
    if (newCommentContent.trim() !== '') {
      const newComment = { content: newCommentContent, replies: [] };
      setComments([...comments, newComment]);
      setNewCommentContent('');
    }
  };

  
  const handleDeleteComment = () => {
    const updatedComments = [...comments];
    setComments(updatedComments);
  };
  return (
    <div className="container">
      <h1>Comment Widget</h1>
      <div>
        <input
          type="text"
          placeholder="Add a comment"
          value={newCommentContent}
          onChange={handleNewCommentChange}
        />
        <button className='buttonAdd' onClick={addComment} disabled={!newCommentContent}>Add Comment</button>
      </div>
      {comments.map((comment, index) => (
        <>
        <Comment
          key={index}
          content={comment.content}
          addReply={addComment}
          onDelete={handleDeleteComment}
        />
        </>
       ))}
    </div>
  );
};

export default App;
