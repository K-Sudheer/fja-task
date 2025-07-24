import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
} from "@mui/material";
 
const products = [
  {
    name: "Apple iPhone",
    price: "$3,250.00",
    status: "Active",
    img: "https://tse4.mm.bing.net/th/id/OIP.CmM2ilwExdSo6ksn4UBlJQHaD6?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Samsung Galaxy",
    price: "$3,000.00",
    status: "Active",
    img: "https://tse3.mm.bing.net/th/id/OIP.xpOEzyu4TXdLLMoaJxMFoQHaEf?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Asus Laptop",
    price: "$9,999.99",
    status: "Active",
    img: "https://tse1.mm.bing.net/th/id/OIP.kHtbFBrGZUXbikCh4etLTwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Sony Headphones",
    price: "$1,850.00",
    status: "Inactive",
    img: "https://tse1.mm.bing.net/th/id/OIP.Q7SwuxD4PM-QJc-wEGjoVQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "JBL Speakers",
    price: "$900.00",
    status: "Active",
    img: "https://tse4.mm.bing.net/th/id/OIP.Zqr6Fv26605c3HVQ2p5R5gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];
 
const PopularProducts = () => (
  <Box sx={{ p: 2, bgcolor: "white", borderRadius: 2, mb: 2 }}>
    <Typography variant="h6" mb={1}>
      Popular Products
    </Typography>
    <List>
      {products.map((product, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
           <Avatar src= {product.img} alt={product.name} 
           sx={{width: 56, height: 56, objectFit: 'cover'}}
           />
          </ListItemAvatar>
          <ListItemText primary={product.name} secondary={product.price} />
          <Chip
            label={product.status}
            color={product.status === "Active" ? "success" : "default"}
            size="small"
          />
        </ListItem>
      ))}
    </List>
  </Box>
);
 
export default PopularProducts;
 