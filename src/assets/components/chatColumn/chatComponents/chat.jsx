import style from './chat.module.css';
export default function Chat({ name, message, dp, messages , setSelectedChat}) { 
    //  console.log(messages);     
    return (
        <div className={style.chatlist} onClick={() => setSelectedChat({ name, message, dp , messages })}>
            <img src={dp} alt="" className={style.profiledp} />
            <div className={style.chatlistContent}>
                <h3>{name}</h3>
                <p>{message}</p>
            </div>
        </div>
    );
}
