<script lang="ts">
	import type { PageServerData } from "./$types";
	import Videos from "$lib/components/videos.svelte";
	import { countries } from "$lib/constants";

	export let data: PageServerData;
	let gl = data.gl;
</script>

<div class="p-6">
	<form action="/" method="get">
		<div class="flex gap-3">
			<select
				bind:value={gl}
				name="gl"
				class="select select-bordered w-full"
			>
				{#each data.countries as { gl, name }}
					<option value={gl}>{name}</option>
				{/each}
			</select>

			<button type="submit" class="btn btn-neutral">Change</button>
		</div>
	</form>
</div>

<Videos videos={data.videos} />
