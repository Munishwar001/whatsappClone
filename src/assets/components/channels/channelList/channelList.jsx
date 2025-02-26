import styles from  './channelList.module.css'
export default  function ChannelList(prop) { 
     return(
        <div className={styles.container}>
                    <img src={prop.pic} alt="Channel_pic" /> 
                    <div className={styles.otherData}>
                        <p className={styles.name}>{prop.name}</p>
                        <p className={styles.content}>{prop.type}  <br />{prop.content}</p> 
                    </div>
                </div>
     )
}