import styles from '../styles/ProposalPages.module.css'
import Proposal from '../components/ClosedProposal.js'

export default function closedProposal() {
    return (
        <>
            <h1 className={styles.header}>Closed Proposals</h1>
            <div className={styles.box}>
                <Proposal/>
            </div>
        </>
    )
}