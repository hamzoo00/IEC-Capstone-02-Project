import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity, clearCart } from '../Store/Slices/CartDetails';
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
import { Link } from "react-router";






export default function Cart() {
  const dispatch = useDispatch();
  const { product, totalQuantity, totalPrice } = useSelector((state) => state.CartDetails);

  const COLORS = {
    primary: '#FF6B35',
    secondary: '#735343',
    accent: '#2F4F3F',
    background: '#FBF7F3',
    inputBorder: '#CFC6C1',
    text: '#1E1E1E',
    muted: '#CFC6C1',
    error: '#D14343'
  };

  const handleIncreaseQuantity = (productId) => dispatch(increaseQuantity(productId));
  const handleDecreaseQuantity = (productId) => dispatch(decreaseQuantity(productId));
  const handleRemoveItem = (productId) => dispatch(removeItem(productId));
  const handleClearCart = () => dispatch(clearCart());

  if (product.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: 6,
            textAlign: 'center',
            backgroundColor: COLORS.background,
            borderRadius: 3
          }}
        >
          <ShoppingCartIcon
            sx={{ fontSize: 80, color: COLORS.muted, mb: 2 }}
          />
          <Typography variant="h4" sx={{ mb: 2, color: COLORS.muted }}>
            Your Cart is Empty
          </Typography>
          <Typography variant="body1" sx={{ color: COLORS.muted, mb: 3 }}>
            Add some products to your cart to see them here.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: COLORS.accent,
              '&:hover': { backgroundColor: COLORS.secondary },
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
    
    <Container maxWidth="lg" sx={{ py: 4, backgroundColor: COLORS.background }}>
      <Typography
        variant="h3"
        sx={{ mb: 4, fontWeight: 'bold', color: COLORS.text, textAlign: 'center' }}
      >
        Shopping Cart
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: COLORS.text }}>
              Cart product ({totalQuantity})
            </Typography>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', borderColor: COLORS.error, color: COLORS.error }}
              startIcon={<DeleteIcon />}
              onClick={handleClearCart}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ffe6e6'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
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
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row', 
                  alignItems: 'center',
                  gap: 3
                }}
              >
               
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
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: COLORS.text }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: COLORS.muted, mb: 1 }}>
                    {item.category === 'vegetables' ? '1Kg' : '1Pc'}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: COLORS.accent }}>
                    Rs.{item.price}
                  </Typography>
              
                  
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: {xs:0.5, sm:2},
                      mt: 1,
                      flexDirection: { xs: 'row', sm: 'col' }, 
                      justifyContent: { xs: 'flex-start', sm: 'flex-end' } 
                    }}
                  >
                    <IconButton
                      onClick={() => handleDecreaseQuantity(item.productId)}
                      sx={{ backgroundColor: COLORS.accent, color: '#fff', width: 36, height: 36, '&:hover': { backgroundColor: COLORS.secondary } }}
                    >
                      <RemoveIcon />
                    </IconButton>
              
                    <Typography
                      sx={{
                        minWidth: 40,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 18,
                        border: `1px solid ${COLORS.accent}`,
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        color: COLORS.text
                      }}
                    >
                      {item.quantity}
                    </Typography>
              
                    <IconButton
                      onClick={() => handleIncreaseQuantity(item.productId)}
                      sx={{ backgroundColor: COLORS.accent, color: '#fff', width: 36, height: 36, '&:hover': { backgroundColor: COLORS.secondary } }}
                    >
                      <AddIcon />
                    </IconButton>
              
                    <IconButton
                      onClick={() => handleRemoveItem(item.productId)}
                      sx={{ color: COLORS.error, ml: 2, '&:hover': { backgroundColor: '#ffe6e6' } }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>


            </Card>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{ p: 3, borderRadius: 2, position: 'sticky', top: 20 }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: COLORS.text }}>
              Order Summary
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1" sx={{ color: COLORS.text }}>product ({totalQuantity})</Typography>
                <Typography variant="body1" sx={{ color: COLORS.text }}>Rs.{totalPrice.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1" sx={{ color: COLORS.text }}>Shipping</Typography>
                <Typography variant="body1" sx={{ color: COLORS.accent }}>Free</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1" sx={{ color: COLORS.text }}>Tax</Typography>
                <Typography variant="body1" sx={{ color: COLORS.text }}>Rs.{(totalPrice * 0.15).toFixed(2)}</Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: COLORS.text }}>Total</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: COLORS.accent }}>
                Rs.{(totalPrice + totalPrice * 0.15).toFixed(2)}
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: COLORS.accent,
                color: '#fff',
                py: 2,
                fontSize: 16,
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': { backgroundColor: COLORS.secondary },
                mb: 2
              }}
              onClick={() => alert('WILL BE ADDED SOON')}
            >
              Proceed to Checkout
            </Button>

            <Link to='/'>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: COLORS.accent,
                  color: COLORS.accent,
                  py: 1.5,
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#f9f7f3', borderColor: COLORS.accent }
                }}
              >
                Continue Shopping
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
