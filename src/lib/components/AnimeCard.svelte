<script>
	let { anime } = $props();

	let progress = (anime.currentEpisode / anime.totalEpisodes) * 100;
</script>

<div class="card">
	<h2>{anime.title}</h2>
	<p>{anime.genre}</p>
	<p>{anime.currentEpisode} / {anime.totalEpisodes} Episoden</p>

	<div class="progress">
		<div class="progress-fill" style={`width: ${progress}%`}></div>
	</div>

	<a class="button secondary" href={`/anime/${anime._id}`}>
		Details öffnen
	</a>
</div>