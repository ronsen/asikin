<script lang="ts">
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

{#each data.videos as video}
    <div class="video flex flex-row items-start gap-4 mb-6">
        <div class="flex-none">
            <a href={video.url}
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
