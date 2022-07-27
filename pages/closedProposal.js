import styles from '../styles/ProposalPages.module.css'
import Proposal from '../components/ClosedProposal'

import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '../utils/constants'
import { useContractRead, useContractReads } from 'wagmi'
import { useState } from 'react';

import React from 'react';
import { data } from 'autoprefixer';


export default function ClosedProposal() {

    const [proposalCount, setProposalCount] = useState(-99)

    const [array1, setArray1] = useState([])

    
    // gets the total number of proposals submitted
    useContractRead({
        addressOrName: '0x7cF5441501D186AF1D2ba31fD46608B09D430E08',
        contractInterface: GOVERNANCE_ABI,
        functionName: 'proposalCount',
        watch: true,
        onSuccess(data) {
            setProposalCount(parseInt(data))
            console.log('Found proposal count', proposalCount)
            setArray()
        }
    })

    function setArray() {
        for (let i = array1.length+1; i <= proposalCount; i++) {
                array1.push(i)
                console.log("setArray is ")
                console.log(array1)
        }
    }


    return (
        <>
            <h1 className={styles.header}>Closed Proposals</h1>
            <div className={styles.box}>
                {array1.map((i) => (
                    <div key={i}>
                        <Proposal index={i} />
                    </div>
                ))
                }
            </div>
        </>
    )
}