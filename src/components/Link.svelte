<script lang="ts">
	export let link: string;
	export let title: string;
	export let external = true;
	export let style = '';
</script>

{#if external}
	<a
		href={link}
		target="_blank"
		rel="noreferrer"
		class="{style} text-link underline underline-offset-4 hover:text-hover">{title}</a
	>
{:else}
	<a href={link} class="{style} text-link underline underline-offset-4 hover:text-hover">{title}</a>
{/if}
