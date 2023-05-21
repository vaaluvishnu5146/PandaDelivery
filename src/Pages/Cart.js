import { Box, Typography } from "@mui/material";
import React from "react";
import Appbar from "../Components/AppBar/Appbar";
import IconCta from "../Atoms/Buttons/IconCta";
import ICONS from "../Assets/Images/Icons";
import { useNavigate } from "react-router-dom";
import IMAGES from "../Assets/Images";
import BadgeC from "../Components/Badge/BadgeC";
import CartCard from "../Components/Cards/CartCard";
import { useSelector } from "react-redux";

export default function Cart() {
  const navigate = useNavigate();
  const { cart = [] } = useSelector((state) => state.cartReducer);
  return (
    <Box className="cartPage">
      <Appbar
        startEnhancer={
          <IconCta Icon={ICONS.ArrowBack} onClick={() => navigate(-1)} />
        }
      />
      <Box className="cartPageContainer scrollable">
        {cart &&
          cart.map((d, i) => <CartCard key={`cart-item-${i}`} data={d} />)}
      </Box>
      <Box className="cartPageActions">
        <Box className="cartTotal">
          <Typography variant="caption" color={"#FFFFFF"}>
            Total Price
          </Typography>
          <Typography variant="h4" color={"#FFFFFF"}>
            $200
          </Typography>
        </Box>
        <Box className="checkout"></Box>
      </Box>
    </Box>
  );
}
