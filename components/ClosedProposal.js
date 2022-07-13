import styles from '../styles/PendingProposal.module.css'
import pendingProposals from '../data/closedProposals.json'

export default function Proposal() {
    return (
        <>

        {pendingProposals.map((proposal) => (
            <div className={styles.proposal}>
                <p>
                    {proposal.description}
                </p>
                <p>
                    Approved: {proposal.approved}
                </p>
                <p>
                    Rejected: {proposal.rejected}
                </p>
                <p>
                    Total votes: 999999999
                </p>
                <p>
                    Result: {proposal.status}
                </p>
            </div>
        ))}

        </>
        
    )
}