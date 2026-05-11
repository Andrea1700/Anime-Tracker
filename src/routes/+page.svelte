<script>
	let { data } = $props();
</script>

<h1>Anime Tracker</h1>

<a href="/anime/add">+ Anime hinzufügen</a>

{#each data.anime as anime}
	<div>
		<h2>{anime.title}</h2>
		<p>{anime.genre}</p>
		<p>{anime.currentEpisode} / {anime.totalEpisodes}</p>
	</div>
{/each}