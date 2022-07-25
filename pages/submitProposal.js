import styles from '../styles/ProposalPages.module.css'
import Proposal from '../components/PendingProposal'
import { useState } from 'react'
import pendingProposals from '../data/pendingProposals.json'
import Link from 'next/link'

import { formatUnits } from 'ethers/lib/utils'
import { toast } from 'react-toastify'
import { useContractReads, useContractWrite } from 'wagmi'
import { IGIVE_ABI, IGIVE_TOKEN, GOOD_ABI, GOOD_TOKEN, GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '../utils/constants'


export default function submitProposals() {

  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')

  const submit = useContractWrite({
    addressOrName: GOVERNANCE_ADDRESS,
    contractInterface: GOVERNANCE_ABI,
    functionName: 'propose',
    chainId: 80001,
    args: [
      [address],
      [0],
      [address],
      [0x00],
      JSON.stringify(description)
    ],
    onSuccess(data) {
      toast.success('Proposal Submitted!')
    },
    onError(error) {
      toast.error(error.message)
    }
  })

  
  
    // const submit2 = async (data) => {
    //   try {
    //     const acc = await getAccount();
    //     if (!acc.length) {
    //       return 0;
    //     }
    //     const governanceContract = new web3.eth.Contract(
    //       GOVERNANCE_ABI,
    //       GOVERNANCE_ADDRESS
    //     );
    //     const submit3 = governanceContract.methods
    //       .propose(
    //         [governanceAddress],
    //         [0],
    //         ["_setInvesteeDetails(address)"],
    //         [encodeParameters(["address"], [data.wallet])],
    //         JSON.stringify(data)
    //       )
    //       .send({ from: account[0] });
    //       return submit3;
    //   } catch (error) {
    //     if (error?.code === 4001) {
    //       return error;
    //     } else return { code: 4002 };
    //   }
    // };

  // // const [proposals, submitProposal] = useState(pendingProposals)

  // // const [name, setName] = useState('')
  // // const [description, setDescription] = useState('')

  // // const navigate = useNavigate();



  // // const submit = (e) => {
  // //     const id = Object.keys(pendingProposals).length
  // //     console.log(id)
  // //     const newProposal = { id, ...e}
  // //     submitProposal([proposals, newProposal])
  // //     navigate('./submitted')
  // // }

  // // const onSubmit = (e) => {
  // //     e.preventDefault()
  // //     if(!name) {
  // //         alert('fill the blanks')
  // //         return
  // //     }

  // //     submit({name, description})
  // //     setName('')
  // //     setDescription('')

  // // }

  // const [transactionInProgress, setProgress] = useState(false);
  // // const { networkId } = useSelector(selectProposal);

  // // const dispatch = useDispatch();

  // // const navigate = useNavigate();

  // const notify = (Message) => toast(Message);

  // const slide = useRef("");
  // const slideNumber = useRef("");

  // // setTimeout(() => {
  // //   const slider = slide.current;
  // //   const sliderNumber = slideNumber.current;
  // //   slider.oninput = function () {
  // //     if (this.value === "0.25" || this.value === "5") {
  // //       sliderNumber.innerHTML = " ";
  // //     } else {
  // //       sliderNumber.style.marginLeft = this.value * 19 + "%";
  // //       sliderNumber.innerHTML = this.value;
  // //     }
  // //   };
  // // }, 4000);

  // // useEffect(() => {
  // //   const slider = slide.current;
  // //   const sliderNumber = slideNumber.current;
  // //   slider.oninput = function () {
  // //     if (this.value === "0.25" || this.value === "5") {
  // //       sliderNumber.innerHTML = " ";
  // //     } else {
  // //       sliderNumber.style.marginLeft = this.value * 19 + "%";
  // //       sliderNumber.innerHTML = this.value;
  // //     }
  // //   };
  // // }, []);

  // // useEffect(() => {
  // //   if (networkId !== 137) {
  // //     notify("Wrong Network");
  // //   }
  // // }, []);

  // const validationSchema = Yup.object({
  //   projectName: Yup.string().required("Required"),
  //   shortDescription: Yup.string().required("Required"),
  //   file: Yup.string().required("Required"),
  //   // file: Yup.mixed().required("File is required"),
  //   socialChannel: Yup.string().required("Required"),
  //   links: Yup.string().required("Required"),
  //   range: Yup.string().required("Required"),
  //   rate: Yup.string().required("Required"),
  //   time: Yup.string().required("Required"),
  //   checkbox1: Yup.boolean().oneOf([true], "Required"),
  //   checkbox2: Yup.boolean().oneOf([true], "Required"),
  //   wallet: Yup.string().min(26).required("Required"),
  //   guardianProposal: Yup.string().required("Required"),
  //   guardianDiscord: Yup.string().required("Required"),
  //   guardianAddress: Yup.string().min(26).required("Required"),
  // });

  // const initialValues = {
  //   projectName: "",
  //   shortDescription: "",
  //   file: "",
  //   socialChannel: "",
  //   links: "",
  //   range: "",
  //   rate: "",
  //   time: "Day",
  //   checkbox1: "",
  //   checkbox2: "",
  //   wallet: "",
  //   guardianProposal: "",
  //   guardianDiscord: "",
  //   guardianAddress: "",
  // };

  // const sProposal = async (data) => {
  //   const account = await getAccount();
  //   if (!account.length) {
  //     notify("Please connect with metamask");
  //     return 0;
  //   }

  //   setProgress(true);
  //   const res = await submitProposal(data);
  //   if (res?.code === 4001) {
  //     notify("Transaction Rejected");
  //   } else if (res?.code === 4002) {
  //     notify("Invalid Address");
  //   } else {
  //     dispatch(proposalLoading(true));
  //     try {
  //       const toUpdateProposal = await fetch(
  //         "https://api.cultdao.io/proposal/update",
  //         {
  //           method: "POST",
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //     } catch (e) { }
  //     notify("Transaction Confirmed");
  //     navigate("/proposalOptions");
  //   }
  //   setProgress(false);

  // };

  // const TextInput = ({ label, ...props }) => {
  //   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  //   // which we can spread on <input>. We can use field meta to show an error
  //   // message if the field is invalid and it has been touched (i.e. visited)
  //   const [field, meta] = useField(props);

  //   return (
  //     <div className="m-3 flex flex-col">
  //       <label className="mb-2 w-11/12" htmlFor={props.id || props.name}>
  //         {label}
  //       </label>
  //       <input
  //         className={` ${props.type === "checkbox"
  //           ? "w-6 h-6 mt-4 3xl:w-12 3xl:h-12 2xl:w-8 2xl:h-8"
  //           : "pl-2 w-11/12 border-2 rounded border-slate-400 3xl:h-16"
  //           }`}
  //         {...field}
  //         {...props}
  //       />
  //       {meta.touched && meta.error ? (
  //         <div className="error font-semibold text-sm 2xl:text-2xl 2xl:mt-2">
  //           {meta.error}
  //         </div>
  //       ) : null}
  //     </div>
  //   );
  // }

  // const InputRange = ({ label, ...props }) => {
  //   const [field, meta] = useField(props);
  //   return (
  //     <div className="m-3 flex flex-col">
  //       <label className="mb-2 w-11/12" htmlFor={props.id || props.name}>
  //         {label}
  //       </label>
  //       <input
  //         ref={slide}
  //         className="3xl:mt-3 w-11/12 border-2 rounded border-slate-400 form-range appearance-none h-2 p-0 bg-transparent focus:outline-none focus:ring-1 focus:shadow-none"
  //         {...field}
  //         {...props}
  //       />

  //       <div className="flex relative justify-between w-11/12 3xl:mt-3">
  //         <p>0.25</p>
  //         <p className="absolute mt-1" ref={slideNumber}></p>
  //         {/* <p className="absolute mt-1" ref={slideNumber}></p> */}
  //         <p>5</p>
  //       </div>
  //       {meta.touched && meta.error ? (
  //         <div className="error font-semibold text-sm 2xl:text-2xl 2xl:mt-2">
  //           {meta.error}
  //         </div>
  //       ) : null}
  //     </div>
  //   );
  // };

  // const TextArea = ({ label, ...props }) => {
  //   const [field, meta] = useField(props);
  //   return (
  //     <div className="m-3 flex flex-col">
  //       <label
  //         className="mb-2 flex flex-col w-11/12"
  //         htmlFor={props.id || props.name}
  //       >
  //         {label}
  //       </label>
  //       <textarea
  //         className="3xl:h-40 w-11/12 border-2 rounded border-slate-400 h-28 pl-2"
  //         {...field}
  //         {...props}
  //       />
  //       {meta.touched && meta.error ? (
  //         <div className="error font-semibold text-sm 2xl:text-2xl 2xl:mt-2">
  //           {meta.error}
  //         </div>
  //       ) : null}
  //     </div>
  //   );
  // };
  // const MySelect = ({ label, ...props }) => {
  //   const [field, meta] = useField(props);
  //   return (
  //     <div className="m-3 flex flex-col">
  //       <label htmlFor={props.id || props.name}>{label}</label>
  //       <select
  //         className="3xl:w-full 3xl:h-10 sm:w-24 w-16 mt-2 border-2 h-8 bg-white rounded border-slate-400"
  //         {...field}
  //         {...props}
  //       />
  //       {meta.touched && meta.error ? (
  //         <div className="error font-semibold text-sm">{meta.error}</div>
  //       ) : null}
  //     </div>
  //   );
  // };

  return (


    <>
      <h1 className={styles.header}>Submit Proposals</h1>
      <div className={styles.box}>
        <form onSubmit={() => { submit2.write() }}>
          <h2>Name of the Guardian submitting the Proposal.</h2>
          <input className={styles.input1} type={'text'} />

          <br />
          <br />
          <h2>Guardian Discord or Twitter Handle.</h2>
          <input className={styles.input1} type={'text'} />

          <br />
          <br />
          <h2>Guardian Wallet Address.</h2>
          <input className={styles.input1} type={'text'} value={address} onChange={(e) => { setAddress(e.target.value) }} />

          <br />
          <br />
          <h2>What is the name of the Project?</h2>
          <input className={styles.input1} type={'text'} />

          <br />
          <br />
          <h2>Provide a short description of the Project, and why it is suitable for investment from the CULT.</h2>
          <textarea className={styles.input1} type={'text'} value={description} onChange={(e) => { setDescription(e.target.value) }} />

          <br />
          <br />
          <h2>Please provide either an investment deck, a Litepaper or a whitepaper. This must include your tokenomics, will all current token owners, your projected future fund raise and all details.</h2>
          <input className={styles.input1} type={'text'} />

          <br />
          <br />
          <h2>Provide all social channels associated with the project.</h2>
          <textarea className={styles.input1} type={'text'} />

          <br />
          <br />
          <h2>Provide links to the audited token and contracts.</h2>
          <input className={styles.input1} type={'text'} />

          <br />
          <br />
          <h2>Provide the percentage of the token supply being offered in return for 13 Ethereum worth of investment.</h2>
          <br /> 1
          <input className={styles.input2} type={'range'} min={1} max={5} step={0.25} />
          5


          <br />
          <br />
          <h2>Provide the rate at which the investee token will be swapped for CULT. For example X% per day, week or month, for x number of months.</h2>
          <input className={styles.input2} type={'number'} />
          % per
          <select className={styles.input2} type={'text'}>
            <option>Day</option>
            <option>Week</option>
            <option>Month</option>
          </select>

          <br />
          <br />
          <h2>Confirm 50% of the CULT once swapped will be sent to our dCULT contract and 50% sent to a burn wallet.</h2>
          <input className={styles.input2} type={'checkbox'} />

          <br />
          <br />
          <h2>Confirm that the anticipated IDO date is within 12 weeks of the end date of the proposal.</h2>
          <input className={styles.input2} type={'checkbox'} />


          <br />
          <br />
          <h2>Provide the main ethereum wallet for the project.</h2>
          <input className={styles.input1} type={'text'} />
          <br />
          <br />

          {/* <input type='submit' className={styles.submit} value='Submit' /> */}




        </form>
        <button onClick={() => { submit.write() }} className={styles.submit}>
          Submit
        </button>
      </div>

    </>
  )


  // return (
  //   <>
  //     <h1 className={styles.header}>Submit Proposals</h1>
  //     <div className={styles.box}>
  //       <p className="text-2xl 4xl:text-5xl 3xl:mt-10 3xl:mb-10 2xl:text-5xl 2xl:mt-6 font-semibold font-Nixie mb-3">
  //         Submit a Proposal
  //       </p>
  //       <Formik
  //         className="scroll"
  //         initialValues={initialValues}
  //         validationSchema={validationSchema}
  //         onSubmit={(values, { setSubmitting }) => {
  //           setTimeout(() => {
  //             sProposal(values);
  //             setSubmitting(false);
  //           }, 400);
  //         }}
  //       >
  //         <Form className="overflow-y-scroll font-Nixie font-medium text-lg 2xl:text-3xl 3xl:text-4xl">
  //           <TextInput
  //             label="Name of the Guardian submitting the Proposal."
  //             name="guardianProposal"
  //             type="text"
  //           />
  //           <TextInput
  //             label="Guardian Discord or Twitter Handle."
  //             name="guardianDiscord"
  //             type="text"
  //           />
  //           <TextInput
  //             label="Guardian Wallet Address."
  //             name="guardianAddress"
  //             type="text"
  //           />
  //           <TextInput
  //             label="What is the name of the Project?"
  //             name="projectName"
  //             type="text"
  //           />
  //           <TextArea
  //             label=" Provide a short description of the Project, and why it is suitable for investment from the CULT."
  //             name="shortDescription"
  //             type="text"
  //           />
  //           <TextInput
  //             label="Please provide either an investment deck, a Litepaper or a whitepaper. This must include your tokenomics, will all current token owners, your projected future fund raise and all details."
  //             name="file"
  //             type="text"
  //           />
  //           <TextArea
  //             label="Provide all social channels associated with the project."
  //             name="socialChannel"
  //             type="text"
  //           />
  //           <TextInput
  //             label="Provide links to the audited token and contracts."
  //             name="links"
  //             type="text"
  //           />
  //           <InputRange
  //             label="Provide the percentage of the token supply being offered in return for 13 Ethereum worth of investment."
  //             name="range"
  //             type="range"
  //             min="0.25"
  //             max="5"
  //             step="0.25"
  //           />
  //           <div className="flex flex-col">
  //             <p className="m-3 w-11/12">
  //               Provide the rate at which the investee token will be swapped for
  //               CULT. For example X% per day, week or month, for x number of
  //               months.
  //             </p>
  //             <div className="flex w-7/12 justify-between">
  //               <TextInput
  //                 label=""
  //                 name="rate"
  //                 type="text"
  //                 percent="true"
  //                 placeholder="%"
  //                 style={{
  //                   textAlign: "right",
  //                   paddingRight: "20px",
  //                   minWidth: "65px",
  //                 }}
  //               />
  //               <p className="m-2 mt-5">Per</p>
  //               <MySelect label="" name="time">
  //                 <option value="Day">Day</option>
  //                 <option value="Week">Week</option>
  //                 <option value="Month">Month</option>
  //               </MySelect>
  //             </div>
  //           </div>
  //           <div className="w-11/12 flex">
  //             <p className="m-3 w-11/12">
  //               Confirm 50% of the CULT once swapped will be sent to our dCULT
  //               contract and 50% sent to a burn wallet.
  //             </p>
  //             <TextInput label="" name="checkbox1" type="checkbox" />
  //           </div>
  //           <div className="w-11/12 flex">
  //             <p className="m-3 w-11/12">
  //               Confirm that the anticipated IDO date is within 12 weeks of the
  //               end date of the proposal.
  //             </p>
  //             <TextInput label="" name="checkbox2" type="checkbox" />
  //           </div>
  //           <TextInput
  //             label="Provide the main ethereum wallet for the project."
  //             name="wallet"
  //             type="text"
  //           />

  //           <div className="w-full flex flex-col items-center">
  //             <button
  //               type="submit"
  //               className="2xl:w-48 2xl:h-16 2xl:text-4xl border w-32 h-9 m-auto mt-8 mb-4 rounded-lg text-xl font-Nixie bg-buttonBg border-slate-600 font-semibold"
  //             // disabled={transactionInProgress || networkId !== 137}
  //             >
  //               Submit
  //             </button>
  //           </div>
  //         </Form>
  //       </Formik>
  //       {/* {networkId !== 1 ? (
  //       <p className="3xl:text-4xl sm:text-xl text-base">Wrong Network...</p>
  //     ) : (
  //       ""
  //     )}
  //     {transactionInProgress ? (
  //       <div className="flex items-center space-x-0">
  //         <p className="text-lg pr-3">Submitting Proposal</p>
  //         <span>
  //           <AiOutlineLoading3Quarters className="animate-spin w-6 h-6" />
  //         </span>
  //       </div>
  //     ) : (
  //       ""
  //     )}
  //     <ToastContainer hideProgressBar={true} /> */}
  //     </div>
  //   </>
  // );
}