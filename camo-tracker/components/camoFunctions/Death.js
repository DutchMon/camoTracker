import { useFormContext } from 'react-hook-form'

export default function Predatory({id}) {

	const { register } = useFormContext()

	let names = [
		'Smelter',
		'Metallurgy',
		'Whirlpool',
		'Shifting Sands',
		'Melted',
		'Expressionist',
		'Vulpes',
		'Archeologist',
		'Cabana',
		'Bloodspatter'
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