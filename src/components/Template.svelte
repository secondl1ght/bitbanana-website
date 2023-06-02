<script>
	export let title;
	export let link;
	export let button;
	export let external = true;
	export let position = 'bottom';

	import { Button } from '$comp';
</script>

<div class="space-y-14">
	<div>
		{#if position === 'top'}
			<h2 class="text-center text-4xl font-bold lg:text-5xl">{title}</h2>
		{/if}

		<img src="/images/logo.svg" alt="BitBanana" class="mx-auto hidden lg:block" />
		<img src="/images/logo-mobile.svg" alt="BitBanana" class="mx-auto block lg:hidden" />

		{#if position === 'bottom'}
			<h2 class="text-center text-4xl font-bold lg:text-5xl">{title}</h2>
		{/if}
	</div>

	<p class="mx-auto max-w-4xl text-lg font-semibold text-body lg:text-xl">
		<slot />
	</p>

	<Button {link} title={button} {external} />
</div>
