import { useEffect, useState } from "react";
import api from "../services/api";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar posts:", error);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/dados/${id}`);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Posts
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Stack spacing={2}>
          {posts.map((post) => (
            <Card key={post.id}>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {post.body}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleViewDetails(post.id)}
                >
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Container>
  );
}
