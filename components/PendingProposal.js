import styles from '../styles/ProposalPages.module.css'
import pendingProposals from '../data/pendingProposals.json'
import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '../utils/constants'
import { useContractRead, useContractReads } from 'wagmi'
import { useState } from 'react';
import Link from 'next/link';

export default function Proposal({ index }) {




    const [proposalCount, setProposalCount] = useState(-999)
    const [proposals, setProposals] = useState([])

    const [id, setId] = useState(null)
    const [approved, setApproved] = useState(0)
    const [rejected, setRejected] = useState(0)
    const [abstained, setAbstained] = useState(0)
    const [startBlock, setStartBlock] = useState(0)
    const [endBlock, setEndBlock] = useState(0)
    const [executed, setExecuted] = useState(false)
    const [cancelled, setCancelled] = useState(false)
    const [totalVotes, setTotalVotes] = useState(0)
    // const [url, setUrl] = useState('proposal/')

    // // gets the total number of proposals submitted
    // const getProposalCount = useContractRead({
    //     addressOrName: GOVERNANCE_ADDRESS,
    //     contractInterface: GOVERNANCE_ABI,
    //     functionName: 'proposalCount',
    //     watch: true,
    //     onSuccess(data) {

    //         setProposalCount(parseInt(data))
    //         console.log('Found proposal count', proposalCount)
    //     }
    // })


    // fetches proposals from blockchain
    const getProposals = useContractRead({
        addressOrName: GOVERNANCE_ADDRESS,
        contractInterface: GOVERNANCE_ABI,
        functionName: 'proposals',
        watch: false,
        args: [
            index
        ],
        onSuccess(data) {
            console.log('Success', data)
            setId(parseInt(data.id._hex))
            setApproved(parseInt(data.forVotes._hex))
            setRejected(parseInt(data.againstVotes._hex))
            setStartBlock(parseInt(data.startBlock._hex))
            setEndBlock(parseInt(data.endBlock._hex))
            setExecuted(data.executed)
            setCancelled(data.cancelled)
            setAbstained(parseInt(data.abstainVotes._hex))
            setTotalVotes(parseInt(data.forVotes._hex) + parseInt(data.againstVotes._hex) + parseInt(data.abstainVotes._hex))

        }
    })


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
            {executed || cancelled ? (
                <div className={styles.proposal}>
                    <p>
                        ID: {id}
                    </p>
                    <p>
                        This proposal has been closed. Please visit the closed proposals page to see more.
                    </p>
                </div>

            ) : (
                <>
                    
                    <div className={styles.proposal}>
                        <p>
                            ID: {id}
                        </p>
                        <p>
                            Approved: {approved}
                        </p>
                        <p>
                            Rejected: {rejected}
                        </p>
                        <p>
                            Abstained: {abstained}
                        </p>
                        <p>
                            Total Votes: {totalVotes}
                        </p>
                        <p>
                            StartBlock: {startBlock}
                        </p>
                        <p>
                            EndBlock: {endBlock}
                        </p>
                        <p>
                            Status: {executed || cancelled ? ('Closed') : ('Pending')}
                        </p>
                    </div>
                    <br />
                </>
            )}



        </>

    )
}