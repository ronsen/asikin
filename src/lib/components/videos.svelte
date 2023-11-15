<script lang="ts">
    export let videos: any;
    let dialog: HTMLDialogElement;

    let title = '';
    let embededUrl = '';
    let url = '';

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
    <div class="video flex flex-row items-start gap-4 border-b border-base-300 p-6 cursor-pointer hover:bg-base-300"
            on:click={() => watch(video)}>
        <div class="flex-none">
            <img
                src={video.thumbnail.url} alt="[]"
                class="w-32 md:w-64 h-16 md:h-32 object-cover rounded"
            />
        </div>
        <h3 class="font-bold">{video.title}</h3>
    </div>
{/each}

<dialog bind:this={dialog} class="modal">
    <div class="modal-box max-w-5xl md:w-8/12">
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>

        <h3 class="font-bold mb-4">{title}</h3>

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
