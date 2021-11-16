/*------------ Imports ---------*/

import Navbar from './navbar'
import Head from 'next/head'
import Header from './Header'
import PropTypes from 'prop-types'


/*------- Default Page Layout ------*/

const Layout = ({ children }) => (
	<>
		<Head>
			<title>Camo Tracker</title>
		</Head>
		<div className="dashboard is-full-height">
			<Navbar></Navbar>
			<div className="dashboard-main is-scrollable">
				<Header />
				<div className="block flexGrow scroll contentHeight">
					<main className="opacityFilter">
						<div className="container opacityLayer">{children}</div>
					</main>
				</div>
			</div>
		</div>
	</>
)
export default Layout

Layout.propTypes = {
	children: PropTypes.node,
}

