import styles from '../styles/ProposalPages.module.css'
import pendingProposals from '../data/pendingProposals.json'
import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '../utils/constants'
import { useContractRead, useContractReads } from 'wagmi'
import { useState } from 'react';
import { parseBytes32String } from 'ethers/lib/utils';

export default function Proposal() {


    const [proposalCount, setProposalCount] = useState(-999)
    const [proposals, setProposals] = useState([])
    const [index, setIndex] = useState(1)

    // gets the total number of proposals submitted
    const getProposalCount = useContractRead({
        addressOrName: GOVERNANCE_ADDRESS,
        contractInterface: GOVERNANCE_ABI,
        functionName: 'proposalCount',
        watch: false,
        onSuccess(data) {

            setProposalCount(parseInt(data))
            console.log('Found proposal count', proposalCount)
        }
    })


    // fetches proposals from blockchain
    var getProposals = useContractRead({
        addressOrName: GOVERNANCE_ADDRESS,
        contractInterface: GOVERNANCE_ABI,
        functionName: 'proposals',
        watch: false,
        args: [
            index
        ],
        onSuccess(data) {
            console.log('Success', data)

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
            {/* {success ? (<div>hello world</div>) : (console.log(success))} */}

            {/* {proposals.forEach(element => {
                <div className={styles.proposal}>
                <p>
                    ID: {proposal.id}
                </p>
                <p>
                    Approved: {proposal.forVotes}
                </p>
                <p>
                    Rejected: {proposal.againstVotes}
                </p>
                <p>
                    Time left: 99999999
                </p>
                <p>
                    Total votes: 999999999
                </p>
            </div>
            })}; */}




            {/* {getProposals.data.map((proposal) => (
            <div className={styles.proposal}>
                <p>
                    ID: {proposal.id}
                </p>
                <p>
                    Approved: {proposal.forVotes}
                </p>
                <p>
                    Rejected: {proposal.againstVotes}
                </p>
                <p>
                    Time left: 99999999
                </p>
                <p>
                    Total votes: 999999999
                </p>
            </div>
        ))} */}

            {/* {proposals.map((proposal) => (proposal.map((p) => (
                <div className={styles.proposal}>
                <p>
                    ID: {p.id}
                </p>
                <p>
                    Approved: {p.forVotes}
                </p>
                <p>
                    Rejected: {p.againstVotes}
                </p>
                <p>
                    Time left: 99999999
                </p>
                <p>
                    Total votes: 999999999
                </p>


            </div>
            ))))} */}

            {/* <div className={styles.proposal}>
                <p>
                    ID: {getProposals.data.id}
                </p>
                <p>
                    Approved: {getProposals.data.forVotes}
                </p>
                <p>
                    Rejected: {getProposals.data.againstVotes}
                </p>
                <p>
                    Time left: 99999999
                </p>
                <p>
                    Total votes: 999999999
                </p>
            </div> */}

        </>

    )
}