// Here's how I generated these: I went to a page like
// https://www.outerbankshome.com/outer%20banks/real%20estate/corolla/, then scrolled to the bottom to get the list of
// subdivisions. I'd use the devtools to put the UL tag as $0, and then run (be sure to replace the area slug, e.g.
// corolla, with whatever page you're on):
//   JSON.stringify(Array.prototype.map.call($0.querySelectorAll('li a'), x => ({ slug: x.getAttribute('href').replace('https://www.outerbankshome.com/outer banks/real estate/corolla/', '').replace('.asp', ''), name: x.getAttribute('title') })))
export const allowedSubdivisions = {
	corolla: [
		{ slug: 'villages_at_ocean_hill', displayName: 'Villages at Ocean Hill',  databaseName: 'Villages at Ocean Hill' },
		{ slug: 'corolla-village', displayName: 'Corolla Village',  databaseName: 'Corolla Village' },
		{ slug: 'ocean-hill', displayName: 'Ocean Hill ',  databaseName: 'Ocean Hill ' },
		{ slug: 'corolla-light', displayName: 'Corolla Light',  databaseName: 'Corolla Light' },
		{ slug: 'whalehead', displayName: 'Whalehead Club',  databaseName: 'Whalehead Club' },
		{ slug: 'corolla-bay', displayName: 'Corolla Bay',  databaseName: 'Corolla Bay' },
		{ slug: 'monteray-shores', displayName: 'Monteray Shores',  databaseName: 'Monteray Shores' },
		{ slug: 'bi-buck', displayName: 'BI-Buck Island',  databaseName: 'BI-Buck Island' },
		{ slug: 'crown-point', displayName: 'Crown Point',  databaseName: 'Crown Point' },
		{ slug: 'ocean-sands', displayName: 'Ocean Sands',  databaseName: 'Ocean Sands' },
		{ slug: 'tcc-currituck-club', displayName: 'TCC-Currituck Club',  databaseName: 'TCC-Currituck Club' },
		{ slug: 'tcc-the-hammocks', displayName: 'TCC-The Hammocks',  databaseName: 'TCC-The Hammocks' },
		{ slug: 'tcc-magnolia-bay', displayName: 'TCC-Magnolia Bay',  databaseName: 'TCC-Magnolia Bay' },
		{ slug: 'spindrift', displayName: 'Spindrift',  databaseName: 'Spindrift' },
		{ slug: 'indian-summer', displayName: 'Indian Summer',  databaseName: 'Indian Summer' },
		{ slug: 'mirage-condos', displayName: 'Mirage Condo',  databaseName: 'Mirage Condo' },
		{ slug: 'sealoft-village', displayName: 'Sealoft Village',  databaseName: 'Sealoft Village' },
		{ slug: 'seaside-villas', displayName: 'Seaside Villas',  databaseName: 'Seaside Villas' },
		{ slug: 'tcc-windswept-ridge', displayName: 'TCC-Windswept Ridge',  databaseName: 'TCC-Windswept Ridge' },
		{ slug: 'lighthouse-villas', displayName: 'Lighthouse Villas',  databaseName: 'Lighthouse Villas' },
		{ slug: 'corolla-phone-numbers', displayName: 'Corolla phone numbers',  databaseName: 'Corolla phone numbers' },
		{ slug: 'pine-island', displayName: 'Pine Island',  databaseName: 'Pine Island' },
		{ slug: '4-wheel-drive-beaches', displayName: '4 Wheel Drive Beaches',  databaseName: '4 Wheel Drive Beaches' },
		{ slug: 'beacon-villas', displayName: 'Beacon Villas',  databaseName: 'Beacon Villas' },
		{ slug: 'monteray-pines', displayName: 'Monteray Pines',  databaseName: 'Monteray Pines' },
		{ slug: 'currituck-cottages', displayName: 'Currituck Cottages',  databaseName: 'Currituck Cottages' },
	],
	duck: [
		{ slug: 'palmers-island', displayName: "Palmer's Island", databaseName: "Palmer's Island"  },
		{ slug: 'station-bay-cove', displayName: 'Station Bay Cove', databaseName: 'Station Bay Cove'  },
		{ slug: 'sanderling', displayName: 'Sanderling', databaseName: 'Sanderling'  },
		{ slug: 'gulls-flight', displayName: "Gull's Flight", databaseName: "Gull's Flight"  },
		{ slug: 'sound-sea-vill', displayName: 'Sound-Sea Village', databaseName: 'Sound-Sea Vill'  },
		{ slug: 'caffeys inlet hamlet', displayName: "Caffey's Inlet Hamlet", databaseName: "Caffey's Inlet Hamlet"},
		{ slug: 'sea-tern', displayName: 'Sea Tern', databaseName: 'Sea Tern'  },
		{ slug: 'port-trinitie', displayName: 'Port Trinitie', databaseName: 'Port Trinitie'  },
		{ slug: 'wild-duck-dunes', displayName: 'Wild Duck Dunes', databaseName: 'Wild Duck Dunes'  },
		{ slug: 'north-point', displayName: 'Northpoint', databaseName: 'Northpoint'  },
		{ slug: 'carolina-dunes', displayName: 'Carolina Dunes', databaseName: 'Carolina Dunes'  },
		{ slug: 'snow-geese-dune', displayName: 'Snow Geese Dune', databaseName: 'Snow Geese Dune'  },
		{ slug: 'osprey', displayName: 'Osprey', databaseName: 'Osprey'  },
		{ slug: 'sea-ridge', displayName: 'Sea Ridge', databaseName: 'Sea Ridge'  },
		{ slug: 'sandy-ridge', displayName: 'Sandy Ridge', databaseName: 'Sandy Ridge'  },
		{ slug: 'ships-watch', displayName: "Ships Watch", databaseName: "Ships Watch"  },
		{ slug: 'barrier-isl-sta', displayName: 'Barrier Isl Sta', databaseName: 'Barrier Isl Sta'  },
		{ slug: 'olde-duck-beach', displayName: 'Olde Duck Beach', databaseName: 'Olde Duck Beach'  },
		{ slug: 'sea-colony', displayName: 'Sea Colony', databaseName: 'Sea Colony'  },
		{ slug: 'bayberry-bluff', displayName: 'Bayberry Bluff', databaseName: 'Bayberry Bluff'  },
		{ slug: 'saltaire-lots', displayName: 'Saltaire Lots', databaseName: 'Saltaire Lots'  },
		{ slug: 'poteskeet-vlg', displayName: 'Poteskeet Vlg', databaseName: 'Poteskeet Vlg'  },
		{ slug: 'schooner-ridge', displayName: 'Schooner Ridge', databaseName: 'Schooner Ridge'  },
		{ slug: 'duck-landing', displayName: 'Duck Landing', databaseName: 'Duck Landing'  },
		{ slug: 'poteskeet', displayName: 'Poteskeet', databaseName: 'Poteskeet'  },
		{ slug: 'ocean-dunes', displayName: 'Ocean Dunes', databaseName: 'Ocean Dunes'  },
		{ slug: 'seapines', displayName: 'Seapines', databaseName: 'Seapines'  },
		{ slug: 'amy-acres', displayName: 'Amy Acres', databaseName: 'Amy Acres'  },
		{ slug: 'sea-acres', displayName: 'Sea Acres', databaseName: 'Sea Acres'  },
		{ slug: 'georgetown-snd', displayName: 'Georgetown Snd', databaseName: 'Georgetown Snd'  },
		{ slug: 'sand-dollr-shrs', displayName: 'Sand Dollr Shrs', databaseName: 'Sand Dollr Shrs'  },
		{ slug: 'tuckahoe', displayName: 'Tuckahoe', databaseName: 'Tuckahoe'  },
		{ slug: 'sea-hawk', displayName: 'Sea Hawk', databaseName: 'Sea Hawk'  },
		{ slug: 'bias-shores', displayName: 'Bias Shores', databaseName: 'Bias Shores'  },
		{ slug: 'ocean-crest', displayName: 'Oceancrest', databaseName: 'Oceancrest'  },
		{ slug: 'colony-bt-sea', displayName: 'Colony Bt Sea', databaseName: 'Colony Bt Sea'  },
		{ slug: 'duck-blnd-villa', displayName: 'Duck Blnd Villa', databaseName: 'Duck Blnd Villa'  },
		{ slug: 'duck-ridge-shr', displayName: 'Duck Ridge Shr', databaseName: 'Duck Ridge Shr'  },
		{ slug: 'jay-crest', displayName: 'Jay Crest', databaseName: 'Jay Crest'  },
		{ slug: 'nantucket-vill', displayName: 'Nantucket Vill', databaseName: 'Nantucket Vill'  },
		{ slug: 'osprey-ridge', displayName: 'Osprey Ridge', databaseName: 'Osprey Ridge'  },
		{ slug: 'tides-of-duck', displayName: 'Tides of Duck', databaseName: 'Tides of Duck'  },
		{ slug: 'duck-ridge-vill', displayName: 'Duck Ridge Vill ', databaseName: 'Duck Ridge Vill '  },
		{ slug: 'four-seasons', displayName: 'Four Seasons', databaseName: 'Four Seasons'  },
		{ slug: 'c-c-byrum', displayName: 'C C Byrum', databaseName: 'C C Byrum'  },
	],
	'southern-shores': [
		{ slug: 'seacrest-village', displayName: 'Seacrest Village', databaseName: 'Seacrest Village'  },
		{ slug: 'chicahauk', displayName: 'Chicahauk', databaseName: 'Chicahauk'  },
		{ slug: 'southern-shores-landing', displayName: 'Southern Shores Landing', databaseName: 'Southern Shores Landing'  },
		{ slug: 'pelican-watch', displayName: 'Pelican Watch', databaseName: 'Pelican Watch'  },
	],
	'martins point': [],
	KittyHawk: [
		{ slug: 'avery-isle', displayName: 'Avery Isle', databaseName: 'Avery Isle'  },
		{ slug: 'bay-ridge', displayName: 'Bay Ridge', databaseName: 'Bay Ridge'  },
		{ slug: 'the-dunes', displayName: 'The Dunes', databaseName: 'The Dunes'  },
		{ slug: 'kitty-hawk-estates', displayName: 'Kitty Hawk Estates', databaseName: 'Kitty Hawk Estates'  },
		{ slug: 'elijah-tate', displayName: 'Elijah W Tate', databaseName: 'Elijah W Tate'  },
		{ slug: 'fairway-heights', displayName: 'Fairway Heights', databaseName: 'Fairway Heights'  },
		{ slug: 'hickory-ridge', displayName: 'Hickory Ridge', databaseName: 'Hickory Ridge'  },
		{ slug: 'hurdle-estate', displayName: 'Hurdle Estate', databaseName: 'Hurdle Estate'  },
		{ slug: 'john-l-beacham', displayName: 'John L Beacham', databaseName: 'John L Beacham'  },
		{ slug: 'nora-baum', displayName: 'Nora & E W Baum', databaseName: 'Nora & E W Baum'  },
		{ slug: 'ocean-greens', displayName: 'Ocean Greens', databaseName: 'Ocean Greens'  },
		{ slug: 'sea-retreat', displayName: 'Sea Retreat', databaseName: 'Sea Retreat'  },
		{ slug: 'sea-view-place', displayName: 'Sea View Place', databaseName: 'Sea View Place'  },
		{ slug: 'ward', displayName: 'Ward', databaseName: 'Ward'  },
		{ slug: 'sea-dunes', displayName: 'Sea Dunes Townhouses', databaseName: 'Sea Dunes Townhouses'  },
		{ slug: 'kitty-hawk-woods', displayName: 'Kitty Hawk Woods', databaseName: 'Kitty Hawk Woods'  },
		{ slug: 'ocean-winds', displayName: 'Ocean Winds Townhomes', databaseName: 'Ocean Winds Townhomes'  },
		{ slug: 'dunetop', displayName: 'Dunetops Townhouses', databaseName: 'Dunetops Townhouses'  },
		{ slug: 'southern-woods', displayName: 'Southern Woods', databaseName: 'Southern Woods'  },
		{ slug: 'kitty-hawk-beach', displayName: 'Kitty Hawk Beach', databaseName: 'Kitty Hawk Beach'  },
		{ slug: 'pine-hill', displayName: 'Pine Hill', databaseName: 'Pine Hill'  },
		{ slug: 'seascape', displayName: 'Sea Scape', databaseName: 'Sea Scape'  },
		{ slug: 'linkside-view', displayName: 'Linkside View', databaseName: 'Linkside View'  },
		{ slug: 'sanderlin-shores', displayName: 'Sanderlin Shores', databaseName: 'Sanderlin Shores'  },
		{ slug: 'kitty-hawk-landing', displayName: 'Kitty Hawk Landing', databaseName: 'Kitty Hawk Landing'  },
		{ slug: 'poor-ridge-estates', displayName: 'Poor Ridge Estates', databaseName: 'Poor Ridge Estates'  },
		{ slug: 'kitty-dunes', displayName: 'Kitty Dunes', databaseName: 'Kitty Dunes'  },
		{ slug: 'kitty-dunes-heights', displayName: 'Kitty Dunes Heights', databaseName: 'Kitty Dunes Heights'  },
		{ slug: 'first-flight-ridge', displayName: 'First Flight Ridge', databaseName: 'First Flight Ridge'  },
		{ slug: 'woodard-acres', displayName: 'Woodard Acres', databaseName: 'Woodard Acres'  },
		{ slug: 'oak-run', displayName: 'Oak Run', databaseName: 'Oak Run'  },
		{ slug: 'harbour-bay', displayName: 'Harbour Bay', databaseName: 'Harbour Bay'  },
		{ slug: 'duneview', displayName: 'Duneview', databaseName: 'Duneview'  },
		{ slug: 'keepers-hill', displayName: 'Keepers Hill', databaseName: 'Keepers Hill'  },
		{ slug: 'sandpiper-cay', displayName: 'Sandpiper Cay Condos', databaseName: 'Sandpiper Cay Condos'  },
		{ slug: 'gables', displayName: 'Gables Condos', databaseName: 'Gables Condos'  },
		{ slug: 'ted-wood-kitty-hawk-terrace', displayName: 'Ted Wood Kitty Hawk Terrace', databaseName: 'Ted Wood Kitty Hawk Terrace'  },
		{ slug: 'linkside-woods', displayName: 'Linkside Woods', databaseName: 'Linkside Woods'  },
	],
	KillDevilHills: [
		{ slug: 'virginia-dare-shores', displayName: 'Virginia Dare Shores' , databaseName: 'Virginia Dare Shores' },
		{ slug: 'kitty-hawk-shores',	displayName: 'Kitty Hawk Shores', databaseName: 'Kitty Hawk Shores'},
		{ slug: 'croatan-shores', displayName: 'Croatan Shores' , databaseName: 'Croatan Shores' },
		{ slug: 'ocean-acres',displayName: 'Ocean Acres', databaseName: 'Ocean Acres'},
		{ slug: 'whispering-pines', displayName: 'Whispering Pines' , databaseName: 'Whispering Pines' },
		{ slug: 'baum-bay-harbor', displayName: 'Baum Bay Harbor', databaseName: 'Baum Bay Harbor'},
		{ slug: 'first-flight-village', displayName: 'First Flight Village' , databaseName: 'First Flight Village' },
		{ slug: 'wright-woods', displayName: 'Wright Woods', databaseName: 'Wright Woods'},
		{ slug: 'the-landing', displayName: 'The Landing' , databaseName: 'The Landing' },
		{ slug: 'sea-holly-ridge',	displayName: 'Sea Holly Ridge', databaseName: 'Sea Holly Ridge'},
		{ slug: 'wrights-shores', displayName: "Wright's Shores" , databaseName: "Wright's Shores" },
		{ slug: 'moor-shores',	displayName: 'Moor Shores', databaseName: 'Moor Shores'},
		{ slug: 'avalon-beach', displayName: 'Avalon Beach' , databaseName: 'Avalon Beach' },
		{ slug: 'delray-beach',	displayName: 'Delray Beach', databaseName: 'Delray Beach'},
		{ slug: 'fresh-pond-beaches', displayName: 'Fresh Pond Beaches' , databaseName: 'Fresh Pond Beaches' },
		{ slug: 'high-view',	displayName: 'High View', databaseName: 'High View'},
		{ slug: 'kill-devil-beach', displayName: 'Kill Devil Beach' , databaseName: 'Kill Devil Beach' },
		{ slug: 'kill-devil-hills-sub',	displayName: 'Kill Devil Hills', databaseName: 'Kill Devil Hills'},
		{ slug: 'kill-devil-hills-realty', displayName: 'Kill Devil Hills Realty Corp' , databaseName: 'Kill Devil Hills Realty Corp' },
		{ slug: 'lake-drive-development', displayName: 'Lake Drive Development', databaseName: 'Lake Drive Development'},
		{ slug: 'long-lake', displayName: 'Long Lake' , databaseName: 'Long Lake' },
		{ slug: 'memorial-overlook',	displayName: 'Memorial Overlook', databaseName: 'Memorial Overlook'},
		{ slug: 'mosier-shores', displayName: 'Mosier Shores' , databaseName: 'Mosier Shores' },
		{ slug: 'nine-estates', displayName: 'Nine Estates', databaseName: 'Nine Estates'},
		{ slug: 'orville-beach', displayName: 'Orville Beach' , databaseName: 'Orville Beach' },
		{ slug: 'crystal-shores',	displayName: 'Crystal Shores Condos', databaseName: 'Crystal Shores Condos'},
		{ slug: 'captains-quarters', displayName: "Captain's Quarters Condos" , databaseName: "Captain's Quarters Condos" },
		{ slug: 'First Flight Retreat',	displayName: 'First Flight Retreat Condos', databaseName: 'First Flight Retreat Condos'},
		{ slug: 'casa-del-sol', displayName: 'Casa del Sol Condos' , databaseName: 'Casa del Sol Condos' },
		{ slug: 'seawalk-condos', displayName: 'Seawalk Condos', databaseName: 'Seawalk Condos'},
		{ slug: 'regency-condos', displayName: 'Regency Condos' , databaseName: 'Regency Condos' },
		{ slug: 'sand-castle-condos',	displayName: 'Sand Castle Condos', databaseName: 'Sand Castle Condos'},
		{ slug: 'sands-condos', displayName: 'Sands Condos' , databaseName: 'Sands Condos' },
		{ slug: 'gulfstream-condos',	displayName: 'Gulfstream Condos', databaseName: 'Gulfstream Condos'},
		{ slug: 'golden-strand', displayName: 'Golden Strand Condos' , databaseName: 'Golden Strand Condos' },
		{ slug: 'admirals-view-2',	displayName: "Admiral's View II", databaseName: "Admiral's View II"},
		{ slug: 'admirals-view-3', displayName: "Admiral's View III" , databaseName: "Admiral's View III" },
		{ slug: 'croatan-surf-club',	displayName: 'Croatan Surf Club Condos', databaseName: 'Croatan Surf Club Condos'},
		{ slug: 'scrimshaw-condos', displayName: 'Scrimshaw Condos' , databaseName: 'Scrimshaw Condos' },
		{ slug: 'sea-oats-villas',	displayName: 'Sea Oats Villas', databaseName: 'Sea Oats Villas'},
		{ slug: 'breakers-condos', displayName: 'Breakers Condos' , databaseName: 'Breakers Condos' },
		{ slug: '7cs-condos', displayName: '7cs Condos', databaseName: '7cs Condos'},
		{ slug: 'banks-condos', displayName: 'Banks Condos' , databaseName: 'Banks Condos' },
		{ slug: 'bermuda-bay',	displayName: 'Bermuda Bay', databaseName: 'Bermuda Bay'},
		{ slug: 'devonshire-place-condos', displayName: 'Devonshire Place Condos' , databaseName: 'Devonshire Place Condos' },
		{ slug: 'hamilton-cay-condos',	displayName: 'Hamilton Cay Condos', databaseName: 'Hamilton Cay Condos'},
		{ slug: 'cambridge-cove', displayName: 'Cambridge Cove' , databaseName: 'Cambridge Cove' },
		{ slug: 'victoria-place',	displayName: 'Victoria Place Condos', databaseName: 'Victoria Place Condos'},
		{ slug: 'hughes-retreat', displayName: 'Hughes Retreat' , databaseName: 'Hughes Retreat' },
		{ slug: 'station-one-condos',	displayName: 'Station One Condos', databaseName: 'Station One Condos'},
		{ slug: 'sundune-village-condos', displayName: 'Sundune Village Condos' , databaseName: 'Sundune Village Condos' },
		{ slug: 'vans-town-houses',	displayName: 'Vans Town Houses', databaseName: 'Vans Town Houses'},
		{ slug: 'lakeside-villas', displayName: 'Lakeside Villas' , databaseName: 'Lakeside Villas' },
		{ slug: 'banks-condos',	displayName: 'Banks Condos', databaseName: 'Banks Condos'},
		{ slug: 'coastal-retreat-condos', displayName: 'Coastal Retreat Condos' , databaseName: 'Coastal Retreat Condos' },
		{ slug: 'ocean-east-condos',	displayName: 'Oceans East Condos', databaseName: 'Oceans East Condos'},
		{ slug: 'Sea-Pointe', displayName: 'Sea Pointe Condos' , databaseName: 'Sea Pointe Condos' },
		{ slug: 'pirates-moor-condos', displayName: 'Pirates Moor Condos', databaseName: 'Pirates Moor Condos'},
		{ slug: 'natures-walk-condos', displayName: "Nature's Walk Condos" , databaseName: "Nature's Walk Condos" },
		{ slug: 'oyster-pointe',	displayName: 'Oyster Pointe', databaseName: 'Oyster Pointe'},
		{ slug: 'soundside-woods', displayName: 'Soundside Woods' , databaseName: 'Soundside Woods' },
	],
	'nags head': [
		{ slug: 'nags-head-4-bedroom-homes', displayName: 'Nags Head 4 Bedroom Homes' , databaseName: 'Nags Head 4 Bedroom Homes' },
		{ slug: 'nags-head-3-bedroom-homes', displayName: 'Nags Head 3 Bedroom Homes' , databaseName: 'Nags Head 3 Bedroom Homes' },
		{ slug: 'pebble-beach-shores', displayName: 'Pebble Beach Shores' , databaseName: 'Pebble Beach Shores' },
		{ slug: 'south-creek-acres', displayName: 'South Creek Acres' , databaseName: 'South Creek Acres' },
		{ slug: 'hills-of-nags-head', displayName: 'Hills of Nags Head' , databaseName: 'Hills of Nags Head' },
		{ slug: 'old-nags-head-cove', displayName: 'Old Nags Head Cove' , databaseName: 'Old Nags Head Cove' },
		{ slug: 'vista-colony', displayName: 'Vista Colony' , databaseName: 'Vista Colony' },
		{ slug: 'pier-one', displayName: 'Pier One' , databaseName: 'Pier One' },
		{ slug: 'southridge', displayName: 'Southridge' , databaseName: 'Southridge' },
		{ slug: 'old-nags-head-place', displayName: 'Old Nags Head Place' , databaseName: 'Old Nags Head Place' },
		{ slug: 'sugar-creek', displayName: 'The Landings at Sugar Creek Condos' , databaseName: 'The Landings at Sugar Creek Condos' },
		{ slug: 'villas', displayName: 'The Villas Condos' , databaseName: 'The Villas Condos' },
		{ slug: 'diamond-shoals', displayName: 'Diamond Shoals Condos' , databaseName: 'Diamond Shoals Condos' },
		{ slug: 'heron-cove', displayName: 'Heron Cove Condos' , databaseName: 'Heron Cove Condos' },
		{ slug: 'north-ridge', displayName: 'North Ridge' , databaseName: 'North Ridge' },
		{ slug: 'gertrude-sucro', displayName: 'Gertrude Sucro' , databaseName: 'Gertrude Sucro' },
		{ slug: 'ocean-colony-south', displayName: 'Ocean Colony South' , databaseName: 'Ocean Colony South' },
		{ slug: 'oceans', displayName: 'Oceans Condos' , databaseName: 'Oceans Condos' },
		{ slug: 'george-stronach', displayName: 'George T Stronach' , databaseName: 'George T Stronach' },
		{ slug: 'oceanside', displayName: 'Oceanside' , databaseName: 'Oceanside' },
		{ slug: 'quay', displayName: 'The Quay Condos' , databaseName: 'The Quay Condos' },
		{ slug: 'goose-wing', displayName: 'Goose Wing' , databaseName: 'Goose Wing' },
		{ slug: 'whalebone-beaches', displayName: 'Whalebone Beaches' , databaseName: 'Whalebone Beaches' },
		{ slug: 'kitty-dunes-estates', displayName: 'Kitty Dunes Estates' , databaseName: 'Kitty Dunes Estates' },
		{ slug: 'roanoke-shore', displayName: 'Roanoke Shore' , databaseName: 'Roanoke Shore' },
		{ slug: 'carolinian-colony', displayName: 'Carolinian Colony' , databaseName: 'Carolinian Colony' },
		{ slug: 'bodie-island-beach', displayName: 'Bodie Island Beach' , databaseName: 'Bodie Island Beach' },
		{ slug: 'old-hotel-lots', displayName: 'Old Hotel Lots' , databaseName: 'Old Hotel Lots' },
		{ slug: 'high-dunes', displayName: 'High Dunes' , databaseName: 'High Dunes' },
		{ slug: 'tides-time', displayName: 'Tides Time ' , databaseName: 'Tides Time ' },
		{ slug: 'roanoke-sound-shores', displayName: 'Roanoke Sound Shores' , databaseName: 'Roanoke Sound Shores' },
		{ slug: 'dunes-south', displayName: 'Dunes South' , databaseName: 'Dunes South' },
		{ slug: 'pelican-park', displayName: 'Pelican Park' , databaseName: 'Pelican Park' },
		{ slug: 'nags-head-shore', displayName: 'Nags Head Shores' , databaseName: 'Nags Head Shores' },
		{ slug: 'yaupon-beach', displayName: 'Yaupon Beach' , databaseName: 'Yaupon Beach' },
		{ slug: 'chawanook-cay', displayName: 'Chawanook Cay' , databaseName: 'Chawanook Cay' },
		{ slug: 'glenlea-beach', displayName: 'Glenlea Beach' , databaseName: 'Glenlea Beach' },
		{ slug: 'coastal-cove', displayName: 'Coastal Cove' , databaseName: 'Coastal Cove' },
		{ slug: 'edwards', displayName: 'Edwards' , databaseName: 'Edwards' },
		{ slug: 'northbank', displayName: 'Northbank' , databaseName: 'Northbank' },
		{ slug: 'enclaves-at-nags-head', displayName: 'Enclaves At Nags Head' , databaseName: 'Enclaves At Nags Head' },
		{ slug: 'foster', displayName: 'Foster' , databaseName: 'Foster' },
		{ slug: 'hollywood-beach', displayName: 'Hollywood Beach' , databaseName: 'Hollywood Beach' },
		{ slug: 'nags-head-dunes', displayName: 'Nags Head Dunes' , databaseName: 'Nags Head Dunes' },
		{ slug: 'sea-fare', displayName: 'Sea Fare' , databaseName: 'Sea Fare' },
		{ slug: 'admirals-view', displayName: "Admiral's View Condos" , databaseName: "Admiral's View Condos" },
		{ slug: 'viking-court', displayName: 'Viking Court Condos' , databaseName: 'Viking Court Condos' },
		{ slug: 'seashore-properties', displayName: 'Seashore Properties' , databaseName: 'Seashore Properties' },
		{ slug: 'conch-shell-estates', displayName: 'Conch Shell Estates' , databaseName: 'Conch Shell Estates' },
		{ slug: 'lone-cedar-village', displayName: 'Lone Cedar Village' , databaseName: 'Lone Cedar Village' },
		{ slug: 'thomas-fox', displayName: 'Thomas A Fox Jr' , databaseName: 'Thomas A Fox Jr' },
		{ slug: 'nags-head-acres', displayName: 'Nags Head Acres' , databaseName: 'Nags Head Acres' },
		{ slug: 'windjammer', displayName: 'Windjammer Condos' , databaseName: 'Windjammer Condos' },
		{ slug: 'pond-island-marina', displayName: 'Pond Island Marina' , databaseName: 'Pond Island Marina' },
		{ slug: 'ocean-palms', displayName: 'Ocean Palms Condos' , databaseName: 'Ocean Palms Condos' },
		{ slug: 'tides-time', displayName: 'Tides Time' , databaseName: 'Tides Time' },
		{ slug: 'moongate', displayName: 'Moongate' , databaseName: 'Moongate' },
		{ slug: 'village-at-nags-head', displayName: 'The Village at Nags Head' , databaseName: 'The Village at Nags Head' },
		{ slug: 'bluffs-condos', displayName: 'Bluffs Condos' , databaseName: 'Bluffs Condos' },
		{ slug: 'yachtsman-condos', displayName: 'Yachtsman Condos' , databaseName: 'Yachtsman Condos' },
		{ slug: 'eighteen-south-condos', displayName: 'Eighteen South Condos' , databaseName: 'Eighteen South Condos' },
		{ slug: 'whispering-sands-condos', displayName: 'Whispering Sands Condos' , databaseName: 'Whispering Sands Condos' },
		{ slug: 'village-nest-condos', displayName: 'Village Nest Condos' , databaseName: 'Village Nest Condos' },
		{ slug: 'nags-head-pond', displayName: 'Nags Head Pond' , databaseName: 'Nags Head Pond' },
		{ slug: 'south-nags-head', displayName: 'South Nags Head Houses' , databaseName: 'South Nags Head Houses' },
		{ slug: 'nags-head-beach', displayName: 'Nags Head Beach' , databaseName: 'Nags Head Beach' },
		{ slug: 'oceanwatch', displayName: 'Oceanwatch' , databaseName: 'Oceanwatch' },
		{ slug: 'oceans', displayName: 'Oceans Condos' , databaseName: 'Oceans Condos' },
	],
	manteo: [
		{ slug: 'pirates-cove', displayName: "Pirate's Cove" , databaseName: "Pirate's Cove" },
		{ slug: 'pirates-cove-condos',	displayName: 'Pirates Cove Condos', databaseName: 'Pirates Cove Condos'},
		{ slug: 'ballast-pointe-villas', displayName: 'Ballast Pointe Villas Condos' , databaseName: 'Ballast Pointe Villas Condos' },
		{ slug: 'buccaneer-village-condos',	displayName: 'Buccaneer Village Condos', databaseName: 'Buccaneer Village Condos'},
		{ slug: 'gulf-stream-condos', displayName: 'Gulf Stream Condos' , databaseName: 'Gulf Stream Condos' },
		{ slug: 'harbour-place-condos',	displayName: 'Harbour Place Condos', databaseName: 'Harbour Place Condos'},
		{ slug: 'sailfish-villas-condos', displayName: 'Sailfish Villas Condos' , databaseName: 'Sailfish Villas Condos' },
		{ slug: 'sextant-village',	displayName: 'Sextant Village', databaseName: 'Sextant Village'},
		{ slug: 'alder-branch-estates', displayName: 'Alder Branch Estates' , databaseName: 'Alder Branch Estates' },
		{ slug: 'brakewood',	displayName: 'Brakewood', databaseName: 'Brakewood'},
		{ slug: 'burnside-forest', displayName: 'Burnside Forest' , databaseName: 'Burnside Forest' },
		{ slug: 'cedar-bay',	displayName: 'Cedar Bay', databaseName: 'Cedar Bay'},
		{ slug: 'croatan-condos', displayName: 'Croatan Condos' , databaseName: 'Croatan Condos' },
		{ slug: 'croatan-woods',	displayName: 'Croatan Woods', databaseName: 'Croatan Woods'},
		{ slug: 'cypress-cove', displayName: 'Cypress Cove' , databaseName: 'Cypress Cove' },
		{ slug: 'dogwood-hills',	displayName: 'Dogwood Hills', databaseName: 'Dogwood Hills'},
		{ slug: 'duke-woods', displayName: 'Duke Woods' , databaseName: 'Duke Woods' },
		{ slug: 'first-colony-estates',	displayName: 'First Colony Estates', databaseName: 'First Colony Estates'},
		{ slug: 'heritage-point', displayName: 'Heritage Point' , databaseName: 'Heritage Point' },
		{ slug: 'kellam-estates',	displayName: 'Kellam Estates', databaseName: 'Kellam Estates'},
		{ slug: 'Marshes Light', displayName: 'Marshes Light' , databaseName: 'Marshes Light' },
		{ slug: 'nottingham', displayName: 'Nottingham', databaseName: 'Nottingham'},
		{ slug: 'peninsula', displayName: 'Peninsula' , databaseName: 'Peninsula' },
		{ slug: 'roanoak-village',	displayName: 'Roanoak Village', databaseName: 'Roanoak Village'},
		{ slug: 'holly-woods', displayName: 'Holly Woods' , databaseName: 'Holly Woods' },
		{ slug: 'roanoke-shores-condos',	displayName: 'Roanoke Shores Condos', databaseName: 'Roanoke Shores Condos'},
		{ slug: 'roanoke-park', displayName: 'Roanoke Park' , databaseName: 'Roanoke Park' },
		{ slug: 'shallowbag-bay-club',	displayName: 'Shallowbag Bay Club Condos', databaseName: 'Shallowbag Bay Club Condos'},
		{ slug: 'the-flats', displayName: 'The Flats' , databaseName: 'The Flats' },
		{ slug: 'vista-lake',	displayName: 'Vista Lake', databaseName: 'Vista Lake'},
		{ slug: 'waterfront-condos', displayName: 'Waterfront Condos' , databaseName: 'Waterfront Condos' },
		{ slug: 'wildwoods', displayName: 'Wildwoods' , databaseName: 'Wildwoods' },
	],
	colington: [
		{ slug: 'colington-harbour/', displayName: 'Colington Harbour' , databaseName: 'Colington Harbour' },
		{ slug: 'colington-pointe',	displayName: 'Colington Pointe', databaseName: 'Colington Pointe'},
		{ slug: 'bay-cliff', displayName: 'BayCliff' , databaseName: 'BayCliff' },
		{
			slug: 'colington-creek',
			displayName: 'Colington Creek Estates', databaseName: 'Colington Creek Estates'},
		{ slug: 'cliffs-of-colington', displayName: 'Cliffs of Colington' , databaseName: 'Cliffs of Colington' },
		{			slug: 'colingwood',
			displayName: 'Colingwood', databaseName: 'Colingwood'},
		{ slug: 'swan-view-shores', displayName: 'Swan View Shores' , databaseName: 'Swan View Shores' },
		{			slug: 'waters-edge',
			displayName: 'Waters Edge', databaseName: 'Waters Edge'},
		{ slug: 'william-colington-estate', displayName: 'Williams Colington Estate' , databaseName: 'Williams Colington Estate' },
		{slug: 'sunrise-crossing',	displayName: 'Sunrise Crossing', databaseName: 'Sunrise Crossing'},
		{ slug: 'colington-glen', displayName: 'Colington Glen' , databaseName: 'Colington Glen' },
		{ slug: 'carlyle-on-the-sound',	displayName: 'Carlyle On The Sound', databaseName: 'Carlyle On The Sound'},
	],
	avon: [
		{ slug: 'askins-creek', displayName: 'Askins Creek' , databaseName: 'Askins Creek' },
		{slug: 'atl-estates',	displayName: 'Atlantic Estates', databaseName: 'Atlantic Estates'},
		{ slug: 'avon-shores', displayName: 'Avon Shores' , databaseName: 'Avon Shores' },
		{slug: 'canal-ridge', displayName: 'Canal Ridge', databaseName: 'Canal Ridge'},
		{ slug: 'cape-channel', displayName: 'Cape Channel' , databaseName: 'Cape Channel' },
		{ slug: 'hatteras-colony',	displayName: 'Hatteras Colony', databaseName: 'Hatteras Colony'},
		{ slug: 'islander-condos', displayName: 'Islander Condos' , databaseName: 'Islander Condos' },
		{slug: 'kinnakeet-shores',	displayName: 'Kinnakeet Shores', databaseName: 'Kinnakeet Shores'},
		{ slug: 'ocean-isle-estates', displayName: 'Ocean Islae Estates' , databaseName: 'Ocean Islae Estates' },
		{ slug: 'oceanfront-enterprises', displayName: 'Oceanfront Enterprises', databaseName: 'Oceanfront Enterprises'},
		{ slug: 'pamlico-condos', displayName: 'Pamlico Condos' , databaseName: 'Pamlico Condos' },
		{slug: 'pamlico-point',	displayName: 'Pamlico Point', databaseName: 'Pamlico Point'},
		{ slug: 'port-avon', displayName: 'Port Avon' , databaseName: 'Port Avon' },
		{slug: 'windward-isle',	displayName: 'Windward Isle ', databaseName: 'Windward Isle '},
		{ slug: 'kinnakeet', displayName: 'Kinnakeet ' , databaseName: 'Kinnakeet ' },
		{slug: 'kinnakeet-dunes', displayName: 'Kinnakeet Dunes', databaseName: 'Kinnakeet Dunes'},
		{ slug: 'cutty-sark', displayName: 'Cutty Sark' , databaseName: 'Cutty Sark' },
		{ slug: 'spencers-cove', displayName: "Spencer's Cove" , databaseName: "Spencer's Cove" },
	],
	buxton: [
		{ slug: 'buxton-pointe', displayName: 'Buxton Pointe' , databaseName: 'Buxton Pointe' },
		{slug: 'buxton-woods',	displayName: 'Buxton Woods', databaseName: 'Buxton Woods'},
		{ slug: 'cape-hatteras-seashore', displayName: 'Cape Hatteras Seashore' , databaseName: 'Cape Hatteras Seashore' },
		{slug: 'cape-point-estates', displayName: 'Cape Point Estates', databaseName: 'Cape Point Estates'},
		{ slug: 'crooked-ridge', displayName: 'Crooked Ridge' , databaseName: 'Crooked Ridge' },
		{ slug: 'diamond-point-estates',displayName: 'Diamond Point Estates', databaseName: 'Diamond Point Estates'},
		{ slug: 'edward-quidley', displayName: 'Edward Quidley' , databaseName: 'Edward Quidley' },
		{ slug: 'flowers-ridge',	displayName: 'Flowers Ridge', databaseName: 'Flowers Ridge'},
		{ slug: 'hatteras-pines', displayName: 'Hatteras Pines' , databaseName: 'Hatteras Pines' },
		{ slug: 'pamlico-overlook',	displayName: 'Pamlico Overlook', databaseName: 'Pamlico Overlook'},
		{ slug: 'sanderling-ridge', displayName: 'Sanderling Ridge' , databaseName: 'Sanderling Ridge' },
		{ slug: 'serenity-ridge',	displayName: 'Serenity Ridge', databaseName: 'Serenity Ridge'},
		{ slug: 'tower-beach', displayName: 'Tower Beach' , databaseName: 'Tower Beach' },
		{ slug: 'village-at-cape-creek', displayName: 'Village at Cape Creek', databaseName: 'Village at Cape Creek'},
		{ slug: 'wallace-gray-subdivision', displayName: 'Kinnakeet ' , databaseName: 'Kinnakeet ' },
	],
	frisco: [
		{ slug: 'am-quidley-track', displayName: 'AM Quidley Tract' , databaseName: 'AM Quidley Tract' },
		{ slug: 'brigands-bay',	displayName: 'Brigands Bay', databaseName: 'Brigands Bay'},
		{ slug: 'buccaneer-cove', displayName: 'Buccaneer Cove' , databaseName: 'Buccaneer Cove' },
		{ slug: 'ch-fulcher',	displayName: 'CH Fulcher', databaseName: 'CH Fulcher'},
		{ slug: 'elevy-manor', displayName: 'Elevy Manor' , databaseName: 'Elevy Manor' },
		{ slug: 'er-midgett',	displayName: 'ER Midgett', databaseName: 'ER Midgett'},
		{ slug: 'frisco-point-cape-hatteras', displayName: 'Frisco Point Cape Hatteras' , databaseName: 'Frisco Point Cape Hatteras' },
		{ slug: 'frisco-woods',	displayName: 'Frisco Woods', databaseName: 'Frisco Woods'},
		{ slug: 'hatterask', displayName: 'Hatterask' , databaseName: 'Hatterask' },
		{ slug: 'hatterasman',	displayName: 'Hatterasman', databaseName: 'Hatterasman'},
		{ slug: 'high-tor-sands', displayName: 'High Tor Sands' , databaseName: 'High Tor Sands' },
		{ slug: 'holiday-haven', displayName: 'Holiday Haven', databaseName: 'Holiday Haven'},
		{ slug: 'indiantown-shores', displayName: 'Indian Town Shores' , databaseName: 'Indian Town Shores' },
		{ slug: 'marlin-village', displayName: 'Marlin Village', databaseName: 'Marlin Village'},
		{ slug: 'marshview', displayName: 'Marshview ' , databaseName: 'Marshview ' },
		{ slug: 'pamlico-sound-shores',	displayName: 'Pamlico Sound Shores', databaseName: 'Pamlico Sound Shores'},
		{ slug: 'paradise-bay', displayName: 'Paradise Bay' , databaseName: 'Paradise Bay' },
		{ slug: 'rogues-retreat', displayName: 'Rogues Retreat', databaseName: 'Rogues Retreat'},
		{ slug: 'shoresurf', displayName: 'Shoresurf ' , databaseName: 'Shoresurf ' },
		{ slug: 'spencers-wood', displayName: 'Spencers Wood ', databaseName: 'Spencers Wood '},
		{ slug: 'sportsman-village', displayName: 'Sportsman Village' , databaseName: 'Sportsman Village' },
		{ slug: 'sunset-village', displayName: 'Sunset Village', databaseName: 'Sunset Village'},
		{ slug: 'surf-sound', displayName: 'Surf Sound ' , databaseName: 'Surf Sound ' },
		{ slug: 'tides-edge',	displayName: 'Tides Edge', databaseName: 'Tides Edge'},
		{ slug: 'village-salt-creek', displayName: 'Village Salt Creek' , databaseName: 'Village Salt Creek' },
		{ slug: 'wind-haven-shores', displayName: 'Wind Haven Shores', databaseName: 'Wind Haven Shores'},
	],
	'hatteras island': [
		{ slug: 'atlantic-view', displayName: 'Atlantic View' , databaseName: 'Atlantic View' },
		{ slug: 'blue-marlin',	displayName: 'Blue Marlin', databaseName: 'Blue Marlin'},
		{ slug: 'captains-beach', displayName: "Captain's Beach" , databaseName: "Captain's Beach" },
		{ slug: 'durants-station',	displayName: 'Durants Station', databaseName: 'Durants Station'},
		{ slug: 'hatteras-by-the-sea', displayName: 'Hatteras By The Sea' , databaseName: 'Hatteras By The Sea' },
		{ slug: 'hatteras-colony', displayName: 'Hatteras Colony', databaseName: 'Hatteras Colony'},
		{ slug: 'hatteras-escape', displayName: 'Hatteras Escape' , databaseName: 'Hatteras Escape' },
		{ slug: 'hatteras-estates',	displayName: 'Hatteras Estates', databaseName: 'Hatteras Estates'},
		{ slug: 'hatteras-harbor', displayName: 'Hatteras Harbor' , databaseName: 'Hatteras Harbor' },
		{ slug: 'hatteras-island-club',	displayName: 'Hatteras Island Club', databaseName: 'Hatteras Island Club'},
		{ slug: 'hatteras-landing', displayName: 'Hatteras Landing' , databaseName: 'Hatteras Landing' },
		{ slug: 'ocean-dunes',	displayName: 'Ocean Dunes', databaseName: 'Ocean Dunes'},
		{ slug: 'ocean-view', displayName: 'Ocean View' , databaseName: 'Ocean View' },
		{ slug: 'pamlico-point', displayName: 'Pamlico Point ', databaseName: 'Pamlico Point '},
		{ slug: 'sea-breeze', displayName: 'Sea Breeze ' , databaseName: 'Sea Breeze ' },
		{ slug: 'slash-creek-condos',	displayName: 'Slash Creek Condos', databaseName: 'Slash Creek Condos'},
		{ slug: 'sea-whisper', displayName: 'Sea Whisper' , databaseName: 'Sea Whisper' },
		{ slug: 'summerplace',	displayName: 'Summerplace', databaseName: 'Summerplace'},
		{ slug: 'sutton-place', displayName: 'Sutton Place' , databaseName: 'Sutton Place' },
		{ slug: 'teachs-lair-estates',	displayName: 'Teachs Lair Estates ', databaseName: 'Teachs Lair Estates '},
		{ slug: 'villas-hatteras-landing-condos', displayName: 'Villas Hatteras Landing' , databaseName: 'Villas Hatteras Landing' },
		{ slug: 'hatteras-retreat',	displayName: 'Hatteras Retreat', databaseName: 'Hatteras Retreat'},
	],
	rodanthe: [
		{ slug: 'atlantic-shores', displayName: 'Atlantic Shores' , databaseName: 'Atlantic Shores' },
		{ slug: 'beulah-oneal',	displayName: 'Beulah Oneal', databaseName: 'Beulah Oneal'},
		{ slug: 'chicamacomico-beach', displayName: 'Chicamacomico Beach' , databaseName: 'Chicamacomico Beach' },
		{ slug: 'corbina-shores',	displayName: 'Corbina Shores', databaseName: 'Corbina Shores'},
		{ slug: 'estates-at-hatteras-island', displayName: 'Estates At Hatteras Island' , databaseName: 'Estates At Hatteras Island' },
		{ slug: 'hatteras-high', displayName: 'Hatteras High', databaseName: 'Hatteras High'},
		{ slug: 'wimble-shoals', displayName: 'Wimble Shoals' , databaseName: 'Wimble Shoals' },
		{ slug: 'holiday-shores', displayName: 'Holiday Shores', databaseName: 'Holiday Shores'},
		{ slug: 'mirlo-beach', displayName: 'Mirlo Beach' , databaseName: 'Mirlo Beach' },
		{ slug: 'resort-rodanthe',	displayName: 'Resort Rodanthe', databaseName: 'Resort Rodanthe'},
		{ slug: 'rodanthe-by-the-sea', displayName: 'Rodanthe By the Sea' , databaseName: 'Rodanthe By the Sea' },
		{ slug: 'rowan-beach-estates',	displayName: 'Rowan Beach Estates', databaseName: 'Rowan Beach Estates'},
		{ slug: 'south-shore', displayName: 'South Shore' , databaseName: 'South Shore' },
		{ slug: 'southern-vista',	displayName: 'Southern Vista', databaseName: 'Southern Vista'},
		{ slug: 'sunset-resort', displayName: 'Sunset Resort' , databaseName: 'Sunset Resort' },
		{ slug: 'surf-side', displayName: 'Surf Side', databaseName: 'Surf Side'},
		{ slug: 'trade-winds-beach', displayName: 'Trade Winds Beach' , databaseName: 'Trade Winds Beach' },
	],
	salvo: [
		{ slug: 'aaron-hill-harbor', displayName: 'Aaron Hill Harbor' , databaseName: 'Aaron Hill Harbor' },
		{ slug: 'farrow-shores', displayName: 'Farrow Shores', databaseName: 'Farrow Shores'},
		{ slug: 'hatteras-colony', displayName: 'Hatteras Colony' , databaseName: 'Hatteras Colony' },
		{ slug: 'hattie-creef-landing',	displayName: 'Hattie Creef Landing', databaseName: 'Hattie Creef Landing'},
		{ slug: 'jb-hooper', displayName: 'JB Hooper' , databaseName: 'JB Hooper' },
		{ slug: 'ocean-breakers',	displayName: 'Ocean Breakers', databaseName: 'Ocean Breakers'},
		{ slug: 'salvo-beach', displayName: 'Salvo Beach' , databaseName: 'Salvo Beach' },
		{ slug: 'south-beach',	displayName: 'South Beach', databaseName: 'South Beach'},
		{ slug: 'spin-drift-banks', displayName: 'Spin Drift Banks' , databaseName: 'Spin Drift Banks' },
		{ slug: 'wimble-shores', displayName: 'Wimble Shores', databaseName: 'Wimble Shores'},
		{ slug: 'wind-over-waves', displayName: 'Wind Over Waves' , databaseName: 'Wind Over Waves' },
		{ slug: 'sea-oats', displayName: 'Sea Oats' , databaseName: 'Sea Oats' },
	],
	waves: [
		{ slug: 'beach-lake', displayName: 'Beach Lake' , databaseName: 'Beach Lake' },
		{ slug: 'cottage-court',displayName: 'Cottage Court', databaseName: 'Cottage Court'},
		{ slug: 'gull-shoal-manor', displayName: 'Gull Shoal Manor' , databaseName: 'Gull Shoal Manor' },
		{ slug: 'island-pines',	displayName: 'Island Pines', databaseName: 'Island Pines'},
		{ slug: 'isle-of-waves', displayName: 'Isle Of Waves' , databaseName: 'Isle Of Waves' },
		{ slug: 'la-waves',	displayName: 'La Waves', databaseName: 'La Waves'},
		{ slug: 'mac-oca-reef', displayName: 'Mac Oca Reef' , databaseName: 'Mac Oca Reef' },
		{ slug: 'palisade-acres', displayName: 'Palisade Acres', databaseName: 'Palisade Acres'},
		{ slug: 'sea-isle-hills', displayName: 'Sea Isle Hills' , databaseName: 'Sea Isle Hills' },
		{ slug: 'sea-isle-shores',	displayName: 'Sea Isle Shores', databaseName: 'Sea Isle Shores'},
		{ slug: 'st-waves', displayName: 'St Waves' , databaseName: 'St Waves' },
		{ slug: 'waves-soundside',	displayName: 'Waves Soundside', databaseName: 'Waves Soundside'},
		{ slug: 'wimble-shores-north', displayName: 'Wimble Shores North' , databaseName: 'Wimble Shores North' },
	]};
