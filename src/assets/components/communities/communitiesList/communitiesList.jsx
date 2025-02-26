import styles from './communitiesList.module.css'

export default function CommunitiesList(prop){
    return(
        <div className={styles.container}>
            <div className={styles.components}>
                <img src={prop.pic} alt={prop.name} />
                <pre className={styles.content}>
                    <h3>{prop.name}</h3>
                    <pre>{prop.text} </pre>
                    <pre> {prop.timestamp}</pre>
                </pre>
            </div>
        </div>
    )
}