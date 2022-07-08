import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import twitter from '../public/Twitter.png'
import instagram from '../public/Instagram.png'
import discord from '../public/Discord.png'

const Footer = () => {
  return (
	<>

			<footer className='w-screen h-12 fixed bottom-0 bg-white flex flex-1 justify-center'>

				<div className='flex bg-green justify-evenly w-40'>
					<a href='https://twitter.com/BCharityFi' rel='noreferrer' target='_blank'>
						<Image src={twitter} alt='Twitter' width={35} height={29} layout='intrinsic'></Image>
					</a>
					<a href='https://www.instagram.com/bcharityofficial/' rel='noreferrer' target='_blank'>
						<Image src={instagram} alt='Twitter' width={29} height={29} layout='intrinsic'></Image>
					</a>
					<a href='https://discord.com/invite/4vKS59q5kV' rel='noreferrer' target='_blank'>
						<Image src={discord} alt='Twitter' width={26} height={29} layout='intrinsic'></Image>
					</a>
				</div>
			</footer>
		</>
	
  )
}

export default Footer