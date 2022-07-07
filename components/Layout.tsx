import Image from 'next/image'
import React, { ReactNode } from 'react'
import Nav from './Nav'
import background from '../public/bg-hero.png'

type Props = {
	children?: ReactNode
}

const Layout = ({ children }: Props) => (
	<>
	<div className='h-screen'>
		<div className='fixed h-screen w-screen overflow-hidden z-[-1] blur-lg opacity-50'>
			<Image src={background} alt='background' layout='fill' quality={100} />	
		</div>
		<Nav />
		<main className='h-full'>
			{children}
		</main>
		
	</div>
	</>
  )


export default Layout