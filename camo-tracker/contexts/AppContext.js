import { func } from 'prop-types'
import { createContext, useContext, useState } from 'react'

const AppContext = createContext()
const UpdateAppContext = createContext()

export function AppWrapper({ children }) {

	const [totalGoldProgress, setTotalGoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun1GoldProgress, setGun1GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun2GoldProgress, setGun2GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun3GoldProgress, setGun3GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun4GoldProgress, setGun4GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun5GoldProgress, setGun5GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun6GoldProgress, setGun6GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun7GoldProgress, setGun7GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))



	let progress = {
		totalGoldProgress,
		setTotalGoldProgress,
		gun1GoldProgress,
		setGun1GoldProgress,
		gun2GoldProgress,
		setGun2GoldProgress,
		gun3GoldProgress,
		setGun3GoldProgress,
		gun4GoldProgress,
		setGun4GoldProgress,
		gun5GoldProgress,
		setGun5GoldProgress,
		gun6GoldProgress,
		setGun6GoldProgress,
		gun7GoldProgress,
		setGun7GoldProgress
	}

	let updateProgress = {

	}

	return (
		<AppContext.Provider value={progress}>
			<UpdateAppContext.Provider value={updateProgress}>
				{children}
			</UpdateAppContext.Provider>
		</AppContext.Provider>
	)
}

export function useAppContext() {
	return useContext(AppContext)
}

export function useUpdateAppContext() {
	return useContext(UpdateAppContext)
}

/*
	const [totalGoldProgress, setTotalGoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun1GoldProgress, setGun1GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun2GoldProgress, setGun2GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun3GoldProgress, setGun3GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun4GoldProgress, setGun4GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun5GoldProgress, setGun5GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun6GoldProgress, setGun6GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
	const [gun7GoldProgress, setGun7GoldProgress] = useState(Number(0).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))

	const totalGoldProgress
	const gun1GoldProgress
	const gun2GoldProgress
	const gun3GoldProgress
	const gun4GoldProgress
	const gun5GoldProgress
	const gun6GoldProgress
	const gun7GoldProgress


*/