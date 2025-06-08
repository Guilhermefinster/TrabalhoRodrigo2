import { List, ListItem, ListItemText } from '@mui/material';

export default function PostList({ posts, onPostClick }) {
  return (
    <List>
      {posts.map((post) => (
        <ListItem 
          button 
          key={post.id} 
          onClick={() => onPostClick(post.id)}
        >
          <ListItemText primary={post.title} />
        </ListItem>
      ))}
    </List>
  );
}
