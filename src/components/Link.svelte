<script>
	export let link;
	export let title;
	export let external = true;
</script>

{#if external}
	<a
		href={link}
		target="_blank"
		rel="noreferrer"
		class="text-link underline underline-offset-4 hover:text-hover">{title}</a
	>
{:else}
	<a
		href={link}
		rel="noreferrer"
		class="text-link underline underline-offset-4 hover:text-hover">{title}</a
	>
{/if}
