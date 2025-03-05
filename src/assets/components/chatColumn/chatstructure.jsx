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
import {io} from 'socket.io-client';
import { useState, useContext, createContext } from 'react'; 
 import Socket from '../socket';
 function ChatStructure(prop) {
   
    const [searchItem, setSearchItem] = useState("");
    const [chats, setChats] = useState([]);
    const [loggedUser , setLoggedUser]= useState("");
    // Fetch chats from server
    useEffect(() => {
       const fetchChats = async () => {
          try {
             const response = await fetch("http://localhost:8000/chats", {
                method: "GET",
                credentials: "include", 
                headers: {
                   "Content-Type": "application/json",
                }
             });

             if (!response.ok) {
                throw new Error("Failed to fetch chats");
             }

             const data = await response.json();
             setChats(data.chats);
             setLoggedUser(data.loggedUser.id);
          } catch (error) {
             console.error("Error fetching chat data:", error);
          }
       };

       fetchChats();

       Socket.emit("register", loggedUser);
    }, []); 
             console.log("abcdef", loggedUser);
    console.log(searchItem);
    let filteredData = chats.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()));
    console.log(chats); 
   return (
     <div className={styles.joiner}>
       {prop.activePage === "chats" && <Header setSearchItem={setSearchItem} />}
       {prop.activePage === "chats" && (
         <div className={styles.chats}>
           {/* {filteredData.map((chat, index) => (
                  <Chat key={index} name={chat.name} message={chat.message} dp={chat.dp} messages={chat.messages} setSelectedChat={prop.setSelectedChat} />
               ))} */}

           {filteredData.map((chat, index) => (
             <Chat
               key={index}
               name={chat.name}
               messages={chat.messages}
               id={chat._id} 
               loggedUser={loggedUser}
               setSelectedChat={prop.setSelectedChat}
             />
           ))}
         </div>
       )}
       {prop.activePage === "status" && <Status />}
       {prop.activePage === "channels" && <Channel />}
       {prop.activePage === "communities" && <Communities />}
       {prop.activePage === "profile" && <Profile />}
       {prop.activePage === "setting" && <SettingsPage />}
     </div>
   );
} 
export default ChatStructure ;