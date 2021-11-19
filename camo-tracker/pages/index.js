import Layout from '../components/layout'
import { server } from '../config'
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import vgIcon from '../public/vgIcon.png'
import Image from 'next/image'

import { useAppContext } from '../contexts/AppContext'


function Logo() {
	return (
		<div className="is-centered is-centered-logo is-hidden-mobile">
			<div className="logo-wrapper">
				<Image
					src={vgIcon}
					alt="webapp logo icon image"
					width="500px"
				/>
			</div>
		</div>
	)
}


export default function Home({props}) {


	let gun1GoldProgress = '0%'
	let gun2GoldProgress = '0%'
	let gun3GoldProgress = '0%'
	let gun4GoldProgress = '0%'
	let gun5GoldProgress = '0%'
	let gun6GoldProgress = '0%'
	let gun7GoldProgress = '0%'


	//console.log(`--Progress shared context---`, progress)

	const { data: session, status } = useSession()

	//console.log("------------Status-------", status)


	return (
		<Layout>
			<div className="column">
				<section className="hero is-medium">
					<div className="hero-body">
						<Logo></Logo>
						<h1 className="title is-size-2 is-uppercase mobileTextCenter" >Completion Dashboard</h1>
					</div>
				</section>
				<div className="container opacityLayer">
					<hr className="is-hidden-mobile"></hr>
					<section>
						<div className="hero is-centered">
							<div className="hero-body">
								<div className="level is-hidden-mobile">
									<div className="level-left">
										<p className="title is-size-2 is-spaced">Assault Rifles</p>
									</div>
									<div className="level-right">
										<a className="button is-dark" href="/addCrop">Button</a>
									</div>
								</div>
							</div>
						</div>
					</section>
					<hr className="is-hidden-mobile"></hr>
					<section>
						<div className="b-table has-pagination box" id="boxTable">
							<div className="table-wrapper has-mobile-cards">
								<table className="table is-fullwidth is-striped is-hoverable is-fullwidth">
									<thead>
										<tr className="has-text-centered">
											<th>
												<abbr title="Name">Gun</abbr>
											</th>
											<th>
												<abbr title="Gold">Gold Completion</abbr>
											</th>
											<th>
												<abbr title="Diamond">Diamond Completion</abbr>
											</th>
											<th>
												<abbr title="Atomic">Atomic Completion</abbr>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="has-text-centered" id="gun1">
											<td data-label="Name">STG44</td>
											<td data-label="Gold">{gun1GoldProgress}</td>
											<td data-label="Diamond"></td>
											<td data-label="Atomic"></td>
										</tr>
										<tr className="detail hidden" id="gun1Sub">
										</tr>
										<tr className="has-text-centered" id="gun2">
											<td data-label="Name">AS-44</td>
											<td data-label="Gold">{gun2GoldProgress}</td>
											<td data-label="Diamond"></td>
											<td data-label="Atomic"></td>
										</tr>
										<tr className="detail hidden" id="gun2Sub">
										</tr>
										<tr className="has-text-centered" id="gun3">
											<td data-label="Name">Automaton</td>
											<td data-label="Gold">{gun3GoldProgress}</td>
											<td data-label="Diamond"></td>
											<td data-label="Atomic"></td>
										</tr>
										<tr className="detail hidden" id="gun3Sub">
										</tr>
										<tr className="has-text-centered" id="gun4">
											<td data-label="Name">BAR</td>
											<td data-label="Gold">{gun4GoldProgress}</td>
											<td data-label="Diamond"></td>
											<td data-label="Atomic"></td>
										</tr>
										<tr className="detail hidden" id="gun4Sub">
										</tr>
										<tr className="has-text-centered" id="gun5">
											<td data-label="Name">ITRA Burst</td>
											<td data-label="Gold">{gun5GoldProgress}</td>
											<td data-label="Diamond"></td>
											<td data-label="Atomic"></td>
										</tr>
										<tr className="detail hidden" id="gun5Sub">
										</tr>
										<tr className="has-text-centered" id="gun6">
											<td data-label="Name">NZ-41</td>
											<td data-label="Gold">{gun6GoldProgress}</td>
											<td data-label="Diamond"></td>
											<td data-label="Atomic"></td>
										</tr>
										<tr className="detail hidden" id="gun6Sub">
										</tr>
										<tr className="has-text-centered" id="gun7">
											<td data-label="Name">Volkssturmgewehr</td>
											<td data-label="Gold">{gun7GoldProgress}</td>
											<td data-label="Diamond"></td>
											<td data-label="Atomic"></td>
										</tr>
										<tr className="detail hidden" id="gun7Sub">
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
				</div>
			</div>
		</Layout>
	)
}

/*
export async function getServerSideProps(ctx) {

	// request camo Progress data from api
	let camoProgressRes = await fetch(`${server}/api/camoProgress`)

	// extract the data
	let camoProgressData = await camoProgressRes.json()

	//console.log(data)

	return {
		props: {
			progress: camoProgressData['message'],
		},
	}
}

*/