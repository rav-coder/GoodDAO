import React from 'react'

type Props = {
	title: string
	text: string
}

const InfoBox = ({title, text}: Props) => {
  return (
	<div className="bg-gray text-center text-black font-bold py-6 m-10 rounded-xl flex flex-col justify-between text-lg">
		<span className='pb-2'>{title}</span>
		<span className='pt-2'>{text}</span>
	</div>
  )
}

export default InfoBox