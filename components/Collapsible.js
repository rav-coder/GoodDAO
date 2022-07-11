import styles from '../styles/Collapsible.module.css'
import faqs from '../data/faq.json'


export default function Collapsible() {
    return (
        <>
            {faqs.map((faq) => (
                <>
                    <h1 className={styles.collapsible}>
                        {faq.question}
                    </h1>
                    <p className={styles.content}>{faq.answer}</p>
                </>
            ))}
        </>
    )
}

