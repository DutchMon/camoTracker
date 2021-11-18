import LayoutWeaon from '../components/layoutWeapons'
import { server } from '../config'
import React, { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import vgIcon from '../public/vgIcon.png'
import Image from 'next/image'
import { useOnClickOutside } from '../components/hooks'
import { STG, AS44, Automaton, BAR, ITRA, NZ41, Volk } from '../public/guns'


function WeaponImg({ gun, id }) {

	const guns = {
		stg: STG,
		as44: AS44,
		automaton: Automaton,
		bar: BAR,
		itra: ITRA,
		nz41: NZ41,
		volk: Volk
	}

	return (
			<div className="gunWrapper hidden" id={id}>
				<Image
					src={guns[gun]}
					alt="weapon"
					layout="fixed"
					height="300"
					width="700"
				/>
			</div>
	)
}

const toggleSubMenu = (e) => {

	let parentId = e.target.parentNode.id
	let subRowId = parentId + "Sub"
	let gunImageId = parentId + "Img"
	let gunTitleId = parentId + "Title"

	let subRow = document.getElementById(subRowId)
	let result = subRow.classList.toggle('hidden')

	let gunImage = document.getElementById(gunImageId)
	let gunTitle = document.getElementById(gunTitleId)

	if (result) {
		gunImage.classList.toggle('hidden')
		gunTitle.classList.toggle('hidden')

	} else {
		subRow.classList.remove('hidden')
		gunImage.classList.toggle('hidden')
		gunTitle.classList.toggle('hidden')
	}
}
export default function Home() {

	const { data: session, status } = useSession()
	const node = useRef();


	return (
		<LayoutWeaon>
			<div className="column">
				<div className="container columns" id="assaultRifleHero">
					<div className="column is-full">
						<h1 className="title is-size-2 is-uppercase">Assault Rifles</h1>
						<hr className="is-hidden-mobile"></hr>
						<div className="columns is-vcentered">
							<div className="column is-one-third">
								<div className="gunTitleWrapper">
									<h2 className="title is-size-1 is-uppercase has-text-centered hidden" id="gun1Title">STG-44</h2>
									<h2 className="title is-size-3 is-uppercase hidden" id="gun2Title">AS-44</h2>
									<h2 className="title is-size-3 is-uppercase hidden" id="gun3Title">Automaton</h2>
									<h2 className="title is-size-3 is-uppercase hidden" id="gun4Title">BAR</h2>
									<h2 className="title is-size-3 is-uppercase hidden" id="gun5Title">Itra Burst</h2>
									<h2 className="title is-size-3 is-uppercase hidden" id="gun6Title">NZ-41</h2>
									<h2 className="title is-size-3 is-uppercase hidden" id="gun7Title">Volkssturmgewehr</h2>
								</div>
							</div>
							<div className="column">
								<WeaponImg id={'gun1Img'} gun={'stg'}></WeaponImg>
								<WeaponImg id={'gun2Img'} gun={'as44'}></WeaponImg>
								<WeaponImg id={'gun3Img'} gun={'automaton'}></WeaponImg>
								<WeaponImg id={'gun4Img'} gun={'bar'}></WeaponImg>
								<WeaponImg id={'gun5Img'} gun={'itra'}></WeaponImg>
								<WeaponImg id={'gun6Img'} gun={'nz41'}></WeaponImg>
								<WeaponImg id={'gun7Img'} gun={'volk'}></WeaponImg>
							</div>
						</div>
					</div>
				</div>
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
									<tr className="has-text-centered" id="gun1" onClick={toggleSubMenu}>
										<td data-label="Name">STG44</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun1Sub">
										<td colSpan="4">
											<div className="detail-container">
												<div className="columns">
													<div className="column is-one-fifth">
														<div className="field">
															<div className="field-label is-normal">
																<label className="label has-text-left">Pack Tactics</label>
															</div>
														</div>
														<div className="field">
															<p className="is-small">
																<input className="input" id="tableInput" type="text" placeholder="# of Eliminations"></input>
															</p>
														</div>
														<div className="field">
															<div className="field-label is-normal">
																<label className="label has-text-left">Berserker</label>
															</div>
														</div>
														<div className="field">
															<p className="is-small">
																<input className="input" type="text" placeholder="# close-distance kills"></input>
															</p>
														</div>
													</div>
													<div className="column is-one-fifth">
														<div className="field">
															<div className="field-label is-normal">
																<label className="label has-text-left">Surgical</label>
															</div>
														</div>
														<div className="field">
															<p className="is-small">
																<input className="input" type="text" placeholder="# of Headshots"></input>
															</p>
														</div>
														<div className="field">
															<div className="field-label is-normal">
																<label className="label has-text-left">Wildcat</label>
															</div>
														</div>
														<div className="field">
															<p className="is-small">
																<input className="input" type="text" placeholder="# of kills"></input>
															</p>
														</div>
													</div>
													<div className="column is-one-fifth">
														<div className="field">
															<div className="field-label is-normal">
																<label className="label has-text-left">Predatory Ambition</label>
															</div>
														</div>
														<div className="field">
															<p className="is-small">
																<input className="input" type="text" placeholder="# of Multikills"></input>
															</p>
														</div>
														<div className="field">
															<div className="field-label is-normal">
																<label className="label has-text-left">Survivalist</label>
															</div>
														</div>
														<div className="field">
															<p className="is-small">
																<input className="input" type="text" placeholder="Enter #"></input>
															</p>
														</div>
													</div>
													<div className="column is-one-fifth">
														<div className="field">
															<div className="field-label is-normal">
																<label className="label has-text-left">Reptillian</label>
															</div>
														</div>
														<div className="field">
															<p className="is-small">
																<input className="input" type="text" placeholder="Enter #"></input>
															</p>
														</div>
														<div className="field">
															<div className="field-label is-normal">
																<label className="label has-text-left">Mindgames</label>
															</div>
														</div>
														<div className="field">
															<p className="is-small">
																<input className="input" type="text" placeholder="Enter #"></input>
															</p>
														</div>
													</div>
													<div className="column is-one-fifth">
														<div className="field">
															<div className="field-label is-normal">
																<label className="label has-text-left">Deadeye</label>
															</div>
														</div>
														<div className="field">
															<p className="is-small">
																<input className="input" type="text" placeholder="# of Longshots"></input>
															</p>
														</div>
														<div className="field">
															<div className="field-label is-normal">
																<label className="label has-text-left">Death Artist</label>
															</div>
														</div>
														<div className="field">
															<p className="is-small">
																<input className="input" type="text" placeholder="Enter #s"></input>
															</p>
														</div>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr className="has-text-centered" id="gun2" onClick={toggleSubMenu}>
										<td data-label="Name">ITRA Burst</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun2Sub">
										<td colSpan="4">
											<div className="detail-container"></div>
										</td>
									</tr>
									<tr className="has-text-centered" id="gun3" onClick={toggleSubMenu}>
										<td data-label="Name">BAR</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun3Sub">
										<td colSpan="4">
											<div className="detail-container"></div>
										</td>
									</tr>
									<tr className="has-text-centered" id="gun4" onClick={toggleSubMenu}>
										<td data-label="Name">NZ-41</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun4Sub">
										<td colSpan="4">
											<div className="detail-container"></div>
										</td>
									</tr>
									<tr className="has-text-centered" id="gun5" onClick={toggleSubMenu}>
										<td data-label="Name">Volkssturmgewehr</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun5Sub">
										<td colSpan="4">
											<div className="detail-container"></div>
										</td>
									</tr>
									<tr className="has-text-centered" id="gun6" onClick={toggleSubMenu}>
										<td data-label="Name">AS44</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun6Sub">
										<td colSpan="4">
											<div className="detail-container"></div>
										</td>
									</tr>
									<tr className="has-text-centered" id="gun7" onClick={toggleSubMenu}>
										<td data-label="Name">Automaton</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun7Sub">
										<td colSpan="4">
											<div className="detail-container"></div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>
			</div>
		</LayoutWeaon>
	)
}

/*
export async function getServerSideProps(ctx) {

	// request crop data from api
	//let cropRes = await fetch(`${server}/api/crops`)

	// extract the data
	//let cropData = await cropRes.json()

	//console.log(data)

	return {
		props: {
			crops: cropData['message'],
		},
	}
}

*/
