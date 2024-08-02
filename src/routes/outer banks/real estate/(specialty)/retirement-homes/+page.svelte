<script>
	import AreaListingResults from '$lib/components/AreaListingResults.svelte';

	export let data;
	$: ({ singleLevelListings, elevatedListings, beachBoxListings } = data);
</script>

<svelte:head>
	<title>Outer Banks Retirement Homes</title>
</svelte:head>

<h1>Outer Banks Retirement Homes</h1>
<div class="feature">
	<p>The Outer Banks does not really have any purely retirement communities. There are  areas, mostly on the westside of the big road, populated mostly with year round residents, affectionately referred to as locals. There are no communities composed of only seniors. A couple of communities tried starting out that way but they failed and then became homoginzed mix of old and young. The Outer Banks tends to attract the more active seniors who want to live in an age eclectic neighborhood. We humans tend to reflect our environment so living around younger people can have a positive effect.</p>
	<p>Everybody has their own ideas and aspirations about how they will spend their retirement years. You have probably already spent a lot of time figuring out what you will be doing in your Golden Years. This is probably why you are here looking at retirement homes.</p>
	<p>The Outer Banks has a lot to offer to retirees. Low taxes, low crime, great community  senior centers and plenty of flat level nature for those who want to get outside and stay active. </p>
	<p>I am not going to tell you how or what to do with your Golden Years, I am sure you already know, but I will share what years of experience have shown. The biggest commonality amongst people is the deteriorating condition of  our knees. None of our knees are getting any better which brings up our first topic.</p>

	<hr width="75%" color="#FF7E40" size="8">

	<p><b>Stairs</b></p>

	<p>The Outer Banks is full of stairs, and stairs, like my forehead and prostrate, seem to be getting bigger every year. Stairs are one of the major concerns shared by soon to be seniors when shopping for their retirement home. Having hospitals and such nearby is great, but having to navigate stairs during the course of your routine day can make life miserable. </p>
	<p>Add in an extra set or 2 of stairs to get up to the kitchen and living area on the top floor, and it can become insurmountable. These types of houses are commonly referred to as 'Reverse Floor Plans' and are best suited to the more physically inclined unless they are equipped with an elevator.</p>

	<hr width="75%" color="#FF7E40" size="8">


	<p><b>One Level Living</b></p>

	<p>The most popular style house for retirees is the rancher or rambler. The entire house is situated on one floor built close to the ground. Minimal stairs to get in and no stairs inside. The only downside is they tend to sprawl as the square footage starts to increase. </p>
	<p>You won't find many homes on the Outer Banks that are built directly on the ground. Our low elevation puts most of the OBX in some type of flood zone which requires the homes to be elevated. </p>
	<p>If the ground is 10 feet above sea level then a house can be built right on the ground. The houses below are ranchers, scroll down further for other style houses.  </p>
</div>

<AreaListingResults listings={singleLevelListings} areaParam="" />

<hr class="orange" />

<p><b>Elevated Ranchers </b></p>
<p>There are areas on the Outer Banks where the ground has some elevation.  If the ground elevation is 7 feet, which is very common, then a 3 foot high masonry foundation will supply enough elevation to meet the flood insurance requirements and shorten the entrance stairs. </p>
<p>You can have a rambler or rancher where everything is spread out on one level except that it is built a couple of feet up off the ground. The houses below should be those on masonry foundations with minimal elevation. Scroll down further for different style homes. </p>

<AreaListingResults listings={elevatedListings} areaParam="" />

<hr class="orange" />

<p><b>Beach Box</b></p>
<p>The Outer Banks traditional "Beach Box" offers one level living up on pilings. You still have to climb a set of steps to get into your house but once you are inside all of your living area is on one level.   If your one of the lucky ones without knee problems this could be a perfect match for you.  </p>

<AreaListingResults listings={beachBoxListings} areaParam="" />
