<script lang="ts">
	export let link: string;
	export let external = false;
	export let title: string;
</script>

<div class="flex justify-center">
	<a
		href={link}
		target={external ? '_blank' : '_self'}
		rel="noreferrer"
		class="relative z-10 inline-block rounded bg-link px-4 py-2 text-lg font-semibold text-neutral hover:bg-hover lg:text-xl"
		>{title}</a
	>
</div>
