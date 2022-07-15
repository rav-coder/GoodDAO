import styles from '../styles/ProposalPages.module.css'
import Proposal from '../components/PendingProposal'
import { useState } from 'react'
import pendingProposals from '../data/pendingProposals.json'

export default function submitProposals() {

    const [proposals, submitProposal] = useState(pendingProposals)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
   

    const submit = (e) => {
        const id = Object.keys(pendingProposals).length
        console.log(id)
        const newProposal = { id, ...e}
        submitProposal([proposals, newProposal])

    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name) {
            alert('fill the blanks')
            return
        }

        submit({name, description})
        setName('')
        setDescription('')

    }

    return (
        <>
            <h1 className={styles.header}>Submit Proposals</h1>
            <div className={styles.box}>
                <form onSubmit={onSubmit}>
                    <h2>Name of the Guardian submitting the Proposal.</h2>
                    <input className={styles.input1} type={'text'}/>

                    <br/>
                    <br/>
                    <h2>Guardian Discord or Twitter Handle.</h2>
                    <input className={styles.input1} type={'text'}/>

                    <br/>
                    <br/>
                    <h2>Guardian Wallet Address.</h2>
                    <input className={styles.input1} type={'text'}/>

                    <br/>
                    <br/>
                    <h2>What is the name of the Project?</h2>
                    <input className={styles.input1}  type={'text'} value={name} onChange={(e) => setName(e.target.value)} />

                    <br/>
                    <br/>
                    <h2>Provide a short description of the Project, and why it is suitable for investment from the CULT.</h2>
                    <textarea className={styles.input1} type={'text'} value={description} onChange={(e) => setDescription(e.target.value)}/>

                    <br/>
                    <br/>
                    <h2>Please provide either an investment deck, a Litepaper or a whitepaper. This must include your tokenomics, will all current token owners, your projected future fund raise and all details.</h2>
                    <input className={styles.input1} type={'text'}/>

                    <br/>
                    <br/>
                    <h2>Provide all social channels associated with the project.</h2>
                    <textarea className={styles.input1} type={'text'}/>

                    <br/>
                    <br/>
                    <h2>Provide links to the audited token and contracts.</h2>
                    <input className={styles.input1} type={'text'}/>

                    <br/>
                    <br/>
                    <h2>Provide the percentage of the token supply being offered in return for 13 Ethereum worth of investment.</h2>
                    <br/> 1
                    <input className={styles.input2} type={'range'} min={1} max={5} step={0.25}/>
                    5
                    

                    <br/>
                    <br/>
                    <h2>Provide the rate at which the investee token will be swapped for CULT. For example X% per day, week or month, for x number of months.</h2>
                    <input className={styles.input2} type={'number'}/>
                     % per 
                    <select className={styles.input2} type={'text'}>
                        <option>Day</option>
                        <option>Week</option>
                        <option>Month</option>
                    </select>

                    <br/>
                    <br/>
                    <h2>Confirm 50% of the CULT once swapped will be sent to our dCULT contract and 50% sent to a burn wallet.</h2>
                    <input className={styles.input2} type={'checkbox'}/>

                    <br/>
                    <br/>
                    <h2>Confirm that the anticipated IDO date is within 12 weeks of the end date of the proposal.</h2>
                    <input className={styles.input2} type={'checkbox'}/>


                    <br/>
                    <br/>
                    <h2>Provide the main ethereum wallet for the project.</h2>
                    <input className={styles.input1} type={'text'}/>
                    <br/>
                    <br/>

                    <input type='submit' className={styles.submit} value='Submit'/>
                       
                </form>
            </div>
        </>
    )
}