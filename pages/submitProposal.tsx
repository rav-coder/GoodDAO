import styles from '../styles/ProposalPages.module.css'
import Proposal from '../components/PendingProposal'
import { useState } from 'react'
import pendingProposals from '../data/pendingProposals.json'
import { ethers } from "ethers";
import Link from 'next/link'

import { formatUnits } from 'ethers/lib/utils'
import { toast } from 'react-toastify'
import { useContractReads, useContractWrite } from 'wagmi'
import { IGIVE_ABI, IGIVE_TOKEN, GOOD_ABI, GOOD_TOKEN, GOVERNANCE_ABI, GOVERNANCE_ADDRESS, RPC_URL } from '../utils/constants'
import Web3 from 'web3'

function encodeParameters(types: string[], values:string[]) {
  let web3 = new Web3(RPC_URL);
  const abi = new ethers.utils.AbiCoder();

  try{
    return abi.encode(types, values);
  } catch (error){
    //console.log(values[0].length)
    if(values[0].length == 42){
      toast.error("Invalid wallet address.");
    }
    return values;
  }
  
}

export default function SubmitProposals() {

  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [guardianName, setGuardianName] = useState('')
  const [guardianSocialHandle, setGuardianSocialHandle] = useState('')
  const [proposal, setProposal] = useState('')
  const [whitepaper, setWhitepaper] = useState('')
  const [socialDocs, setSocialDocs] = useState('')
  const [audits, setAudits] = useState('')
  const [rewardAllocation, setRewardAllocation] = useState('3')
  const [rewardDistributionP, setRewardDistributionP] = useState('')
  const [rewardDistributionT, setRewardDistributionT] = useState('Day')
  const [projectWallet, setProjectWallet] = useState('')

  var obj = {
    Proposal: proposal,
    "Guardian Name": guardianName,
    "Guardian Social Handle": guardianSocialHandle,
    "Guardian Wallet": address,
    "Project Summary": description,
    "Lite/Whitepaper": whitepaper,
    "Social Docs": socialDocs,
    Audits: audits,
    "Good Reward Allocation": rewardAllocation,
    "Reward Distribution Terms": rewardDistributionP + "% per " + rewardDistributionT,
    "Project Ethereum Wallet": projectWallet

  }
  // obj["Proposal"] = proposal;
  // obj["Guardian Name"]  = guardianName;
  // obj["Guardian Social Handle"] = guardianSocialHandle;
  // obj["Guardian Wallet"] = address;
  // obj["Project Summary"]  = description;
  // obj["Lite/Whitepaper"] = whitepaper;
  // obj["Social Docs"] = socialDocs;
  // obj.Audits  = audits;
  // obj["Good Reward Allocation"] = rewardAllocation;
  // //  obj["Reward Distribution Percent"] = rewardDistributionP;
  // //  obj["Reward Distribution TimeFrame"] = rewardDistributionT;
  // obj["Reward Distribution Terms"] = rewardDistributionP + "% per " + rewardDistributionT;
  // obj["Project Ethereum Wallet"] = projectWallet;

  var jsonString= JSON.stringify(obj);

  const propose = useContractWrite(
    {
    addressOrName: GOVERNANCE_ADDRESS,
    contractInterface: GOVERNANCE_ABI,
    functionName: 'propose',
    chainId: 80001,
    args: [
      [GOVERNANCE_ADDRESS],
      [0],
      ["_setInvesteeDetails(address)"],
      [encodeParameters(["address"], [projectWallet])],
      jsonString
    ],
    onSuccess(data) {
      toast.success('Proposal Submitted!')
      //console.log(data);
    },
    onError(error: any) {

      toast.error(error.message)

      if(error.error != null){

        toast.error(error.error.data.message);
      
        // console.log(error.error.data.code);

        // if(error.error.code = '-32603'){
        //   if(error.error.data.code = '3'){
        //     toast.error("Only guardians can submit a proposal.");
        //   }
        //   else{
        //     toast.error("One live proposal already exists for guardian.");
        //   }

        // }
        // else{
        // }

      }
      else{
        toast.error(error.message)
      }

    }
  })

  return (
    <>
      <h1 className={styles.header}>Submit Proposals</h1>
      <div className={styles.box}>
        <form id="myForm">
          <h2>Name of the Guardian submitting the Proposal.</h2>
          <input className={styles.input1} type={'text'} value={guardianName} onChange={(e) => { setGuardianName(e.target.value) }} required/>

          <br />
          <br />
          <h2>Guardian Discord or Twitter Handle.</h2>
          <input className={styles.input1} type={'text'} value={guardianSocialHandle} onChange={(e) => { setGuardianSocialHandle(e.target.value) }} required/>

          <br />
          <br />
          <h2>Guardian Wallet Address.</h2>
          <input className={styles.input1} type={'text'} value={address} onChange={(e) => { setAddress(e.target.value) }}  required/>

          <br />
          <br />
          <h2>What is the name of the Project?</h2>
          <input className={styles.input1} type={'text'} value={proposal} onChange={(e) => { setProposal(e.target.value) }}  required/>

          <br />
          <br />
          <h2>Provide a short description of the Project, and why it is suitable for investment from GOOD.</h2>
          <textarea className={styles.input1} rows={5} value={description} onChange={(e) => { setDescription(e.target.value) }}  required/>

          <br />
          <br />
          <h2>Please provide either an investment deck, a Litepaper or a whitepaper. This must include your tokenomics, will all current token owners, your projected future fund raise and all details.</h2>
          <input className={styles.input1} type={'text'} value={whitepaper} onChange={(e) => { setWhitepaper(e.target.value) }}  required/>

          <br />
          <br />
          <h2>Provide all social channels associated with the project.</h2>
          <textarea className={styles.input1} value={socialDocs} onChange={(e) => { setSocialDocs(e.target.value) }}  required/>

          <br />
          <br />
          <h2>Provide links to the audited token and contracts.</h2>
          <input className={styles.input1} type={'text'} value={audits} onChange={(e) => { setAudits(e.target.value) }} required/>

          <br />
          <br />
          <h2>Provide the percentage of the token supply being offered in return for 6 Ethereum worth of investment.</h2>
          1
          <input className={styles.input2} name="amountRange" type={'range'} min={1} max={5} step={0.25} value={rewardAllocation} 
          onChange={(e) => { setRewardAllocation(e.target.value) }} required/>
          5
          <div className="ml-20 -mt-3.5"><span>{rewardAllocation}</span></div>
          <br />
          <h2>Provide the rate at which the investee token will be swapped for GOOD. For example X% per day, week or month, for x number of months.</h2>
          <input className={styles.input2} type={'number'} value={rewardDistributionP} 
          onChange={(e) => { setRewardDistributionP(e.target.value) }} />
          <span> % per </span>
          <select className={styles.input2} value={rewardDistributionT} onChange={(e) => { setRewardDistributionT(e.target.value) }} required>
            <option>Day</option>
            <option>Week</option>
            <option>Month</option>
          </select>

          <br />
          <br />
          <h2>Confirm 50% of the GOOD once swapped will be sent to our iGIVE contract and 50% sent to a burn wallet.</h2>
          <input className={styles.input2} type={'checkbox'} required/>

          <br />
          <br />
          <h2>Confirm that the anticipated IDO date is within 12 weeks of the end date of the proposal.</h2>
          <input className={styles.input2} type={'checkbox'} required/>


          <br />
          <br />
          <h2>Provide the main ethereum wallet for the project.</h2>
          <input className={styles.input1} type={'text'} value={projectWallet} onChange={(e) => { setProjectWallet(e.target.value) }} required/>
          <br />
          <br />

          {/* <button type="Submit" onClick={ (event) => { event.preventDefault(); propose.write(); } } className={styles.submit}> */}
          <button type="submit" onClick={ (event) => { if(!document.getElementById('myForm')?.checkValidity()! ) { } 
          else{ event.preventDefault(); propose.write(); } } } className={styles.submit}>
          Submit
          </button>

        </form>   

      </div>

    </>
  )
}