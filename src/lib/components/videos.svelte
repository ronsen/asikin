<script lang="ts">
	export let videos: any;
	let dialog: HTMLDialogElement;

	let title = "";
	let embededUrl = "";
	let url = "";

	function watch(video: any) {
		title = video.title;
		embededUrl = video.embededUrl;
		url = video.url;

		dialog.showModal();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#each videos as video}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="video md:flex gap-3 border-b border-base-300 p-6 cursor-pointer hover:bg-base-300"
		on:click={() => watch(video)}
	>
		<div class="flex-none mb-2 md:mb-0">
			<img
				src={video.thumbnail.url}
				alt="[]"
				class="w-full md:w-64 md:h-32 object-cover rounded"
			/>
		</div>
		<div>
			<h3 class="font-bold">{video.title}</h3>

			{#if video.author.name}
				<div class="text-sm">{video.author.name}</div>
			{/if}

			{#if video.short_view_count || video.published}
				<div class="inline-flex gap-2 text-xs">
					{#if video.short_view_count}
						<div>{video.short_view_count}</div>
					{/if}
					
					<div>&bull;</div>

					{#if video.published}
						<div>{video.published}</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
{/each}

<dialog bind:this={dialog} class="modal shadow">
	<div class="modal-box max-w-5xl md:w-8/12">
		<form method="dialog">
			<button
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
				>✕</button
			>
		</form>

		<h3 class="font-bold text-lg mb-4">{title}</h3>

		<iframe
			src={embededUrl}
			class="w-full aspect-video mb-4"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>

		<a href={url} class="btn btn-netral w-full">Watch on YouTube</a>
	</div>
</dialog>
