import { connectDB } from '$lib/server/db';

export async function load() {
	const db = await connectDB();

	const anime = await db.collection('anime_tracker').find({}).toArray();

	return {
		anime: anime.map((a) => ({
			...a,
			_id: a._id.toString()
		}))
	};
}