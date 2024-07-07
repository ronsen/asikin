<script lang="ts">
	export let videos: any;
	let dialog: HTMLDialogElement;

	let title = "";
	let embeddedUrl = "";
	let url = "";

	function watch(video: any) {
		title = video.title;
		embeddedUrl = video.embeddedUrl;
		url = video.url;

		dialog.showModal();
	}
</script>

{#each videos as video}
	<div
		class="video md:flex gap-3 border-b border-base-300 p-6 hover:bg-base-300"
	>
		<div class="flex-none mb-2 md:mb-0">
			<button on:click={() => watch(video)}>
				<img
					src={video.thumbnail.url}
					alt="[]"
					class="w-full md:w-64 md:h-32 object-cover rounded"
				/>
			</button>
		</div>
		<div>
			<h3 class="font-bold">
				<button on:click={() => watch(video)} class="text-left">{video.title}</button>
			</h3>

			{#if video.author.name}
				{#if video.author.id}
					<div class="text-sm">
						<a href="/channel/{video.author.id}">{video.author.name}</a>
					</div>
				{:else}
					<div class="text-sm">{video.author.name}</div>
				{/if}
			{/if}

			{#if video.short_view_count || video.published}
				<div class="text-xs">
					{#if video.short_view_count}
						<div>{video.short_view_count}</div>
					{/if}

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
				aria-label="Close">✕</button
			>
		</form>

		<h3 class="font-bold text-lg mb-4">{title}</h3>

		<iframe
			src={embeddedUrl}
			class="w-full aspect-video mb-4"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>

		<a href={url} class="btn btn-netral w-full">Watch on YouTube</a>
	</div>
</dialog>
