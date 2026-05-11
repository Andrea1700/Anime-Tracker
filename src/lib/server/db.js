import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

if (!MONGODB_URI) {
	throw new Error('MONGODB_URI fehlt. Prüfe deine .env Datei.');
}

const client = new MongoClient(MONGODB_URI);

export async function connectDB() {
	await client.connect();
	return client.db('Anime_Tracker');
}
