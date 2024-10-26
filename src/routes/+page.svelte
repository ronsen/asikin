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
			class="p-2 rounded-lg bg-white border text-black w-full focus:outline-none"
			id="gl"
			name="gl"
		>
			{#each data.countries as country}
				<option value={country.gl}>{country.name}</option>
			{/each}
		</select>

		<button
			class="p-2 bg-white rounded-lg text-black hover:bg-gray-100"
			type="submit">Change</button
		>
	</div>
</form>

<Videos videos={data.videos} />
