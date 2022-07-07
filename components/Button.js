import React from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Button({ link, text }) {
    return (
        <button className={styles.btn}>
            <li className={styles.a}>
                <Link href={link}>{text}</Link>
            </li>
        </button>
    )
}