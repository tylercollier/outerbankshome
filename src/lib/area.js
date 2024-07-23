import { homeCategory } from '$lib/category';

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getAreaNameFromParam(areaParam) {
	if (areaParam === 'KittyHawk') {
		return 'Kitty Hawk';
	} else if (areaParam === 'KillDevilHills') {
		return 'Kill Devil Hills';
	}
	return (
		areaParam
			// Example splits:
			//   southern-shores
			//   nags head
			.split(/[ -]/)
			.map(capitalizeFirstLetter)
			.join(' ')
	);
}

export function getCity(areaParam) {
	return getAreaNameFromParam(areaParam);
}

export function getAreaParamFromCity(city) {
	if (city === 'Kitty Hawk') {
		return 'KittyHawk';
	} else if (city === 'Kill Devil Hills') {
		return 'KillDevilHills';
	} else if (city === 'Southern Shores') {
		return 'southern-shores';
	}
	return city.toLowerCase();
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
		{ slug: 'palmers-island', name: "Palmer's Island Club" },
		{ slug: 'station-bay-cove', name: 'Station Bay Cove' },
		{ slug: 'sanderling', name: 'Sanderling' },
		{ slug: 'gulls-flight', name: "Gull's Flight" },
		{ slug: 'sound-sea-village', name: 'Sound-Sea Village' },
		{ slug: 'caffeys-inlet', name: "Caffey's Inlet" },
		{ slug: 'sea-tern', name: 'Sea Tern' },
		{ slug: 'port-trinitie', name: 'Port Trinitie' },
		{ slug: 'wild-duck-dunes', name: 'Wild Duck Dunes' },
		{ slug: 'north-point', name: 'Northpoint' },
		{ slug: 'carolina-dunes', name: 'Carolina Dunes' },
		{ slug: 'snow-geese-dunes', name: 'Snow Geese Dunes' },
		{ slug: 'osprey', name: 'Osprey' },
		{ slug: 'sea-ridge', name: 'Sea Ridge' },
		{ slug: 'sandy-ridge', name: 'Sandy Ridge' },
		{ slug: 'ships-watch', name: "Ship's Watch" },
		{ slug: 'barrier-island-station', name: 'Barrier Island Station' },
		{ slug: 'old-duck-beach', name: 'Old Duck Beach' },
		{ slug: 'sea-colony', name: 'Sea Colony' },
		{ slug: 'bayberry-bluffs', name: 'Bayberry Bluffs' },
		{ slug: 'saltaire', name: 'Saltaire' },
		{ slug: 'poteskeet-village', name: 'Poteskeet Village' },
		{ slug: 'schooner-ridge', name: 'Schooner Ridge' },
		{ slug: 'duck-landing', name: 'Duck Landing' },
		{ slug: 'poteskeet', name: 'Poteskeet' },
		{ slug: 'ocean-dunes', name: 'Ocean Dunes' },
		{ slug: 'seapines', name: 'Seapines' },
		{ slug: 'amy-acres', name: 'Amy Acres' },
		{ slug: 'sea-acres', name: 'Sea Acres' },
		{ slug: 'georgetown-sands', name: 'Georgetown Sands' },
		{ slug: 'sand-dollar-shores', name: 'Sand Dollar Shores' },
		{ slug: 'tuckahoe', name: 'Tuckahoe' },
		{ slug: 'sea-hawk', name: 'Sea Hawk' },
		{ slug: 'bias-shores', name: 'Bias Shores' },
		{ slug: 'ocean-crest', name: 'Oceancrest' },
		{ slug: 'colony-by-the-sea', name: 'Colony By The Sea' },
		{ slug: 'duck-blind-villas', name: 'Duck Blind Villas' },
		{ slug: 'duck-ridge-shores', name: 'Duck Ridge Shores' },
		{ slug: 'jay-crest', name: 'Jay Crest' },
		{ slug: 'nantucket-village', name: 'Nantucket Village' },
		{ slug: 'osprey-ridge', name: 'Osprey Ridge' },
		{ slug: 'tides-of-duck', name: 'Tides of Duck' },
		{ slug: 'duck-ridge-village', name: 'Duck Ridge Village ' },
		{ slug: 'four-seasons', name: 'Four Seasons' },
		{ slug: 'cc-byrum', name: 'CC Bryum' },
	],
	'southern-shores': [],
	'martins point': [],
	KittyHawk: [],
	KillDevilHills: [],
	'nags head': [
		{ slug: 'nags-head-4-bedroom-homes', name: 'Nags Head 4 Bedroom Homes' },
		{ slug: 'nags-head-3-bedroom-homes', name: 'Nags Head 3 Bedroom Homes' },
		{ slug: 'pebble-beach-shores', name: 'Pebble Beach Shores' },
		{ slug: 'south-creek-acres', name: 'South Creek Acres' },
		{ slug: 'hills-of-nags-head', name: 'Hills of Nags Head' },
		{ slug: 'old-nags-head-cove', name: 'Old Nags Head Cove' },
		{ slug: 'vista-colony', name: 'Vista Colony' },
		{ slug: 'pier-one', name: 'Pier One' },
		{ slug: 'southridge', name: 'Southridge' },
		{ slug: 'old-nags-head-place', name: 'Old Nags Head Place' },
		{ slug: 'sugar-creek', name: 'The Landings at Sugar Creek Condos' },
		{ slug: 'villas', name: 'The Villas Condos' },
		{ slug: 'diamond-shoals', name: 'Diamond Shoals Condos' },
		{ slug: 'heron-cove', name: 'Heron Cove Condos' },
		{ slug: 'north-ridge', name: 'North Ridge' },
		{ slug: 'gertrude-sucro', name: 'Gertrude Sucro' },
		{ slug: 'ocean-colony-south', name: 'Ocean Colony South' },
		{ slug: 'oceans', name: 'Oceans Condos' },
		{ slug: 'george-stronach', name: 'George T Stronach' },
		{ slug: 'oceanside', name: 'Oceanside' },
		{ slug: 'quay', name: 'The Quay Condos' },
		{ slug: 'goose-wing', name: 'Goose Wing' },
		{ slug: 'whalebone-beaches', name: 'Whalebone Beaches' },
		{ slug: 'kitty-dunes-estates', name: 'Kitty Dunes Estates' },
		{ slug: 'roanoke-shore', name: 'Roanoke Shore' },
		{ slug: 'carolinian-colony', name: 'Carolinian Colony' },
		{ slug: 'bodie-island-beach', name: 'Bodie Island Beach' },
		{ slug: 'old-hotel-lots', name: 'Old Hotel Lots' },
		{ slug: 'high-dunes', name: 'High Dunes' },
		{ slug: 'tides-time', name: 'Tides Time ' },
		{ slug: 'roanoke-sound-shores', name: 'Roanoke Sound Shores' },
		{ slug: 'dunes-south', name: 'Dunes South' },
		{ slug: 'pelican-park', name: 'Pelican Park' },
		{ slug: 'nags-head-shore', name: 'Nags Head Shores' },
		{ slug: 'yaupon-beach', name: 'Yaupon Beach' },
		{ slug: 'chawanook-cay', name: 'Chawanook Cay' },
		{ slug: 'glenlea-beach', name: 'Glenlea Beach' },
		{ slug: 'coastal-cove', name: 'Coastal Cove' },
		{ slug: 'edwards', name: 'Edwards' },
		{ slug: 'northbank', name: 'Northbank' },
		{ slug: 'enclaves-at-nags-head', name: 'Enclaves At Nags Head' },
		{ slug: 'foster', name: 'Foster' },
		{ slug: 'hollywood-beach', name: 'Hollywood Beach' },
		{ slug: 'nags-head-dunes', name: 'Nags Head Dunes' },
		{ slug: 'sea-fare', name: 'Sea Fare' },
		{ slug: 'admirals-view', name: "Admiral's View Condos" },
		{ slug: 'viking-court', name: 'Viking Court Condos' },
		{ slug: 'seashore-properties', name: 'Seashore Properties' },
		{ slug: 'conch-shell-estates', name: 'Conch Shell Estates' },
		{ slug: 'lone-cedar-village', name: 'Lone Cedar Village' },
		{ slug: 'thomas-fox', name: 'Thomas A Fox Jr' },
		{ slug: 'nags-head-acres', name: 'Nags Head Acres' },
		{ slug: 'windjammer', name: 'Windjammer Condos' },
		{ slug: 'pond-island-marina', name: 'Pond Island Marina' },
		{ slug: 'ocean-palms', name: 'Ocean Palms Condos' },
		{ slug: 'tides-time', name: 'Tides Time' },
		{ slug: 'moongate', name: 'Moongate' },
		{ slug: 'village-at-nags-head', name: 'The Village at Nags Head' },
		{ slug: 'bluffs-condos', name: 'Bluffs Condos' },
		{ slug: 'yachtsman-condos', name: 'Yachtsman Condos' },
		{ slug: 'eighteen-south-condos', name: 'Eighteen South Condos' },
		{ slug: 'whispering-sands-condos', name: 'Whispering Sands Condos' },
		{ slug: 'village-nest-condos', name: 'Village Nest Condos' },
		{ slug: 'nags-head-pond', name: 'Nags Head Pond' },
		{ slug: 'south-nags-head', name: 'South Nags Head Houses' },
		{ slug: 'nags-head-beach', name: 'Nags Head Beach' },
		{ slug: 'oceanwatch', name: 'Oceanwatch' },
		{ slug: 'oceans', name: 'Oceans Condos' },
	],
	manteo: [],
	colington: [],
	avon: [],
	buxton: [],
	frisco: [],
	'hatteras island': [],
	rodanthe: [],
	salvo: [],
	waves: [],
};
