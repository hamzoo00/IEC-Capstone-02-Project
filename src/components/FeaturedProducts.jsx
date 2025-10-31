import * as React from 'react';
import ProductCard from "./ProductCard";
import {useDispatch} from 'react-redux'
import { loadData } from "../Store/Slices/ProductDetails";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import airpod01 from '../assets/products-img/airpod01.jpeg'
import airpod02 from '../assets/products-img/airpod2.jpeg'
import airpod03 from '../assets/products-img/airpods3.jpeg'
import shoes01 from '../assets/products-img/shoes01.jpg'
import shoes02 from '../assets/products-img/shoes02.jpg'
import shoes03 from '../assets/products-img/shoes03.jpg'
import shoes04 from '../assets/products-img/shoes04.jpg'
import tomato from '../assets/products-img/tomato.jpeg'
import onion from '../assets/products-img/onion.jpeg'
import mouse from '../assets/products-img/mouseLoq.jpeg'
import goldenPearl from '../assets/products-img/goldenPearl.jpeg'
import pumpkin from '../assets/products-img/pumpkin.jpeg'


export default function FeaturedProduct (){
     const dispatch = useDispatch();
   const [productsData, setProductsData] = React.useState([]);

 /* used to avoid the strict mode duplicate rendering cant do it with updater function here and current state to 
 cause its unmounted with strick mode (.lenthg==0 logic) */

  const loaded = React.useRef(false);      
   React.useEffect(() => {
    if (!loaded.current) {
    loaded.current = true;
     
      const products = [
     {
       image: shoes01,
       alt: "shoes",
       title: "Imported Shoes",
       price: 6999,
       description: "Made with high quality PU leather",
       category: "shoes",
       productId: 1
     },
     {
       image: tomato,
       alt: "Tomato",
       title: "Tomato",
       price: 500,
       description: "Fresh from farm and delicious as it should be",
       category: "vegetables",
       productId: 2
     },
     {
       image: mouse,
       alt: "Rgb Mouse",
       title: "Rgb Mouse",
       price: 2000,
       description: "4000 dpi with rgb lighting",
       category: "computer accessories",
       productId: 3
     },
     {
       image: airpod02,
       alt: "airpod",
       title: "Airpod Ultra",
       price: 5400,
       description: "Fully bass bosted and high picth sound",
       category: "headphones",
       productId: 4
     },
     {
       image: shoes03,
       alt: "shoes",
       title: "Sneakers",
       price: 3490,
       description: "Lightweight and stylish",
       category: "shoes",
       productId: 5
     },
     {
       image: goldenPearl,
       alt: "Golden Pearl Cream",
       title: "Golden Pearl Cream",
       price: 400,
       description: "Make your skin look fresh and fair",
       category: "beauty",
       productId: 6
     },
     {
       image: onion,
       alt: "onion",
       title: "Onion",
       price: 150,
       description: "Fresh and 100 organic",
       category: "vegetables",
       productId: 7
     },
     {
       image: shoes02,
       alt: "shoes",
       title: "Trending Shoes",
       price: 4999,
       description: "Every day comfort",
       category: "shoes",
       productId: 8
     },
     {
       image: airpod01,
       alt: "airpod",
       title: "Airpod Pro",
       price: 3850,
       description: "Fully bass bosted and high picth sound",
       category: "headphones",
       productId: 9
     },
     {
       image: pumpkin,
       alt: "pumpkin",
       title: "Pumpkin",
       price: 180,
       description: "Fresh and flavourfull",
       category: "vegetables",
       productId: 10
     },
     {
       image: airpod03,
       alt: "airpod",
       title: "Airpod",
       price: 1849,
       description: "Fully bass bosted and high picth sound",
       category: "headphones",
       productId: 11
     }
   ]
   setProductsData(products);
   dispatch(loadData(products));
    
        }}, []);


    return (
       <> 
        <Typography variant="h4" component="div" className="font-[raleway] pb-5 ps-10">
            Featured Products
        </Typography>
      <Box className=" grid grid-cols-4 gap-6 px-8 pb-4 overflow-x-hidden w-full"> 
        {productsData.filter((p)=> p.productId%2 ==0)
        .map((product)=>(
       
           <ProductCard    key={product.productId}
                           productId={product.productId}
                           image={product.image}
                           alt={product.alt}
                           title={product.title}
                           price={product.price} 
                           category = {product.category}
          />
          ))} 

       </Box>  
       
      </>
        
    );
}