import React from 'react'

type Props = {
	title: string
	text: string
}

const InfoBox = ({title, text}: Props) => {
  return (
	<div className="bg-gray text-center text-black p-10 m-10 rounded-xl">
		<h1>{title}</h1>
		<h2>{text}</h2>
	</div>
  )
}

export default InfoBox