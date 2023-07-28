import React from "react";
import {
  Typography,
  Container,
  Stack,
  Grid,
  IconButton,
} from "@mui/material";
import { useCart } from "../CustomHooks/useCart.js";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <Container my={5} >
      {cartItems.length === 0 ? (
        <Typography variant="h3" color="initial">
          Cart is empty
        </Typography>
      ) : (
        <>
          <Typography variant="h3" color="initial">
            Cart
          </Typography>

          <Stack display={"flex"} alignItems={"center"} justifyContent={"center"}>
            {cartItems.map((ele, index) => (
              <Grid
                container
                spacing={2}
                my={5}
                textAlign={"center"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                key={index} // Don't forget to add a unique key when mapping elements
              >
                <Grid item xs={2}>
                  <img
                    src={ele.attributes.images.data[0]}
                    style={{ width: "50%", borderRadius: "5px" }}
                    alt=""
                  />
                </Grid>
                <Grid item xs={3}>
                  {ele.attributes.productTitle}
                </Grid>
                <Grid item xs={2}>
                  {ele.attributes.price}*{ele.attributes.count}
                </Grid>
                <Grid item xs={1}>
                  <IconButton size="small" color="error">
                    <RemoveCircleOutlineIcon fontSize="large" />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  {ele.attributes.count}
                </Grid>
                <Grid item xs={1}>
                  <IconButton variant="contained" color="primary">
                    <AddCircleOutlineIcon fontSize="large" />
                  </IconButton>
                </Grid>
                <Grid item xs={1}>
                  <IconButton color="error">
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
