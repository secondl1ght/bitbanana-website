<script lang="ts">
	import { Button, Link } from '$lib/comp';

	const general = [
		'Connect to remote lightning nodes (LND, Core Lightning & LndHub)',
		'Available in many languages',
		'Explanations and help across the app',
		'Easy phone migration',
		'And of course, BitBanana is Bitcoin only!'
	];

	const nodeManagement = [
		'Use your node as a wallet wherever you are',
		'Manage multiple nodes',
		'Manage channels',
		'Manage routing fees',
		'Routing summary',
		'Manage peers',
		'Manage watchtowers'
	];

	const wallet = [
		'100% free, no BitBanana fees',
		'Send & receive on-chain and off-chain',
		'Contacts (with avatars)',
		'Send funds to Lightning Addresses',
		'Send funds without an invoice (keysend)',
		'Bolt 12 support (Core Lightning only)',
		'Send and request sub satoshi amounts',
		'Display payment paths',
		'Keysend messages',
		'NFC support',
		'Transaction filters',
		'BTC, mBTC, bit & Satoshi units',
		'Fiat currency prices',
		'Support for SegWit & Taproot',
		'Sign / Verify',
		'LNURL support (pay, withdraw, auth, channel)'
	];

	const securityAndPrivacy = [
		'100% Self-Custodial',
		'100% Open Source code with reproducible releases',
		'ZERO data collection',
		'Available on F-Droid',
		'Coin Control',
		'Tor support',
		'PIN protected access',
		'Scrambled PIN by default',
		'Activate stealth mode to hide the app',
		'Option to mask all your balances',
		'Supports self-hosted Block Explorers',
		'Supports self-hosted Fee Estimation',
		'Supports self-hosted Exchange Rate Providers',
		'User guardian system',
		'Protection against screen recording'
	];

	const features = [
		{ title: 'General', list: general },
		{ title: 'Node Management', list: nodeManagement },
		{ title: 'Wallet', list: wallet },
		{ title: 'Security & Privacy', list: securityAndPrivacy }
	];
</script>

<svelte:head>
	<title>BitBanana</title>
	<meta property="twitter:title" content="BitBanana" />
</svelte:head>

