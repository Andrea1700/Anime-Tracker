import { connectDB } from '$lib/server/db';

export async function load({ url }) {
	const db = await connectDB();

	const anime = await db.collection('anime_tracker').find({}).toArray();

	const success = url.searchParams.get('success');
	const deleted = url.searchParams.get('deleted');

	return {
		success,
		deleted,
		anime: anime.map((a) => ({
			...a,
			_id: a._id.toString()
		}))
	};
}