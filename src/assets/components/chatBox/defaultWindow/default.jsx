import styles from './default.module.css';
export default function DefaultWindow() {
    return (
        <div className={styles.container}>
            <div style={{textAlign:"center", }}>
                <img src="https://static.whatsapp.net/rsrc.php/v4/y6/r/wa669aeJeom.png" alt="" className={styles.defaultimg} /> 
                <div className={styles.defaultText}>Download WhatsApp for Windows </div>
                <p className={styles.defaultparagh}>Make calls, share your screen and get a faster experience when you download the 
                 Windows app.</p> 
                 <button className={styles.downloadbtn}>Download</button>
            </div>
        </div>
    )
}