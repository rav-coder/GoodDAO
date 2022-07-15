import React, { useEffect, useState } from 'react'
import InfoBox from '../components/InfoBox'
import StakeBox from '../components/StakeBox'
import { getApr } from '../utils/getApr'
import { getBurned } from '../utils/getBurned'
import { getStaked } from '../utils/getStaked'
import { getThreshold } from '../utils/getThreshold'
import { useContractRead, useContractReads } from 'wagmi'
import { GIVE_ABI, GIVE_TOKEN, GOOD_ABI, GOOD_TOKEN, GIVE_DAI_LP, DAI_TOKEN, DAI_ABI } from '../utils/constants'
import { BigNumber } from 'ethers'

const Stake = () => {

	const [burned, setBurned] = useState('')
	const [staked, setStaked] = useState('')
	const [threshold, setThreshold] = useState('')
	const [apr, setApr] = useState('')
	const [balanceOf, setBalanceOf] = useState(-99)
	const [balanceOfQuote, setBalanceOfQuote] = useState(-99)
	const [decimals, setDecimals] = useState(-99)

	var totalSupply = "-99";
	
	useContractRead({
		addressOrName: GOOD_TOKEN,
		contractInterface: GOOD_ABI,
		functionName: 'totalSupply',
	
		onSuccess(data) {
			//console.log('Success', data)
			totalSupply = parseFloat(data.toString()) / (10 ** 18) + "";
			//console.log(totalSupply);
			setThreshold(totalSupply.replace(/\B(?=(\d{3})+(?!\d))/g, ","))
		},
	})

	useContractRead({
		addressOrName: GOOD_TOKEN,
		contractInterface: GOOD_ABI,
		functionName: 'balanceOf',
		
		args: [
			GIVE_DAI_LP
		],
	
		onSuccess(data) {
			//console.log('Success', data)
			setBalanceOf(parseFloat(data.toString()));
			//console.log(totalSupply);
		},
	})

	useContractRead({
		addressOrName: DAI_TOKEN,
		contractInterface: DAI_ABI,
		functionName: 'balanceOf',
		
		args: [
			GIVE_DAI_LP
		],
	
		onSuccess(data) {
			//console.log('Success', data)
			setBalanceOfQuote(parseFloat(data.toString()));
			//console.log(totalSupply);
		},
	})

	useContractRead({
		addressOrName: GOOD_TOKEN,
		contractInterface: GOOD_ABI,
		functionName: 'decimals',

		onSuccess(data) {
			//console.log('Success', data)
			setDecimals(parseFloat(data.toString()));
			//console.log(totalSupply);
		},
	})

	const quoteTokenAmountTotal = balanceOfQuote / (10 ** decimals)
	const tokenAmountTotal = balanceOf / (10 ** decimals)
	const tokenPriceVsQuote = +(quoteTokenAmountTotal / tokenAmountTotal).toFixed(8)
	
	useEffect(() => {
		const callData = async () => {
			//setBurned(await getBurned())
			setStaked(await getStaked())
			//setThreshold(await getThreshold())
			//setThreshold(totalSupply)
			setApr(await getApr(tokenPriceVsQuote))
		}
		callData()
	}, []);


  return (
	<div className='flex h-screen space-x-10 p-10 items-center'>
		<div className='flex flex-1 flex-col h-screen pt-[200px] pb-60 justify-between px-20'>
			<InfoBox title="Price" text={tokenPriceVsQuote.toString()}/>
			<InfoBox title="Token Threshold" text={threshold}/>
		</div>
		<div className=' flex-1 '>
			<StakeBox/>
		</div>
		<div className='flex flex-1 flex-col h-screen pt-[200px] pb-60 justify-between px-20'>
			<InfoBox title="APR" text={apr}/>
			<InfoBox title="Total Staked" text={staked}/>
		</div>
	</div>
	
  )
}

export default Stake