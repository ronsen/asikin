import type { PageServerLoad } from "./$types";

export const load = (async ({ url }) => {
    const v = url.searchParams.get('v');

    return {
        v,
        embed_url: `https://www.youtube.com/embed/${v}`,
        url: `https://www.youtube.com/watch?v=${v}`
    };
}) satisfies PageServerLoad;