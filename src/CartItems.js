import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem.js";

function CartItems({ cartItems }) {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        <ItemsContainer>
          {cartItems.map((item) => (
            <CartItem id={item.id} item={item.product} />
          ))}
        </ItemsContainer>
      </ItemsContainer>
    </Container>
  );
}

export default CartItems;

const Container = styled.div`
  /* height: 300px; */
  flex: 0.8;
  padding: 20px;
  margin-right: 18px;
  background-color: white;
`;

const Title = styled.h1`
  margin-bottom: 8px;
`;

const ItemsContainer = styled.div``;
