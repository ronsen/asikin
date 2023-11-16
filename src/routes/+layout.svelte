<script lang="ts">
	import { navigating } from "$app/stores";
	import NProgress from "nprogress";

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
</script>

<svelte:head>
	<title>Asikin</title>
</svelte:head>

<nav class="navbar bg-base-300">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">
			<img src="/logo.png" alt="[]" class="w-6 h-6" />
			Asikin
		</a>
	</div>
	<div class="flex-none">
		<form action="/search" method="get">
			<div class="join">
				<input
					type="text"
					name="q"
					class="input input-bordered input-sm join-item"
				/>
				<button class="btn btn-neutral btn-sm join-item">
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
		</form>
	</div>
</nav>

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
	</a>
</footer>
