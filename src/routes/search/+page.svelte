<script lang="ts">
	import type { PageServerData } from "./$types";
	import Videos from "$lib/components/videos.svelte";

	let { data }: { data: PageServerData } = $props();
</script>

<svelte:head>
	<title>{data.q}</title>
</svelte:head>

<h2 class="text-lg font-bold border-b border-zinc-700 pb-3 mb-6">
	<a href="/search?q={data.q}">{data.q}</a>
</h2>

<Videos videos={data.videos} />
