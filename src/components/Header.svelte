<script lang="ts">
	const nav = ['community', 'contribute', 'donate', 'docs', 'about', 'download'];

	let showMobileMenu = false;
</script>

<!-- desktop header -->
<header
	class="hidden items-center justify-between bg-gradient-to-b from-gradient to-primary px-16 py-4 lg:flex"
>
	<a href="/">
		<img src="/images/logo-icon.svg" alt="lightning bolt banana" class="w-16" />
	</a>

	<nav class="flex space-x-12">
		{#each nav as link}
			<a href={'/' + link} class="font-semibold text-link hover:text-hover"
				>{link.charAt(0).toUpperCase() + link.slice(1)}</a
			>
		{/each}
	</nav>
</header>

<!-- mobile header -->
<header class="block lg:hidden">
	<div
		class="flex items-center justify-between bg-gradient-to-b from-gradient to-primary px-8 py-4"
	>
		<a href="/" on:click={() => (showMobileMenu = false)}>
			<img src="/images/logo-icon.svg" alt="lightning bolt banana" class="w-12" />
		</a>

		<button on:click={() => (showMobileMenu = !showMobileMenu)}>
			<img
				src={showMobileMenu ? '/images/mobile/close.svg' : '/images/mobile/hamburger.svg'}
				alt="mobile toggle"
			/>
		</button>
	</div>

	<nav
		class="absolute top-[81px] z-50 bg-primary px-8 py-4 transition-all ease-in-out {showMobileMenu
			? 'left-0'
			: 'left-[-100%]'} h-[100vh] w-full space-y-12"
	>
		{#each nav.reverse() as link}
			<a
				href={'/' + link}
				on:click={() => (showMobileMenu = false)}
				class="block text-xl font-bold text-link hover:text-hover"
				>{link.charAt(0).toUpperCase() + link.slice(1)}</a
			>
		{/each}
	</nav>
</header>
