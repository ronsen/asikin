<script lang="ts">
    import type { PageServerData } from "./$types";
    import Videos from '$lib/components/videos.svelte';

    export let data: PageServerData;

    let gl = data.gl;
</script>

<div class="mb-6">
    <form action="/" method="get">
        <div class="join">
            <select bind:value={gl} name="gl" class="select select-bordered join-item">
                <option value="AR">Argentina</option>
                <option value="AU">Australia</option>
                <option value="FR">France</option>
                <option value="JP">Japan</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IL">Israel</option>
                <option value="MY">Malaysia</option>
                <option value="RU">Russia</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SG">Singapore</option>
                <option value="PH">Philippines</option>
                <option value="TH">Thailand</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
            </select>
            <button class="btn btn-neutral join-item">Change</button>
        </div>
    </form>
</div>

<Videos videos={data.videos} />
