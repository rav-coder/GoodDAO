import React from 'react'
import Accordion from "../components/Accordion";
import { GOOD_TOKEN, IGIVE_TOKEN } from '../utils/constants';

export default function Faqs() {
    return (
        <div className="fixed top-0 w-full mt-32">	
	        <div className="container px-5 pb-5 mx-auto max-w-screen-xl max-h-[78vh] flex-grow !overflow-y-auto">
                <div className="mb-10 font-bold text-2xl brand-500">
                FAQ & Explanations
                </div>
                <Accordion>
                    <div id="What is a DAO?" >
                        <p className="mb-3">
                        A DAO is a Decentralised Autonomous Organization. The definition of which is argued almost as much, and by almost as many, 
                        who squabble between themselves in left wing politics.
                        </p>
                        <p className="mb-3">
                        A DAO in its purest form is what we have created with GOOD DAO. Once GOOD DAO launches, it will function forever more with no human interference 
                        beyond what has been coded for it to be influenced by, which is votes from its holders. 
                        </p>
                        <p>
                        Nobody can dismantle the code and nobody can stop it collecting funds and sending them to those furthering our cause, as long as the token 
                        is traded & as long as people are passing proposals, GOOD will live on.
                        </p>
                    </div>

                    <div id="What is GOOD DAO?" >
                        <p>
                        Good DAO seeks to fast forward the collapse of the global economic order and to grant the charitable programs seeking the same goal.
                        </p>
                    </div>

                </Accordion>
                    
                <div className="my-5 font-bold text-xl brand-500">
                    GOOD Token
                </div>

                <Accordion>

                    <div id="What is GOOD?" >
                        <p>
                        GOOD is the tradable and liquid token of Good DAO grant maker. Transacting GOOD will contribute to the protocol by filling the DAO treasury slowly, 
                        to fund investments into decentralized technologies. This is achieved due to a 0.3% collection on all GOOD transactions that goes straight to the DAO.
                        </p>
                    </div>

                    <div id="Where can I buy GOOD?" >
                        <p>
                        GOOD is available to buy on the Polygon network from Uniswap.org. The contract address is: {GOOD_TOKEN}
                        </p>
                    </div>

                </Accordion>
                    
                <div className="my-5 font-bold text-xl brand-500">
                    iGIVE
                </div>

                <Accordion>

                    <div id="What is iGIVE?" >
                        <p>
                        iGIVE is just the “proof of stake token” for GOOD. When you stake your GOOD into the DAO, you are given iGIVE, this can be swapped back 
                        at any time into the amount of GOOD you staked originally, plus any fees that were given to the DAO in the time period you owned iGIVE.</p>
                    </div>

                    <div id="How are rewards paid?" >
                        <p className="mb-3">
                        When proposals are approved and an investment is made, the successful project will redistribute the agreed amounts of their token by 
                        selling that allocation into GOOD. They then burn 50% by sending it to a dead wallet, and the other 50% is sent back to the DAO.
                        </p>
                        <p>
                        When those rewards are paid to the DAO, they are distributed to stakers based on their percentage of the total pool. 
                        If you stake after rewards are sent, you are not entitled to any unclaimed rewards, but will be once the next batch is received.
                        </p>
                    </div>

                    <div id="Can I add iGIVE to my wallet?" >
                        <p className="mb-3">
                        iGIVE is non-transferrable, and cannot be obtained by any means other than staking GOOD. You can see your balance in your wallet 
                        by adding the iGIVE contract address.
                        </p>
                        <p>
                        The iGIVE contract address is: {IGIVE_TOKEN}
                        </p>
                    </div>

                </Accordion>
                    
                <div className="my-5 font-bold text-xl brand-500">
                    Staking
                </div>

                <Accordion>

                    <div id="Why stake GOOD?" >
                        <p className="mb-3">
                        Staking GOOD is the basis of the whole protocol. The top stakers (holders of iGIVE) are The Guardians, who are able to submit proposals, 
                        either for their own projects, or on behalf of others.
                        </p>
                        <p className="mb-3">
                        When a proposal for a project is successful, the agreed upon percentage gifted to the DAO by the project is split 50/50. 50% is burned, and 
                        the other 50% is sent to the DAO, and distributed to stakers of GOOD.
                        </p>
                        <p>
                        The more active The Guardians are, and the more engaged the community are with voting good proposals
                        through, the more rewards end up sent to stakers, and returns are higher.
                        </p>
                    </div>

                    <div id="How to Stake GOOD?" >
                        <p className="mb-3">
                        Staking GOOD is a simple process. Navigate to the {`"`}Stake{`"`} page on the GOOD dapp. From here, enter the amount of GOOD you wish to stake, 
                        Approve the transaction, and then complete the Deposit transaction.
                        </p>
                        <p>
                        You will then see you have a balance in iGIVE instead of GOOD.
                        </p>
                    </div>
                    
                    <div id="How to Unstake GOOD?" >
                        <p>
                        To unstake your GOOD, click the Withdraw button, and confirm the transaction in your wallet. Your iGIVE will be converted back to GOOD, 
                        alongside any unclaimed rewards.
                        </p>
                    </div>

                    </Accordion>
                    
                    <div className="my-5 font-bold text-xl brand-500">
                        Rewards
                    </div>
    
                    <Accordion>

                    <div id="How do rewards work?" >
                        <p className="mb-3">
                        Many typical staking pools on other apps are paid out on a {`"`}per block{`"`} basis. This means that the rewards are paid roughly every 15 seconds 
                        (one block) in a linear fashion.
                        </p>
                        <p className="mb-3">
                        GOOD uses an alternative way of distributing rewards, because it is not supplying those rewards via emissions of GOOD.
                        </p>
                        <p className="mb-3">
                        When staking GOOD, the user deposits their GOOD, and it is converted to iGIVE. As rewards are paid out by successful investments into the DAO, 
                        stakers will be able to claim their share, relative to their percentage of the pool.
                        </p>
                        <p>
                        Although staked GOOD is converted to iGIVE, the rewards are paid out in GOOD, and when unstaking, the iGIVE is converted back to GOOD.
                        </p>
                    </div>

                    <div id="Sending Rewards" >
                        <p className="mb-3">
                        If your project was successfully approved, and you are ready to begin distributing your reward allocation to the DAO, you need to convert your token 
                        into GOOD, and then send it to the below address:
                        </p>
                        <p className="mb-3">
                        GIVE Rewards: 0xa09508ef545cCe4Ce09bB2b9f585a212E2D690A4
                        </p>
                        <p className="mb-3">
                        For the 50% burn, please send the tokens for burning to either of the below addresses, as these ones are being tracked by the Staking app.
                        </p>
                        <p className="mb-3">
                        Burn Address 1: 0x000000000000000000000000000000000000dead 
                        </p>
                        <p>
                        Burn Address 2: 0xdead000000000000000042069420694206942069
                        </p>
                    </div>

                    
                    </Accordion>
                    
                    <div className="my-5 font-bold text-xl brand-500">
                        Proposals
                    </div>
    
                    <Accordion>

                    <div id="How do I submit a proposal for funding from the DAO?">
                        <p className="mb-3">
                        To submit proposals to the DAO you must enlist the help of a Guardian, or multiple Guardians. 
                        Only they can put your proposal forward, unless you yourself are one of the top 21 iGIVE holders. 
                        Your protocol must conform to at least two of the three below guidelines, it is for the Guardians & then the Many 
                        to decide if they believe your proposal matches.
                        </p>
                        <p className="mb-3">
                        <ul className='list-disc'>
                            <li className="ml-3">
                                Daily operation on blockchain
                            </li>
                            <li className="ml-3">
                                Further the charitable programs
                            </li>
                            <li className="ml-3">
                                Minimum 50% volunteering value of each program matched
                            </li>
                        </ul>

                        </p>
                        <p>
                        Your Guardians can only take you to the gates, the Many will be the ones who vote on your proposal.
                        </p>
                    </div>

                    <div id="What should be contained in the Proposal?">
                        <p>
                        <ul className='list-disc'>
                            <li className="ml-3">
                                The total supply of the charitable program token
                            </li>
                            <li className="ml-3">
                                The percentage of the total supply being offered in return for 5 ETH times{`'`} grant
                            </li>
                            <li className="ml-3">
                                The tokenomics


                            </li>
                            <li className="ml-3">
                                The audit of the token and any contracts if built

                            </li>
                            <li className="ml-3">
                                The burn and distribution plan
                            </li>
                        </ul>
                        </p>
                    </div>
                    
                </Accordion>
            </div>
        </div>
    )
}