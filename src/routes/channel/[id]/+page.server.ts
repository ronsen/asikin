import Innertube, { UniversalCache } from 'youtubei.js';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getVideos } from '$lib';

export const load = (async ({ params }) => {
	const youtube = await Innertube.create({
		lang: 'en',
		cache: new UniversalCache(false),
		generate_session_locally: true,
	});

	try {
		const feed = await youtube.getChannel(params.id);
		const videos = getVideos(feed.videos);

		const channel = {
			external_id: feed.metadata.external_id,
			title: feed.metadata.title,
			url: feed.metadata.url,
			vanity_channel_url: feed.metadata.vanity_channel_url,
		};

		return { channel, videos };
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