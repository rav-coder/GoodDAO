import React from 'react'
import Link from 'next/link'
import Connect from './Connect'
import styles from '../styles/Nav.module.css'
import Image from 'next/image'

const Nav = () => {
  return (
	<>
	
	<nav className={styles.nav}>
		
		<ul className={styles.ul}>
			<li className={styles.a}>
				<Link href='/'>Home</Link>
			</li>
			<li className={styles.a}>
				<Link href='/stake'>Stake</Link>
			</li>
			<li className={styles.a}>
				<Link href='/proposals'>Proposals</Link>
			</li>
			<li className={styles.a}>
				<Connect/>
			</li>
		</ul>
	</nav>
	<div className={styles.logo}></div>
	</>
  )
}

export default Nav