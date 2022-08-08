import { formatUnits } from 'ethers/lib/utils'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useContractReads, useContractWrite, useWaitForTransaction } from 'wagmi'
import { IGIVE_ABI, IGIVE_TOKEN } from '../utils/constants'




const DelegateBox = () => {

	const [address, setAddress] = useState('')

	const delegate = useContractWrite({
        addressOrName: IGIVE_TOKEN,
        contractInterface: IGIVE_ABI,
        functionName: 'delegate',
		chainId: 80001,
        args: [
            address
        ],
		onSuccess(data) {
			toast.warn('Transaction Pending')
		},
		onError(error: any) {
			if (error.error != null) {
				toast.error(error.error.data.message)
			} else {
				toast.error(error.message)
			}
		},
    })

	const { isLoading: delegateLoading } = useWaitForTransaction({
		hash: delegate.data?.hash,
		onSuccess(data) {
			toast.success('Delegated!')
		},
		onError(error: any) {
			if (error.error != null) {
				toast.error(error.error.data.message)
			} else {
				toast.error(error.message)
			}
		},
	})

  return (
	<div className='mt-[5vh] ml-[20vw] w-[60vw] h-[60vh] bg-white rounded-3xl border-purple border-4 p-6 overflow-auto font-bold'>

	<h2>Before you can vote, you must assign your voting rights to either yourself, or you can assign it to a third party.</h2>
	<br/>
	<br/>
	

	Enter the Ethereum address of wallet to receive the voting rights.
	<input className='w-full border-black rounded-lg border-2 p-1 font-normal' type={'text'} value ={address} onChange={(e)=>{setAddress(e.target.value)}} />
	<br/>
	<br/>
	<button onClick={()=>{delegate.write()}} className='bg-green rounded-2xl py-2 px-3 font-bold text-white ml-[50%] -translate-x-1/2' disabled={delegateLoading}>
		{delegateLoading? 'Processing...' : 'Delegate'}
	</button>
	<br/>
	<br/>
	<p className='text-zinc-400 font-normal text-sm'>
		By delegating your voting rights, you allow the recipient user to vote any decision on a proposal without your consent, however you can take back your rights by entering your address above and delegating back to yourself. The recipient does not take any ownership of your iGIVE tokens.
	</p>
	<p className='text-zinc-400 font-normal text-sm'>
		**Please note: You cannot vote on proposals that were created before you delegated your vote. The transaction will go through, but your vote will not be counted.**
	</p>
	</div>
  )
}

export default DelegateBox