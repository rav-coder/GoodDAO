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
		<button onClick={handleClick} className='bg-purple py-1.5 px-5 rounded-2xl my-1 mx-4 text-white hover:bg-[#e0e0e0] hover:text-black'>{btnText}</button>
	</>
	
  )
}
export default Connect