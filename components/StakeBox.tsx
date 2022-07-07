import React from 'react'
import Button from './Button'

const StakeBox = () => {
  return (
	<div className='border-solid border p-10 flex flex-col'>
		{/* Approve */}
		<div className='flex justify-between'>
			<h1 className='items-start'>Balance: </h1>
			<h1 className='items-end'>0</h1>
		</div>
		<div className='relative'>
			<input className='border border-solid w-full '  type={'number'}/>
		</div>
		<Button text='Approve' color='green'/>
		{/* Withdraw */}
		<div className='flex justify-between'>
			<h1 className='items-start'>GIVE Balance: </h1>
			<h1 className='items-end'>0</h1>
		</div>
		<div className='relative'>
			<input className='border border-solid w-full '  type={'number'}/>
		</div>
		<Button text='Withdraw' color='purple'/>
		{/* Approve */}
		<div className='flex justify-between'>
			<h1 className='items-start'>Claimable GOOD</h1>
			<h1 className='items-end'>0</h1>
		</div>
		<Button text='Claim GOOD' color='green'/>
	</div>
  )
}

export default StakeBox