import styles from '../styles/Home.module.css'

export default function Paragraph({ header, text }) {
    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <h1 className={styles.about}>{header}</h1>
                <br></br>
                <p>{text}</p>
            </div>
        </div>
    )
}