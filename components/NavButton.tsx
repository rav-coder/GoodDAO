import React, { JSXElementConstructor } from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

type Props = {
    link:string,
    text:string
}


export default function NavButton({ link, text }: Props) {
    return (
        <button className={styles.btn}>
            <li className={styles.a}>
                <Link href={link}>{text}</Link>
            </li>
        </button>
    )
}