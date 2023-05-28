<script>
	export let link;
	export let external = false;
	export let title;
</script>

<div class="flex justify-center">
	<a
		href={link}
		target={external ? '_blank' : '_self'}
		rel="noreferrer"
		class="inline-block rounded bg-link px-4 py-3 text-lg font-semibold text-neutral hover:bg-hover lg:text-xl"
		>{title}</a
	>
</div>
