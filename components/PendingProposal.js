import styles from '../styles/ProposalPages.module.css'
import pendingProposals from '../data/pendingProposals.json'
import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '../utils/constants'
import { useContractRead, useContractReads } from 'wagmi'

export default function Proposal() {



    var success = false

    const getProposals = useContractRead({
        addressOrName: GOVERNANCE_ADDRESS,
        contractInterface: GOVERNANCE_ABI,
        functionName: 'proposals',
        watch: true,
        args: [
            1
        ],
        // onSuccess(data) {
        //     success = true
        // 	console.log('Success', data)
        // 	proposals = data

        // }
    })

    var proposals = JSON.stringify(getProposals.data)
    


    return (
        <>

            {success ? (<div>hello world</div>) : (console.log(proposals))}

            {/* proposals.array.forEach(element => {
                
            }); */}




            {/* {proposals.map((proposal) => (
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