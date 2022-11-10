import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./Ad.css";

import data from "../data";

function Ad({ dispatch, product, inBasket }) {
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "addToBasket", payload: product.id });
  };
  return (
    <Link
      style={{ textDecoration: "none", color: "unset" }}
      to={`/${product.id}`}
    >
      <Card className="mb-4 ad" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {product.category}
          </Card.Subtitle>
          <Card.Text>{product.price}</Card.Text>
          <Button onClick={clickHandler} variant="primary">
            {inBasket ? "Aus Warenkorb entfernen" : "Zu Warenkorb hinzufügen"}
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Ad;
