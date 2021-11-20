import LayoutWeaon from '../components/layoutWeapons'
import { server } from '../config'
import React, { useState, useEffect, useRef } from 'react'
import { useSession, getSession } from 'next-auth/react'
import Image from 'next/image'
import { useOnClickOutside } from '../components/hooks'
import { STG, AS44, Automaton, BAR, ITRA, NZ41, Volk } from '../public/guns'
import { func, object } from 'prop-types'
import { useRouter } from 'next/router'

import { useForm, FormProvider, useFormContext } from "react-hook-form"

import Checkboxes from '../components/Checkboxes'
import { apiBaseUrl } from 'next-auth/client/_utils'





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


export default function Home({ progress }) {

	console.log(`---Progress---`, progress)

	const methods = useForm()
	const { getValues, handleSubmit, watch, formState: { errors } } = methods

	const router = useRouter()
	const [error, setError] = useState('')
	const [message, setMessage] = useState('')
	const [totalGoldProgress, setTotalGoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun1GoldProgress, setGun1GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun2GoldProgress, setGun2GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun3GoldProgress, setGun3GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun4GoldProgress, setGun4GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun5GoldProgress, setGun5GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun6GoldProgress, setGun6GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun7GoldProgress, setGun7GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))

	const values = useState()
	const gunValuesObject = useState(new Object())



	const onSubmit = data => {


		//console.log(data['Abstract'])

		values = getValues()
		let gun1Values = values.gun1
		let gun2Values = values.gun2
		let gun3Values = values.gun3
		let gun4Values = values.gun4
		let gun5Values = values.gun5
		let gun6Values = values.gun6
		let gun7Values = values.gun7

		gunValuesObject = {
			gun1: gun1Values,
			gun2: gun2Values,
			gun3: gun3Values,
			gun4: gun4Values,
			gun5: gun5Values,
			gun6: gun6Values,
			gun7: gun7Values
		}

		//console.log('--------values------', values)
		/*
		console.log('----gun1---', values.gun1)
		console.log('----gun2---', values.gun2)
		console.log('----gun3---', values.gun3)
		console.log('----gun4---', values.gun4)
		console.log('----gun5---', values.gun5)
		console.log('----gun6---', values.gun6)
		console.log('----gun7---', values.gun7)
		*/

		TotalGoldProgress(gunValuesObject)

		if (session) {
			saveToDatabase(gunValuesObject)
		} else {
			console.log('---notSignedIn----')
		}

	}


	const saveToDatabase = async (gunValuesObject) => {

		const testSession = await getSession()

		setError('')
		setMessage('')

		let camoProgress = gunValuesObject
		camoProgress.userId = testSession.userId
		//console.log(`----get Session----`, testSession)
		//console.log(`----api post method----`, camoProgress)

		let res = await fetch('/api/camoProgressAR', {
			method: 'POST',
			body: JSON.stringify(camoProgress),
		})

		let data = await res.json()

		//console.log(`-----error and message----`, error, message)

		if (data.success) {
			return setMessage(data.message)
		} else {
			return setError(data.message)
		}
	}

	function TotalGoldProgress(gunValuesObject) {

		let totalGoldCount = 0
		let gun1GoldCount = 0
		let gun2GoldCount = 0
		let gun3GoldCount = 0
		let gun4GoldCount = 0
		let gun5GoldCount = 0
		let gun6GoldCount = 0
		let gun7GoldCount = 0


		for (const x in gunValuesObject) {
			let nested = gunValuesObject[x]
			//console.log(`----${x}----`, nested)
			//console.log(`----gunValuesObject[${x}]`, gunValuesObject[x])
			for (const index in nested) {
				if (nested[index] === 'completed') {
					totalGoldCount++

					//console.log('---whats in here----', nested[index])
					//console.log('---gold----', goldCount)
				}
			}

			switch (x) {
				case 'gun1':
					//console.log(`---Should be gun1 ---`, x)
					for (const i in nested) {
						if (nested[i] === 'completed') {
							gun1GoldCount++
						}
					}
					break

				case 'gun2':
					//console.log(`---Should be gun2 ---`, x)
					for (const i in nested) {
						if (nested[i] === 'completed') {
							gun2GoldCount++
						}
					}
					break

				case 'gun3':
					//console.log(`---Should be gun3 ---`, x)
					for (const i in nested) {
						if (nested[i] === 'completed') {
							gun3GoldCount++
						}
					}
					break

				case 'gun4':
					//console.log(`---Should be gun4 ---`, x)
					for (const i in nested) {
						if (nested[i] === 'completed') {
							gun4GoldCount++
						}
					}
					break

				case 'gun5':
					//console.log(`---Should be gun5 ---`, x)
					for (const i in nested) {
						if (nested[i] === 'completed') {
							gun5GoldCount++
						}
					}
					break

				case 'gun6':
					//console.log(`---Should be gun6 ---`, x)
					for (const i in nested) {
						if (nested[i] === 'completed') {
							gun6GoldCount++
						}
					}
					break

				case 'gun7':
					//console.log(`---Should be gun7 ---`, x)
					for (const i in nested) {
						if (nested[i] === 'completed') {
							gun7GoldCount++
						}
					}
					break
			}
		}


		//Dont need nested conditional
		/*
			if (gunValuesObject[x] === 'completed') {
				setGoldProgress(goldProgress + 1)
				//console.log(values[name])
				console.log('----Is this executing????---', goldProgress)
			} else { }
		*/

		let totalGoldPercentage = Number(totalGoldCount / 700).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
		let gun1GoldPercentage = Number(gun1GoldCount / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
		let gun2GoldPercentage = Number(gun2GoldCount / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
		let gun3GoldPercentage = Number(gun3GoldCount / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
		let gun4GoldPercentage = Number(gun4GoldCount / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
		let gun5GoldPercentage = Number(gun5GoldCount / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
		let gun6GoldPercentage = Number(gun6GoldCount / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
		let gun7GoldPercentage = Number(gun7GoldCount / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })

		return (
			//console.log(`$$$$$$ gold counts $$$$$$`, gun1GoldCount, gun2GoldCount, gun3GoldCount, gun4GoldCount, gun5GoldCount, gun6GoldCount, gun7GoldCount)
			setTotalGoldProgress(totalGoldPercentage),
			setGun1GoldProgress(gun1GoldPercentage),
			setGun2GoldProgress(gun2GoldPercentage),
			setGun3GoldProgress(gun3GoldPercentage),
			setGun4GoldProgress(gun4GoldPercentage),
			setGun5GoldProgress(gun5GoldPercentage),
			setGun6GoldProgress(gun6GoldPercentage),
			setGun7GoldProgress(gun7GoldPercentage)

		)

	}

	const { data: session, status } = useSession()
	console.log(`---Assault Rifles---`, session)

	const node = useRef()

	const [noImage, setNoImage] = useState(true)
	const [rowOpen, setRowOpen] = useState('')
	const [gunImageVis, setGunImageVis] = useState('')
	const [gunTitleVis, setGunTitleVis] = useState('')

	const toggleSubMenu = (e) => {

		let parentId = e.target.parentNode.id
		let subRowId = parentId + "Sub"
		let gunImageId = parentId + "Img"
		let gunTitleId = parentId + "Title"

		let subRow = document.getElementById(subRowId)
		let result = subRow.classList.toggle('hidden')

		let gunImage = document.getElementById(gunImageId)
		let gunTitle = document.getElementById(gunTitleId)

		if (!result && noImage) {
			gunImage.classList.toggle('hidden')
			gunTitle.classList.toggle('hidden')

			//console.log('-----First click?----', noImage)

			setNoImage(false)
			setRowOpen(subRowId)
			setGunImageVis(gunImageId)
			setGunTitleVis(gunTitleId)


		} else if (result && !noImage) {

			result
			gunImage.classList.toggle('hidden')
			gunTitle.classList.toggle('hidden')
			setNoImage(true)
			setRowOpen('')
			setGunImageVis('')
			setGunTitleVis('')

		}
		else {
			//console.log('----noImage-----', noImage)
			//console.log('----idk------', result)

			gunImage.classList.toggle('hidden')
			gunTitle.classList.toggle('hidden')
			setNoImage(true)

			subRow = document.getElementById(rowOpen)
			gunImage = document.getElementById(gunImageVis)
			gunTitle = document.getElementById(gunTitleVis)

			subRow.classList.toggle('hidden')
			gunImage.classList.toggle('hidden')
			gunTitle.classList.toggle('hidden')
			setNoImage(false)
			setRowOpen(subRowId)
			setGunImageVis(gunImageId)
			setGunTitleVis(gunTitleId)
		}
	}


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
									<h2 className="title is-size-3 is-uppercase has-text-centered hidden" id="gun2Title">AS-44</h2>
									<h2 className="title is-size-3 is-uppercase has-text-centered hidden" id="gun3Title">Automaton</h2>
									<h2 className="title is-size-3 is-uppercase has-text-centered hidden" id="gun4Title">BAR</h2>
									<h2 className="title is-size-3 is-uppercase has-text-centered hidden" id="gun5Title">Itra Burst</h2>
									<h2 className="title is-size-3 is-uppercase has-text-centered hidden" id="gun6Title">NZ-41</h2>
									<h2 className="title is-size-3 is-uppercase has-text-centered hidden" id="gun7Title">Volkssturmgewehr</h2>
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
							<FormProvider {...methods}>
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="columns is-vcentered">
										<div className="column is-half is-flex is-justify-content-center">
											<p className="title is-size-6">Select any row to input progress</p>
										</div>
										<div className="column">
											<p className="title is-size-6">Sign in to view progress another time.</p>
										</div>
										<div className="column is-flex is-justify-content-center">
											<button className="button is-dark" type="submit">Save Progress</button>
										</div>
									</div>
									<div>
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
													<td data-label="Gold">{gun1GoldProgress}</td>
													<td data-label="Diamond"></td>
													<td data-label="Atomic"></td>
												</tr>
												<tr className="detail hidden" id="gun1Sub">
													<Checkboxes id='gun1'></Checkboxes>
												</tr>
												<tr className="has-text-centered" id="gun2" onClick={toggleSubMenu}>
													<td data-label="Name">AS-44</td>
													<td data-label="Gold">{gun2GoldProgress}</td>
													<td data-label="Diamond"></td>
													<td data-label="Atomic"></td>
												</tr>
												<tr className="detail hidden" id="gun2Sub">
													<Checkboxes id='gun2'></Checkboxes>
												</tr>
												<tr className="has-text-centered" id="gun3" onClick={toggleSubMenu}>
													<td data-label="Name">Automaton</td>
													<td data-label="Gold">{gun3GoldProgress}</td>
													<td data-label="Diamond"></td>
													<td data-label="Atomic"></td>
												</tr>
												<tr className="detail hidden" id="gun3Sub">
													<Checkboxes id='gun3'></Checkboxes>
												</tr>
												<tr className="has-text-centered" id="gun4" onClick={toggleSubMenu}>
													<td data-label="Name">BAR</td>
													<td data-label="Gold">{gun4GoldProgress}</td>
													<td data-label="Diamond"></td>
													<td data-label="Atomic"></td>
												</tr>
												<tr className="detail hidden" id="gun4Sub">
													<Checkboxes id='gun4'></Checkboxes>
												</tr>
												<tr className="has-text-centered" id="gun5" onClick={toggleSubMenu}>
													<td data-label="Name">ITRA Burst</td>
													<td data-label="Gold">{gun5GoldProgress}</td>
													<td data-label="Diamond"></td>
													<td data-label="Atomic"></td>
												</tr>
												<tr className="detail hidden" id="gun5Sub">
													<Checkboxes id='gun5'></Checkboxes>
												</tr>
												<tr className="has-text-centered" id="gun6" onClick={toggleSubMenu}>
													<td data-label="Name">NZ-41</td>
													<td data-label="Gold">{gun6GoldProgress}</td>
													<td data-label="Diamond"></td>
													<td data-label="Atomic"></td>
												</tr>
												<tr className="detail hidden" id="gun6Sub">
													<Checkboxes id='gun6'></Checkboxes>
												</tr>
												<tr className="has-text-centered" id="gun7" onClick={toggleSubMenu}>
													<td data-label="Name">Volkssturmgewehr</td>
													<td data-label="Gold">{gun7GoldProgress}</td>
													<td data-label="Diamond"></td>
													<td data-label="Atomic"></td>
												</tr>
												<tr className="detail hidden" id="gun7Sub">
													<Checkboxes id='gun7'></Checkboxes>
												</tr>
											</tbody>
										</table>
									</div>
								</form>
							</FormProvider>
						</div>
					</div>
				</section>
			</div>
		</LayoutWeaon>
	)
}


export async function getServerSideProps(ctx) {


	const session = await getSession(ctx)
	console.log(`--GetServerSide--`, session)
	let userId = session.userId
	let [loggedIn, setLoggedIn] = useState(false)
	let data = {}

	if (!session) {
		return {
			props: {
				loggedIn,
			},
		}
	} else {
		let res = await fetch(`${server}/api/camoProgressAR`)
		data = await res.json()
		setLoggedIn(true)

		return {
			props: {
				loggedIn,
				progress: camoProgressData['message'],
			},
		}
	}
}