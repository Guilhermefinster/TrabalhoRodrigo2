import { Card, CardContent, Typography } from '@mui/material';

export default function PostDetails({ post }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body1" paragraph>{post.body}</Typography>
        <Typography variant="subtitle2">ID: {post.id}</Typography>
      </CardContent>
    </Card>
  );
}
