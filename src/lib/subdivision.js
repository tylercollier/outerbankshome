// Here's how I generated these: I went to a page like
// https://www.outerbankshome.com/outer%20banks/real%20estate/corolla/, then scrolled to the bottom to get the list of
// subdivisions. I'd use the devtools to put the UL tag as $0, and then run (be sure to replace the area slug, e.g.
// corolla, with whatever page you're on):
//   JSON.stringify(Array.prototype.map.call($0.querySelectorAll('li a'), x => ({ slug: x.getAttribute('href').replace('https://www.outerbankshome.com/outer banks/real estate/corolla/', '').replace('.asp', ''), name: x.getAttribute('title') })))
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
	'southern-shores': [
		{ slug: 'seacrest-village', name: 'Seacrest Village' },
		{ slug: 'chicahauk', name: 'Chicahauk' },
		{ slug: 'southern-shores-landing', name: 'Southern Shores Landing' },
		{ slug: 'pelican-watch', name: 'Pelican Watch' },
	],
	'martins point': [],
	KittyHawk: [
		{ slug: 'avery-isle', name: 'Avery Isle' },
		{ slug: 'bay-ridge', name: 'Bay Ridge' },
		{ slug: 'the-dunes', name: 'The Dunes' },
		{ slug: 'kitty-hawk-estates', name: 'Kitty Hawk Estates' },
		{ slug: 'elijah-tate', name: 'Elijah W Tate' },
		{ slug: 'fairway-heights', name: 'Fairway Heights' },
		{ slug: 'hickory-ridge', name: 'Hickory Ridge' },
		{ slug: 'hurdle-estate', name: 'Hurdle Estate' },
		{ slug: 'john-l-beacham', name: 'John L Beacham' },
		{ slug: 'nora-baum', name: 'Nora & E W Baum' },
		{ slug: 'ocean-greens', name: 'Ocean Greens' },
		{ slug: 'sea-retreat', name: 'Sea Retreat' },
		{ slug: 'sea-view-place', name: 'Sea View Place' },
		{ slug: 'ward', name: 'Ward' },
		{ slug: 'sea-dunes', name: 'Sea Dunes Townhouses' },
		{ slug: 'kitty-hawk-woods', name: 'Kitty Hawk Woods' },
		{ slug: 'ocean-winds', name: 'Ocean Winds Townhomes' },
		{ slug: 'dunetop', name: 'Dunetops Townhouses' },
		{ slug: 'southern-woods', name: 'Southern Woods' },
		{ slug: 'kitty-hawk-beach', name: 'Kitty Hawk Beach' },
		{ slug: 'pine-hill', name: 'Pine Hill' },
		{ slug: 'seascape', name: 'Sea Scape' },
		{ slug: 'linkside-view', name: 'Linkside View' },
		{ slug: 'sanderlin-shores', name: 'Sanderlin Shores' },
		{ slug: 'kitty-hawk-landing', name: 'Kitty Hawk Landing' },
		{ slug: 'poor-ridge-estates', name: 'Poor Ridge Estates' },
		{ slug: 'kitty-dunes', name: 'Kitty Dunes' },
		{ slug: 'kitty-dunes-heights', name: 'Kitty Dunes Heights' },
		{ slug: 'first-flight-ridge', name: 'First Flight Ridge' },
		{ slug: 'woodard-acres', name: 'Woodard Acres' },
		{ slug: 'oak-run', name: 'Oak Run' },
		{ slug: 'harbour-bay', name: 'Harbour Bay' },
		{ slug: 'duneview', name: 'Duneview' },
		{ slug: 'keepers-hill', name: 'Keepers Hill' },
		{ slug: 'sandpiper-cay', name: 'Sandpiper Cay Condos' },
		{ slug: 'gables', name: 'Gables Condos' },
		{ slug: 'ted-wood-kitty-hawk-terrace', name: 'Ted Wood Kitty Hawk Terrace' },
		{ slug: 'linkside-woods', name: 'Linkside Woods' },
	],
	KillDevilHills: [
		{ slug: 'virginia-dare-shores', name: 'Virginia Dare Shores' },
		{
			slug: 'kitty-hawk-shores',
			name: 'Kitty Hawk Shores',
		},
		{ slug: 'croatan-shores', name: 'Croatan Shores' },
		{
			slug: 'ocean-acres',
			name: 'Ocean Acres',
		},
		{ slug: 'whispering-pines', name: 'Whispering Pines' },
		{
			slug: 'baum-bay-harbor',
			name: 'Baum Bay Harbor',
		},
		{ slug: 'first-flight-village', name: 'First Flight Village' },
		{
			slug: 'wright-woods',
			name: 'Wright Woods',
		},
		{ slug: 'the-landing', name: 'The Landing' },
		{
			slug: 'sea-holly-ridge',
			name: 'Sea Holly Ridge',
		},
		{ slug: 'wrights-shores', name: "Wright's Shores" },
		{
			slug: 'moor-shores',
			name: 'Moor Shores',
		},
		{ slug: 'avalon-beach', name: 'Avalon Beach' },
		{
			slug: 'delray-beach',
			name: 'Delray Beach',
		},
		{ slug: 'fresh-pond-beaches', name: 'Fresh Pond Beaches' },
		{
			slug: 'high-view',
			name: 'High View',
		},
		{ slug: 'kill-devil-beach', name: 'Kill Devil Beach' },
		{
			slug: 'kill-devil-hills-sub',
			name: 'Kill Devil Hills',
		},
		{ slug: 'kill-devil-hills-realty', name: 'Kill Devil Hills Realty Corp' },
		{
			slug: 'lake-drive-development',
			name: 'Lake Drive Development',
		},
		{ slug: 'long-lake', name: 'Long Lake' },
		{
			slug: 'memorial-overlook',
			name: 'Memorial Overlook',
		},
		{ slug: 'mosier-shores', name: 'Mosier Shores' },
		{
			slug: 'nine-estates',
			name: 'Nine Estates',
		},
		{ slug: 'orville-beach', name: 'Orville Beach' },
		{
			slug: 'crystal-shores',
			name: 'Crystal Shores Condos',
		},
		{ slug: 'captains-quarters', name: "Captain's Quarters Condos" },
		{
			slug: 'First Flight Retreat',
			name: 'First Flight Retreat Condos',
		},
		{ slug: 'casa-del-sol', name: 'Casa del Sol Condos' },
		{
			slug: 'seawalk-condos',
			name: 'Seawalk Condos',
		},
		{ slug: 'regency-condos', name: 'Regency Condos' },
		{
			slug: 'sand-castle-condos',
			name: 'Sand Castle Condos',
		},
		{ slug: 'sands-condos', name: 'Sands Condos' },
		{
			slug: 'gulfstream-condos',
			name: 'Gulfstream Condos',
		},
		{ slug: 'golden-strand', name: 'Golden Strand Condos' },
		{
			slug: 'admirals-view-2',
			name: "Admiral's View II",
		},
		{ slug: 'admirals-view-3', name: "Admiral's View III" },
		{
			slug: 'croatan-surf-club',
			name: 'Croatan Surf Club Condos',
		},
		{ slug: 'scrimshaw-condos', name: 'Scrimshaw Condos' },
		{
			slug: 'sea-oats-villas',
			name: 'Sea Oats Villas',
		},
		{ slug: 'breakers-condos', name: 'Breakers Condos' },
		{
			slug: '7cs-condos',
			name: '7cs Condos',
		},
		{ slug: 'banks-condos', name: 'Banks Condos' },
		{
			slug: 'bermuda-bay',
			name: 'Bermuda Bay',
		},
		{ slug: 'devonshire-place-condos', name: 'Devonshire Place Condos' },
		{
			slug: 'hamilton-cay-condos',
			name: 'Hamilton Cay Condos',
		},
		{ slug: 'cambridge-cove', name: 'Cambridge Cove' },
		{
			slug: 'victoria-place',
			name: 'Victoria Place Condos',
		},
		{ slug: 'hughes-retreat', name: 'Hughes Retreat' },
		{
			slug: 'station-one-condos',
			name: 'Station One Condos',
		},
		{ slug: 'sundune-village-condos', name: 'Sundune Village Condos' },
		{
			slug: 'vans-town-houses',
			name: 'Vans Town Houses',
		},
		{ slug: 'lakeside-villas', name: 'Lakeside Villas' },
		{
			slug: 'banks-condos',
			name: 'Banks Condos',
		},
		{ slug: 'coastal-retreat-condos', name: 'Coastal Retreat Condos' },
		{
			slug: 'ocean-east-condos',
			name: 'Oceans East Condos',
		},
		{ slug: 'Sea-Pointe', name: 'Sea Pointe Condos' },
		{
			slug: 'pirates-moor-condos',
			name: 'Pirates Moor Condos',
		},
		{ slug: 'natures-walk-condos', name: "Nature's Walk Condos" },
		{
			slug: 'oyster-pointe',
			name: 'Oyster Pointe',
		},
		{ slug: 'soundside-woods', name: 'Soundside Woods' },
	],
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
	manteo: [
		{ slug: 'pirates-cove', name: "Pirate's Cove" },
		{
			slug: 'pirates-cove-condos',
			name: 'Pirates Cove Condos',
		},
		{ slug: 'ballast-pointe-villas', name: 'Ballast Pointe Villas Condos' },
		{
			slug: 'buccaneer-village-condos',
			name: 'Buccaneer Village Condos',
		},
		{ slug: 'gulf-stream-condos', name: 'Gulf Stream Condos' },
		{
			slug: 'harbour-place-condos',
			name: 'Harbour Place Condos',
		},
		{ slug: 'sailfish-villas-condos', name: 'Sailfish Villas Condos' },
		{
			slug: 'sextant-village',
			name: 'Sextant Village',
		},
		{ slug: 'alder-branch-estates', name: 'Alder Branch Estates' },
		{
			slug: 'brakewood',
			name: 'Brakewood',
		},
		{ slug: 'burnside-forest', name: 'Burnside Forest' },
		{
			slug: 'cedar-bay',
			name: 'Cedar Bay',
		},
		{ slug: 'croatan-condos', name: 'Croatan Condos' },
		{
			slug: 'croatan-woods',
			name: 'Croatan Woods',
		},
		{ slug: 'cypress-cove', name: 'Cypress Cove' },
		{
			slug: 'dogwood-hills',
			name: 'Dogwood Hills',
		},
		{ slug: 'duke-woods', name: 'Duke Woods' },
		{
			slug: 'first-colony-estates',
			name: 'First Colony Estates',
		},
		{ slug: 'heritage-point', name: 'Heritage Point' },
		{
			slug: 'kellam-estates',
			name: 'Kellam Estates',
		},
		{ slug: 'Marshes Light', name: 'Marshes Light' },
		{
			slug: 'nottingham',
			name: 'Nottingham',
		},
		{ slug: 'peninsula', name: 'Peninsula' },
		{
			slug: 'roanoak-village',
			name: 'Roanoak Village',
		},
		{ slug: 'holly-woods', name: 'Holly Woods' },
		{
			slug: 'roanoke-shores-condos',
			name: 'Roanoke Shores Condos',
		},
		{ slug: 'roanoke-park', name: 'Roanoke Park' },
		{
			slug: 'shallowbag-bay-club',
			name: 'Shallowbag Bay Club Condos',
		},
		{ slug: 'the-flats', name: 'The Flats' },
		{
			slug: 'vista-lake',
			name: 'Vista Lake',
		},
		{ slug: 'waterfront-condos', name: 'Waterfront Condos' },
		{ slug: 'wildwoods', name: 'Wildwoods' },
	],
	colington: [
		{ slug: 'colington-harbour/', name: 'Colington Harbour' },
		{
			slug: 'colington-pointe',
			name: 'Colington Pointe',
		},
		{ slug: 'bay-cliff', name: 'BayCliff' },
		{
			slug: 'colington-creek',
			name: 'Colington Creek Estates',
		},
		{ slug: 'cliffs-of-colington', name: 'Cliffs of Colington' },
		{
			slug: 'colingwood',
			name: 'Colingwood',
		},
		{ slug: 'swan-view-shores', name: 'Swan View Shores' },
		{
			slug: 'waters-edge',
			name: 'Waters Edge',
		},
		{ slug: 'william-colington-estate', name: 'Williams Colington Estate' },
		{
			slug: 'sunrise-crossing',
			name: 'Sunrise Crossing',
		},
		{ slug: 'colington-glen', name: 'Colington Glen' },
		{
			slug: 'carlyle-on-the-sound',
			name: 'Carlyle On The Sound',
		},
	],
	avon: [
		{ slug: 'askins-creek', name: null },
		{
			slug: 'atlantic-estates',
			name: 'Atlantic Estates',
		},
		{ slug: 'avon-shores', name: 'Avon Shores' },
		{
			slug: 'canal-ridge',
			name: 'Canal Ridge',
		},
		{ slug: 'cape-channel', name: 'Cape Channel' },
		{
			slug: 'hatteras-colony',
			name: 'Hatteras Colony',
		},
		{ slug: 'islander-condos', name: 'Islander Condos' },
		{
			slug: 'kinnakeet-shores',
			name: 'Kinnakeet Shores',
		},
		{ slug: 'ocean-isle-estates', name: 'Ocean Islae Estates' },
		{
			slug: 'oceanfront-enterprises',
			name: 'Oceanfront Enterprises',
		},
		{ slug: 'pamlico-condos', name: 'Pamlico Condos' },
		{
			slug: 'pamlico-point',
			name: 'Pamlico Point',
		},
		{ slug: 'port-avon', name: 'Port Avon' },
		{
			slug: 'windward-isle',
			name: 'Windward Isle ',
		},
		{ slug: 'kinnakeet', name: 'Kinnakeet ' },
		{
			slug: 'kinnakeet-dunes',
			name: 'Kinnakeet Dunes',
		},
		{ slug: 'cutty-sark', name: 'Cutty Sark' },
		{ slug: 'spencers-cove', name: "Spencer's Cove" },
	],
	buxton: [
		{ slug: 'buxton-pointe', name: null },
		{
			slug: 'buxton-woods',
			name: 'Buxton Woods',
		},
		{ slug: 'cape-hatteras-seashore', name: 'Cape Hatteras Seashore' },
		{
			slug: 'cape-point-estates',
			name: 'Cape Point Estates',
		},
		{ slug: 'crooked-ridge', name: 'Crooked Ridge' },
		{
			slug: 'diamond-point-estates',
			name: 'Diamond Point Estates',
		},
		{ slug: 'edward-quidley', name: 'Edward Quidley' },
		{
			slug: 'flowers-ridge',
			name: 'Flowers Ridge',
		},
		{ slug: 'hatteras-pines', name: 'Hatteras Pines' },
		{
			slug: 'pamlico-overlook',
			name: 'Pamlico Overlook',
		},
		{ slug: 'sanderling-ridge', name: 'Sanderling Ridge' },
		{
			slug: 'serenity-ridge',
			name: 'Serenity Ridge',
		},
		{ slug: 'tower-beach', name: 'Tower Beach' },
		{
			slug: 'village-at-cape-creek',
			name: 'Village at Cape Creek',
		},
		{ slug: 'wallace-gray-subdivision', name: 'Kinnakeet ' },
	],
	frisco: [
		{ slug: 'am-quidley-track', name: 'AM Quidley Tract' },
		{
			slug: 'brigands-bay',
			name: 'Brigands Bay',
		},
		{ slug: 'buccaneer-cove', name: 'Buccaneer Cove' },
		{
			slug: 'ch-fulcher',
			name: 'CH Fulcher',
		},
		{ slug: 'elevy-manor', name: 'Elevy Manor' },
		{
			slug: 'er-midgett',
			name: 'ER Midgett',
		},
		{ slug: 'frisco-point-cape-hatteras', name: 'Frisco Point Cape Hatteras' },
		{
			slug: 'frisco-woods',
			name: 'Frisco Woods',
		},
		{ slug: 'hatterask', name: 'Hatterask' },
		{
			slug: 'hatterasman',
			name: 'Hatterasman',
		},
		{ slug: 'high-tor-sands', name: 'High Tor Sands' },
		{
			slug: 'holiday-haven',
			name: 'Holiday Haven',
		},
		{ slug: 'indiantown-shores', name: 'Indian Town Shores' },
		{
			slug: 'marlin-village',
			name: 'Marlin Village',
		},
		{ slug: 'marshview', name: 'Marshview ' },
		{
			slug: 'pamlico-sound-shores',
			name: 'Pamlico Sound Shores',
		},
		{ slug: 'paradise-bay', name: 'Paradise Bay' },
		{
			slug: 'rogues-retreat',
			name: 'Rogues Retreat',
		},
		{ slug: 'shoresurf', name: 'Shoresurf ' },
		{
			slug: 'spencers-wood',
			name: 'Spencers Wood ',
		},
		{ slug: 'sportsman-village', name: 'Sportsman Village' },
		{
			slug: 'sunset-village',
			name: 'Sunset Village',
		},
		{ slug: 'surf-sound', name: 'Surf Sound ' },
		{
			slug: 'tides-edge',
			name: 'Tides Edge',
		},
		{ slug: 'village-salt-creek', name: 'Village Salt Creek' },
		{
			slug: 'wind-haven-shores',
			name: 'Wind Haven Shores',
		},
	],
	'hatteras island': [
		{ slug: 'atlantic-view', name: 'Atlantic View' },
		{
			slug: 'blue-marlin',
			name: 'Blue Marlin',
		},
		{ slug: 'captains-beach', name: 'Captains Beach' },
		{
			slug: 'durants-station',
			name: 'Durants Station',
		},
		{ slug: 'hatteras-by-the-sea', name: 'Hatteras By The Sea' },
		{
			slug: 'hatteras-colony',
			name: 'Hatteras Colony',
		},
		{ slug: 'hatteras-escape', name: 'Hatteras Escape' },
		{
			slug: 'hatteras-estates',
			name: 'Hatteras Estates',
		},
		{ slug: 'hatteras-harbor', name: 'Hatteras Harbor' },
		{
			slug: 'hatteras-island-club',
			name: 'Hatteras Island Club',
		},
		{ slug: 'hatteras-landing', name: 'Hatteras Landing' },
		{
			slug: 'ocean-dunes',
			name: 'Ocean Dunes',
		},
		{ slug: 'ocean-view', name: 'Ocean View' },
		{
			slug: 'pamlico-point',
			name: 'Pamlico Point ',
		},
		{ slug: 'sea-breeze', name: 'Sea Breeze ' },
		{
			slug: 'slash-creek-condos',
			name: 'Slash Creek Condos',
		},
		{ slug: 'sea-whisper', name: 'Sea Whisper' },
		{
			slug: 'summerplace',
			name: 'Summerplace',
		},
		{ slug: 'sutton-place', name: 'Sutton Place' },
		{
			slug: 'teachs-lair-estates',
			name: 'Teachs Lair Estates ',
		},
		{ slug: 'villas-hatteras-landing-condos', name: 'Villas Hatteras Landing' },
		{
			slug: 'hatteras-retreat',
			name: 'Hatteras Retreat',
		},
	],
	rodanthe: [
		{ slug: 'atlantic-shores', name: 'Atlantic Shores' },
		{
			slug: 'beulah-oneal',
			name: 'Beulah Oneal',
		},
		{ slug: 'chicamacomico-beach', name: 'Chicamacomico Beach' },
		{
			slug: 'corbina-shores',
			name: 'Corbina Shores',
		},
		{ slug: 'estates-at-hatteras-island', name: 'Estates At Hatteras Island' },
		{
			slug: 'hatteras-high',
			name: 'Hatteras High',
		},
		{ slug: 'wimble-shoals', name: 'Wimble Shoals' },
		{
			slug: 'holiday-shores',
			name: 'Holiday Shores',
		},
		{ slug: 'mirlo-beach', name: 'Mirlo Beach' },
		{
			slug: 'resort-rodanthe',
			name: 'Resort Rodanthe',
		},
		{ slug: 'rodanthe-by-the-sea', name: 'Rodanthe By the Sea' },
		{
			slug: 'rowan-beach-estates',
			name: 'Rowan Beach Estates',
		},
		{ slug: 'south-shore', name: 'South Shore' },
		{
			slug: 'southern-vista',
			name: 'Southern Vista',
		},
		{ slug: 'sunset-resort', name: 'Sunset Resort' },
		{
			slug: 'surf-side',
			name: 'Surf Side',
		},
		{ slug: 'trade-winds-beach', name: 'Trade Winds Beach' },
	],
	salvo: [
		{ slug: 'aaron-hill-harbor', name: 'Aaron Hill Harbor' },
		{
			slug: 'farrow-shores',
			name: 'Farrow Shores',
		},
		{ slug: 'hatteras-colony', name: 'Hatteras Colony' },
		{
			slug: 'hattie-creef-landing',
			name: 'Hattie Creef Landing',
		},
		{ slug: 'jb-hooper', name: 'JB Hooper' },
		{
			slug: 'ocean-breakers',
			name: 'Ocean Breakers',
		},
		{ slug: 'salvo-beach', name: 'Salvo Beach' },
		{
			slug: 'south-beach',
			name: 'South Beach',
		},
		{ slug: 'spin-drift-banks', name: 'Spin Drift Banks' },
		{
			slug: 'wimble-shores',
			name: 'Wimble Shores',
		},
		{ slug: 'wind-over-waves', name: 'Wind Over Waves' },
		{ slug: 'sea-oats', name: 'Sea Oats' },
	],
	waves: [
		{ slug: 'beach-lake', name: 'Beach Lake' },
		{
			slug: 'cottage-court',
			name: 'Cottage Court',
		},
		{ slug: 'gull-shoal-manor', name: 'Gull Shoal Manor' },
		{
			slug: 'island-pines',
			name: 'Island Pines',
		},
		{ slug: 'isle-of-waves', name: 'Isle Of Waves' },
		{
			slug: 'la-waves',
			name: 'La Waves',
		},
		{ slug: 'mac-oca-reef', name: 'Mac Oca Reef' },
		{
			slug: 'palisade-acres',
			name: 'Palisade Acres',
		},
		{ slug: 'sea-isle-hills', name: 'Sea Isle Hills' },
		{
			slug: 'sea-isle-shores',
			name: 'Sea Isle Shores',
		},
		{ slug: 'st-waves', name: 'St Waves' },
		{
			slug: 'waves-soundside',
			name: 'Waves Soundside',
		},
		{ slug: 'wimble-shores-north', name: 'Wimble Shores North' },
	],
};