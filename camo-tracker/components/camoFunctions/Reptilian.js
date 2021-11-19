export default function Predatory() {

	let names = [
		'Slow Crawl',
		'Verdant',
		'Swarmer',
		'Chlorine',
		'Stoplight',
		'Eroded',
		'Bedrock',
		'Dark Scale',
		'Ironrot',
		'Dormant'
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
