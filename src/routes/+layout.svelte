<script lang="ts">
	import '../app.css';

	import { Footer, Header } from '$lib/comp';
</script>

<Header />
<main class="mx-auto my-8 w-10/12 max-w-screen-xl lg:my-16">
	<slot />
</main>
<Footer />