<div class="space-y-32 lg:space-y-44">
	<section id="hero" class="space-y-4 lg:space-y-2">
		<img src="/images/logo.svg" alt="BitBanana" class="mx-auto w-[218px] lg:w-auto" />

		<h1 class="relative z-10 pb-6 text-center text-2xl font-bold lg:text-3xl">
			<span class="inline-block">Lightning Node</span>
			<span class="inline-block">Management for Android</span>
		</h1>

		<Button link="/download" title="Download" />
	</section>

	<section id="privacy" class="relative justify-between lg:flex">
		<img
			src="/images/bg-image-0.svg"
			alt="lightning bolt"
			class="absolute right-0 top-0 z-0 h-[1000px] w-[1000px] overflow-visible object-cover lg:-right-80 lg:-top-96 lg:h-[1500px] lg:w-[1500px]"
		/>

		<div class="radial relative z-10 space-y-4 lg:w-1/2">
			<h2 class="text-4xl font-bold lg:text-5xl">Unmatched Privacy Protection</h2>

			<p class="text-lg font-semibold text-body lg:text-xl">
				100% Self-Custodial with ZERO data collection - We don’t even know you’re using our app!
			</p>

			<p class="text-lg font-semibold text-body lg:text-xl">
				BitBanana shields you from potential personal information leaks by providing alerts prior to
				engaging in any actions that may pose privacy risks.
			</p>
		</div>

		<img
			src="/images/app/1.svg"
			alt="app screenshot"
			class="relative z-10 mx-auto mt-8 lg:mx-0 lg:mt-0"
		/>
	</section>

	<section id="fees" class="relative justify-between lg:flex">
		<img
			src="/images/bg-image-1.svg"
			alt="lightning bolt"
			class="absolute left-0 top-0 z-0 h-[1000px] w-[1000px] overflow-visible object-cover lg:-left-80 lg:-top-96 lg:h-[1500px] lg:w-[1500px]"
		/>

		<img src="/images/app/2.svg" alt="app screenshot" class="relative z-10 hidden lg:block" />

		<div class="radial relative z-10 space-y-4 lg:w-1/2">
			<h2 class="text-4xl font-bold lg:text-5xl">
				No Fees. <br />
				Now and Forever.
			</h2>

			<p class="text-lg font-semibold text-body lg:text-xl">
				The only fees you pay are to the Bitcoin network. BitBanana won’t charge you a single sat
				now or in the future.
			</p>
		</div>

		<img
			src="/images/app/2.svg"
			alt="app screenshot"
			class="relative z-10 mx-auto mt-8 block lg:hidden"
		/>
	</section>

	<section id="tools" class="relative justify-between lg:flex">
		<img
			src="/images/bg-image-2.svg"
			alt="lightning bolt"
			class="absolute right-0 top-0 z-0 h-[1000px] w-[1000px] overflow-visible object-cover lg:-right-80 lg:-top-96 lg:h-[1500px] lg:w-[1500px]"
		/>

		<div class="radial relative z-10 space-y-4 lg:w-1/2">
			<h2 class="text-4xl font-bold lg:text-5xl">Intuitive Contact Management Tools</h2>

			<p class="text-lg font-semibold text-body lg:text-xl">
				Remembering pubkeys? Ain’t nobody got time for that! We use <Link
					link="https://github.com/michaelWuensch/avathor-rfc#avathor"
					title="Avathor"
				/> to create unique avatar images for nodes on the Bitcoin Lightning Network.
			</p>
		</div>

		<img
			src="/images/app/3.svg"
			alt="app screenshot"
			class="relative z-10 mx-auto mt-8 lg:mx-0 lg:mt-0"
		/>
	</section>

	<section id="navigate" class="relative space-y-8 lg:space-y-32">
		<img
			src="/images/bg-image-3.svg"
			alt="lightning bolt"
			class="absolute top-0 z-0 h-[1000px] w-[1000px] overflow-visible object-cover lg:-top-40 lg:h-[1500px] lg:w-[1500px]"
		/>

		<div class="radial relative z-10 space-y-4 lg:text-center">
			<h2 class="text-4xl font-bold lg:text-5xl">Navigate Effortlessly</h2>

			<p class="max-w-xl text-lg font-semibold text-body lg:mx-auto lg:text-xl">
				BitBanana’s powerful, user-friendly dashboard is like a pocket sized remote control for your
				node.
			</p>
		</div>

		<div class="relative z-10 flex-wrap justify-center gap-32 space-y-8 lg:flex lg:space-y-0">
			<img src="/images/app/4.svg" alt="app screenshot" class="mx-auto lg:mx-0" />
			<img src="/images/app/5.svg" alt="app screenshot" class="mx-auto lg:mx-0" />
			<img src="/images/app/6.svg" alt="app screenshot" class="mx-auto lg:mx-0" />
		</div>
	</section>

	<section id="get">
		<div class="mb-16 space-y-4">
			<div class="flex items-center justify-center space-x-2">
				<h2 class="text-center text-4xl font-bold lg:text-5xl">Get</h2>
				<img src="/images/logo.svg" alt="BitBanana" class="w-44 lg:w-[218px]" />
			</div>

			<Button link="/download" title="Download" />
		</div>

		<h3 class="relative z-10 mb-8 text-2xl font-bold lg:mb-16 lg:text-3xl">Feature Overview</h3>
		<div class="grid-cols-2 gap-8 space-y-8 lg:grid lg:space-y-0">
			{#each features as feature}
				<div>
					<h4 class="text-lg font-semibold lg:text-xl">{feature.title}</h4>
					<ul class="ml-8 list-disc text-body lg:text-lg">
						{#each feature.list as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	.radial {
		background: radial-gradient(
			50% 49.61% at 50% 50.08%,
			rgba(35, 37, 51, 0.5) 0%,
			rgba(35, 37, 51, 0) 100%
		);
	}
</style>
