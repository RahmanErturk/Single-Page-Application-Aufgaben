import { useState } from "react";

export default function BuyButton(props) {
  const [showField, setShowField] = useState(false);

  const buyClickHandler = (event) => {
    //console.log(event);

    setShowField(!showField);
  };

  const buyField = (
    <div>
      <input type="number" placeholder="Angebot eingeben"></input>
      <button>Abschicken</button>
    </div>
  );

  // const messageClickHandler = (/*event,*/ name) => {
  //   console.log(name);
  //   // console.log(event);
  // };
  // const messageField = (
  //   <div>
  //     <input type="text" placeholder="Schreibe Deine nachricht"></input>
  //     <button>Abschicken</button>
  //   </div>
  // );

  return (
    <>
      <button
        onClick={buyClickHandler /*.bind(this, props.sold)*/}
        disabled={props.sold}
      >
        {showField ? "Abbrechen" : "Kaufen"}
      </button>
      {showField ? buyField : null}
    </>
  );
}
