import styles from "../styles/ProposalPages.module.css";
import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from "../utils/constants";
import { useAccount, useContractRead, useContractReads } from "wagmi";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { formatUnits } from "ethers/lib/utils";

type Props = {
  index: number;
};

export default function Proposal({ index }: Props) {
  const [id, setId] = useState(0);
  const [approved, setApproved] = useState('');
  const [rejected, setRejected] = useState('');
  const [abstained, setAbstained] = useState('');
  const [startBlock, setStartBlock] = useState(0);
  const [endBlock, setEndBlock] = useState(0);
  const [executed, setExecuted] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [totalVotes, setTotalVotes] = useState('');
  const [status, setStatus] = useState("");

  // fetches proposals from blockchain
  useContractRead({
    addressOrName: GOVERNANCE_ADDRESS,
    contractInterface: GOVERNANCE_ABI,
    functionName: "proposals",
    watch: false,
    args: [index],
    onSuccess(data) {
      setId(parseInt(data.id._hex));
      setApproved(formatUnits(data.forVotes.toString(), 18));
      setRejected(formatUnits(data.againstVotes.toString(), 18));
      setAbstained(formatUnits(data.abstainVotes.toString(), 18));
      setTotalVotes(formatUnits(data.forVotes.add(data.againstVotes.add((data.abstainVotes)), 18)));
      setStartBlock(parseInt(data.startBlock._hex));
      setEndBlock(parseInt(data.endBlock._hex));
      setExecuted(data.executed);
      setCancelled(data.cancelled);
    },
  });

  useContractRead({
    addressOrName: GOVERNANCE_ADDRESS,
    contractInterface: GOVERNANCE_ABI,
    functionName: "state",
    chainId: 80001,
    watch: true,
    args: [index],
    onSuccess(data) {
      let state = parseInt(data.toString());
      switch (state) {
        case 0:
          setStatus("Pending");
          break;
        case 1:
          setStatus("Active");
          break;
        case 2:
          setStatus("Canceled");
          break;
        case 3:
          setStatus("Defeated");
          break;
        case 4:
          setStatus("Succeeded");
          break;
        case 5:
          setStatus("Queued");
          break;
        case 6:
          setStatus("Expired");
          break;
        case 7:
          setStatus("Executed");
          break;
      }
    },
  });

  const getVoteString = (vote: number) => {
    switch (vote) {
      case 0:
        return 'Against';
      case 1:
        return 'For';
      case 2:
        return 'Abstain'
      default:
        return 'Abstain'
    }
  }
  
  const {address} = useAccount()

  const getReceipt = useContractRead({
    addressOrName: GOVERNANCE_ADDRESS,
    contractInterface: GOVERNANCE_ABI,
    functionName: 'getReceipt',
    watch: false,
    args: [
      index,
      address
    ],
    onSuccess(data) {
        console.log(data)
    },
  })

  const proposal = useRef({
    Audits: "",
    "Good Reward Allocation": "",
    "Guardian Name": "",
    "Guardian Social Handle": "",
    "Guardian Wallet": "",
    "Lite/Whitepaper": "",
    "Project Ethereum Wallet": "",
    "Project Summary": "",
    Proposal: "",
    "Reward Distribution Terms": "",
    "Social Docs": "",
  });

  var query = `query {
    proposal (id: ${index}) {
      description
    }
  }`;

  useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/clearlyrubix/poggers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        try {
          proposal.current = JSON.parse(data.data.proposal.description);
        } catch (e) {
          console.log(e)
        }
      });
  });

  if (status == "Active" || status == "Pending" || status == "") return <></>;
  else {
    return (
      <>
        <Link href={`/proposal/${index}`}>
        <div className={styles.proposal}>
          <p>Name: {proposal.current.Proposal}</p>
          <p>ID: {id}</p>
          <div className="grid grid-cols-2 grid-rows-2 text-xl">
            <p className="text-left">
              Approved {Math.round((parseInt(approved) / parseInt(totalVotes)) * 100 * 100) / 100}%
            </p>
            <p className="text-left">Result: {status}</p>
            <p className="text-left">
              Rejected {Math.round((parseInt(rejected) / parseInt(totalVotes)) * 100 * 100) / 100}%
            </p>
            <p className="text-left">You Voted: {getReceipt.data?.hasVoted ? getVoteString(getReceipt.data?.support) : 'N/A'}</p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2">
            <p className="text-left">Approved: {approved}</p>
            <p className="text-right">Abstained: {abstained}</p>
            <p className="text-left">Rejected: {rejected}</p>
            <p className="text-right">Total Votes: {totalVotes}</p>
          </div>

          <p>Start block: {startBlock}</p>
          <p>End block: {endBlock}</p>
        </div>
        </Link>
      </>
    );
  }
}
