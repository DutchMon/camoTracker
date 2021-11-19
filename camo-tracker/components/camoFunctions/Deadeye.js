export default function Predatory() {

	let names = [
		'Mosaic',
		'Speckled Green',
		'Metro',
		'Frozen Glass',
		'Red Ruin',
		'Drivepoint',
		'Desert Treet',
		'Autmun',
		'Embersmoke',
		'Verdure'
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
									<input type="checkbox"></input>
								</label>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}
