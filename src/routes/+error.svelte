<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>BitBanana - Error</title>
	<meta property="twitter:title" content="BitBanana - Error" />
</svelte:head>

<h1 class="text-center text-4xl font-bold lg:text-5xl">{$page.status}: {$page.error.message}</h1>
<img src="/images/animation/bananadance.gif" alt="dancing banana" class="mx-auto mt-8" />
