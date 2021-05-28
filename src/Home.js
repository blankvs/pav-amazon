import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "./firebase";
// import ItemsCarousel from "react-items-carousel";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Home() {
  const [products, setProducts] = useState([]);
  const [producto, setProducto] = useState([]);
  const [productx, setProductx] = useState([]);
  // const [product1, setProduct1] = useState([]);
  // const [product2, setProduct2] = useState([]);


  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProducts(tempProducts);
    });
  };

  const getProducto = () => {
    db.collection("producto").onSnapshot((snapshot) => {
      let tempProducto = [];

      tempProducto = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProducto(tempProducto);
    });
  };

  const getProductx = () => {
    db.collection("productx").onSnapshot((snapshot) => {
      let tempProductx = [];

      tempProductx = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProductx(tempProductx);
    });
  };

  // const getProduct1 = () => {
  //   db.collection("product1").onSnapshot((snapshot) => {
  //     let tempProduct1 = [];

  //     tempProduct1 = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       product: doc.data(),
  //     }));
  //     setProduct1(tempProduct1);
  //   });
  // };

  // const getProduct2 = () => {
  //   db.collection("product2").onSnapshot((snapshot) => {
  //     let tempProduct2 = [];

  //     tempProduct2 = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       product: doc.data(),
  //     }));
  //     setProduct2(tempProduct2);
  //   });
  // };

  useEffect(() => {
    console.log("Call products");
    getProducts();
    getProducto();
    getProductx();
    // getProduct1();
    // getProduct2();

  }, []);

  return (
    <Container>
      <Banner></Banner>
      <ContentDisplayOne>
        {products.map((data) => (
          <Product
            title={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            image={data.product.image}
            id={data.id}
          />
        ))}
      </ContentDisplayOne>
      <ContentDisplayTwo>
        {producto.map((data) => (
          <Product
            title={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            image={data.product.image}
            id={data.id}
          />
        ))}
      </ContentDisplayTwo>
      <ContentDisplayThree>
        {productx.map((data) => (
          <Product
            title={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            image={data.product.image}
            id={data.id}
          />
        ))}
      </ContentDisplayThree>
      {/* <CarouselTitle>Summer Essentials</CarouselTitle>
      <CarouselContainer>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={0}
          leftChevron={
            <CarouselButtonLeft>
              <ArrowBackIosIcon />
            </CarouselButtonLeft>
          }
          rightChevron={
            <CarouselButtonRight>
              <ArrowForwardIosIcon />
            </CarouselButtonRight>
          }
        >
          <ItemCarousel>
            {product1.map((data) => (
              <Product
                title={data.product.name}
                price={data.product.price}
                rating={data.product.rating}
                image={data.product.image}
                id={data.id}
              />
            ))}
          </ItemCarousel>
          <ItemCarousel>
            {product2.map((data) => (
              <Product
                title={data.product.name}
                price={data.product.price}
                rating={data.product.rating}
                image={data.product.image}
                id={data.id}
              />
            ))}
          </ItemCarousel>
          <ItemCarousel>
            {productx.map((data) => (
              <Product
                title={data.product.name}
                price={data.product.price}
                rating={data.product.rating}
                image={data.product.image}
                id={data.id}
              />
            ))}
          </ItemCarousel>
          <ItemCarousel>
            {productx.map((data) => (
              <Product
                title={data.product.name}
                price={data.product.price}
                rating={data.product.rating}
                image={data.product.image}
                id={data.id}
              />
            ))}
          </ItemCarousel>
          <ItemCarousel>
            {productx.map((data) => (
              <Product
                title={data.product.name}
                price={data.product.price}
                rating={data.product.rating}
                image={data.product.image}
                id={data.id}
              />
            ))}
          </ItemCarousel>
          <ItemCarousel>
            {productx.map((data) => (
              <Product
                title={data.product.name}
                price={data.product.price}
                rating={data.product.rating}
                image={data.product.image}
                id={data.id}
              />
            ))}
          </ItemCarousel>
          <ItemCarousel>
            {productx.map((data) => (
              <Product
                title={data.product.name}
                price={data.product.price}
                rating={data.product.rating}
                image={data.product.image}
                id={data.id}
              />
            ))}
          </ItemCarousel>
          <ItemCarousel>
            {productx.map((data) => (
              <Product
                title={data.product.name}
                price={data.product.price}
                rating={data.product.rating}
                image={data.product.image}
                id={data.id}
              />
            ))}
          </ItemCarousel>
        </ItemsCarousel>
      </CarouselContainer> */}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const ContentDisplayOne = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
  display: flex;
`;

const ContentDisplayTwo = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
`;

const ContentDisplayThree = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
`;

// const CarouselTitle = styled.h2``;

// const CarouselContainer = styled.div`
//   background-color: white;
//   z-index: 1;
//   flex: 1;
//   max-height: 400px;
//   display: flex;
//   flex-direction: column;
//   margin: 10px;
//   /* max-width: 1500px; */
//   margin-right: 20px;
//   margin-left: 20px;

// `;

// const ItemCarousel = styled.div`
//   background-color: white;
//   /* height: 385px; */
//   /* margin: 10px; */
//   display: flex;
//   /* margin-right: -10px; */
// `;

// const CarouselButtonLeft = styled.button`
//   height: 100px;
//   width: 50px;
//   border-radius: 0 3px 3px 0;
//   background-color: transparent;
//   border: none;
//   :hover {
//     background-color: white;
//     box-shadow: -1px 0px 4px 0px rgba(0, 0, 0, 0.1);
//   }
//   :focus {
//     box-shadow: 0 0 0 3px #007185;
//   }
// `;

// const CarouselButtonRight = styled.button`
//   height: 100px;
//   width: 50px;
//   border-radius: 3px 0 0 3px;
//   background-color: transparent;
//   border: none;
//   :hover {
//     background-color: white;
//     box-shadow: -1px 0px 4px 0px rgba(0, 0, 0, 0.1);
//   }
//   :focus-within {
//     padding: 5px;
//     box-shadow: 0 0 0 3px #007185;
//   }
// `;
