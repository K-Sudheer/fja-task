import { Box, Avatar, TextField, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from "@mui/icons-material/Add";

const Header = () => (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2}} >
        <TextField size='small' placeholder='Search anything...' InputProps={{ endAdornment: <SearchIcon />}} />
       <Box sx={{display: "flex", alignItems: "center", gap: 2}} >
            <Button variant='contained' startIcon={<AddIcon />}>Create</Button>
            <Avatar src="https://i.pravatar.cc/40" />
       </Box>
    </Box>
);

export default Header;
