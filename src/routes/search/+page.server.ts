import type { PageServerLoad } from './$types';
import Innertube, { UniversalCache } from 'youtubei.js';

export const load = (async ({ url }) => {
    const q = url.searchParams.get('q') ?? '';

    const youtube = await Innertube.create({
        lang: 'en',
        cache: new UniversalCache(false),
        generate_session_locally: true,
    });

    const feed = await youtube.search(q);
    const videos = feed.videos.map(video => {
        return {
            type: video.type,
            id: video.id,
            url: `https://www.youtube.com/watch?v=${video.id}`,
            embededUrl: `https://www.youtube.com/embed/${video.id}`,
            title: video.title.text,
            thumbnail: {
                url: video.thumbnails[0].url,
                width: video.thumbnails[0].width,
                height: video.thumbnails[0].height,
            },
        }
    });
    return { q, videos };
}) satisfies PageServerLoad;