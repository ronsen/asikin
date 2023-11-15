<script>
    import "../app.css";
</script>

<svelte:head>
    <title>Asikin</title>
</svelte:head>

<nav class="navbar bg-base-300">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">
            <img src="/logo.png" alt="[]" class="w-6 h-6">
            Asikin
        </a>
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
                <button class="btn btn-neutral btn-sm join-item">Change</button>
            </div>
        </form>
    </div>
</nav>

<main class="w-full md:w-4/5 mx-auto p-6 md:p-10">
    <slot />
</main>

<footer class="flex justify-center mb-6 md:mb-10">
    <a href="https://s.id/ronsen" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
        </svg>
    </a>
</footer>