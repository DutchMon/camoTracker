import LayoutWeaon from '../components/layoutWeapons'
import { server } from '../config'
import React, { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import vgIcon from '../public/vgIcon.png'
import Image from 'next/image'
import { useOnClickOutside } from '../components/hooks'
import { STG, AS44, Automaton, BAR, ITRA, NZ41, Volk } from '../public/guns'
import { func } from 'prop-types'
import PackTactics from '../components/camoFunctions/PackTactics'
import Surgical from '../components/camoFunctions/Surgical'
import Predatory from '../components/camoFunctions/Predatory'
import Reptilian from '../components/camoFunctions/Reptilian'
import Deadeye from '../components/camoFunctions/Deadeye'
import Berserker from '../components/camoFunctions/Berserker'
import Wildcat from '../components/camoFunctions/Wildcat'
import Survivalist from '../components/camoFunctions/Survivalist'
import Mindgames from '../components/camoFunctions/Mindgames'
import Death from '../components/camoFunctions/Death'

import Checkboxes from '../components/Checkboxes'


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


export default function Home() {

	const { data: session, status } = useSession()
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

			console.log('-----First click?----', noImage)

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
			console.log('----noImage-----', noImage)
			console.log('----idk------', result)

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
										<Checkboxes></Checkboxes>
									</tr>
									<tr className="has-text-centered" id="gun2" onClick={toggleSubMenu}>
										<td data-label="Name">AS-44</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun2Sub">
										<Checkboxes></Checkboxes>
									</tr>
									<tr className="has-text-centered" id="gun3" onClick={toggleSubMenu}>
										<td data-label="Name">Automaton</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun3Sub">
										<Checkboxes></Checkboxes>
									</tr>
									<tr className="has-text-centered" id="gun4" onClick={toggleSubMenu}>
										<td data-label="Name">BAR</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun4Sub">
										<Checkboxes></Checkboxes>
									</tr>
									<tr className="has-text-centered" id="gun5" onClick={toggleSubMenu}>
										<td data-label="Name">ITRA Burst</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun5Sub">
										<Checkboxes></Checkboxes>
									</tr>
									<tr className="has-text-centered" id="gun6" onClick={toggleSubMenu}>
										<td data-label="Name">NZ-41</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun6Sub">
										<Checkboxes></Checkboxes>
									</tr>
									<tr className="has-text-centered" id="gun7" onClick={toggleSubMenu}>
										<td data-label="Name">Volkssturmgewehr</td>
										<td data-label="Gold"></td>
										<td data-label="Diamond"></td>
										<td data-label="Atomic"></td>
									</tr>
									<tr className="detail hidden" id="gun7Sub">
										<Checkboxes></Checkboxes>
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