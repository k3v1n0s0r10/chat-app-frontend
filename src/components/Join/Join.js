import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Join.css";

export default function SignIn() {
  const [roomData, setRoomData] = useState({
    name: "",
    room: "",
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/chat?name=${roomData.name}&room=${roomData.room}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRoomData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  return (
    <div className="joinOuterContainer">
      <form onSubmit={handleSubmit} className="joinInnerContainer">
        <h1 className="heading">Ingresa</h1>
        <div>
          <input
            name="name"
            placeholder="Nombre"
            className="joinInput"
            type="text"
            onChange={handleInputChange}
            value={roomData.name}
            required
          />
        </div>
        <div>
          <input
            name="room"
            placeholder="Sala"
            className="joinInput mt-20"
            type="text"
            onChange={handleInputChange}
            value={roomData.room}
            required
          />
        </div>
        <button className={"button mt-20"} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
