import { useRouter } from "next/router";
import styles from '../../styles/ProposalPages.module.css'
import Proposal from '../../components/PendingProposal'

export default function proposalDetails() {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <h1 className={styles.header}>Proposal details for proposal {id}</h1>
            <div className={styles.box}>
                <div>
                    <Proposal index={id} />
                </div>
            </div>

        </>
    )

}