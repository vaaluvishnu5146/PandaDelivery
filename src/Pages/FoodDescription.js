import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Appbar from "../Components/AppBar/Appbar";
import IconCta from "../Atoms/Buttons/IconCta";
import ICONS from "../Assets/Images/Icons";
import IMAGES from "../Assets/Images";
import BadgeC from "../Components/Badge/BadgeC";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/Reducers/Cart.reducer";

export default function FoodDescription() {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const { id = null } = useParams();
  const { foods = [] } = useSelector((state) => state.foodReducer);

  useEffect(() => {
    if (id) {
      const result = foods.find((food) => food.id === id);
      if (result && result.id) {
        setSelectedFoodItem(result);
      }
    }
  }, [null]);

  function handleAddCart(e) {
    if (e) {
      dispatcher(addItemToCart(selectedFoodItem));
    }
  }

  return (
    <Box className="productDetailsPage">
      <Appbar
        startEnhancer={
          <IconCta Icon={ICONS.ArrowBack} onClick={() => navigate(-1)} />
        }
        endEnhancer={
          <IconCta Icon={ICONS.cart} onClick={() => navigate("/cart")} />
        }
      />
      <Box className="productDetailsContainer">
        <img
          className="productImage"
          src={selectedFoodItem?.logo}
          alt={selectedFoodItem?.name}
        />
        <Typography className="productName" variant="h5">
          {selectedFoodItem?.name}
        </Typography>
        <Typography className="productSlogan" variant="subtitle1">
          {selectedFoodItem?.description}
        </Typography>
        <BadgeC
          label={`$${selectedFoodItem?.price}`}
          sx={{
            width: "auto",
            background: "#FEDD4D",
          }}
        />
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            display: "flex",
          }}
        >
          <Button
            sx={{
              width: "100%",
              height: "60px",
              background: "#c95121",
              color: "#000000",
            }}
          >
            Add To Wishlist
          </Button>
          <Button
            sx={{
              width: "100%",
              height: "60px",
              background: "#FEDD4D",
              color: "#000000",
            }}
            onClick={handleAddCart}
          >
            Add To Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
// <Box className="productActions">// </Box>
