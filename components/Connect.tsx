import React, { useState } from 'react'
import Web3 from 'web3'

const Connect = () => {
	var account;
	const [btnText, setTxt] = useState(account || "Connect")
	
	const handleClick = async () => {
		if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
			const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
			account = accounts[0]
			setTxt(account)
		} else {
			console.log('No Metamask')
		}
	}

	return (
	<>
		
		<button onClick={handleClick}>{btnText}</button>
	</>
	
  )
}

export default Connect