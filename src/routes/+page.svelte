<script lang="ts">
	import type { PageServerData } from "./$types";
	import Videos from "$lib/components/videos.svelte";

	export let data: PageServerData;
	let gl = data.gl;
</script>

<svelte:head>
	<title>Asikin - YouTube Trending Videos</title>
</svelte:head>

<form action="/" class="mb-6" method="get">
	<div class="flex gap-3">
		<label class="sr-only" for="gl">Select a country:</label>
		<select
			bind:value={gl}
			class="px-3 py-2 text-sm rounded-lg border border-zinc-500 text bg-zinc-800 hover:bg-zinc-700 w-full"
			id="gl"
			name="gl"
		>
			{#each data.countries as country}
				<option value={country.gl}>{country.name}</option>
			{/each}
		</select>

		<button
			class="px-3 py-2 bg-zinc-800 text-sm rounded-lg border border-zinc-500 text-white hover:bg-zinc-700"
			type="submit">Change</button
		>
	</div>
</form>

<Videos videos={data.videos} />
