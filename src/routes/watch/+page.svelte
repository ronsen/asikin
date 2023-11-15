<script lang="ts">
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<iframe
    src="{data.embed_url}"
    class="w-full aspect-video"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
/>

<div class="mt-6">
    <a href="{data.url}" class="btn btn-netral w-full">Watch on YouTube</a>
</div>