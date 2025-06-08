import { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import {
  Container, Typography, List, ListItem, ListItemText, CircularProgress
} from '@mui/material';

export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/posts')
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      });
  }, []);

  const handleClick = (id) => {
    navigate(`/dados/${id}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {posts.map(post => (
            <ListItem button key={post.id} onClick={() => handleClick(post.id)}>
              <ListItemText primary={post.title} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}
