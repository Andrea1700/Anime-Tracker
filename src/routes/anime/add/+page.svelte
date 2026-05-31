<script>
	let { form } = $props();
</script>

<h1>Anime hinzufügen</h1>

{#if form?.error}
	<div class="error">{form.error}</div>
{/if}

<form method="POST">
	<label>
		Titel
		<input name="title" required />
	</label>

	<label>
		Genre
		<input name="genre" required />
	</label>

	<label>
		Aktuelle Episode
		<input name="currentEpisode" type="number" min="0" value="0" required />
	</label>

	<label>
		Gesamt Episoden
		<input name="totalEpisodes" type="number" min="1" required />
	</label>

	<label>
		Status
		<select name="status">
			<option value="Watching">Watching</option>
			<option value="Completed">Completed</option>
			<option value="Plan to Watch">Plan to Watch</option>
		</select>
	</label>

	<label>
		Cover Bild URL
		<input name="imageUrl" type="text" placeholder="/images/naruto.jpg" />
	</label>

	<button class="button" type="submit">Anime speichern</button>
</form>

<br />

<a href="/">Zurück zur Übersicht</a>
