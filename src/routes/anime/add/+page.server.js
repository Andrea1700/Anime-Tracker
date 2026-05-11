import { connectDB } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const title = formData.get('title');
		const genre = formData.get('genre');
		const currentEpisode = Number(formData.get('currentEpisode'));
		const totalEpisodes = Number(formData.get('totalEpisodes'));

		const db = await connectDB();

		await db.collection('anime_tracker').insertOne({
			title,
			genre,
			currentEpisode,
			totalEpisodes,
			status: 'watching'
		});

		throw redirect(303, '/');
	}
};