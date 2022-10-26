import RoomDatas from "./rooms.json";
import Button from "./Button";
import "./Room.css";
import { useState, useEffect } from "react";

RoomDatas.sort((a, b) => +a.roomNo - +b.roomNo);

const roomInfos = RoomDatas.map((room, i) => {
  function checkDate(date) {
    const checkDateInfo = room[date];
    const [year, month, day] = checkDateInfo.split("-");
    const result = [day, month, year].join(".");

    return result;
  }

  return (
    <div className="Room" key={i}>
      <h4 className="Room__No" style={{ textDecoration: "underline" }}>
        Room No: <strong>{room.roomNo}</strong>
      </h4>
      <p className="Room__Guest">
        Guest: {room.guest.firstName} {room.guest.lastName}
      </p>
      <p className="Room__CheckIn">Check-In Date: {checkDate("checkIn")}</p>
      <p className="Room__CheckOut">Check-Out Date: {checkDate("checkOut")}</p>
      {/* <p className="Room__CheckOut">Checkedin: {`${room.checkedIn}`}</p> */}
      <br />
      <Button roomNo={room.roomNo} checkState={room.checkedIn} />
    </div>
  );
});
function Room() {
  const [state, setState] = useState("");

  return (
    <main>
      <div className="mainContainer">{roomInfos}</div>
    </main>
  );
}

export default Room;
