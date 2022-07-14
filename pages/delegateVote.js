import styles from '../styles/ProposalPages.module.css'

export default function delegateVote() {
    return (
        <>
            <h1 className={styles.header}>Delegate Vote</h1>
            <div className={styles.box}>

                <h2>Before you can vote, you must assign your voting rights to either yourself, or you can assign it to a third party.</h2>
                <br/>
                <br/>
                

                Enter the Ethereum address of wallet to receive the voting rights.
                <input className={styles.input1} type={'text'} />
                <br/>
                <br/>
                <button className={styles.submit}>
                    Delegate
                </button>
                <br/>
                <br/>
                <p className={styles.p}>
                    By delegating your voting rights, you allow the recipient user to vote any decision on a proposal without your consent, however you can take back your rights by entering your address above and delegating back to yourself. The recipient does not take any ownership of your dCULT tokens.
                </p>
            </div>
        </>
    )
}