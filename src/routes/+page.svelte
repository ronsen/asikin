<script lang="ts">
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<h2 class="text-lg font-bold border-b border-base-300 pb-4 mb-4">
    <a href="/?gl={data.gl}">{data.gl}</a>
</h2>

{#each data.videos as video}
    <div class="video flex flex-row items-start gap-4 border-b border-base-300 pb-4 mb-4">
        <div class="flex-none">
            <a href="/watch?v={video.id}"
                ><img
                    src={video.thumbnail.url}
                    alt="[]"
                    class="w-32 md:w-64 h-16 md:h-32 object-cover rounded"
                /></a
            >
        </div>

        <div>
            <h3 class="font-bold">
                <a href={video.url}>{video.title}</a>
            </h3>
        </div>
    </div>
{/each}
