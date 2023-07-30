// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button,Typography, Container, Stack, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem} from './Redux/cartSlice.js'
import { useDispatch } from 'react-redux'
import {  useNavigate } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart)

const navigate = useNavigate()

  const totalAmount = cartItems.reduce((total, ele) => {
    return total + ele.attributes.price * ele.quantity;
  }, 0);

  return (
    <Container my={5}>
      <Helmet>
    <title>cart</title>
</Helmet>
       {cartItems?.length === 0 ? (
      <div style={{textAlign:'center'}}>
          <Typography variant="h3"  my={5}color="initial">
          Cart is empty
        </Typography>
<Button variant="contained" onClick={()=>{navigate('/')}} > Go shoppping  </Button>
      
      </div>
      ) : (
        <>


        
          <Typography variant="h3" color="initial">
            Cart  
          </Typography>
          <Stack display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Typography variant="h5" my={3} textAlign={'center'}> Cart total price is {totalAmount} egp</Typography>
          <Button variant="contained" > procced to checkout</Button>
          </Stack >

          <Stack
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
             {cartItems?.map((ele, index) => (
              <Grid
                container
                spacing={2}
                my={5}
                textAlign={"center"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                key={index}
              >
                <Grid item xs={2}>
                  <img
                    src={ele?.attributes?.images?.data[0].attributes.url}
                    style={{ width: "50%", borderRadius: "5px" }}
                    alt=""
                  />
                </Grid>
                <Grid item xs={3}>
                  {ele?.attributes?.productTitle}
                </Grid>
                <Grid item xs={2}>
                  {ele?.attributes?.price * ele?.quantity} EGP
                 </Grid>
                <Grid item xs={1}>
                  <IconButton
                    size="small"
                    color="error"


                    onClick={() => dispatch(decrementQuantity(ele.id))}
                  >
                    <RemoveCircleOutlineIcon fontSize="large" />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  {ele?.quantity}
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    variant="contained"
                    color="primary"
                    onClick={() => {dispatch(incrementQuantity(ele.id))}}
                  >
                    <AddCircleOutlineIcon fontSize="large" />
                  </IconButton>
                </Grid>
                <Grid item xs={1}>
                  <IconButton color="error"   onClick={() => dispatch(removeItem(ele.id))}>
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </Grid>
              </Grid>
            ))} 
          </Stack>
        </> 
       )} 
    </Container> 
  );
}
