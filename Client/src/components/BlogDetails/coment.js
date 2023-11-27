import React, { useState, useEffect } from 'react';

function CommentComponent() {
  const [commentData, setCommentData] = useState({ name: '', email: '', comment: '' });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await fetch('http://localhost:9000/api/comments');
    const data = await response.json();
    setComments(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
      if (!response.ok) {
        throw new Error('Error al enviar el comentario');
      }
      const savedComment = await response.json();
      setComments([...comments, savedComment]);
      setCommentData({ name: '', email: '', comment: '' });
    } catch (error) {
      console.error('Hubo un problema con la petición Fetch:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form fields and submit button */}
      </form>
      {/* Display comments */}
    </div>
  );
}

export default CommentComponent;
