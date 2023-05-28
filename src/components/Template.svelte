<script>
	export let title;
	export let link;
	export let button;
	export let external = true;

	import { Button } from '$comp';
</script>

<div class="space-y-16">
	<div>
		<img src="/images/logo.png" alt="BitBanana" class="mx-auto hidden lg:block" />
		<img src="/images/logo-mobile.png" alt="BitBanana" class="mx-auto block lg:hidden" />

		<h2 class="text-center text-4xl font-bold lg:text-5xl">{title}</h2>
	</div>

	<p class="mx-auto max-w-4xl text-lg font-semibold text-body lg:text-xl">
		<slot />
	</p>

	<Button {link} title={button} {external} />
</div>
