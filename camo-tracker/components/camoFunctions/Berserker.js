import { useFormContext } from 'react-hook-form'

export default function Predatory({id}) {

	const { register } = useFormContext()

	let idArray = []
	let count = 0

	let names = [
		'Gamma Frog',
		'Crypsis',
		'Arid',
		'Hole Digger',
		'Takeover',
		'Overhang',
		'Emergent Layer',
		'Cold Plunge',
		'Polluted',
		'Phantasmal'
	]


	return (
		<>
			{names.map(function (name, i) {

				//console.log('---idArray---',idName)

				return (
					<div key={i} className="column">
						<div className="level">
							<div className="level-left">
								<p>{name}</p>
							</div>
							<div className="level-right">
								<label className="checkbox">
									<input defaultValue={'completed'} {...register(`${id}.${name}`)} type="checkbox" ></input>
								</label>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}
