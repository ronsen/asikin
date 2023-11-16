import type { PageServerLoad } from './$types';
import Innertube, { UniversalCache } from 'youtubei.js';
import { getVideos } from '$lib';

export const load = (async ({ url }) => {
	const q = String(url.searchParams.get('q')).trim();

	const youtube = await Innertube.create({
		lang: 'en',
		cache: new UniversalCache(false),
		generate_session_locally: true,
	});

	const feed = await youtube.search(q);
	const videos = getVideos(feed.videos);

	return { q, videos };
}) satisfies PageServerLoad;