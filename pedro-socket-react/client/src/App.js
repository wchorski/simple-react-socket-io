import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3001")


function App() {

  const [allData, setallData] = useState('')
  const [allDataRecieved, setallDataRecieved] = useState('')

  let formJSON = {
    name: "name2...",
    message: "message2...",
    color: "color2..."
  }


  //? FUNCTIONS ################################
  const sendMessage = (e) => {
    e.preventDefault();

    // socket.emit('client_allData', formJSON)
    setallData(formJSON)
    socket.emit('client_allData', formJSON)
  }

  //? ################################  


  useEffect(() => {

    socket.on('server_allData', (fJsn) => {
      // console.log(data.message.formJSON.name)
      // console.log('-- client: useEffect - server_allData -- ' + fJsn.name)

      // setallDataRecieved(fJsn)
      console.log('server_allData: TRIGGERED');
      fetch('http://localhost:3001/api/media1')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data);
      })
    })
  }, [socket])

  // var formSerialized = document.getElementById('TheForm').serialize()

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <form onSubmit={sendMessage} id="TheForm">
          
          <input 
            placeholder="name..."
            onChange={(event) => {
              formJSON.name = event.target.value
              // setallData(event.target.value)
            }}
          />
          <input 
            placeholder="message..."
            onChange={(event) => {
              formJSON.message = event.target.value
            }}
          />
          <input 
            placeholder="color..."
            onChange={(event) => {
              formJSON.color = event.target.value
            }}
          />

          <button type='submit'> SEND ME AWAY </button>
         {/* <button onClick={sendMessage}>Send Message btn</button> */}
        </form>


        <ul>
          <li>name: {formJSON.name}</li>
        </ul>

        <h3> ---- form ---- </h3>
        <p>allData: {allDataRecieved}</p>
        <p>allData.name: {allDataRecieved.name}</p>
        <p>allData.message: {allDataRecieved.message}</p>
        <p>allData.color: {allDataRecieved.color}</p>
      </header>
    </div>
  );
}

export default App;
