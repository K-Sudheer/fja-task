import { Box, Avatar, Typography, Stack, Button } from '@mui/material';

const customers = [
"https://i.pravatar.cc/40?img=1",
"https://i.pravatar.cc/40?img=2",
"https://i.pravatar.cc/40?img=3",
"https://i.pravatar.cc/40?img=4",
"https://i.pravatar.cc/40?img=5",
];

const Customers = () => (
  <Box sx={{ p: 2, bgcolor: "white", borderRadius: 2, mt: 2 }}>
    <Typography variant="subtitle1" mb={1}>857 new customers today!</Typography>
    <Stack direction="row" spacing={2}>
      {customers.map((src, idx) => (
        <Avatar key={idx} src={src} />
      ))}
      <Button variant="text">View all</Button>
    </Stack>
  </Box>
);
 
export default Customers;
 