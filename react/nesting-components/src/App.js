import Listing from "./Components/Listing";
import "./App.css";

const listings = [
  {
    name: "Beats Kopfhörer",
    price: 120,
    img: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/pdp/refresh2022/studio3-pdp-p02.png.large.2x.png",
    pickup: false,
    sold: false,
  },
  {
    name: "Macbook Pro",
    price: 1250,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_DE?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1654014007098",
    pickup: true,
    sold: true,
  },
  {
    name: "Samsung Monitor",
    price: 500,
    img: "https://images.samsung.com/is/image/samsung/p6pim/de/lu28r554uqrxzg/gallery/de-ur55-lu28r554uqrxzg-386426093?$650_519_PNG$",
    pickup: true,
    sold: false,
  },
];

function App() {
  const listingsComponents = listings.map((item, index) => {
    // if (item.sold) {
    //   return;
    // } // Wenn das Produkt verkauft ist, wird das Produkt nicht mehr gezeigt.
    return <Listing key={index} item={item} />;
  });

  return (
    <div className="App">
      <h1 className="title">Flowmarket</h1>
      <p className="title">Your Market</p>
      <div className="listings-container">{listingsComponents}</div>
    </div>
  );
}

export default App;
