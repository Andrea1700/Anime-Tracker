<script>
	let { data } = $props();
</script>

<h1>Anime Tracker</h1>

{#if data.success}
	<div class="success">
		Anime erfolgreich hinzugefügt.
	</div>
{/if}

{#if data.deleted}
	<div class="success">
		Anime erfolgreich gelöscht.
	</div>
{/if}

<a class="button" href="/anime/add">+ Anime hinzufügen</a>

<br /><br />

{#if data.anime.length === 0}
	<div class="card">
		<p>Noch keine Anime vorhanden.</p>
	</div>
{:else}
	{#each data.anime as anime}
		<div class="card">
			<h2>{anime.title}</h2>
			<p>{anime.genre}</p>
			<p>{anime.currentEpisode} / {anime.totalEpisodes} Episoden</p>

			<div class="progress">
				<div
					class="progress-fill"
					style={`width: ${(anime.currentEpisode / anime.totalEpisodes) * 100}%`}
				></div>
			</div>

			<a class="button secondary" href={`/anime/${anime._id}`}>
				Details öffnen
			</a>
		</div>
	{/each}
{/if}