import React from 'react'

type Props = {
	text: string
	color: 'green' | 'purple'
}


const Button = ({ text, color } : Props) => {
		switch (color) {
			case 'green':
				return <button className={`m-auto text-white bg-green rounded-md px-2 mt-2 font-bold`}>{text}</button>
			case 'purple':
				return <button className={`m-auto text-white bg-purple rounded-md px-2 mt-2 font-bold`}>{text}</button>
			default:
				return <button className={`m-auto text-white bg-purple rounded-md px-2 mt-2 font-bold`}>{text}</button>
		}
}

export default Button