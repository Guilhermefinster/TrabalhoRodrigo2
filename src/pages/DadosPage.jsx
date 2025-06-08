import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api'; // Verifique se está apontando corretamente para sua instância do Axios
import PostDetails from '../components/PostDetails';
import { Container, Typography, CircularProgress } from '@mui/material';

export default function DadosPage() {
  const { id } = useParams(); // <- Aqui extrai o ID da URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar post:', err);
        setLoading(false);
      });
  }, [id]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Detalhes do Post</Typography>
      {loading ? <CircularProgress /> : post ? (
        <PostDetails post={post} />
      ) : (
        <Typography color="error">Post não encontrado</Typography>
      )}
    </Container>
  );
}
