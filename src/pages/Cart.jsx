import { useSelector, useDispatch } from 'react-redux';
import {  removeItem,  increaseQuantity, decreaseQuantity, clearCart } from '../Store/Slices/CartDetails' ;
import {
    Container,
    Typography,
    Box,
    Card,
    CardMedia,
    IconButton,
    Button,
    Divider,
    Grid,
    Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router"



export default function Cart (){
    const dispatch = useDispatch();
    const { product, totalQuantity, totalPrice } = useSelector((state) => state.CartDetails);

    
        const handleIncreaseQuantity = (productId) => {
            dispatch(increaseQuantity( productId ));
        };
    
        const handleDecreaseQuantity = (productId) => {
            dispatch(decreaseQuantity(productId));
        };
    
        const handleRemoveItem = (productId) => {
            dispatch(removeItem(productId));
        };
    
        const handleClearCart = () => {
            dispatch(clearCart());
        };

    if (product.length === 0) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 6,
                        textAlign: 'center',
                        backgroundColor: '#f9f9f9',
                        borderRadius: 3
                    }}
                >
                    <ShoppingCartIcon
                        sx={{
                            fontSize: 80,
                            color: '#ccc',
                            mb: 2
                        }}
                    />
                    <Typography variant="h4" sx={{ mb: 2, color: '#666' }}>
                        Your Cart is Empty
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#999', mb: 3 }}>
                        Add some products to your cart to see them here.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#019376',
                            '&:hover': { backgroundColor: '#017a63' },
                            px: 4,
                            py: 1.5
                        }}
                        href="/"
                    >
                        Continue Shopping
                    </Button>
                </Paper>
            </Container>
        );
    }
     
    
    return (
         <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography
                variant="h3"
                sx={{
                    mb: 4,
                    fontWeight: 'bold',
                    color: '#333',
                    textAlign: 'center'
                }}
            >
                Shopping Cart
            </Typography>

            <Grid container spacing={4}>
                {/* Cart product */}
                <Grid item xs={12} md={8}>
                    <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignitems: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            Cart product ({totalQuantity})
                        </Typography>
                        <Button
                            variant="outlined"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={handleClearCart}
                            sx={{ textTransform: 'none' }}
                        >
                            Clear Cart
                        </Button>
                    </Box>

                    {product.map((item) => (
                        <Card
                            key={item.productId}
                            sx={{
                                mb: 2,
                                p: 2,
                                borderRadius: 2,
                                boxShadow: 2,
                                '&:hover': { boxShadow: 4 }
                            }}
                        >
                            <Box sx={{ display: 'flex', alignproduct: 'center', gap: 3 }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 2,
                                        objectFit: 'cover'
                                    }}
                                    image={item.image}
                                    alt={item.title}
                                />

                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                                        {item.category == 'vegetables'? '1Kg': '1Pc'}
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: '#019376', fontWeight: 'bold' }}>
                                        Rs.{item.price}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
                                    <IconButton
                                        onClick={() => handleDecreaseQuantity(item.productId)}
                                        sx={{
                                            backgroundColor: '#019376',
                                            color: 'white',
                                            '&:hover': { backgroundColor: '#017a63' },
                                            width: 36,
                                            height: 36
                                        }}
                                    >
                                        <RemoveIcon />
                                    </IconButton>

                                    <Typography
                                        sx={{
                                            minWidth: 40,
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            fontSize: 18,
                                            border: '1px solid #019376',
                                            px: 2,
                                            py: 1,
                                            borderRadius: 1
                                        }}
                                    >
                                        {item.quantity}
                                    </Typography>

                                    <IconButton
                                        onClick={() => handleIncreaseQuantity(item.productId)}
                                        sx={{
                                            backgroundColor: '#019376',
                                            color: 'white',
                                            '&:hover': { backgroundColor: '#017a63' },
                                            width: 36,
                                            height: 36
                                        }}
                                    >
                                        <AddIcon />
                                    </IconButton>

                                    <IconButton
                                        onClick={() => handleRemoveItem(item.productId)}
                                        sx={{
                                            color: '#d32f2f',
                                            '&:hover': { backgroundColor: '#ffebee' },
                                            ml: 2
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Card>
                    ))}
                </Grid>

                {/* Order Summary */}
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            position: 'sticky',
                            top: 20
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Order Summary
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body1">
                                    product ({totalQuantity})
                                </Typography>
                                <Typography variant="body1">
                                    Rs.{totalPrice.toFixed(2)}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body1">
                                    Shipping
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#019376' }}>
                                    Free
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body1">
                                    Tax
                                </Typography>
                                <Typography variant="body1">
                                    Rs.{(totalPrice * 0.15).toFixed(2)}
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Total
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#019376' }}>
                                Rs.{(totalPrice + totalPrice * 0.15).toFixed(2)}
                            </Typography>
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: '#019376',
                                color: 'white',
                                py: 2,
                                fontSize: 16,
                                fontWeight: 'bold',
                                textTransform: 'none',
                                '&:hover': { backgroundColor: '#017a63' },
                                mb: 2
                            }}
                            onClick={()=>alert('WILL BE ADDED SOON')}
                        >
                            Proceed to Checkout
                        </Button>
                    <Link to='/'>
                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{
                                borderColor: '#019376',
                                color: '#019376',
                                py: 1.5,
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#f0f9f7',
                                    borderColor: '#019376'
                                }
                            }}
                        >
                            Continue Shopping
                        </Button>
                    </Link>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}