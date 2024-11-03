<script lang="ts">
	let { videos }: { videos: any } = $props();

	let dialog: HTMLDialogElement;

	let title = $state("");
	let embeddedUrl = $state("");
	let url = $state("");

	function watch(video: any) {
		title = video.title;
		embeddedUrl = video.embeddedUrl;
		url = video.url;

		dialog.showModal();
	}
</script>

<div class="mb-6">
	{#each videos as video}
		{#if video.type === "Video" || video.type === 'GridVideo'}
			<div class="video md:flex gap-3 border-b border-zinc-800 pb-3 mb-3">
				<div class="flex-none mb-2 md:mb-0">
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
					<img
						src={video.thumbnail.url}
						onclick={() => watch(video)}
						alt={video.title}
						class="w-full md:w-320px] md:h-[180px] object-cover rounded cursor-pointer"
					/>
				</div>
				<div>
					<h3 class="font-bold">
						<button onclick={() => watch(video)} class="text-left"
							>{video.title}</button
						>
					</h3>

					{#if video.author.name}
						{#if video.author.id}
							<div class="text-sm">
								<a href="/channel/{video.author.id}"
									>{video.author.name}</a
								>
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
		{/if}
	{/each}
</div>

<dialog
	bind:this={dialog}
	class="w-full md:w-8/12 p-4 rounded-lg bg-zinc-900 text-white/90 shadow backdrop:backdrop-blur"
>
	<div class="">
		<form method="dialog">
			<button class="absolute right-2 top-2 z-10" aria-label="Close">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-x-circle-fill"
					viewBox="0 0 16 16"
				>
					<path
						d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
					/>
				</svg>
			</button>
		</form>

		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<iframe
			src={embeddedUrl}
			class="w-full aspect-video mb-3"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>

		<h3 class="font-bold text-lg">
			<a href={url} target="_blank">{title}</a>
		</h3>
	</div>
</dialog>
