import Image from 'next/image'
import React from 'react'
import twitter from '../public/twitter.png'
import instagram from '../public/Instagram.png'
import discord from '../public/Discord.png'

const Footer = () => {
  return (
	<>

			<footer className='w-screen h-12 fixed bottom-0 bg-white flex flex-1 justify-center'>

				<div className='flex justify-evenly w-40 bg-green'>
					<a href='https://twitter.com/BCharityFi' rel='noreferrer' target='_blank'>
						<Image src={twitter} alt='Twitter' width={39} height={39} layout='intrinsic'/>
					</a>
					<a href='https://www.instagram.com/bcharityofficial/' rel='noreferrer' target='_blank'>
						<Image src={instagram} alt='Twitter' width={39} height={39} layout='intrinsic'/>
					</a>
					<a href='https://discord.com/invite/4vKS59q5kV' rel='noreferrer' target='_blank'>
						<Image src={discord} alt='Twitter' width={39} height={39} layout='intrinsic'/>
					</a>
				</div>
			</footer>
		</>
	
  )
}

export default Footer