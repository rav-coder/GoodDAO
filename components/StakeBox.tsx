import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useContractWrite } from 'wagmi'
import { GIVE_ABI, GIVE_TOKEN, GOOD_ABI, GOOD_TOKEN } from '../utils/constants'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const StakeBox = () => {


	const [showModal, setShowModal] = useState(false)

	const [approveAmnt, setApproveAmnt] = useState('0')
	const [withdrawAmnt, setWithdrawAmnt] = useState('0')
	const [claimAmnt, setClaimAmnt] = useState('0')

	const deposit = useContractWrite({
		addressOrName: GIVE_TOKEN,
		contractInterface: GIVE_ABI,
		functionName: 'deposit',
		args: [
			'', // pid
			parseInt(approveAmnt)
		],
		onSuccess() {
			console.log('Deposited')
		}
	})


	const approve = useContractWrite({
		addressOrName: GOOD_TOKEN,
		contractInterface: GOOD_ABI,
		functionName: 'approve',
		args: [
			GIVE_TOKEN, //
			parseInt(approveAmnt)

		],
		onSuccess() {
			console.log('Approved')
			setShowModal(true)
		}
	})

	const withdraw = useContractWrite({
		addressOrName: GIVE_TOKEN,
		contractInterface: GIVE_ABI,
		functionName: 'withdraw',
		args: [
			'', // pid
			parseInt(withdrawAmnt)
		],
		onSuccess() {
			console.log('Withdrawn')
		}
	})

	const claimClick = () => {

	}

  return (
	
	<div className='bg-gray rounded-lg border-solid border px-10 flex flex-col'>
		
		{/* Deposit Modal */}
		{showModal && 
		<div className='fixed top-0 left-0 z-10 w-full h-full bg-black bg-opacity-40'>
			<div className='absolute inset-1/2 bg-white -translate-x-1/2 -translate-y-1/2 z-10 w-1/5 h-1/5 rounded-lg shadow-2xl opacity-100'>
				{/* Header */}
				<div className='flex justify-start shadow-md'>
					<p className='text-black font-bold text-xl py-2 inline ml-2'>Deposit</p>
					<button className='ml-auto p-2 mr-2' onClick={()=>{setShowModal(false)}}><FontAwesomeIcon icon={faClose}/></button>
				</div>
				{/* Body */}
				<div className='h-full'>
					<p className='pt-3 pl-2'>Deposit Amount?</p>
					<p className='pt-3 pl-2 text-lg font-bold'>{approveAmnt}</p>
					<div className='absolute left-1/2 -translate-x-1/2 bottom-2'><button className='p-2 text-white font-bold rounded-md bg-green' onClick={()=>{deposit.write()}}>Deposit</button></div>
				</div>
					</div>
		</div>
		}

		{/* Header */}
		<div className='pt-10'>
			<h1 className='font-bold text-black text-center text-xl'>Stake Good</h1>
		</div>


		{/* Approve Section */}
		<div className='flex flex-col pt-14'>
			<div>
				<div className='flex justify-between'>
					<h1 className='items-start'>Balance: </h1>
					<h1 className='items-end'>0</h1>
				</div>
				<div className='relative'>
			</div>
				<input className='rounded-lg h-8 bg-gray border border-solid w-full'  type={'number'} value={approveAmnt} onChange={(e) => {setApproveAmnt(e.currentTarget.value)}}/>
			</div>
			<button className={`m-auto text-white bg-green rounded-md py-2 px-3 mt-2 font-bold`} onClick={
				//() => approve.write()
				() => setShowModal(true)
				}>Approve</button>
		</div>


		{/* Withdraw Section */}
		<div className='flex flex-col pt-14'>
			<div className='flex justify-between'>
				<h1 className='items-start'>GIVE Balance: </h1>
				<h1 className='items-end'>0</h1>
			</div>
			<div className='relative'>
				<input className='rounded-lg h-8 bg-gray border border-solid w-full' type={'number'} value={withdrawAmnt} onChange={(e) => {setWithdrawAmnt(e.currentTarget.value)}}/>
			</div>
			<button className={`m-auto text-white bg-purple rounded-md py-2 px-3 mt-2 font-bold`} onClick={() => withdraw.write()}>Withdraw</button>
		</div>


		{/* Approve Section */}
		<div className='flex flex-col pt-14 pb-14'>
			<div className='flex justify-between'>
				<h1 className='items-start'>Claimable GOOD</h1>
				<h1 className='items-end'>0</h1>
			</div>
			<button className={`m-auto text-white bg-green rounded-md py-2 px-3 mt-2 font-bold`} onClick={claimClick}>Claim GOOD</button>
		</div>
	</div>
  )
}

export default StakeBox