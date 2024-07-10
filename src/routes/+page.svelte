<script lang="ts">
	import type { PageServerData } from "./$types";
	import Videos from "$lib/components/videos.svelte";

	export let data: PageServerData;
	let gl = data.gl;
</script>

<svelte:head>
	<title>Asikin - YouTube Trending Videos</title>
</svelte:head>

<form action="/" method="get" class="mb-6">
	<div class="flex gap-3">
		<label for="gl" class="sr-only">Select a country:</label>
		<select
			id="gl"
			bind:value={gl}
			name="gl"
			class="select select-bordered w-full"
		>
			{#each data.countries as country}
				<option value={country.gl}>{country.name}</option>
			{/each}
		</select>

		<button type="submit" class="btn btn-neutral">Change</button>
	</div>
</form>

<Videos videos={data.videos} />
