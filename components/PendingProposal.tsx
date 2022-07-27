import styles from "../styles/ProposalPages.module.css";
import pendingProposals from "../data/pendingProposals.json";
import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from "../utils/constants";
import { useContractRead, useContractReads } from "wagmi";
import { useState } from "react";
import Link from "next/link";
import { FixedNumber } from "ethers";

type Props = {
  index: number;
};

export default function Proposal({ index }: Props) {
  const [id, setId] = useState(0);
  const [approved, setApproved] = useState(0);
  const [rejected, setRejected] = useState(0);
  const [abstained, setAbstained] = useState(0);
  const [startBlock, setStartBlock] = useState(0);
  const [endBlock, setEndBlock] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [status, setStatus] = useState("");

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
  // fetches proposals from blockchain
  useContractRead({
    addressOrName: GOVERNANCE_ADDRESS,
    contractInterface: GOVERNANCE_ABI,
    functionName: "proposals",
    watch: false,
    args: [index],
    onSuccess(data) {
      setId(parseInt(data.id._hex));
      setApproved(parseInt(data.forVotes._hex));
      setRejected(parseInt(data.againstVotes._hex));
      setStartBlock(parseInt(data.startBlock._hex));
      setEndBlock(parseInt(data.endBlock._hex));
      setAbstained(parseInt(data.abstainVotes._hex));
      setTotalVotes(
        parseInt(data.forVotes._hex) +
          parseInt(data.againstVotes._hex) +
          parseInt(data.abstainVotes._hex)
      );
    },
  });

  if (!(status == "Active" || status == "Pending")) return <></>;
  else {
    return (
      <>
        <Link href={`/proposal/${index}`}>{`Proposal ${index}`}</Link>
        <div className={styles.proposal}>
          <p>ID: {id}</p>
          <p>Approved: {approved}</p>
          <p>Rejected: {rejected}</p>
          <p>Abstained: {abstained}</p>
          <p>Total Votes: {totalVotes}</p>
          <p>StartBlock: {startBlock}</p>
          <p>EndBlock: {endBlock}</p>
          <p>Status: {status}</p>
        </div>
        <br />
      </>
    );
  }
}
