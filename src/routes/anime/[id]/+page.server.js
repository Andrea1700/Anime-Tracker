import { connectDB } from '$lib/server/db';
import { ObjectId } from 'mongodb';
import { fail, redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const db = await connectDB();

	const anime = await db.collection('anime_tracker').findOne({
		_id: new ObjectId(params.id)
	});

	return {
		anime: {
			...anime,
			_id: anime._id.toString()
		}
	};
}

export const actions = {
	updateProgress: async ({ params }) => {
		const db = await connectDB();

		const anime = await db.collection('anime_tracker').findOne({
			_id: new ObjectId(params.id)
		});

		if (anime.currentEpisode >= anime.totalEpisodes) {
			return fail(400, {
				error: 'Dieser Anime ist bereits vollständig abgeschlossen.'
			});
		}

		await db.collection('anime_tracker').updateOne(
			{ _id: new ObjectId(params.id) },
			{
				$set: {
					currentEpisode: anime.currentEpisode + 1
				}
			}
		);

		return {
			success: 'Fortschritt wurde erfolgreich aktualisiert.'
		};
	},

	deleteAnime: async ({ params }) => {
		const db = await connectDB();

		await db.collection('anime_tracker').deleteOne({
			_id: new ObjectId(params.id)
		});

		throw redirect(303, '/?deleted=1');
	},

	saveNote: async ({ request, params }) => {
		const formData = await request.formData();
		const notes = formData.get('notes')?.toString().trim();

		const db = await connectDB();

		await db.collection('anime_tracker').updateOne(
			{ _id: new ObjectId(params.id) },
			{
				$set: {
					notes
				}
			}
		);

		return {
			success: 'Notiz wurde gespeichert.'
		};
	},

	toggleFavorite: async ({ params }) => {
		const db = await connectDB();

		const anime = await db.collection('anime_tracker').findOne({
			_id: new ObjectId(params.id)
		});

		await db.collection('anime_tracker').updateOne(
			{ _id: new ObjectId(params.id) },
			{
				$set: {
					favorite: !anime.favorite
				}
			}
		);

		return {
			success: 'Favorit wurde aktualisiert.'
		};
	}
};

