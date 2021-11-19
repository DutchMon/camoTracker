export default function PackTactics() {

	let names = [
		'The Depths',
		'Osprey',
		'Tributaries',
		'Candybar',
		'Reptilia',
		'Snakebit',
		'Low Foliage',
		'Sandsprout',
		'Winters Blood',
		'Brackish'
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
