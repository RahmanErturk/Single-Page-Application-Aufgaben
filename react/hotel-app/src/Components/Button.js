import { useState, useEffect } from "react";

function Button({ roomNo, checkState }) {
  const [checkedIn, setCheckedIn] = useState(checkState);

  const checkBtnHandler = (event) => {
    setCheckedIn(!checkedIn);

    console.log(checkedIn);
  };

  useEffect(() => {
    if (checkedIn) {
      alert(`Zimmer Nr. ${roomNo} ist nun belegt.`);
    }
  }, [checkedIn]);

  return <button onClick={checkBtnHandler}>Check In</button>;
}

export default Button;
