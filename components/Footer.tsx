import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter, faBook } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faDiscord, faTelegram, faMedium, } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
	
	<div className='fixed bottom-0 justify-center w-screen'>
		<div className="flex justify-between mx-auto pb-5 w-1/6 border-red-500 border-0">
					<div className='flex justify-center align-middle items-center self-center bg-white w-10 h-10 rounded-full'>
						<FontAwesomeIcon icon={faTwitter} />
					</div>
		
					<div className='flex justify-center align-middle items-center self-center bg-white w-10 h-10 rounded-full'>
						<FontAwesomeIcon icon={faDiscord} />
					</div>
		
					<div className='flex justify-center align-middle items-center self-center bg-white w-10 h-10 rounded-full'>
						<FontAwesomeIcon icon={faTelegram} />
					</div>
		
					<div className='flex justify-center align-middle items-center self-center bg-white w-10 h-10 rounded-full'>
						<FontAwesomeIcon icon={faBook} />
					</div>
		
					<div className='flex justify-center align-middle items-center self-center bg-white w-10 h-10 rounded-full'>
						<FontAwesomeIcon icon={faMedium} />
					</div>
		
				</div >
	</div>
	
  )
}

export default Footer