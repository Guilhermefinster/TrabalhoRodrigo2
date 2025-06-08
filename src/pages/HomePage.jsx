import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  TextField,
  Stack
} from '@mui/material';

export default function HomePage() {
  const navigate = useNavigate();
  const [postId, setPostId] = useState('');

  const handleNavigatePost = () => {
    navigate('/post');
  };

  const handleNavigateDados = () => {
    if (postId.trim()) {
      navigate(`/dados/${postId}`);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Página Inicial</Typography>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        <Button variant="contained" onClick={handleNavigatePost}>
          Ver lista de posts
        </Button>

        <TextField
          label="ID do Post"
          variant="outlined"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleNavigateDados}
        >
          Ver detalhes do post
        </Button>
      </Stack>
    </Container>
  );
}
