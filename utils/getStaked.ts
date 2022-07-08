import { ethers } from "ethers";
import { GIVE_ABI, GIVE_TOKEN, RPC_URL } from "./constants";

const provider = new ethers.providers.JsonRpcProvider(RPC_URL)
const abi = GIVE_ABI

const GiveToken = new ethers.Contract(GIVE_TOKEN, abi, provider)

export const getStaked = async () => {
	let supply = await GiveToken.totalSupply()
	return supply.toString()
}
