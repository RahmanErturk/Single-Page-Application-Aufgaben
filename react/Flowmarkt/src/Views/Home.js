import React from "react";

import Ad from "../Components/Ad";
import data from "../data";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home({ products, dispatch, productsInBasket }) {
  return (
    <>
      <Container>
        <Row>
          <h1>Home</h1>
          {products.map((product, index) => (
            <Col key={index}>
              <Ad
                inBasket={productsInBasket.includes(product.id)}
                dispatch={dispatch}
                product={product}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
