import React from 'react'
import Link from 'next/link'
import Connect from './Connect'
import styles from '../styles/Nav.module.css'
import Image from 'next/image'
import Button from './Button'

const Nav = () => {
	return (
		<>

			<nav className={styles.nav}>

				<ul className={styles.ul}>
					<Button link={'/'} text={'Home'}/>
					<Button link={'/stake'} text={'Stake'}/>
					<Button link={'/proposals'} text={'Proposals'}/>
					<Button link={'/faqs'} text={'FAQs'}/>
					<Button link={''} text={<Connect/>}/>
				</ul>
			</nav>
			<div className={styles.logo}></div>


		</>
	)
}

export default Nav