import { ethers } from 'ethers'

const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/polygon_mumbai')
const abi = [
	// balanceOf
	{
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
]
const GoodToken = new ethers.Contract('0x7012C6cA8D08faEcA22ab9931F8A60a7eEa53A47', abi, provider)

export const getBalanceOf = async (address: string) => {
	let balance = await GoodToken.balanceOf(address)
	return balance
}