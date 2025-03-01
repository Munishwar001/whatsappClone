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
 
 function ChatStructure(prop) {
   
   //  const chats = [
   //     {
   //        id: 1,
   //        name: "Alice",
   //        message: "Hey, how's it going?",
   //        dp: "https://randomuser.me/api/portraits/women/1.jpg",
   //        messages: [
   //           { sender: "Me", text: "Hey Alice, how have you been?" },
   //           { sender: "Alice", text: "I'm good! How about you?" },
   //           { sender: "Me", text: "Doing great! Just busy with work." },
   //           { sender: "Alice", text: "That’s nice. We should catch up soon!" },
   //           { sender: "Me", text: "Yeah, let’s plan something this weekend." },
   //           { sender: "Alice", text: "Sounds perfect! Let me know the time." }
   //        ]
   //     },
   //     {
   //        id: 2,
   //        name: "Bob",
   //        message: "I'm good! What about you?",
   //        dp: "https://randomuser.me/api/portraits/men/2.jpg",
   //        messages: [
   //           { sender: "Me", text: "Hey Bob, long time no see!" },
   //           { sender: "Bob", text: "Yeah, been busy with some projects." },
   //           { sender: "Me", text: "Same here! We should work on something together." },
   //           { sender: "Bob", text: "That would be great! Let's plan it out." },
   //           { sender: "Me", text: "Do you have any project ideas in mind?" },
   //           { sender: "Bob", text: "I was thinking about a task manager app. What do you think?" },
   //           { sender: "Me", text: "That sounds interesting! Let’s discuss it in detail." }
   //        ]
   //     },
   //     {
   //        id: 3,
   //        name: "Birju",
   //        message: "Hey guys, what are you up to?",
   //        dp: "https://media.licdn.com/dms/image/v2/D5603AQGUpaXvtzCsUQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724936798409?e=2147483647&v=beta&t=7tzn254mkttIoN5FVVCRJp6IuVsrgmnBaSNtkYzkAcI",
   //        messages: [
   //           { sender: "Me", text: "Hey Charlie! Just working on some new projects." },
   //           { sender: "Birju", text: "Sounds cool! Need any help?" },
   //           { sender: "Me", text: "Sure, I’ll share some details with you." },
   //           { sender: "Birju", text: "Awesome! Looking forward to it." },
   //           { sender: "Me", text: "I’ll send you the GitHub repo link soon." },
   //           { sender: "Birju", text: "Great! I’ll check it out and contribute." }
   //        ]
   //     },
   //     {
   //        id: 4,
   //        name: "David",
   //        message: "Let's catch up this weekend!",
   //        dp: "https://randomuser.me/api/portraits/men/4.jpg",
   //        messages: [
   //           { sender: "Me", text: "Hey David! Long time no see." },
   //           { sender: "David", text: "Yeah, we should meet up soon!" },
   //           { sender: "Me", text: "How about this weekend?" },
   //           { sender: "David", text: "Sounds great! Let’s do it." },
   //           { sender: "Me", text: "I’ll check with others and confirm the time." },
   //           { sender: "David", text: "Sure! Let me know the plan." }
   //        ]
   //     },
   //     {
   //        id: 5,
   //        name: "Emma",
   //        message: "Did you check the latest update?",
   //        dp: "https://randomuser.me/api/portraits/women/5.jpg",
   //        messages: [
   //           { sender: "Me", text: "Hey Emma! What's new?" },
   //           { sender: "Emma", text: "The new app update is out. It’s amazing!" },
   //           { sender: "Me", text: "Oh nice! I’ll check it out." },
   //           { sender: "Emma", text: "Let me know what you think." },
   //           { sender: "Me", text: "Sure, I’ll try it today." },
   //           { sender: "Emma", text: "Looking forward to your feedback!" }
   //        ]
   //     },
   //     {
   //        id: 6,
   //        name: "Frank",
   //        message: "Hey, do you have any book recommendations?",
   //        dp: "https://randomuser.me/api/portraits/men/6.jpg",
   //        messages: [
   //           { sender: "Me", text: "Hey Frank! What genre are you into?" },
   //           { sender: "Frank", text: "Mostly sci-fi and thrillers." },
   //           { sender: "Me", text: "You should check out 'The Martian' and 'Dune'." },
   //           { sender: "Frank", text: "Sounds great! I’ll add them to my list." },
   //           { sender: "Me", text: "Let me know what you think after reading!" },
   //           { sender: "Frank", text: "For sure! Thanks for the recommendations." }
   //        ]
   //     },
   //     {
   //        id: 7,
   //        name: "Grace",
   //        message: "Did you watch the latest episode?",
   //        dp: "https://randomuser.me/api/portraits/women/7.jpg",
   //        messages: [
   //           { sender: "Me", text: "Not yet! No spoilers please." },
   //           { sender: "Grace", text: "Haha, okay! But it was really good." },
   //           { sender: "Me", text: "I’ll watch it tonight!" },
   //           { sender: "Grace", text: "Let me know what you think!" },
   //           { sender: "Me", text: "Will do! Can’t wait to discuss it." }
   //        ]
   //     },
   //     {
   //        id: 8,
   //        name: "Henry",
   //        message: "Are you coming to the party?",
   //        dp: "https://randomuser.me/api/portraits/men/8.jpg",
   //        messages: [
   //           { sender: "Me", text: "Hey Henry! Yeah, I’m planning to." },
   //           { sender: "Henry", text: "Awesome! It’s going to be fun." },
   //           { sender: "Me", text: "Who else is coming?" },
   //           { sender: "Henry", text: "Pretty much everyone from our group!" },
   //           { sender: "Me", text: "That’s great! See you there." }
   //        ]
   //     },
   //     {
   //        id: 9,
   //        name: "Isla",
   //        message: "How was your weekend?",
   //        dp: "https://randomuser.me/api/portraits/women/9.jpg",
   //        messages: [
   //           { sender: "Me", text: "Hey Isla! It was great. Went on a short trip." },
   //           { sender: "Isla", text: "That sounds fun! Where did you go?" },
   //           { sender: "Me", text: "Visited a hill station. The views were amazing!" },
   //           { sender: "Isla", text: "Wow! I’d love to go there someday." },
   //           { sender: "Me", text: "You totally should! It’s beautiful." }
   //        ]
   //     },
   //     {
   //        id: 10,
   //        name: "Jack",
   //        message: "Hey, let's plan a trip!",
   //        dp: "https://randomuser.me/api/portraits/men/10.jpg",
   //        messages: [
   //           { sender: "Me", text: "That’s a great idea! Where do you want to go?" },
   //           { sender: "Jack", text: "Maybe the mountains or a beach trip?" },
   //           { sender: "Me", text: "Both sound good! Let’s ask the others too." },
   //           { sender: "Jack", text: "Yeah, we can make it a group trip!" },
   //           { sender: "Me", text: "Let’s create a group chat and plan this out." }
   //        ]
   //     }
   //  ]; 


    const [searchItem, setSearchItem] = useState("");
    const [chats, setChats] = useState([]);

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
             setChats(data);
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
         {prop.activePage === "chats" && <Header  setSearchItem={setSearchItem}/>}
         {prop.activePage === "chats" && (
            <div className={styles.chats}>
               {/* {filteredData.map((chat, index) => (
                  <Chat key={index} name={chat.name} message={chat.message} dp={chat.dp} messages={chat.messages} setSelectedChat={prop.setSelectedChat} />
               ))} */}

               {filteredData.map((chat, index) => (
                  <Chat key={index} name={chat.name} setSelectedChat={prop.setSelectedChat} />
               ))}
            </div>
         )} 
         {prop.activePage === "status" && <Status/>}
         {prop.activePage === "channels" && <Channel />}
         {prop.activePage === "communities" && <Communities/>}
         {prop.activePage === "profile" && <Profile />}
         {prop.activePage === "setting" && <SettingsPage />}


      </div>
   )
} 
export default ChatStructure ;