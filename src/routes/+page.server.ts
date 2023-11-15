import type { PageServerLoad } from './$types';
import { Innertube, UniversalCache } from 'youtubei.js';

export const load = (async ({ url }) => {
    const gl = url.searchParams.get('gl') ?? 'ID';
    const youtube = await Innertube.create({
        lang: 'en',
        cache: new UniversalCache(false),
        generate_session_locally: true,
        location: gl,
    });

    const feed = await youtube.getTrending();
    const videos = feed.videos.map(video => {
        return {
            type: video.type,
            id: video.id,
            url: `https://www.youtube.com/watch?v=${video.id}`,
            title: video.title.text,
            thumbnail: {
                url: video.thumbnails[0].url,
                width: video.thumbnails[0].width,
                height: video.thumbnails[0].height,
            },
        }
    });
    return { gl, videos };
}) satisfies PageServerLoad;