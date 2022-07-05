import React from 'react'

type Props = {
	title: string
	text: string
}

const InfoBox = ({title, text}: Props) => {
  return (
	<div className="bg-blue-400">
		<h1>{title}</h1>
		<h2>{text}</h2>
	</div>
  )
}

export default InfoBox