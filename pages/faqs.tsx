import styles from '../styles/Home.module.css'
import React from 'react'
import Paragraph from '../components/Paragraph'
import Collapsible from '../components/Collapsible'

const paragraphText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed porttitor lorem. Proin non est dictum, tempor lacus at, volutpat mauris. Phasellus consectetur eros erat, nec scelerisque massa elementum in. Sed sagittis lorem at lectus fermentum, id convallis tortor efficitur. Vivamus sollicitudin bibendum odio, quis ornare velit sodales congue. Curabitur auctor sed nunc id porta. Aenean nulla est, rutrum a orci nec, finibus rhoncus ex.'

export default function Faqs() {
    return (
        <div className={styles.main}>
            <div>
                <Collapsible/>
            </div>
        </div>
    )
}