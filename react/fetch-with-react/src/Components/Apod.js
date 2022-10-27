import React from "react";
import { useState, useEffect } from "react";

export default function Apod({ date }) {
  const [picture, setPicture] = useState("");

  useEffect(() => {
    const apiKey = "EoYtedjwbk4WhsYN09QEBFsaffFSX9iMi6j45gP3";
    // const getPic = async () => {
    //   const response = await fetch(
    //     `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    //   );
    //   const result = await response.json();

    //   setPicture(result);
    // };
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
      .then((res) => res.json())
      .then((json) => {
        setPicture(json);
      });
  }, [date]);

  return (
    <>
      <img src={picture.hdurl} />
      <h3>{picture.title}</h3>
      <p>{picture.explanation}</p>
    </>
  );
}
