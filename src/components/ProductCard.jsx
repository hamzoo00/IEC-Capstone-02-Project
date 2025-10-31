import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import {Link} from 'react-router'
import { useDispatch } from 'react-redux';
import { addItem } from '../Store/Slices/CartDetails';



export default function ProductCard({productId,image,alt,title,price,category}) {

    const dispatch = useDispatch();
    const product = {productId,image,title,price,category}

  return ( <>    
    <Card sx={{   width: '100%',
      height: '100%',
      boxShadow: 4,
      borderRadius: 2,
      overflow: 'hidden',
      transition: '0.3s',
      '&:hover': { transform: 'translateY(-4px)', boxShadow: 8 },}}>
    <Link to= {`/products/${category}/${title}`} key={Date.now}>
      <CardActionArea
         sx={{
           "&:hover": {
             opacity: '80%',
           },
         }}
          >

        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{
            height: 250,
            objectFit: "contain",   
            objectPosition: "center", }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='flex justify-between' >
           <Box> {title} </Box>
           
           <Box>Rs.{price} </Box>
           
          </Typography>
        
        </CardContent>
        
      </CardActionArea>
  </Link>
      <CardActions className='flex justify-center'>
        <Button size="small" color="primary" onClick={()=> {dispatch(addItem(product));  alert("Item added to the cart") }}>
          Add to cart
        </Button>
      </CardActions>
    </Card>


      {/* now i want to have a page that whenever a product is clicked that page should open containing the product details, i know i a have to use 
      link and send products details as props to send product details to that page but issue is that for link to access that page i have to give it route as well as  */}
  </>

    
  );
}
