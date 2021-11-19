/*____________Imports_____________*/

import '../styles/my-sass-styles.sass'
import '../styles/myStyles.css'
import '../styles/dashboard.sass'
import React from "react"
import { Router } from "next/router"
import { SessionProvider } from "next-auth/react"

import Layout from '../components/layout'

import { AppWrapper } from '../contexts/AppContext'


/*_______________Functions_______________________*/

const toggleActive = (e) => {
	let showLoader = document.getElementById('loaderToggle')
	showLoader.classList.toggle('is-active')
}


//Main Function
function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}) {

	const [loading, setLoading] = React.useState(false)

	React.useEffect(() => {
		const start = () => {
			//console.log("start");
			setLoading(true)
			toggleActive()
		}
		const end = () => {
			//console.log("findished");
			setLoading(false)
		}
		Router.events.on("routeChangeStart", start)
		Router.events.on("routeChangeComplete", end)
		Router.events.on("routeChangeError", end)
		return () => {
			Router.events.off("routeChangeStart", start)
			Router.events.off("routeChangeComplete", end)
			Router.events.off("routeChangeError", end)
		}
	}, [])


	return (
		<SessionProvider session={session}>
			{loading ? (
				<Layout>
					<div className="pageloader is-right-to-left" id="loaderToggle"><span className="title">Planting Bomb</span></div>
				</Layout>
			) : (
					<AppWrapper>
						<Component {...pageProps} />
					</AppWrapper>
				)}
		</SessionProvider>
	)
}


export default MyApp

