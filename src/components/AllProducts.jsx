import ProductCard from "./ProductCard";
import Box from '@mui/material/Box';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useSelector} from 'react-redux'

export default function AllProducts(){

  const [Category, setCategory] = React.useState('');
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
   


  const {Products} = useSelector ((state)=> state.ProductDetails);

       
return (
       <> 
           <Box sx={{pt:'3rem'}}>
            <FormControl sx={{ marginLeft: 4, marginBottom: 4, minWidth: 130 }}>
           <InputLabel id="demo-simple-select-autowidth-label" >Category</InputLabel>
           <Select
             labelId="demo-simple-select-autowidth-label"
             id="demo-simple-select-autowidth"
             value={Category}
             onChange={handleChange}
             autoWidth
             label="Category"
           >
             <MenuItem value="">
               <em>None</em>
             </MenuItem>
             <MenuItem value={'vegetables'}>Vegetables</MenuItem>
             <MenuItem value={'computer accessories'}>Computer Accessories</MenuItem>
             <MenuItem value={'headphones'}>Headphones</MenuItem>
             <MenuItem value={'shoes'}>Shoes</MenuItem>
             <MenuItem value={'beauty'}>Beauty</MenuItem>
           </Select>
         </FormControl>
        </Box>

        <Box className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                         gap-6 px-8 pb-4 overflow-x-hidden w-full">
          {Products
                       .filter((product) => 
                         Category === "" || product.category.toLowerCase() === Category.toLowerCase()
                       )
                       .map((product) => (
                        
                         <ProductCard
                           key={product.productId}
                           productId={product.productId}
                           image={product.image}
                           alt={product.alt}
                           title={product.title}
                           price={product.price} 
                           description ={product.description}
                           category={product.category}
                           
                         />
                       
                       ))}

        </Box>
      </>
 );
}