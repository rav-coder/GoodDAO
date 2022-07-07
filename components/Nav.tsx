import React from 'react'
import Connect from './Connect'
import styles from '../styles/Nav.module.css'
import NavButton from './NavButton'

const Nav = () => {
	return (
		<>

			<nav className={styles.nav}>

				<ul className={styles.ul}>
					<NavButton link={'/'} text={'Home'}/>
					<NavButton link={'/stake'} text={'Stake'}/>
					<NavButton link={'/proposals'} text={'Proposals'}/>
					<NavButton link={'/faqs'} text={'FAQs'}/>
					<Connect/>
				</ul>
			</nav>
			<div className={styles.logo}></div>


		</>
	)
}

export default Nav