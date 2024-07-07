<script lang="ts">
	import type { PageServerData } from "./$types";
	import Videos from "$lib/components/videos.svelte";

	export let data: PageServerData;
</script>

<svelte:head>
	<title>YTHunt</title>
</svelte:head>

<Videos videos={data.videos} />
