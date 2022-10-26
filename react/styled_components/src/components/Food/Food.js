import "./Food.scss";
// Wir können unsere Styles auch in eine CSS Datei auslagern und über import "./Components.css" zugänglich machen

export default function Food({ food }) {
  // Inline Styling beim React. Man muss mit Objekten arbeiten.
  //   const imgStyle = {
  //     width: 500, //oder in Anführungszeichen "500px"
  //     height: 300,
  //     objectFit: "cover",
  //   };

  const titleStyle = {
    fontSize: "1.3rem",
  };

  return (
    <div className="food-container">
      <img className="food-img" src={food.img} />
      <h3 className="higlighted-headline" style={titleStyle}>
        {food.name}
      </h3>
    </div>
  );
}
