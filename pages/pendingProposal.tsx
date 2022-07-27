import styles from '../styles/ProposalPages.module.css'
import Proposal from '../components/PendingProposal'

import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '../utils/constants'
import { useContractRead, useContractReads } from 'wagmi'
import { useState } from 'react';

import React from 'react';
import { data } from 'autoprefixer';


export default function PendingProposal() {


<<<<<<< HEAD
    const [proposalCount, setProposalCount] = useState(-99)

    const empty: number[] = []
    const [array1, setArray1] = useState([])
=======
    const [proposalCount, setProposalCount] = useState(0)
    const [array1, setArray1] = useState<number[]>([])
>>>>>>> bb153fa0c0fa5762d3a31530514699dfe421c6d1

    // gets the total number of proposals submitted
    const getProposalCount = useContractRead({
        addressOrName: GOVERNANCE_ADDRESS,
        contractInterface: GOVERNANCE_ABI,
        functionName: 'proposalCount',
        watch: true,
        onSuccess(data) {
            setProposalCount(parseInt(data.toString()))
            console.log('Found proposal count', proposalCount)
            setArray()
        }
    })

    function setArray() {
<<<<<<< HEAD
        //let array = []
        for (let i = 1; i <= proposalCount; i++) {
            if (array1.length < proposalCount) {
                 array1.push(i)
                //setArray1([...array, i])
            }
        }
       // setArray1(array1.reverse())
=======
        let array = [];
        for (let i = 1; i <= proposalCount; i++) {
            array.unshift(i);
        }
        setArray1(array);
>>>>>>> bb153fa0c0fa5762d3a31530514699dfe421c6d1
    }

    return (
        <>
            <h1 className={styles.header}>Pending Proposals</h1>
            <div className={styles.box}>
                {array1.map((i) => (
                    <div key={i}>                           
                        <Proposal index={i} />
                    </div>
                ))}
            </div>
        </>
    )
}