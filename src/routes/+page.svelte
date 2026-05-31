<script>
	import AnimeCard from '$lib/components/AnimeCard.svelte';

	let { data } = $props();

	let selectedGenre = $state('Alle');

	let filteredAnime = $derived(
		selectedGenre === 'Alle'
			? data.anime
			: data.anime.filter((a) => a.genre === selectedGenre)
	);
</script>

<h1>Anime Tracker</h1>

<div class="filters">
	<button
		class:selected={selectedGenre === 'Alle'}
		onclick={() => (selectedGenre = 'Alle')}
	>
		Alle
	</button>

	{#each data.genres as genre}
		<button
			class:selected={selectedGenre === genre}
			onclick={() => (selectedGenre = genre)}
		>
			{genre}
		</button>
	{/each}
</div>

<br />

{#if data.success}
	<div class="success">Anime erfolgreich hinzugefügt.</div>
{/if}

{#if data.deleted}
	<div class="success">Anime erfolgreich gelöscht.</div>
{/if}

<a class="button" href="/anime/add">+ Anime hinzufügen</a>

<br /><br />

{#if data.anime.length === 0}
	<div class="card">
		<p>Noch keine Anime vorhanden.</p>
	</div>
{:else}
	{#each filteredAnime as anime}
		<AnimeCard {anime} />
	{/each}
{/if}
