<script>
	export let name;
	export let title;
	export let lightning;
	export let onchain;

	import { Link } from '$comp';
</script>

<div class="text-center">
	<img
		src="/images/team/{name.toLowerCase()}.webp"
		alt="avatar"
		class="mx-auto mb-2 h-36 w-36 rounded-full border-4 border-link object-cover"
	/>

	<h3>{name}</h3>
	<h4 class="mb-4 text-base">{title}</h4>

	<p class="text-xs">Lightning</p>
	<Link link="lightning:{lightning}" title={lightning} style="text-base mb-4 block" />

	<p class="text-xs">On-Chain</p>
	<Link
		link="bitcoin:{onchain}"
		title={onchain.slice(0, 8) + '...' + onchain.slice(onchain.length - 8, onchain.length)}
		style="text-base"
	/>
</div>
