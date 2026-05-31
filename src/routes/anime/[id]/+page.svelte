<script>
	let { data, form } = $props();
</script>

<h1>{data.anime.title}</h1>

{#if data.anime.imageUrl}
	<img class="detail-cover" src={data.anime.imageUrl} alt={`Cover von ${data.anime.title}`} />
{/if}

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

<div class="card">
	<h2>Status ändern</h2>

	<form method="POST" action="?/updateStatus">
		<label>
			Status
			<select name="status">
				<option
					value="Watching"
					selected={data.anime.status?.toLowerCase() === "watching"}
				>
					Watching
				</option>
				<option
					value="Completed"
					selected={data.anime.status?.toLowerCase() === "completed"}
				>
					Completed
				</option>
				<option
					value="Plan to Watch"
					selected={data.anime.status?.toLowerCase() ===
						"plan to watch"}
				>
					Plan to Watch
				</option>
			</select>
		</label>

		<button class="button" type="submit">Status speichern</button>
	</form>
</div>

<div class="card">
	<h2>Fortschritt bearbeiten</h2>

	<form method="POST" action="?/updateEpisode">
		<label>
			Aktuelle Episode
			<input
				type="number"
				name="currentEpisode"
				min="0"
				max={data.anime.totalEpisodes}
				value={data.anime.currentEpisode}
			/>
		</label>

		<button class="button" type="submit"> Fortschritt speichern </button>
	</form>
</div>

<form method="POST" action="?/updateProgress">
	<button class="button" type="submit">Fortschritt aktualisieren</button>
</form>

<br />

<form method="POST" action="?/toggleFavorite">
	<button class="button secondary" type="submit">
		{data.anime.favorite ? "⭐ Favorit entfernen" : "⭐ Zu Favoriten"}
	</button>
</form>

<br />

<div class="card">
	<h2>Notizen</h2>

	<form method="POST" action="?/saveNote">
		<label>
			Persönliche Notiz
			<textarea name="notes" rows="5">{data.anime.notes || ""}</textarea>
		</label>

		<button class="button" type="submit">Notiz speichern</button>
	</form>
</div>

<form method="POST" action="?/deleteAnime">
	<button
		class="button secondary"
		type="submit"
		onclick={(event) => {
			if (!confirm("Möchtest du diesen Anime wirklich löschen?")) {
				event.preventDefault();
			}
		}}
	>
		Anime löschen
	</button>
</form>

<br />

<a href="/">Zurück</a>
