import React, { useEffect, useState } from 'react'
import InfoBox from '../components/InfoBox'
import { getBurned } from '../utils/getBurned'
// import '../styles/styling.css'


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
		<>
			<div className='flex items-center h-screen space-x-10 p-10'>
				<div className='flex-1'>
					<InfoBox title="Price" text={burned} />
					<InfoBox title="Token Threshold" text="123" />
				</div>


				<div className='flex-1'>
					<InfoBox title="APR" text="456" />
					<InfoBox title="Total Staked" text="789" />
				</div>
			</div>
		</>
	)
}

export default Stake