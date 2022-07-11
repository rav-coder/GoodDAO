import styles from '../styles/Proposals.module.css'
import React from 'react'
import Paragraph from '../components/Paragraph'
import Link from 'next/link'

const paragraphText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed porttitor lorem. Proin non est dictum, tempor lacus at, volutpat mauris. Phasellus consectetur eros erat, nec scelerisque massa elementum in. Sed sagittis lorem at lectus fermentum, id convallis tortor efficitur. Vivamus sollicitudin bibendum odio, quis ornare velit sodales congue. Curabitur auctor sed nunc id porta. Aenean nulla est, rutrum a orci nec, finibus rhoncus ex.'

export default function Proposals() {
    return (
        <div className={styles.main}>

            <div className={styles.proposals}>
                <Link href='/pendingProposal'>Pending Proposals</Link>
            </div>
            <div className={styles.proposals}>
                <Link href='/closedProposal'>Closed Proposals</Link>
            </div>
            <div className={styles.proposals}>
                <Link href='/submitProposal'>Submit Proposals</Link>
            </div>
            <div className={styles.proposals}>
                <Link href='/delegateVote'>Delegate Votes</Link>
            </div>




        </div>
    )
}