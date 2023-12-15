<script lang="ts">
	export let title: string;
	export let link: string | undefined = undefined;
	export let button: string | undefined = undefined;
	export let external = true;
	export let position: 'top' | 'bottom' = 'bottom';

	import { Button } from '$lib/comp';
</script>

<div class="space-y-16">
	<div>
		{#if position === 'top'}
			<h2 class="text-center text-4xl font-bold lg:text-5xl">{title}</h2>
		{/if}

		<img src="/images/logo.svg" alt="BitBanana" class="mx-auto w-[218px] lg:w-auto" />

		{#if position === 'bottom'}
			<h2 class="text-center text-4xl font-bold lg:text-5xl">{title}</h2>
		{/if}
	</div>

	<div class="mx-auto max-w-4xl text-lg font-semibold text-body lg:text-xl">
		<slot />
	</div>

	{#if link && button}
		<Button {link} title={button} {external} />
	{/if}
</div>
