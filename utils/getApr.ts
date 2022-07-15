import { useContractRead, useContractReads } from 'wagmi'
import { GIVE_ABI, GIVE_TOKEN, GOOD_ABI, GOOD_TOKEN } from '../utils/constants'
import BigNumber from 'bignumber.js'

const BSC_BLOCK_TIME = 1
const GOOD_PER_BLOCK = new BigNumber(3)
const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 2628000
const GOOD_PER_YEAR = GOOD_PER_BLOCK.times(BLOCKS_PER_YEAR)


/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param goodPriceUsd good price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @returns
 */
const getFarmApr = (poolWeight: BigNumber, goodPriceUsd: BigNumber, poolLiquidityUsd: BigNumber): number => {
	const yearlygoodRewardAllocation = GOOD_PER_YEAR.times(poolWeight)
	const apr = yearlygoodRewardAllocation.times(goodPriceUsd).div(poolLiquidityUsd).times(100)
	return apr.isNaN() || !apr.isFinite() ? -99 : apr.toNumber()
  }

export const getApr = async (_tokenPriceVsQuote: number) => {
	const apr = +(getFarmApr(new BigNumber(10), new BigNumber(_tokenPriceVsQuote), new BigNumber(10000))).toFixed(4) // placeholder values
	return apr + "%"
}
