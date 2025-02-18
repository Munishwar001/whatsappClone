import DefaultWindow from "./defaultWindow/default"; 
import ChatWindow from "./chatWindow";
export default function ChatHeader({ selectedChat}) { 
    // console.log(chats);
    
    if (!selectedChat) { 
        return (<div>
        <DefaultWindow/>
        </div>) // Show this when no chat is selected
    }

    return (
        <div>
            {/* <h2>Chat with {selectedChat.name}</h2> {/* Show the selected user's name */}
            {/* <p>Start your conversation here...</p> */} 
            <ChatWindow selectedChat={selectedChat} />
        </div>
    );
}
