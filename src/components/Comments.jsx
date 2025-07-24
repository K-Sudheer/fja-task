import { Box, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
 
const comments = [
  {
    name: "KS",
    comment: "Great work! When HTML version will be available?",
    time: "09:00 AM",
    img: 6,
  },
  {
    name: "KSR",
    comment: "Thanks for the updates!",
    time: "08:30 AM",
    img: 7,
  },
];
 
const Comments = () => (
  <Box sx={{ p: 2, bgcolor: "white", borderRadius: 2 }}>
    <Typography variant="h6" mb={1}>Comments</Typography>
    <List>
      {comments.map((comment, idx) => (
        <ListItem key={idx} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src={`https://i.pravatar.cc/40?img=${comment.img}`} />
          </ListItemAvatar>
            <ListItemText primary={comment.name} secondary={`${comment.comment} — ${comment.time}`} />
        </ListItem>
      ))}
    </List>
  </Box>
);
 
export default Comments;