import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import Innertube, { UniversalCache } from 'youtubei.js';
import { getVideos } from '$lib';

export const load = (async ({ url }) => {
	const q = String(url.searchParams.get('q')).trim();

	try {
		const youtube = await Innertube.create({
			lang: 'en',
			cache: new UniversalCache(false),
			generate_session_locally: true,
		});

		const feed = await youtube.search(q);
		const videos = getVideos(feed.videos);

		return { q, videos };
	} catch (e: unknown) {
		let message;
		if (typeof e === 'string') {
			message = e;
		} else if (e instanceof Error) {
			message = e.message;
		}

		throw error(400, message);
	}
}) satisfies PageServerLoad;