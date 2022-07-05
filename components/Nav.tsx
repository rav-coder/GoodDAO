import React from 'react'
import Link from 'next/link'
import { ConnectButton } from 'web3uikit'
const Nav = () => {
  return (
	<nav>
		<ul className='flex'>
			<li className='my-1 mx-2'>
				<Link href='/'>Home</Link>
			</li>
			<li className='my-1 mx-2'>
				<Link href='/stake'>Stake</Link>
			</li>
			<li className='my-1 mx-2'>
				<Link href='/proposals'>Proposals</Link>
			</li>
			<li className='my-1 mx-2'>
				<ConnectButton />
			</li>
		</ul>
	</nav>
  )
}

export default Nav