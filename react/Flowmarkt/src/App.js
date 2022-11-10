import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Home from "./Views/Home";
import Product from "./Views/Product";
import Impressum from "./Views/Impressum";
import Datenschutz from "./Views/Datenschutz";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import data from "./data";

const initState = {
  productsInBasket: [],
  selectedProduct: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addToBasket":
      const itemIndex = state.productsInBasket.indexOf(action.payload);

      if (itemIndex < 0) {
        state = {
          ...state,
          productsInBasket: [...state.productsInBasket, action.payload],
        };
      } else {
        state = {
          ...state,
          productsInBasket: state.productsInBasket.filter(
            (el) => el != action.payload
          ),
        };
      }
      break;
    case "selectProduct":
      console.log(action.payload);
      state = {
        ...state,
        selectedProduct: data.find((d) => d.id === +action.payload),
      };
      break;
    default:
      console.warn("unknown action");
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App">
      <Router>
        <Header countProducts={state.productsInBasket.length} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                productsInBasket={state.productsInBasket}
                products={data}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path="/:product_id"
            element={
              <Product
                productsInBasket={state.productsInBasket}
                product={state.selectedProduct}
                dispatch={dispatch}
              />
            }
          />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschut" element={<Datenschutz />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
