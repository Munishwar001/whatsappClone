import styles from './chatstructure.module.css';
import Header from './chatComponents/header';
import Chat from './chatComponents/chat'; 
import Nav from '../nav/navbar'; 
import Status from '../status/status';
import { useState, useContext, createContext } from 'react'; 
 
 function ChatStructure(prop) {
   // console.log(prop.activePage,"Munishwar");
   
    const chats = [
      {
         id: 1,
         name: "Alice",
         message: "Hey, how's it going?",
         dp: "https://randomuser.me/api/portraits/women/1.jpg",
         messages: [
            { sender: "Me", text: "Hey Alice, how have you been?" },
            { sender: "Alice", text: "I'm good! How about you?" },
            { sender: "Me", text: "Doing great! Just busy with work." },
            { sender: "Alice", text: "That’s nice. We should catch up soon!" }
         ]
      },
      {
         id: 2,
         name: "Bob",
         message: "I'm good! What about you?",
         dp: "https://randomuser.me/api/portraits/men/2.jpg",
         messages: [
            { sender: "Me", text: "Hey Bob, long time no see!" },
            { sender: "Bob", text: "Yeah, been busy with some projects." },
            { sender: "Me", text: "Same here! We should work on something together." },
            { sender: "Bob", text: "That would be great! Let's plan it out." }
         ]
      },
      {
         id: 3,
         name: "Charlie",
         message: "Hey guys, what are you up to?",
         dp: "https://randomuser.me/api/portraits/men/3.jpg",
         messages: [
            { sender: "Me", text: "Hey Charlie! Just working on some new projects." },
            { sender: "Charlie", text: "Sounds cool! Need any help?" },
            { sender: "Me", text: "Sure, I’ll share some details with you." },
            { sender: "Charlie", text: "Awesome! Looking forward to it." }
         ]
      }
   ];
   return (
      <div className={styles.joiner}>  
       {/* if(prop.activePage=="chats")
         <Header />
         <div className={styles.chats}>
            {chats.map((chat, index) => (
               <Chat key={index} name={chat.name} message={chat.message} dp={chat.dp} messages={chat.messages} setSelectedChat={prop.setSelectedChat} />
            ))}
         </div> */} 
         {prop.activePage === "chats" && <Header />}
         {prop.activePage === "chats" && (
            <div className={styles.chats}>
               {chats.map((chat, index) => (
                  <Chat key={index} name={chat.name} message={chat.message} dp={chat.dp} messages={chat.messages} setSelectedChat={prop.setSelectedChat} />
               ))}
            </div>
         )} 
         {prop.activePage === "status" && <Status/>}
         {prop.activePage === "channel" && <Header />}
      </div>
   )
} 
export default ChatStructure ;