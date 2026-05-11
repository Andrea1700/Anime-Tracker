<script>
	let { data } = $props();
</script>

<h1>Anime Tracker</h1>

<a class="button" href="/anime/add">+ Anime hinzufügen</a>

<br /><br />

{#each data.anime as anime}
	<div class="card">
		<h2>{anime.title}</h2>
		<p>{anime.genre}</p>
		<p>{anime.currentEpisode} / {anime.totalEpisodes} Episoden</p>

		<a class="button secondary" href={`/anime/${anime._id}`}>Details öffnen</a>
	</div>
{/each}