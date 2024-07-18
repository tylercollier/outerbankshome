function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getAreaNameFromParam(areaParam) {
	if (areaParam === 'KittyHawk') {
		return 'Kitty Hawk';
	} else if (areaParam === 'KillDevilHills') {
		return 'Kill Devil Hills';
	}
	return areaParam
		.split('-')
		.map(capitalizeFirstLetter)
		.join(' ');
}

export function getCity(areaParam) {
	return getAreaNameFromParam(areaParam);
}

export const allowedAreas = [
	'corolla',
	'duck',
	'southern-shores',
	'martins point',
	'KittyHawk',
	'KillDevilHills',
	'nags head',
	'manteo',
	'colington',
	'avon',
	'buxton',
	'frisco',
	'hatteras island',
	'rodanthe',
	'salvo',
	'waves',
];

export const allowedCategories = {
	corolla: [
		'',
		'condos',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
		'water-front-homes',
		// 'investment-homes',
		// 'land',
	],
	duck: [
		'',
		'condos',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
		'water-front-homes',
		// 'investment-homes',
		// 'land',
	],
	'southern-shores': [
		'',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
		'water-front-homes',
		// 'investment-homes',
		'land',
	],
	'martins point': [
		// 'Sold',
	],
	KittyHawk: [
		'',
		'condos',
		// 'Sold',
		'oceanfront-homes',
		'waterfront-homes',
		'land',
	],
	KillDevilHills: [
		'',
		'condos',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
		'waterfront',
		// 'investment-homes',
		// 'land',
	],
	'nags head': [
		'',
		'condos',
		'canalfront-homes',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
		'water-front-homes',
		// 'investment-homes',
		'land',
	],
	manteo: [
		'',
		'condos',
		'soundfront-homes',
		// 'Sold',
		'land',
	],
	colington: [
		'canalfront-homes',
		'soundfront-homes',
		// 'Sold',
		'waterfront-homes',
		'colington-harbour',
	],
	avon: [
		'canalfront-homes',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	buxton: [
		'canalfront-homes',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	frisco: [
		'canalfront-homes',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	'hatteras island': [
		'canalfront-homes',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	rodanthe: [
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	salvo: [
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	waves: [
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
};

export const allowedSubdivisions = {
	corolla: [
		{ slug: 'villages_at_ocean_hill', name: 'Villages at Ocean Hill' },
		{ slug: 'corolla-village', name: 'Corolla Village' },
		{ slug: 'ocean-hill', name: 'Ocean Hill ' },
		{ slug: 'corolla-light', name: 'Corolla Light' },
		{ slug: 'whalehead', name: 'Whalehead Club ' },
		{ slug: 'corolla-bay', name: 'Corolla Bay' },
		{ slug: 'monteray-shores', name: 'Monteray Shores' },
		{ slug: 'buck-island', name: 'Buck Island' },
		{ slug: 'crown-point', name: 'Crown Point' },
		{ slug: 'ocean-sands', name: 'Ocean Sands' },
		{ slug: 'currituck-club', name: 'The Currituck Club' },
		{ slug: 'the-hammocks', name: 'The Hammocks' },
		{ slug: 'magnolia-bay', name: 'Magnolia Bay' },
		{ slug: 'spindrift', name: 'Spindrift' },
		{ slug: 'indian-summer', name: 'Indian Summer Condos' },
		{ slug: 'mirage-condos', name: 'Mirage Condo' },
		{ slug: 'sealoft-village-condos', name: 'Sealoft Village Condos' },
		{ slug: 'seaside-villas', name: 'Seaside Villas' },
		{ slug: 'windswept-ridge', name: 'Windswept Ridge ' },
		{ slug: 'lighthouse-villas', name: 'Lighthouse Villas' },
		{ slug: 'corolla-phone-numbers', name: 'Corolla phone numbers' },
		{ slug: 'pine-island', name: 'Pine Island' },
		{ slug: 'corolla-4-bedroom-homes', name: 'Corolla 4 Bedroom Homes' },
		{ slug: 'corolla-5-bedroom-homes', name: 'Corolla 5 Bedroom Homes' },
		{ slug: 'corolla-6-bedroom-homes', name: 'Corolla 6 Bedroom Homes' },
		{ slug: 'corolla-8-bedroom-homes', name: 'Corolla 8 Bedroom Homes' },
		{ slug: '4-wheel-drive-beaches', name: '4 Wheel Drive Beaches' },
		{ slug: 'beacon-villas', name: 'Beacon Villas' },
		{ slug: 'monteray-pines', name: 'Monteray Pines' },
		{ slug: 'currituck-cottages', name: 'Currituck Cottages' },
	],
	duck: [
		{ slug: 'palmers-island', name: 'Palmer\'s Island Club'},
		{ slug: 'station-bay-cove', name: 'Station Bay Cove'},
		{ slug: 'sanderling', name: 'Sanderling'},
		{ slug: 'gulls-flight', name: 'Gull\'s Flight'},
		{ slug: 'sound-sea-village', name: 'Sound-Sea Village'},
		{ slug: 'caffeys-inlet', name: 'Caffey\'s Inlet'},
		{ slug: 'sea-tern', name: 'Sea Tern'},
		{ slug: 'port-trinitie', name: 'Port Trinitie'},
		{ slug: 'wild-duck-dunes', name: 'Wild Duck Dunes'},
		{ slug: 'north-point', name: 'Northpoint'},
		{ slug: 'carolina-dunes', name: 'Carolina Dunes'},
		{ slug: 'snow-geese-dunes', name: 'Snow Geese Dunes'},
		{ slug: 'osprey', name: 'Osprey'},
		{ slug: 'sea-ridge', name: 'Sea Ridge'},
		{ slug: 'sandy-ridge', name: 'Sandy Ridge'},
		{ slug: 'ships-watch', name: 'Ship\'s Watch'},
		{ slug: 'barrier-island-station', name: 'Barrier Island Station'},
		{ slug: 'old-duck-beach', name: 'Old Duck Beach'},
		{ slug: 'sea-colony', name: 'Sea Colony'},
		{ slug: 'bayberry-bluffs', name: 'Bayberry Bluffs'},
		{ slug: 'saltaire', name: 'Saltaire'},
		{ slug: 'poteskeet-village', name: 'Poteskeet Village'},
		{ slug: 'schooner-ridge', name: 'Schooner Ridge'},
		{ slug: 'duck-landing', name: 'Duck Landing'},
		{ slug: 'poteskeet', name: 'Poteskeet'},
		{ slug: 'ocean-dunes', name: 'Ocean Dunes'},
		{ slug: 'seapines', name: 'Seapines'},
		{ slug: 'amy-acres', name: 'Amy Acres'},
		{ slug: 'sea-acres', name: 'Sea Acres'},
		{ slug: 'georgetown-sands', name: 'Georgetown Sands'},
		{ slug: 'sand-dollar-shores', name: 'Sand Dollar Shores'},
		{ slug: 'tuckahoe', name: 'Tuckahoe'},
		{ slug: 'sea-hawk', name: 'Sea Hawk'},
		{ slug: 'bias-shores', name: 'Bias Shores'},
		{ slug: 'ocean-crest', name: 'Oceancrest'},
		{ slug: 'colony-by-the-sea', name: 'Colony By The Sea'},
		{ slug: 'duck-blind-villas', name: 'Duck Blind Villas'},
		{ slug: 'duck-ridge-shores', name: 'Duck Ridge Shores'},
		{ slug: 'jay-crest', name: 'Jay Crest'},
		{ slug: 'nantucket-village', name: 'Nantucket Village'},
		{ slug: 'osprey-ridge', name: 'Osprey Ridge'},
		{ slug: 'tides-of-duck', name: 'Tides of Duck'},
		{ slug: 'duck-ridge-village', name: 'Duck Ridge Village '},
		{ slug: 'four-seasons', name: 'Four Seasons'},
		{ slug: 'cc-byrum', name: 'CC Bryum'},
	],
}

export function getCategoryName(slug) {
	if (slug === '') {
		return 'Homes';
	} else if (slug === 'condos') {
		return 'Condos';
	} else if (slug === 'canalfront-homes') {
		return 'Canalfront Homes';
	} else if (slug === 'oceanfront-homes') {
		return 'Oceanfront Homes';
	} else if (slug === 'soundfront-homes') {
		return 'Soundfront Homes';
	// } else if (slug === 'Sold') {
	// 	return 'Sold Homes';
	// } else if (slug === 'investment-homes') {
	// 	return 'Investment Homes';
	} else if (slug === 'land') {
		return 'Land/Lots';
	} else if (['waterfront', 'waterfront-homes', 'water-front-homes'].includes(slug)) {
		return 'Waterfront Homes';
	}
}
