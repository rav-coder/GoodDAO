import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useContractWrite, useContractRead, useBalance, useAccount } from 'wagmi'
import { IGIVE_ABI, IGIVE_TOKEN, GOOD_ABI, GOOD_TOKEN } from '../utils/constants'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { parseUnits } from 'ethers/lib/utils'
import {toast} from 'react-toastify'

const StakeBox = () => {

	const [showModal, setShowModal] = useState(false)

	const [approveAmnt, setApproveAmnt] = useState('0')
	const [withdrawAmnt, setWithdrawAmnt] = useState('0')
	const [claimAmnt, setClaimAmnt] = useState('0')

	const [goodBalance, setGoodBalance] = useState('Fetching')
	const [giveBalance, setGiveBalance] = useState('Fetching')

	const {address} = useAccount()

	const getGoodBalance = useBalance({
		addressOrName: address,
		token: GOOD_TOKEN,
		chainId: 80001
	})

	const getGiveBalance = useBalance({
		addressOrName: address,
		token: IGIVE_TOKEN,
		chainId: 8001
	})

	useEffect(() => {
		setGoodBalance(getGoodBalance.data?.formatted!)
		setGiveBalance(getGiveBalance.data?.formatted!)
		
	},[getGoodBalance.data?.formatted, getGiveBalance.data?.formatted])
	

	const deposit = useContractWrite({
		addressOrName: IGIVE_TOKEN,
		contractInterface: IGIVE_ABI,
		functionName: 'deposit',
		chainId: 80001,
		args: [
			1, // pid
			approveAmnt !== '' ? parseUnits(approveAmnt, 18) : 0
		],
		onSuccess() {
			toast.success('Deposited')
		},
		onError(error) {
			toast.error(error.message)
		},
	})

	const approve = useContractWrite({
		addressOrName: GOOD_TOKEN,
		contractInterface: GOOD_ABI,
		functionName: 'approve',
		chainId: 80001,
		args: [
			IGIVE_TOKEN, //
			//approveAmnt !== '' ? parseUnits(approveAmnt, 18) : 0
			'0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

		],
		onSuccess() {
			toast.success('Approved')
			setShowModal(true)
		},
		onError(error) {
			toast.error(error.message)
		}
	})

	const withdraw = useContractWrite({
		addressOrName: IGIVE_TOKEN,
		contractInterface: IGIVE_ABI,
		chainId: 80001,
		functionName: 'withdraw',
		args: [
			1, // pid
			withdrawAmnt !== '' ? parseUnits(withdrawAmnt, 18) : 0
		],
		onSuccess() {
			toast.success('Withdrawn')
		},
		onError(error) {
			toast.error(error.message)
		}
	})

	const claimGood = useContractWrite({
		addressOrName: IGIVE_TOKEN,
		contractInterface: IGIVE_ABI,
		functionName: 'claimGOOD',
		chainId: 80001,
		args: [
			1 //pid
		],
		onSuccess() {
			toast.success('Claimed')
		},
		onError(error) {
			toast.error(error.message)
		}
	})

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
					<h1 className='items-end'>{goodBalance}</h1>
				</div>
				<div className='relative'>
			</div>
				<input className='rounded-lg h-8 bg-gray border border-solid w-full'  type={'number'} value={approveAmnt} onChange={(e) => {setApproveAmnt(e.currentTarget.value)}} min={0}/>
			</div>
			<button className={`m-auto text-white bg-green rounded-md py-2 px-3 mt-2 font-bold`} onClick={
				
				//() => approve.write()
				() => setShowModal(true)
				}>Deposit</button>
		</div>


		{/* Withdraw Section */}
		<div className='flex flex-col pt-14'>
			<div className='flex justify-between'>
				<h1 className='items-start'>GIVE Balance: </h1>
				<h1 className='items-end'>{giveBalance}</h1>
			</div>
			<div className='relative'>
				<input className='rounded-lg h-8 bg-gray border border-solid w-full' type={'number'} value={withdrawAmnt} onChange={(e) => {setWithdrawAmnt(e.currentTarget.value)}} min={0}/>
			</div>
			<button className={`m-auto text-white bg-purple rounded-md py-2 px-3 mt-2 font-bold`} onClick={() => withdraw.write()}>Withdraw</button>
		</div>


		{/* Approve Section */}
		<div className='flex flex-col pt-14 pb-14'>
			<div className='flex justify-between'>
				<h1 className='items-start'>Claimable GOOD</h1>
				<h1 className='items-end'>0</h1>
			</div>
			<button className={`m-auto text-white bg-green rounded-md py-2 px-3 mt-2 font-bold`} onClick={()=> {claimGood.write()}}>Claim GOOD</button>
		</div>
	</div>
  )
}

export default StakeBox