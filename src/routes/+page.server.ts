import type { PageServerLoad } from './$types';
import { Innertube, UniversalCache } from 'youtubei.js';
import { getVideos } from '$lib';

export const load = (async ({ url }) => {
	const gl = url.searchParams.get('gl') ?? 'ID';

	const youtube = await Innertube.create({
		lang: 'en',
		cache: new UniversalCache(false),
		generate_session_locally: true,
		location: gl,
	});

	const feed = await youtube.getTrending();
	const videos = getVideos(feed.videos);

	return { gl, videos };
}) satisfies PageServerLoad;