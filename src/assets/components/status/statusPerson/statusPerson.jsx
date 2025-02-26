import styles from './statusPerson.module.css'
export default function StatusPerson(prop) { 
    return (
        <div className={styles.container}>
            <img src={prop.pic} alt="status_others" /> 
            <div className={styles.otherData}>
                <p className={styles.name}>{prop.name}</p>
                <p className={styles.otherStatusTime}>11.06pm</p> 
            </div>
        </div>
    )
 }