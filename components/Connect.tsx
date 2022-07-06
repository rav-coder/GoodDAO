import React, { useState } from 'react'
import Web3 from 'web3'

const Connect = () => {

	const [connected, setConnect] = useState(false)
	var account;
	const handleClick = async () => {
		if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
			const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
			account = accounts[0]
			setConnect(true)
		} else {
			console.log('No Metamask')
		}
	}

	return (
	<>
		
		<button onClick={handleClick}><span>{account !== undefined ? <span>{account}</span> : <span>Connect</span>}</span></button>
	</>
	
  )
}

export default Connect