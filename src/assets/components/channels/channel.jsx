import styles from './channel.module.css'
import ChannelList from './channelList/channelList';
import { useState } from 'react';
export default function Channel() {
    const channelData = [
        {
            name: "Tech Guru",
            pic: "https://randomuser.me/api/portraits/men/10.jpg",
            type: "text",
            content: "Hey, have you checked out the latest AI trends?"
        },
        {
            name: "Code with Dev",
            pic: "https://randomuser.me/api/portraits/men/20.jpg",
            type: "video",
            content: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
            name: "Design Hub",
            pic: "https://randomuser.me/api/portraits/women/15.jpg",
            type: "photo",
            content: "https://source.unsplash.com/random/400x300"
        },
        {
            name: "Gamer's Paradise",
            pic: "https://randomuser.me/api/portraits/men/30.jpg",
            type: "text",
            content: "Who's up for a gaming session tonight?"
        },
        {
            name: "AI Explorers",
            pic: "https://randomuser.me/api/portraits/women/25.jpg",
            type: "video",
            content: "https://www.w3schools.com/html/movie.mp4"
        }
    ]; 
    const [channelList, setChannelList] = useState(""); 
    let SearchChannel = channelData.filter(item => item.name.toLowerCase().includes(channelList.toLowerCase()));
    return ( 
        <div className={styles.container}>
            <nav>
                <header className={styles.header}>
                
                        <h2 className={styles.heading}>Channels</h2>
                        <span>
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="xfect85"><title>plus</title><path fill="currentColor" d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg>
                        </span>
                </header> 
                <div className={styles.channelsearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                    <input type="text" placeholder ="Search" onChange={(e)=>setChannelList(e.target.value)}/>
                </div>
            </nav>   
            <div className={styles.channelContainer}>
       { SearchChannel.map((data) =>{
        return (
           <ChannelList name={data.name}  pic={data.pic} type={data.type} content={data.content} />
        )
       }) } 
            </div>
        </div>
    )
} 