import React, { useState } from 'react'
import styles from '../styles/Nav.module.css'

const Connect = () => {

	let account;
	
	const [btnText, setTxt] = useState(account || "Connect")
	 
	const handleClick = async () => {
		const {ethereum} = window
		const accounts = await ethereum.request({method: "eth_requestAccounts"})
		account = accounts[0]
		setTxt(account)
	}

	return (
	<>
		<button onClick={handleClick} className={styles.btn}><span className={styles.a}>{btnText}</span></button>
	</>
	
  )
}
export default Connect