import React, { useEffect, useState } from 'react'
import InfoBox from '../components/InfoBox'
import StakeBox from '../components/StakeBox'
import { getBurned } from '../utils/getBurned'

const Stake = () => {

	const [burned, setBurned] = useState('')

	useEffect(() => {
		const callData = async () => {
			const data = await getBurned()
			setBurned(data)
		}

		callData()
	}, [])


  return (
	<div className='flex h-full space-x-10 p-10 items-center'>
		<div className='flex flex-1 flex-col h-full pt-[200px] pb-60 justify-between px-20'>
			<InfoBox title="Price" text={burned}/>
			<InfoBox title="Token Threshold" text="123"/>
		</div>
		<div className=' flex-1 '>
			<StakeBox/>
		</div>
		<div className='flex flex-1 flex-col h-full pt-[200px] pb-60 justify-between px-20'>
			<InfoBox title="APR" text="456"/>
			<InfoBox title="Total Staked" text="789"/>
		</div>
	</div>
	
  )
}

export default Stake