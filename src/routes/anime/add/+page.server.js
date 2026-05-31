import { connectDB } from '$lib/server/db';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const title = formData.get('title')?.toString().trim();
		const genre = formData.get('genre')?.toString().trim();
		const currentEpisode = Number(formData.get('currentEpisode'));
		const totalEpisodes = Number(formData.get('totalEpisodes'));
		const status = formData.get('status');
		const imageUrl = formData.get('imageUrl')?.toString().trim();

		if (!title || !genre) {
			return fail(400, {
				error: 'Titel und Genre dürfen nicht leer sein.'
			});
		}

		if (currentEpisode < 0 || totalEpisodes < 1) {
			return fail(400, {
				error: 'Episodenzahlen sind ungültig.'
			});
		}

		if (currentEpisode > totalEpisodes) {
			return fail(400, {
				error: 'Die aktuelle Episode darf nicht grösser als die Gesamtanzahl sein.'
			});
		}

		const db = await connectDB();

		await db.collection('anime_tracker').insertOne({
			title,
			genre,
			currentEpisode,
			totalEpisodes,
			status,
			imageUrl
		});

		throw redirect(303, '/?success=1');
	}
};