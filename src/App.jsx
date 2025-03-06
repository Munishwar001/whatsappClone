import { useState , useContext , createContext, useEffect } from 'react'
import Nav from './assets/components/nav/navbar'
import app from './App.module.css'
import ChatStructure from './assets/components/chatColumn/chatstructure'
import ChatWindowStructure from './assets/components/chatBox/chatWindowStructure'
import { useNavigate } from 'react-router-dom'
import {io} from "socket.io-client"
const ActivePageContext = createContext();

function App() {
  const [loggedUserdata , setLoggedUserdata] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [active, setActive] = useState("chats");
  console.log(active);
   useEffect(() => {
     const fetchUserData = async () => {
       try {
         const response = await fetch("http://localhost:8000/loggedUserData", {
           method: "GET",
           credentials: "include",
         });

         const data = await response.json();
         if (response.ok) {
           setLoggedUserdata(data); 
         } else {
           console.log("Request failed");
         }
       } catch (error) {
         console.error("Error fetching user data:", error);
       }
     };

     fetchUserData(); 
   }, []);
  return (
    <div className={app.container}>
      <ActivePageContext.Provider value={setActive}>
        <Nav loggedUserdata={loggedUserdata} />
      </ActivePageContext.Provider>
      <div className={app.components}>
        <ChatStructure
          setSelectedChat={setSelectedChat}
          activePage={active}
          loggedUserdata={loggedUserdata}
        />
      </div>
      <div className={app.chatWindowStruct}>
        <ChatWindowStructure
          selectedChat={selectedChat}
          loggedUserdata={loggedUserdata}
        />
      </div>
    </div>
  );
}

export default App ;
export { ActivePageContext };

