import React, { useEffect, useState } from 'react'
import InfoBox from '../components/InfoBox'
import StakeBox from '../components/StakeBox'
import { getBurned } from '../utils/getBurned'
import { getStaked } from '../utils/getStaked'
import { getThreshold } from '../utils/getThreshold'

const Stake = () => {

	const [burned, setBurned] = useState('')
	const [staked, setStaked] = useState('')
	const [threshold, setThreshold] = useState('')
	const [apr, setApr] = useState('')

	useEffect(() => {
		const callData = async () => {
			setBurned(await getBurned())
			setStaked(await getStaked())
			setThreshold(await getThreshold())
		}

		callData()
	}, [])


  return (
	<div className='flex h-full space-x-10 p-10 items-center'>
		<div className='flex flex-1 flex-col h-full pt-[200px] pb-60 justify-between px-20'>
			<InfoBox title="Price" text={burned}/>
			<InfoBox title="Token Threshold" text={threshold}/>
		</div>
		<div className=' flex-1 '>
			<StakeBox/>
		</div>
		<div className='flex flex-1 flex-col h-full pt-[200px] pb-60 justify-between px-20'>
			<InfoBox title="APR" text="456"/>
			<InfoBox title="Total Staked" text={staked}/>
		</div>
	</div>
	
  )
}

export default Stake