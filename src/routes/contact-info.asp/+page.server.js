import { fail } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();

		const schema = zfd.formData({
			first_name: zfd.text(),
			last_name: zfd.text(),
			email: zfd.text(z.string().email()),
			price_range: zfd.text(),
		});

		const result = schema.safeParse(formData);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors,
			};
			return fail(400, data);
		}

		return {
			success: true,
		};
	},
};
