import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter, faBook } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faDiscord, faGithub, faMedium, faInstagram, } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {

	function copyElementText() {
		// var text = document.getElementById("heading")!.innerText;
		var text = '0x7cE76D95B5BE54D3c1D2b40C1c37C4A8913bD4b5';
		var elem = document.createElement("textarea");
		document.body.appendChild(elem);
		elem.value = text;
		elem.select();
		document.execCommand("copy");
		document.body.removeChild(elem);
	}


	return (

		<div className='fixed bottom-0 justify-center w-screen'>
			<div className="flex justify-between mx-auto pb-5 w-1/6 border-red-500 border-0">
				<div className='flex justify-center align-middle items-center self-center bg-white w-10 h-10 rounded-full'>
					<a href='https://twitter.com/BCharityFi' rel='noreferrer' target='_blank'>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>

				<div className='flex justify-center align-middle items-center self-center bg-white w-10 h-10 rounded-full'>
					<a href='https://discord.com/invite/4vKS59q5kV' rel='noreferrer' target='_blank'>
						<FontAwesomeIcon icon={faDiscord} />
					</a>
				</div>

				<div className='flex justify-center align-middle items-center self-center bg-white w-10 h-10 rounded-full'>
					<a href='https://www.instagram.com/bcharityofficial/' rel='noreferrer' target='_blank'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</div>

				<div className='flex justify-center align-middle items-center self-center bg-white w-10 h-10 rounded-full'>
					<a href='https://github.com/ClearlyRubix/GoodDAO' rel='noreferrer' target='_blank'>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>

				<div className='flex justify-center align-middle items-center self-center bg-white w-10 h-10 rounded-full'>
					<FontAwesomeIcon icon={faMedium} />
				</div>

				<div className='absolute mr-6 right-0'>
					<h1>Donate to our community wallet!</h1>
					{/* <h1 onClick={copyElementText} id="heading">0x7cE76D95B5BE54D3c1D2b40C1c37C4A8913bD4b5</h1> */}
					{/* <button onClick={copyElementText} id="heading">0x7cE76D95B5BE54D3c1D2b40C1c37C4A8913bD4b5</button> */}
					<div className='flex justify-center'>
						<button onClick={copyElementText}>0x7cE...4b5</button>
					</div>
				</div>
			</div >
		</div>

	)
}

export default Footer