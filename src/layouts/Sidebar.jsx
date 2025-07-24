import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CampaignIcon from "@mui/icons-material/Campaign";
 
const menu = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Products", icon: <StoreIcon /> },
  { label: "Customers", icon: <PeopleIcon /> },
  { label: "Shop", icon: <ShoppingCartIcon /> },
  { label: "Income", icon: <AccountBalanceIcon /> },
  { label: "Promote", icon: <CampaignIcon /> },
];
 
const Sidebar = () => (
  <Box sx={{ width: 240, bgcolor: "white", height: "100vh", borderRight: "1px solid #ddd" }}>
    <List>
      {menu.map((item) => (
        <ListItemButton key={item.label}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </List>
  </Box>
);
 
export default Sidebar;