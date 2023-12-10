import { json } from '@sveltejs/kit';
import callRedis from '$lib/server/redis/client';
/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
	// log all headers
	console.log(...request.headers);
	const response = await callRedis()
	// create a JSON Response using a header we received
	return json({
		success: true
	});
}