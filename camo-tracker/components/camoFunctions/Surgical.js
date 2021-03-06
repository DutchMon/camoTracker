import { useFormContext } from 'react-hook-form'

export default function Surgical({id}) {

	const { register } = useFormContext()

	let names = [
		'Wildwood',
		'Drought',
		'Flashbang',
		'Bitter Cold',
		'River Dog',
		'Rustbelt',
		'Fungus',
		'Termite',
		'Quarry',
		'Selva'
	]


	return (
		<>
			{names.map(function (name, i) {
				return (
					<div key={i} className="column">
						<div className="level">
							<div className="level-left">
								<p>{name}</p>
							</div>
							<div className="level-right">
								<label className="checkbox">
									<input defaultValue={'completed'} {...register(`${id}.${name}`)} type="checkbox"></input>
								</label>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}