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
	<div class="inline-flex items-center gap-3 w-full">
		<label class="sr-only" for="gl">Select a country:</label>
		<select
			bind:value={gl}
			class="border border-zinc-700 text-sm rounded-lg focus:outline-none block w-full p-2.5 bg-zinc-800 hover:bg-zinc-700 text-white"
			id="gl"
			name="gl"
		>
			{#each data.countries as country}
				<option value={country.gl}>{country.name}</option>
			{/each}
		</select>

		<button
			class="border border-zinc-700 focus:outline-none bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm p-2 text-white"
			type="submit">Change</button
		>
	</div>
</form>

<Videos videos={data.videos} />
