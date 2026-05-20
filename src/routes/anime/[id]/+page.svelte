<script>
	let { data, form } = $props();
</script>

<h1>{data.anime.title}</h1>

{#if form?.success}
	<div class="success">{form.success}</div>
{/if}

{#if form?.error}
	<div class="error">{form.error}</div>
{/if}

<div class="card">
	<p><strong>Genre:</strong> {data.anime.genre}</p>
	<p>
		<strong>Fortschritt:</strong>
		{data.anime.currentEpisode} / {data.anime.totalEpisodes}
	</p>
</div>

<form method="POST" action="?/updateProgress">
	<button class="button" type="submit">Fortschritt aktualisieren</button>
</form>

<br />

<form method="POST" action="?/deleteAnime">
	<button
	class="button secondary"
	type="submit"
	onclick={(event) => {
		if (!confirm('Möchtest du diesen Anime wirklich löschen?')) {
			event.preventDefault();
		}
	}}
>
	Anime löschen
</button>
</form>

<br />

<a href="/">Zurück</a>
