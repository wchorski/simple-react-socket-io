import { useEffect, useRef } from "react";
import "./App.css";

import { io } from "socket.io-client";

function App() {
  // const socket = useRef();

  const ws = new WebSocket("ws://localhost:9013")

  ws.addEventListener("open", e => {
    console.log("websocket connected")
  })

  // useEffect(() => {
  //   socket.current = io("ws://localhost:9013");

  //   socket.current.on("connection", () => {
  //     console.log("connected to server");
  //   });
  // }, []);

  // const emitTimeMessage = () => {
  //   socket.current.emit("message", new Date().getTime());
  // };

  // const createjson = () => {
  //   ws.send(JSON.stringify({
  //     x: 254,
  //     y: 100
  //   }))
  // };

  const whatsyourfunction = () => {
    console.log('herro');
  }

  return (
    <div className="App">
      <p>Socket.io app</p>
      <h1>HELO FREN</h1>

      <button type="button" onClick={whatsyourfunction}>
        herro?
      </button> 

      {/* <button type="button" onClick={emitTimeMessage}>
        Emit a time message
      </button> */}
      {/* <button type="button" onClick={createjson}>
        make sup2.json
      </button> */}
    </div>
  );
}

export default App;
