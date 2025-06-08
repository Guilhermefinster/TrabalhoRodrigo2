import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { Container, Typography, CircularProgress } from '@mui/material';
import PostDetails from '../components/PostDetails';

export default function DadosPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => {
      setPost(res.data);
    });
  }, [id]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Detalhes do Post</Typography>
      {post ? <PostDetails post={post} /> : <CircularProgress />}
    </Container>
  );
}
