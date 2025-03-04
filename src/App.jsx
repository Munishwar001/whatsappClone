import { useState , useContext , createContext, useEffect } from 'react'
import Nav from './assets/components/nav/navbar'
import app from './App.module.css'
import ChatStructure from './assets/components/chatColumn/chatstructure'
import ChatWindowStructure from './assets/components/chatBox/chatWindowStructure'
import { useNavigate } from 'react-router-dom'
import {io} from "socket.io-client"
const ActivePageContext = createContext();

function App() {

  const [selectedChat, setSelectedChat] = useState(null);
  const [active, setActive] = useState("chats");
  console.log(active);
  
  return (
    <div className={app.container}>
      <ActivePageContext.Provider value={setActive}>
        <Nav />
      </ActivePageContext.Provider>
      <div className={app.components}>
        <ChatStructure setSelectedChat={setSelectedChat} activePage={active} />
      </div>
      <div className={app.chatWindowStruct}>
        <ChatWindowStructure selectedChat={selectedChat} />
      </div>
    </div>
  )
}

export default App ;
export { ActivePageContext };

