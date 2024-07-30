<script>
	import enhance from 'svelte-captcha-enhance';
	import { officeLocalPhoneNumber, officeTollFreePhoneNumber } from '$lib/meta';
	import { page } from '$app/stores';
	import { shouldUse } from '$lib/captcha';
	import CaptchaScript from '$lib/components/CaptchaScript.svelte';

	export let form;

	let isFormLoading = false;

	$: mlsId = $page.url.searchParams.get('mls');
	$: vreturn = $page.url.searchParams.get('vreturn');
</script>

<svelte:head>
	<title>More Information</title>
	<CaptchaScript />
</svelte:head>

<h1>More Info</h1>

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
	<div class="contact-form inline-block p-8 rounded-2xl bg-lightorange">
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
			<input type="hidden" name="mls" value={mlsId} />
			<input type="hidden" name="vreturn" value={vreturn} />

			<div>
				<label
				><input type="checkbox" name="show" value="showing" /> I would like to schedule a time to view this property. </label
				>
			</div>

			<div class="mt-4 font-bold">Send Me:</div>

			<div class="mt-4">
				<div>
					<label
					><input type="checkbox" name="send_me" value="Rental History" /> Rental History</label
					>
				</div>
				<div>
					<label
					><input type="checkbox" name="send_me" value="Insurance Expense" /> Insurance Expense</label
					>
				</div>
				<div>
					<label
					><input type="checkbox" name="send_me" value="Sales History" /> Sales History</label
					>
				</div>
				<div><label><input type="checkbox" name="send_me" value="Expenses" /> Expenses</label></div>
				<div>
					<label
					><input type="checkbox" name="send_me" value="Comparable Properties" /> Comparable Properties</label
					>
				</div>
				<div>
					<label
					><input type="checkbox" name="send_me" value="New listing Updates" /> New listing Updates</label
					>
				</div>
				<div>
					<label
					><input type="checkbox" name="send_me" value="Sold Listing Updates" /> New Listing Updates</label
					>
				</div>
				<div><label><input type="checkbox" name="send_me" value="Tax Value/Tax Expense" /> Tax Value/Tax Expense</label></div>
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
			</div>

			<button
				type="submit"
				class="mt-4 text-white rounded-lg px-8 text-xl uppercase"
				class:bg-red-500={!isFormLoading}
				class:bg-gray-500={isFormLoading}
				class:cursor-not-allowed={isFormLoading}
				disabled={isFormLoading}
			>
				Request More Info
			</button>
			{#if form?.message}
				<div class="mt-4 error">{form.message}</div>
			{/if}
		</form>
	</div>

	<p align="center">Shore Realty - Localy Owned &amp; Operated <br> Call Local <a href="tel://{officeLocalPhoneNumber}">{officeLocalPhoneNumber}</a> OR <a href="tel://{officeTollFreePhoneNumber}">{officeTollFreePhoneNumber}</a><br>Helping People Buy and Sell Outer Banks Real Estate! </p>
{/if}
