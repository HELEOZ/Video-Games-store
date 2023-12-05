import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentComponent() {
  const [commentData, setCommentData] = useState({ name: '', email: '', comment: '' });
  const [comments, setComments] = useState([]);
  const [editing, setEditing] = useState(null); // Almacena el índice del comentario que se está editando

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
      if (editing !== null) {
        // Si estamos editando, realiza una solicitud PUT para actualizar el comentario
        await axios.put(`http://localhost:9000/api/comments/${comments[editing]._id}`, commentData);
        setEditing(null);
      } else {
        // Si no estamos editando, realiza una solicitud POST para agregar un nuevo comentario
        const response = await axios.post('http://localhost:9000/api/comments', commentData);
        setComments([...comments, response.data]);
      }

      // Resetea el formulario
      setCommentData({ name: '', email: '', comment: '' });
    } catch (error) {
      console.error('Hubo un problema con la solicitud Axios:', error);
    }
  };

  const handleEdit = (index) => {
    setEditing(index);
    setCommentData({ ...comments[index] });
  };

  const handleDelete = async (index) => {
    try {
      // Realiza una solicitud DELETE para eliminar el comentario
      await axios.delete(`http://localhost:9000/api/comments/${comments[index]._id}`);
      const updatedComments = comments.filter((_, i) => i !== index);
      setComments(updatedComments);
      setEditing(null);
      setCommentData({ name: '', email: '', comment: '' });
    } catch (error) {
      console.error('Hubo un problema al eliminar el comentario:', error);
    }
  };

  const saveComment = () => {
    const updatedComments = [...comments];
    updatedComments[editing] = commentData;
    setComments(updatedComments);
    setEditing(null);
    setCommentData({ name: '', email: '', comment: '' });
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
        <button type="submit">{editing !== null ? 'Actualizar comentario' : 'Enviar comentario'}</button>
      </form>

      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.comment}</p>
            <button onClick={() => handleEdit(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentComponent;


