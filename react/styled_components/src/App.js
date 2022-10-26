import Food from "./components/Food/Food";
import Header from "./components/Food/Header/Header";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.scss";

const favoriteFood = [
  {
    name: "Spaghetti Bolognese",
    img: "https://images.eatsmarter.de/sites/default/files/styles/max_size/public/spaghetti-bolognese-original-59303.jpg",
  },
  {
    name: "Hallaca",
    img: "https://www.goya.com/media/7874/hallacas.jpg?quality=80",
  },
  {
    name: "Ghormeh Sabzi",
    img: "https://cdn.gutekueche.de/upload/rezept/11616/ghormeh-sabzi.jpg",
  },
  {
    name: "Manti",
    img: "https://image.brigitte.de/13160498/t/yA/v2/w1440/r1/-/tuerkische-manti.jpg",
  },
];

const foodContainer = favoriteFood.map((el, index) => {
  return (
    <Col key={index}>
      <Food food={el} />
    </Col>
  );
});

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <h1>Unsere Lieblingsessen</h1>
        <div className="d-grid gap-2">
          <Button variant="outline-primary" size="lg">
            Filtern
          </Button>
        </div>
        <Row>{foodContainer}</Row>
      </Container>
    </div>
  );
}

export default App;
