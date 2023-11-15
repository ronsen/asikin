<script>
    import "../app.css";
</script>

<svelte:head>
    <title>Asikin</title>
</svelte:head>

<div class="navbar bg-base-300">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">Asikin</a>
    </div>
    <div class="flex-none">
        <form action="/" method="get">
            <div class="join">
                <select name="gl" class="select select-bordered select-sm join-item w-full">
                    <option value="">- Select -</option>
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
                <button class="btn btn-primary btn-sm join-item">Change</button>
            </div>
        </form>
    </div>
</div>

<main class="w-full md:w-4/5 mx-auto p-6 md:p-10">
    <slot />
</main>
