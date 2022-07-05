import React, { ReactNode } from 'react'
import Nav from './Nav'

type Props = {
	children?: ReactNode
}

const Layout = ({ children }: Props) => (
	<>
	<div>
		<Nav />
		<main>
			{children}
		</main>
	</div>
	</>
  )


export default Layout