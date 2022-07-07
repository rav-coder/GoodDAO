import React, { useState } from 'react'

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
		<button onClick={handleClick}>{btnText}</button>
	</>
	
  )
}
export default Connect