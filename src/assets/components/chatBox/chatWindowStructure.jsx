import styles from './chatWinStruct.module.css';
import ChatHeader from './chatHeader';
export default function ChatWindowStructure({ selectedChat }){ 
    
    return(
        <div className={styles.container}>
            <ChatHeader selectedChat={selectedChat}/>
        </div>
    )
}