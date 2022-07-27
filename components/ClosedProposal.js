import styles from "../styles/ProposalPages.module.css";
import closedProposals from "../data/closedProposals.json";
import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from "../utils/constants";
import { useContractRead, useContractReads } from "wagmi";
import { useState } from "react";

export default function Proposal({ index }) {
  const [proposalCount, setProposalCount] = useState(-999);
  const [proposals, setProposals] = useState([]);

  const [id, setId] = useState(null);
  const [approved, setApproved] = useState(0);
  const [rejected, setRejected] = useState(0);
  const [abstained, setAbstained] = useState(0);
  const [startBlock, setStartBlock] = useState(0);
  const [endBlock, setEndBlock] = useState(0);
  const [executed, setExecuted] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [totalVotes, setTotalVotes] = useState(0);

  // fetches proposals from blockchain
  useContractRead({
    addressOrName: "0x7cF5441501D186AF1D2ba31fD46608B09D430E08",
    contractInterface: GOVERNANCE_ABI,
    functionName: "proposals",
    watch: false,
    args: [index],
    onSuccess(data) {
      console.log("Success", data);
      setId(parseInt(data.id._hex));
      setApproved(parseInt(data.forVotes._hex));
      setRejected(parseInt(data.againstVotes._hex));
      setAbstained(parseInt(data.abstainVotes._hex));
      setTotalVotes(
        parseInt(data.forVotes._hex) +
          parseInt(data.againstVotes._hex) +
          parseInt(data.abstainVotes._hex)
      );
      setStartBlock(parseInt(data.startBlock._hex));
      setEndBlock(parseInt(data.endBlock._hex));
      setExecuted(data.executed);
      setCancelled(data.cancelled);
    },
  });

  // const compile = () => {
  //     for (let i = 0; i < proposalCount; i++) {
  //         setIndex(i)
  //         const newProposal = getProposals.data
  //         setProposals([proposals, newProposal])
  //     }
  // }
  // // takes all the proposals and puts them into an array
  // const compileProposals = compile()

  return (
    <>
      {console.log(proposals, proposalCount, index)}
      {/* {success ? (<div>hello world</div>) : (console.log(success))} */}

      <div className={styles.proposal}>
        <p>ID: {id}</p>

        <div className="grid grid-cols-2 grid-rows-2 text-xl">
          <p className="text-left">Approved {Math.round(approved/totalVotes*100 * 100)/100}%</p>
          <p className="text-left">
            Result: {executed ? "Executed" : "Defeated"}
          </p>
          <p className="text-left">Rejected {Math.round(rejected/totalVotes*100 * 100)/100}%</p>
          <p className="text-left">Ended: N/A</p>
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
    </>

        // <>
        //   {closedProposals.map((proposal) => {
        //     let total = proposal.approved+proposal.abstained+proposal.rejected

        // return(
        //     <div key={proposal.id} className={styles.proposal}>
        //       <p className="text-xl">ID: {proposal.id}</p>

        //       <div className="grid grid-cols-2 grid-rows-2 text-xl">
        //         <p className="text-left">Approved {Math.round(proposal.approved/total*100 * 100)/100}%</p>
        //         <p className="text-left">Result: {proposal.executed ? "Executed" : "Defeated"}</p>
        //         <p className="text-left">Reject {Math.round(proposal.rejected/total*100 * 100)/100}%</p>
        //         <p className="text-left">Ended: N/A</p>
        //       </div>
        //     <br></br>
        //       <div className="grid grid-cols-2 grid-rows-2">
        //         <p className="text-left w-max">Approved: {proposal.approved}</p>
        //         <p className="text-right">Abstained: {proposal.abstained}</p>
        //         <p className="text-left">Rejected: {proposal.rejected}</p>
        //         <p className="text-right">Total Votes: {total}</p>
        //       </div>
        //     </div>
        //     )
        //     }
        //   )}
        // </>


  );
}
