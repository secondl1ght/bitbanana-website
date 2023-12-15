<script>
	import { Template } from '$lib/comp';
	import { links } from '$lib/store';
</script>

<svelte:head>
	<title>BitBanana - Community</title>
	<meta property="twitter:title" content="BitBanana - Community" />
</svelte:head>

<Template title="Community" link={$links.discord} button="Join the Discord!">
	Discord is the place where BitBanana enthusiasts gather on our official server. Come join the
	party and hangout, or get help from a community member.
</Template>
