<script>
	import { formatAddress } from '$lib/address';
	import ListingDetailsLand from '$lib/components/ListingDetailsLand.svelte';
	import ListingDetailsRes from '$lib/components/ListingDetailsRes.svelte';
	import { page } from '$app/stores';
	import enhance from 'svelte-captcha-enhance';
	import { officeLocalPhoneNumber, officeTollFreePhoneNumber } from '$lib/meta';
	import { shouldUse } from '$lib/captcha';
	import CaptchaScript from '$lib/components/CaptchaScript.svelte';
	import LdpButtons from '$lib/components/LdpButtons.svelte';

	export let data;
	export let form;

	let isFormLoading = false;

	$: ({ listing, isPrintPage, printHref } = data);
	$: formattedAddress = formatAddress(listing);
	$: moreInfoHref = `/MoreInfo.asp?mls=${listing.ListingId}&vreturn=${encodeURIComponent($page.url.toString())}`;
</script>

<svelte:head>
	<title>{formattedAddress} is for sale.</title>
	<CaptchaScript />
</svelte:head>

{#if !isPrintPage}
	<h2>Listing Details For {formattedAddress}</h2>

	<LdpButtons class="mb-4" {printHref} {moreInfoHref} />
{/if}

{#if listing.PropertyType === 'Land'}
	<ListingDetailsLand {listing} />
{:else}
	<ListingDetailsRes {listing} />
{/if}

{#if !isPrintPage}
	<LdpButtons class="mt-4" {printHref} {moreInfoHref} />

	<div class="mt-4">
		<div class="font-bold">
			Looking for more info about this property or another OBX properties? We can answer all your questions. Call
			DIRECT {officeTollFreePhoneNumber} or fill out this form and let us know what you need, so we can start to help.
			It is easier than you think.
		</div>
	</div>
	<form
		class="mt-4"
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
		<div class="mx-auto flex flex-wrap items-start gap-8">
			<div>
				<div>
					<div>
						<div><label class="text-label" for="first_name">First Name</label></div>
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
						<div><label class="text-label" for="last_name">Last Name</label></div>
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
						<div><label class="text-label" for="email">E-mail</label></div>
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
						<div><label class="text-label" for="phone">Phone</label></div>
						<input type="text" name="phone" id="phone" value={form?.data?.phone ?? ''} />
					</div>
					<div class="text-red-500 text-right mt-2">
						{#if form?.errors?.phone}
							{form.errors.phone}
						{/if}
					</div>
				</div>
			</div>
			<div>
				<div class="font-bold">Level of Interest</div>

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
						><input type="checkbox" name="level_of_interest" value="Just Curious" /> Just Curious</label
						>
					</div>
					<div>
						<label
						><input type="checkbox" name="level_of_interest" value="Email Updates" /> Email Updates</label
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
						<label>
						<input
							type="checkbox"
							name="level_of_interest"
							value="Already Own / thinking about selling"
						/>
							Already Own / thinking about selling</label
						>
					</div>
					<div>
						<label>
							<input type="checkbox" name="level_of_interest" value="Curious About My Value" /> Curious About My Value
						</label>
					</div>
				</div>
			</div>
		</div>

		<input type="hidden" name="mls_id" value={listing.ListingId} />

		<div>
			{#if form?.success}
				<div class="mt-4 font-bold text-green-600">We received your form submission. We'll contact you soon!</div>
			{:else}
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
			{/if}
			{#if form?.message}
				<div class="mt-4 error">{form.message}</div>
			{/if}
		</div>
	</form>
{/if}

<div class="mt-8 text-center">
	<div class="font-bold">For Immediate Service</div>
	<div>{officeLocalPhoneNumber} (Local OBX)</div>
	<div>{officeTollFreePhoneNumber} (Toll Free)</div>
</div>
