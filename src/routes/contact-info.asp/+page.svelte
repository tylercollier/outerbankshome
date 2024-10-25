<script>
	import { allowedAreas, getAreaNameFromParam } from '$lib/area';
	import enhance from 'svelte-captcha-enhance';
	import { officeLocalPhoneNumber, officeTollFreePhoneNumber } from '$lib/meta';
	import { shouldUse } from '$lib/captcha';
	import CaptchaScript from '$lib/components/CaptchaScript.svelte';

	export let form;

	let isFormLoading = false;
</script>

<svelte:head>
	<title>Contact Info for Shore Realty of the Outer Banks</title>
	<CaptchaScript />
</svelte:head>

<h1>Contact Shore Realty</h1>

<h2>How Can We Help You?</h2>

{#if form?.success}
	<div class="font-bold">
		<div>Your request will be emailed to you.</div>

		<div class="mt-4">
			Requests are handled on a first come basis, so if you need immediate attention, please let us
			know.
		</div>

		<div class="mt-4">Thank You.</div>
		<div>Shore Realty</div>
		<div>800-647-1868</div>
	</div>
{:else}
	<div class="inline-block p-8 rounded-2xl">
		<form
			method="post"
			use:enhance={{
				type: shouldUse() ? 'recaptcha' : 'bypass',
				sitekey: import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY,
				submit: async function () {
					isFormLoading = true;
					return async ({ update }) => {
						isFormLoading = false;
						update();
					};
				},
			}}
		>
	<div class="flex flex-col md:flex-row gap-4 border">
		<div>
			<div>
				<div>
					<label class="text-label" for="first_name">First Name</label>
					<input
						type="text"
						name="first_name"
						id="first_name"
						value={form?.data?.first_name ?? ''}
					/>
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
		</div>	
		<div>
			<div>
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
		</div>	
	</div>
			<div class="mt-2">
				<div>
					<label class="text-label" for="comments">Comments</label>
					<input type="text" name="comments" id="comments" value={form?.data?.comments ?? ''} />
				</div>
				<div class="text-red-500 text-right mt-2">
					{#if form?.errors?.comments}
						{form.errors.comments}
					{/if}
				</div>
			</div>

			<div class="mt-4">
				{#each allowedAreas as areaSlug}
					<div>
						<label
							><input type="checkbox" name="area" value={areaSlug} />
							{getAreaNameFromParam(areaSlug)}</label
						>
					</div>
				{/each}
			</div>

			<div class="mt-4">
				<div>
					<label
						><input type="checkbox" name="property_type" value="residential" /> Residential</label
					>
				</div>
				<div>
					<label
						><input type="checkbox" name="property_type" value="investment" /> Investment/2nd Home</label
					>
				</div>
				<div>
					<label
						><input type="checkbox" name="property_type" value="condo-townhouse" /> Condo/Townhouse</label
					>
				</div>
				<div><label><input type="checkbox" name="property_type" value="land" /> Land</label></div>
			</div>

			<div class="mt-4 font-bold">Level of Interest</div>

			<div class="mt-4">
				<div>
					<label
						><input type="checkbox" name="level_of_interest" value="Need Help Now" /> Need Help Now</label
					>
				</div>
				<div>
					<label
						><input type="checkbox" name="level_of_interest" value="Ready To Buy" /> Ready To Buy</label
					>
				</div>
				<div>
					<label
						><input type="checkbox" name="level_of_interest" value="Buy In Next 12 Months" /> Buy In
						Next 12 Months</label
					>
				</div>
				<div>
					<label
						><input type="checkbox" name="level_of_interest" value="Buy In Next 24 Months" /> Buy In
						Next 24 Months</label
					>
				</div>
				<div>
					<label
						><input
							type="checkbox"
							name="level_of_interest"
							value="Already Own OBX Property/ want more"
						/>
						Already Own OBX Property/want more</label
					>
				</div>
				<div>
					<label
						><input
							type="checkbox"
							name="level_of_interest"
							value="Already Own / thinking about selling"
						/>
						Already Own / thinking about selling</label
					>
				</div>
				<div>
					<label
						><input type="checkbox" name="level_of_interest" value="Just Curious" /> Just Curious</label
					>
				</div>
			</div>

			<div class="mt-4">
				<div>
					<label class="text-label" for="price_range">Price Range</label>
					<input
						type="text"
						name="price_range"
						id="price_range"
						value={form?.data?.price_range ?? ''}
					/>
				</div>
				<div class="text-red-500 text-right mt-2">
					{#if form?.errors?.price_range}
						{form.errors.price_range}
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

	<h2>
		<p>
			Phones:<br />
			<a href="tel://{officeTollFreePhoneNumber}">{officeTollFreePhoneNumber}</a><br />
			<a href="tel://{officeLocalPhoneNumber}">{officeLocalPhoneNumber}</a><br />
			<a href="tel://2524413410">252-441-3410</a>
		</p>
		<p>
			Mailing Address:<br />
			Shore Realty <br />
			PO Box 1977<br />
			Nags Head, NC 27959
		</p>
	</h2>
{/if}

<style>
	input[type=text], input[type=email] {
		padding:10px;
	}
	label.text-label {
		width: 300px;
	}
</style>
