import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '../utils/constants'
import { useContractRead, useContractReads, useContractWrite } from 'wagmi'
import { useState } from 'react';
import {toast} from 'react-toastify'

export default function Approve({ id, vote }) {

	const castVote = useContractWrite({
		addressOrName: GOVERNANCE_ADDRESS,
		contractInterface: GOVERNANCE_ABI,
		functionName: 'castVote',
		chainId: 80001,
		args: [
			id,
			vote
		],
		onSuccess() {
			toast.success(vote == 0 ? 'Vote casted: Reject' : 'Vote casted: Approve')
		},
		onError(error) {
			toast.error(error.message)
		},
	})

	return (
		<>
			{console.log(id,vote)}
			<button onClick={() => { castVote.write() }}>
				{vote == 0 ? (<>Reject</>) : (<>Approve</>)}
			</button>
		</>
	)
}