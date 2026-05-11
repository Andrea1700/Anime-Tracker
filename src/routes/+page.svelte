<script>
	let { data } = $props();
</script>

<h1>Anime Tracker</h1>

{#each data.anime as anime}
	<div>
		<h2>{anime.title}</h2>
		<p>{anime.genre}</p>
		<p>{anime.currentEpisode} / {anime.totalEpisodes}</p>
	</div>
{/each}