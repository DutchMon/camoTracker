export default function Predatory() {

	let names = [
		'Scarlet Skull',
		'Head Collector',
		'Night Terrors',
		'Delirium',
		'Death Envy',
		'Ancient Winds',
		'Fire Haze',
		'Chocolate Thunder',
		'Mount Olympus',
		'Hyperlapse'
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
