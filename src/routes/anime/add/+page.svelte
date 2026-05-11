<h1>Anime hinzufügen</h1>

<form method="POST">
	<label>
		Titel
		<input name="title" required />
	</label>

	<br /><br />

	<label>
		Genre
		<input name="genre" required />
	</label>

	<br /><br />

	<label>
		Aktuelle Episode
		<input name="currentEpisode" type="number" min="0" value="0" required />
	</label>

	<br /><br />

	<label>
		Gesamt Episoden
		<input name="totalEpisodes" type="number" min="1" required />
	</label>

	<br /><br />

	<button type="submit">Anime speichern</button>
</form>

<br />

<a href="/">Zurück zur Übersicht</a>