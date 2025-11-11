import * as React from 'react';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { addItemInQuantity } from "../Store/Slices/CartDetails";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ProductDetails() {

    const { category, title } = useParams();
    const selector = useSelector((state) => state.ProductDetails.Products);
    const dispatch = useDispatch();

    const foundProduct = selector.find(
        (p) => p.title.toLowerCase() === title.toLowerCase() && p.category.toLowerCase() === category.toLowerCase()
    );

    const [quantity, setQuantity] = React.useState(1);

    if (!foundProduct) {
        return <Typography>No product found</Typography>;
    }

    const product = {
        productId: foundProduct.productID,
        image: foundProduct.image,
        title: foundProduct.title,
        price: foundProduct.price,
        quantity: quantity,
        category: foundProduct.category,
    };

   
    const COLORS = {
        primaryNeutral: '#735343',    
        background: '#FBF7F3',      
        ctaAccent: '#FF6B35',         
        accentSecondary: '#2F4F3F',   // Deep Olive
        textDark: '#1E1E1E',          // Dark text
        muted: '#CFC6C1',             // Muted text
    };

    const theme = createTheme({
        palette: {
            cta: {
                main: COLORS.ctaAccent,
                contrastText: '#fff',
            },
        },
    });

    return (
       <Box sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: { xs: 'center', sm: 'flex-start' }, 
    alignItems: { xs: 'center', sm: 'flex-start' },    
    gap: { xs: 4, sm: 6 },
    p: { xs: 2, sm: 4 },
    backgroundColor: COLORS.background,
    minHeight: '80vh',
}}>
   
    <Box sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: { xs: 3, sm: 0 }
    }}>
        <img
            src={foundProduct.image}
            alt={foundProduct.alt || foundProduct.title}
            style={{
                maxWidth: "350px",
                borderRadius: "12px",
                boxShadow: '0px 4px 12px rgba(0,0,0,0.1)'
            }}
        />
    </Box>

    {/* Product Details */}
    <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        textAlign: { xs: 'center', sm: 'left' } // center text on mobile
    }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: COLORS.textDark }}>
            {foundProduct.title}
        </Typography>

        <Typography variant="body1" sx={{ color: COLORS.textDark, lineHeight: 1.7 }}>
            {foundProduct.description}
        </Typography>

        <Typography variant="h4" sx={{ color: COLORS.accentSecondary, fontWeight: 'bold' }}>
            Rs.{foundProduct.price}{" "}
            {foundProduct.category.toLowerCase() === "vegetables" ? "/ 1Kg" : ""}
        </Typography>

        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <IconButton
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                sx={{
                    backgroundColor: COLORS.accentSecondary,
                    color: 'white',
                    '&:hover': { backgroundColor: COLORS.primaryNeutral },
                    width: 40,
                    height: 40,
                }}
            >
                <RemoveIcon />
            </IconButton>

            <Typography sx={{
                minWidth: 60,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                border: `1px solid ${COLORS.accentSecondary}`,
                py: 1,
                borderRadius: 1,
                color: COLORS.textDark,
            }}>
                {quantity}
            </Typography>

            <IconButton
                onClick={() => setQuantity(q => q + 1)}
                sx={{
                    backgroundColor: COLORS.accentSecondary,
                    color: 'white',
                    '&:hover': { backgroundColor: COLORS.primaryNeutral },
                    width: 40,
                    height: 40,
                }}
            >
                <AddIcon />
            </IconButton>
        </Box>

        {/* Add to Cart Button */}
        <CardActions sx={{ justifyContent: 'center', mt: 2 }}>
            <ThemeProvider theme={theme}>
                <Button
                    size="large"
                    variant="contained"
                    color="cta"
                    sx={{
                        px: 6,
                        py: 1.5,
                        fontWeight: 'bold',
                        fontSize: 16,
                        borderRadius: 2,
                        '&:hover': { backgroundColor: COLORS.primaryNeutral },
                    }}
                    onClick={() => {
                        dispatch(addItemInQuantity(product));
                        alert("Items added to the cart");
                    }}
                >
                    Add to Cart
                </Button>
            </ThemeProvider>
        </CardActions>
    </Box>
</Box>

    );
}
