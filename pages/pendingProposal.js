import styles from '../styles/ProposalPages.module.css'
import Proposal from '../components/PendingProposal'

export default function pendingProposal() {
    return (
        <>
            <h1 className={styles.header}>Pending Proposals</h1>
            <div className={styles.box}>
                <Proposal/>
            </div>
        </>
    )
}