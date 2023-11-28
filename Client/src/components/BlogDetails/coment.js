import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentComponent() {
  const [commentData, setCommentData] = useState({ name: '', email: '', comment: '' });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Hubo un problema al obtener los comentarios:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/comments', commentData);
      if (!response.data) {
        throw new Error('Error al enviar el comentario');
      }
      setComments([...comments, response.data]);
      setCommentData({ name: '', email: '', comment: '' });
    } catch (error) {
      console.error('Hubo un problema con la solicitud Axios:', error);
    }
  };

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={commentData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={commentData.email}
          onChange={handleChange}
        />
        <textarea
          name="comment"
          placeholder="Escriba su comentario"
          value={commentData.comment}
          onChange={handleChange}
        />
        <button type="submit">Enviar comentario</button>
      </form>
      {/* Display comments */}
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentComponent;

