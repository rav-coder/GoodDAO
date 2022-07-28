import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';

import Connect from './Connect'
import Logo from '../public/logo.jpg'
import Image from 'next/image';

const Nav = () => {
  const router = useRouter();

  return (
	<nav className="fixed top-0 z-10 w-full bg-white border-b">	
	    <div className="container px-5 mx-auto max-w-screen-xl">
            <div className="flex relative justify-between items-center h-14 sm:h-16">
				<div className="sm:block flex items-center space-x-4">
					<ul className='flex items-center justify-center'>
						<li className='my-1 mx-2'>
							<Link href="/">
								<div className="inline-flex flex-grow justify-between items-center font-bold text-blue-900  cursor-pointer">
									<Link href="/">
										<div className="text-3xl font-black">
											<Image layout='intrinsic' width='32' height='32' src={Logo} alt="Logo"/>	
										</div>
									</Link>
									<span className="flex fle-grow ml-3 mr-3">GoodDAO</span>
								</div>
							</Link>
						</li>

						<div className="flex gap-2 items-center lg:ml-36 ml-10 ">
							<li className='my-1 mx-2'>
								<Link href='/'>{router.pathname == '/' ? 
								<div className='w-full text-left px-2 md:px-3 py-1 rounded-md font-black cursor-pointer text-sm tracking-wide text-black bg-gray'>Home</div> 
								: <div className='w-full text-left px-2 md:px-3 py-1 font-black cursor-pointer text-sm tracking-wide text-black'>Home</div> }</Link>
							</li>
							<li className='my-1 mx-2'>
								<Link href='/stake'>{router.pathname == '/stake' ? 
								<div className='w-full text-left px-2 md:px-3 py-1 rounded-md font-black cursor-pointer text-sm tracking-wide text-black bg-gray'>Stake</div> 
								: <div className='w-full text-left px-2 md:px-3 py-1 font-black cursor-pointer text-sm tracking-wide text-black'>Stake</div> }</Link>
							</li>
							<li className='my-1 mx-2'>
								<Link href='/proposals'>{router.pathname == '/proposals' ? 
								<div className='w-full text-left px-2 md:px-3 py-1 rounded-md font-black cursor-pointer text-sm tracking-wide text-black bg-gray'>Proposals</div> 
								: <div className='w-full text-left px-2 md:px-3 py-1 font-black cursor-pointer text-sm tracking-wide text-black'>Proposals</div> }</Link>
							</li>
							<li className='my-1 mx-2'>
								<Link href='/faqs'>{router.pathname == '/faqs' ? 
								<div className='w-full text-left px-2 md:px-3 py-1 rounded-md font-black cursor-pointer text-sm tracking-wide text-black bg-gray'>FAQs</div> 
								: <div className='w-full text-left px-2 md:px-3 py-1 font-black cursor-pointer text-sm tracking-wide text-black'>FAQs</div> }</Link>
							</li>
						</div>

					</ul>
				</div>

				<div className='my-1 mx-2'>
					<Connect/>
				</div>

			</div>
		</div>
	</nav>
  )
}

export default Nav
