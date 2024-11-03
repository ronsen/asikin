<script lang="ts">
	import type { PageServerData } from "./$types";
	import Videos from "$lib/components/videos.svelte";

	let { data }: { data: PageServerData } = $props();

	let gl = $state(data.gl);
</script>

<svelte:head>
	<title>Asikin - YouTube Trending Videos</title>
</svelte:head>

<form action="/" class="mb-6" method="get">
	<div class="inline-flex items-center gap-3 w-full">
		<label class="sr-only" for="gl">Select a country:</label>
		<select
			bind:value={gl}
			class="form-select border border-zinc-700 text-sm rounded-lg w-full bg-zinc-800 hover:bg-zinc-700 text-white"
			id="gl"
			name="gl"
		>
			{#each data.countries as country}
				<option value={country.gl}>{country.name}</option>
			{/each}
		</select>

		<button
			class="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm p-2 text-white"
			type="submit">Change</button
		>
	</div>
</form>

<Videos videos={data.videos} />
