<script>
	import { allowedAreas, getAreaNameFromParam } from '$lib/area';
	import enhance from 'svelte-captcha-enhance';
	import { officeTollFreePhoneNumber } from '$lib/meta';

	export let form;

	let isFormLoading = false;
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js?render={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}">
	</script>
</svelte:head>

<main>
	<h2>New Listings As They Hit The Market</h2>

	<h2 class="text-blue-950">Live Updates of Price Changes
		Straight From The Outer Banks MLS</h2>

	{#if form?.success}
		<div class="font-bold">
			<div>Your request will be emailed to you.</div>

			<div class="mt-4">Requests are handled on a first come basis, so if you need immediate
				attention, please let us know.
			</div>

			<div class="mt-4">Thank You.</div>
			<div>Shore Realty</div>
			<div>800-647-1868</div>
		</div>
	{:else}
		<div class="contact-form inline-block p-8 rounded-2xl bg-lightorange">
			<form method="post" use:enhance={{
				type: 'recaptcha',
				sitekey: import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY,
				submit: async function() {
					isFormLoading = true;
					return async ({ update }) => {
							isFormLoading = false;
							update();
					};
				},
			}}>
				<div>
					<div>
						<label class="text-label" for="first_name">First Name</label>
						<input type="text" name="first_name" id="first_name" value={form?.data?.first_name ?? ''} />
					</div>
					<div class="text-red-500 text-right mt-2">
						{#if form?.errors?.first_name}
							{form.errors.first_name}
						{/if}
					</div>
				</div>
				<div class="mt-4">
					<div>
						<label class="text-label" for="last_name">Last Name</label>
						<input type="text" name="last_name" id="last_name" value={form?.data?.last_name ?? ''} />
					</div>
					<div class="text-red-500 text-right mt-2">
						{#if form?.errors?.last_name}
							{form.errors.last_name}
						{/if}
					</div>
				</div>
				<div class="mt-4">
					<div>
						<label class="text-label" for="email">E-mail</label>
						<input type="email" name="email" id="email" value={form?.data?.email ?? ''} />
					</div>
					<div class="text-red-500 text-right mt-2">
						{#if form?.errors?.email}
							{form.errors.email}
						{/if}
					</div>
				</div>
				<div class="mt-4">
					<div>
						<label class="text-label" for="phone">Phone</label>
						<input type="text" name="phone" id="phone" value={form?.data?.phone ?? ''} />
					</div>
					<div class="text-red-500 text-right mt-2">
						{#if form?.errors?.phone}
							{form.errors.phone}
						{/if}
					</div>
				</div>
				<div class="mt-4">
					<div>
						<label class="text-label" for="price_range">Price Range</label>
						<input type="text" name="price_range" id="price_range" value={form?.data?.price_range ?? ''} />
					</div>
					<div class="text-red-500 text-right mt-2">
						{#if form?.errors?.price_range}
							{form.errors.price_range}
						{/if}
					</div>
				</div>

				<div class="mt-4">
					<div class="font-bold">Where?</div>
					{#each allowedAreas as areaSlug}
						<div><label><input type="checkbox" name="area" value={areaSlug} /> {getAreaNameFromParam(areaSlug)}</label>
						</div>
					{/each}
				</div>

				<div class="mt-4">
					<div class="font-bold">What?</div>
					<div><label><input type="checkbox" name="property_type" value="residential" /> Residential</label></div>
					<div><label><input type="checkbox" name="property_type" value="investment" /> Investment/2nd Home</label>
					</div>
					<div><label><input type="checkbox" name="property_type" value="condo-townhouse" /> Condo/Townhouse</label>
					</div>
					<div><label><input type="checkbox" name="property_type" value="land" /> Land</label></div>
				</div>

				<div class="mt-4">
					<div class="font-bold">When?</div>
					<div><label><input type="checkbox" name="level_of_interest" value="Need Help Now" /> Need Help Now</label>
					</div>
					<div><label><input type="checkbox" name="level_of_interest" value="Ready To Buy" /> Ready To Buy</label></div>
					<div><label><input type="checkbox" name="level_of_interest" value="Buy In Next 12 Months" /> Buy In Next 12
						Months</label></div>
					<div><label><input type="checkbox" name="level_of_interest" value="Buy In Next 24 Months" /> Buy In Next 24
						Months</label></div>
					<div><label><input type="checkbox" name="level_of_interest" value="Already Own OBX Property/ want more" />
						Already Own OBX Property/want more</label></div>
					<div><label><input type="checkbox" name="level_of_interest" value="Already Own / thinking about selling" />
						Already Own / thinking about selling</label></div>
					<div><label><input type="checkbox" name="level_of_interest" value="Just Curious" /> Just Curious</label></div>
				</div>

				<div class="mt-4">
					<div>
						<label class="text-label" for="comments">Comments</label>
						<textarea class="w-64 h-16 rounded" name="comments" id="comments" value={form?.data?.comments ?? ''} />
					</div>
					<div class="text-red-500 text-right mt-2">
						{#if form?.errors?.comments}
							{form.errors.comments}
						{/if}
					</div>
				</div>

				<button
					type="submit"
					class="mt-4 text-white rounded-lg px-8 text-xl uppercase"
					class:bg-red-500={!isFormLoading}
					class:bg-gray-500={isFormLoading}
					class:cursor-not-allowed={isFormLoading}
					disabled={isFormLoading}
				>
					Submit
				</button>
				{#if form?.message}
					<div class="mt-4 error">{form.message}</div>
				{/if}
			</form>
		</div>

		<div class="mt-4">
			If you end up getting too many updates or the updates don't match what you are looking, just give us a call and we will fix the problem for you.
			<a href="tel://{officeTollFreePhoneNumber}">{officeTollFreePhoneNumber}</a>
		</div>
	{/if}
</main>
