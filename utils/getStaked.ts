import { ethers } from "ethers";
import { IGIVE_ABI, IGIVE_TOKEN, RPC_URL } from "./constants";

const provider = new ethers.providers.JsonRpcProvider(RPC_URL)
const abi = IGIVE_ABI

const GiveToken = new ethers.Contract(IGIVE_TOKEN, abi, provider)

export const getStaked = async () => {
	let supply = await GiveToken.totalSupply()
	return supply.toString()
}
