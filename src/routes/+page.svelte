<script>
	import AnimeCard from '$lib/components/AnimeCard.svelte';

	let { data } = $props();

	let selectedGenre = $state('Alle');
	let selectedStatus = $state('Alle');
	let searchTerm = $state('');

	let filteredAnime = $derived(
		data.anime.filter((anime) => {
			const matchesGenre = selectedGenre === 'Alle' || anime.genre === selectedGenre;
			const matchesStatus =
	selectedStatus === 'Alle' ||
	anime.status?.toLowerCase() === selectedStatus.toLowerCase();
			const matchesSearch = anime.title.toLowerCase().includes(searchTerm.toLowerCase());

			return matchesGenre && matchesSearch && matchesStatus;
		})
	);
</script>

<h1>Anime Tracker</h1>

<input
	type="text"
	placeholder="Anime suchen..."
	bind:value={searchTerm}
/>

<br /><br />

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

<div class="filters">
	<button
		class:selected={selectedStatus === 'Alle'}
		onclick={() => (selectedStatus = 'Alle')}
	>
		Alle Status
	</button>

	<button
		class:selected={selectedStatus === 'Watching'}
		onclick={() => (selectedStatus = 'Watching')}
	>
		Watching
	</button>

	<button
		class:selected={selectedStatus === 'Completed'}
		onclick={() => (selectedStatus = 'Completed')}
	>
		Completed
	</button>

	<button
		class:selected={selectedStatus === 'Plan to Watch'}
		onclick={() => (selectedStatus = 'Plan to Watch')}
	>
		Plan to Watch
	</button>
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

{#if filteredAnime.length === 0}
	<div class="card">
		<p>Keine passenden Anime gefunden.</p>
	</div>
{:else}
	{#each filteredAnime as anime}
		<AnimeCard {anime} />
	{/each}
{/if}
