import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import axios from "axios";
import * as cheerio from 'cheerio';

export const load = (async () => {
	try {
		const url = 'https://www.ythunt.com/';
		const response = await axios.get(url);
		const body = await response.data;
		const $ = cheerio.load(body);

		const elements = $('.video');

		const videos = elements.map((i, el) => {
			const url = $(el).find('h1 a').attr('href');

			const getYouTubeVideoID = (url: any) => {
				const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
				const match = url.match(regex);
				return match ? match[1] : null;
			}

			const videoId = getYouTubeVideoID(url);

			return {
				title: $(el).find('h1 a').text().trim(),
				url: url,
				embeddedUrl: `https://www.youtube.com/embed/${videoId}`,
				thumbnail: {
					url: $(el).find('img').attr('src'),
				},
				author: {
					name: $(el).find('.channel a').text().trim(),
				},
				view_count: $(el).find('.meta').text().trim(),
				short_view_count: $(el).find('.meta').text().trim(),
			};
		}).toArray();

		return { videos };
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