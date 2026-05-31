<script>
	import '../app.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<nav class="mobile-nav">
		<a href="/">Home</a>
		<a href="/anime/add">Hinzufügen</a>
		<a href="/favorites">Favoriten</a>
	</nav>
</div>