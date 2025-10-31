import * as React from 'react';
import { useParams } from "react-router";
import {useSelector,useDispatch} from 'react-redux';
import { addItemInQuantity } from "../Store/Slices/CartDetails";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function ProductDetails () {
  
    const {category, title} = useParams();
    const selector = useSelector((state)=> state.ProductDetails.Products)
    
    const foundProduct = selector.find((p)=> p.title.toLowerCase() === title.toLowerCase() && p.category === category.toLowerCase() );

    const [quantity, setQuantity] = React.useState(1);
    const dispatch = useDispatch();  

    if (!foundProduct) {
        return <Typography>No product Found</Typography>;
      }

   
    const product = {
      productId: foundProduct.productID,
      image: foundProduct.image,
      title: foundProduct.title,
      price: foundProduct.price,
      quantity: quantity,
      category: foundProduct.category}  

      const theme = createTheme({
        palette: {
          ochre: {
            main: '#5bd7ddff',
            light: '#E3FDFD',
            dark: '#A6E3E9',
            contrastText: '#fff',
          },
        },
      });
      
    return(  

           <Box className="flex justify-center items-center">
             <Box className="flex flex-grow justify-center items-center ">
               <img
                 src={foundProduct.image}
                 alt={foundProduct.alt || foundProduct.title}
                 style={{ maxWidth: "300px", borderRadius: "10px" }}
               />
             </Box>
         
             <Box className="flex justify-center  flex-grow flex-col">
               <Typography variant="h3" className="p-8 ">{foundProduct.title}</Typography>
               <Typography variant="body1" className="p-8">{foundProduct.description}</Typography>
               <Typography variant="h4" className="p-8">
                 Rs.{foundProduct.price}{" "}
                 {foundProduct.category.toLowerCase() === "vegetables" ? "/1Kg" : ""}
               </Typography>
         
               <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                   <IconButton onClick={() => setQuantity(quantity => Math.max(1, quantity - 1))} sx={{ backgroundColor: '#019376', color: 'white', '&:hover': { backgroundColor: '#017a63' }, width: 40, height: 40, }}><RemoveIcon /></IconButton>
                   <Typography sx={{ minWidth: 60, textAlign: 'center', fontWeight: 'bold', fontSize: 20, border: '1px solid #019376', py: 1, borderRadius: 1, }}>{quantity}</Typography>
                   <IconButton onClick={() => setQuantity(quantity => quantity + 1)} sx={{ backgroundColor: '#019376', color: 'white', '&:hover': { backgroundColor: '#017a63' }, width: 40, height: 40, }}><AddIcon /></IconButton>
                </Box>

               <CardActions className="flex justify-center">
                 <ThemeProvider theme={theme}>
                   <Button
                     size="small"
                     color="ochre"
                     variant="contained"
                     onClick={()=> {dispatch(addItemInQuantity(product)); alert("Items are added to the Cart")} }                          
                   >
                     Add to cart
                   </Button>
                 </ThemeProvider>
               </CardActions>
             </Box>
           </Box>
)
}

           