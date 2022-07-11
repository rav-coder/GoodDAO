import React from 'react'
import Button from './Button'

const StakeBox = () => {
  return (
	<div className='bg-gray rounded-lg border-solid border px-10 flex flex-col'>
		<div className='pt-10'>
			<h1 className='font-bold text-black text-center text-xl'>Stake Good</h1>
		</div>
		{/* Approve */}
		<div className='flex flex-col pt-14'>
			<div>
				<div className='flex justify-between'>
					<h1 className='items-start'>Balance: </h1>
					<h1 className='items-end'>0</h1>
				</div>
				<div className='relative'>
			</div>
				<input className='rounded-lg h-8 bg-gray border border-solid w-full '  type={'number'}/>
			</div>
			<Button text='Approve' color='green'/>
		</div>
		{/* Withdraw */}
		<div className='flex flex-col pt-14'>
			<div className='flex justify-between'>
				<h1 className='items-start'>GIVE Balance: </h1>
				<h1 className='items-end'>0</h1>
			</div>
			<div className='relative'>
				<input className='rounded-lg h-8 bg-gray border border-solid w-full '  type={'number'}/>
			</div>
			<Button text='Withdraw' color='purple'/>
		</div>
		{/* Approve */}
		<div className='flex flex-col pt-14 pb-14'>
			<div className='flex justify-between'>
				<h1 className='items-start'>Claimable GOOD</h1>
				<h1 className='items-end'>0</h1>
			</div>
			<Button text='Claim GOOD' color='green'/>
		</div>
	</div>
  )
}

export default StakeBox