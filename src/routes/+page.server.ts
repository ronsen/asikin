import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { Innertube, UniversalCache } from 'youtubei.js';
import { getVideos } from '$lib';
import { countries } from '$lib/constants';

export const load = (async ({ url, cookies }) => {
	const setGeoLocation = () => {
		let gl = url.searchParams.get('gl');

		if (gl) {
			cookies.set('gl', gl, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365,
			});
		} else {
			const glCookie = cookies.get('gl') as string;
			gl = glCookie ?? 'ID';
		}

		return gl;
	};

	const gl = setGeoLocation();

	try {
		const youtube = await Innertube.create({
			lang: 'en',
			cache: new UniversalCache(false),
			generate_session_locally: true,
			location: gl,
		});

		const feed = await youtube.getTrending();
		const videos = getVideos(feed.videos);

		return { gl, countries, videos };
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