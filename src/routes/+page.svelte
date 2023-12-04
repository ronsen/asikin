<script lang="ts">
	import type { PageServerData } from "./$types";
	import Videos from "$lib/components/videos.svelte";

	export let data: PageServerData;
	let gl = data.gl;
</script>

<div class="p-6">
	<form action="/" method="get">
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
</div>

<Videos videos={data.videos} />
