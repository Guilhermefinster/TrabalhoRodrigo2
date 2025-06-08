import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  TextField,
  Stack,
} from '@mui/material';

export default function HomePage() {
  const navigate = useNavigate();
  const [postId, setPostId] = useState('');

  const handleNavigateToPost = () => {
    navigate('/post');
  };

  const handleNavigateToDados = () => {
    if (postId.trim()) {
      navigate(`/dados/${postId}`);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Página Inicial
      </Typography>

      <Stack spacing={2}>
        <Button variant="contained" onClick={handleNavigateToPost}>
          Ver Lista de Posts
        </Button>

        <TextField
          label="Digite o ID do Post"
          variant="outlined"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleNavigateToDados}
        >
          Ver Detalhes do Post
        </Button>
      </Stack>
    </Container>
  );
}
