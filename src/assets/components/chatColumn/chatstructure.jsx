import styles from './chatstructure.module.css';
import Header from './chatComponents/header';
import Chat from './chatComponents/chat'; 
import Nav from '../nav/navbar'; 
import Status from '../status/status';
import Profile from '../profile/profile';
import Channel from '../channels/channel';
import Communities from '../communities/communities';
import SettingsPage from '../setting/setting'; 
import { useEffect } from 'react';
import { useState, useContext, createContext } from 'react'; 
 import Socket from '../socket';
 function ChatStructure(prop) {
   
    const [searchItem, setSearchItem] = useState("");
    const [chats, setChats] = useState([]);
    const [loggedUser , setLoggedUser]= useState("");
    const [loggedUserdata , setLoggedUserdata]= useState("");
    const [onlineUser , setOnlineUser] = useState([])
    // Fetch chats from server
    useEffect(() => {
   const fetchChats = async () => {
      try {
         const response = await fetch("http://localhost:8000/chats", {
            method: "GET",
            credentials: "include", 
            headers: { "Content-Type": "application/json" }
         });

         if (!response.ok) throw new Error("Failed to fetch chats");

         const data = await response.json();
         setChats(data.chats);
         setLoggedUser(data.loggedUser.id);
         setLoggedUserdata(data.loggedUser);

         // Emit event AFTER the state updates
         if (data.loggedUser.id) {
            Socket.emit("register", data.loggedUser.id); 
            console.log("LoggedUserId:", data.loggedUser.id); 
         }
              Socket.on("online",(onlineUser)=>{
                  setOnlineUser(onlineUser);
                 })
      } catch (error) {
         console.error("Error fetching chat data:", error);
      }
   };
  
   fetchChats();
}, []); 
 
    console.log(searchItem);
    let filteredData = chats.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()));
    console.log(chats); 
   return (
     <div className={styles.joiner}>
       {prop.activePage === "chats" && <Header setSearchItem={setSearchItem} />}
       {prop.activePage === "chats" && (
         <div className={styles.chats}>
           {filteredData.map((chat, index) => (
             <Chat
               key={index}
               name={chat.name} 
               onlineUser={onlineUser}
               id={chat._id}
               loggedUser={loggedUser}
               loggedUserdata={loggedUserdata}
               profilePic={chat.dp}
               active={chat.active}
               setSelectedChat={prop.setSelectedChat}
             />
           ))}
         </div>
       )}
       {prop.activePage === "status" && <Status />}
       {prop.activePage === "channels" && <Channel />}
       {prop.activePage === "communities" && <Communities />}
       {prop.activePage === "profile" && (
         <Profile loggedUserdata={prop.loggedUserdata} />
       )}
       {prop.activePage === "setting" && <SettingsPage />}
     </div>
   );
} 
export default ChatStructure ;