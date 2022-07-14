import styles from '../styles/ProposalPages.module.css'
import pendingProposals from '../data/pendingProposals.json'

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
                    Time left: 99999999
                </p>
                <p>
                    Total votes: 999999999
                </p>
            </div>
        ))}

        </>
        
    )
}