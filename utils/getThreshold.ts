import { ethers } from "ethers";
import { GOOD_ABI, GOOD_TOKEN, RPC_URL } from "./constants";

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const abi = GOOD_ABI;
const GoodContract = new ethers.Contract(
  GOOD_TOKEN,
  abi,
  provider
);

export const getThreshold = async () => {

  return "123";
};
