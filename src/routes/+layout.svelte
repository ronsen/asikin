<script lang="ts">
	import { navigating } from "$app/stores";
	import NProgress from "nprogress";
	import { slide } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	import "../app.css";
	import "nprogress/nprogress.css";

	NProgress.configure({ minimum: 0.16 });
	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	let showSearchForm = false;
</script>

<svelte:head>
	<title>Asikin - YouTube Trending Videos</title>
</svelte:head>

<nav class="navbar bg-base-300">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">
			<img src="/logo.png" alt="[]" class="w-6 h-6" />
			Asikin
		</a>
	</div>
	<div class="flex-none">
		<div class="inline-flex items-center text-sm gap-3">
			<a href="/ythunt">YTHunt</a>
			<button
				class="btn btn-sm btn-neutral"
				aria-label="Search"
				on:click={() => (showSearchForm = !showSearchForm)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-search"
					viewBox="0 0 16 16"
				>
					<path
						d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
					/>
				</svg>
			</button>
		</div>
	</div>
</nav>

{#if showSearchForm}
	<div
		id="search"
		transition:slide={{
			delay: 250,
			duration: 300,
			easing: quintOut,
			axis: "y",
		}}
		class="absolute top-19 left-1/2 transform -translate-x-1/2 w-full md:w-3/5 p-6 bg-base-300 rounded"
	>
		<form
			action="/search"
			method="get"
			on:submit={() => (showSearchForm = false)}
		>
			<div class="flex gap-3">
				<input
					type="text"
					name="q"
					class="input input-bordered w-full"
				/>
				<button type="submit" class="btn btn-neutral">Search</button>
			</div>
		</form>
	</div>
{/if}

<main class="w-full md:w-4/5 mx-auto">
	<slot />
</main>

<footer class="flex justify-center my-6">
	<a href="https://s.id/ronsen" target="_blank">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-code-slash"
			viewBox="0 0 16 16"
		>
			<path
				d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
			/>
		</svg>
		<span class="sr-only">Hello!</span>
	</a>
</footer>

<div class="fixed right-4 bottom-4">
	<button
		class="btn btn-neutral rounded-full shadow"
		aria-label="Up"
		on:click={() => document.body.scrollIntoView()}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-chevron-up"
			viewBox="0 0 16 16"
		>
			<path
				fill-rule="evenodd"
				d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
			/>
		</svg>
	</button>
</div>
