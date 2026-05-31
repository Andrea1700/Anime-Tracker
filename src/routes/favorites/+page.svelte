<script>
	import AnimeCard from '$lib/components/AnimeCard.svelte';

	let { data } = $props();
</script>

<h1>Favoriten</h1>

{#if data.anime.length === 0}
	<div class="card">
		<p>Noch keine Favoriten vorhanden.</p>
	</div>
{:else}
	{#each data.anime as anime}
		<AnimeCard {anime} />
	{/each}
{/if}