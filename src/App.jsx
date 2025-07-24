import { Box, Grid } from "@mui/material";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import OverviewCards from "./components/OverviewCards";
import PopularProducts from "./components/PopularProducts";
import Customers from "./components/Customers";
import Comments from "./components/Comments";
 
function App() {
 
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f4f4f4" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <OverviewCards />
            <Customers />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularProducts />
            <Comments />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
 
export default App;