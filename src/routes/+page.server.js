import { connectDB } from '$lib/server/db';

export async function load() {
    const db = await connectDB();

    const collections = await db.listCollections().toArray();

    console.log(collections);

    return {};
}