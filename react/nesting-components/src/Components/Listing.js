import "./Listing.css";
import BuyButton from "./BuyButton";

function Listing({ item }) {
  //   if (item.sold) {
  //     return;
  //   } // Wenn das Produkt verkauft ist, wird das Produkt nicht mehr gezeigt.
  let classes = "listing";
  if (item.sold) {
    classes += " sold";
  }
  return (
    <div className={classes}>
      <img src={item.img}></img>
      <h3>{item.name}</h3>
      <p>Price: {item.price}€</p>
      <p>Versand: {item.pickup ? "Abholen" : "Möglich"}</p>
      {/* {item.sold ? <p>In 20 Tagen wieder Verfügbar</p> : <BuyButton />} */}
      <BuyButton sold={item.sold} />
    </div>
  );
}

export default Listing;
