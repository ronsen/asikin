<script lang="ts">
    import type { PageServerData } from '../$types';
    import Videos from '$lib/components/videos.svelte';
    
    export let data: PageServerData;
</script>

<h2 class="text-lg font-bold border-b border-base-300 pb-4 mb-4">
    <a href="/search?q={data.q}">{data.q}</a>
</h2>

<Videos videos={data.videos} />