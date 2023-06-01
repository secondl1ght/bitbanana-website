<script>
	import { Button, Link } from '$comp';

	const general = [
		'Connect to remote lightning nodes (LND only supported right now)',
		'Available in many languages',
		'Explanations and help across the app',
		'And of course, BitBanana is Bitcoin only!'
	];

	const nodeManagement = [
		'Use your node as a wallet wherever you are',
		'Manage multiple nodes',
		'Channel management',
		'Routing summary'
	];

	const wallet = [
		'100% free, no BitBanana fees.',
		'Contacts (with avatars)',
		'Send funds to Lightning Addresses',
		'Send funds without an invoice (keysend)',
		'NFC support',
		'Transaction filters',
		'BTC, mBTC, bit & Satoshi units',
		'Fiat currency prices',
		'Support for SegWit & Taproot',
		'Sign / Verify',
		'LNURL support (pay, withdraw & channel)'
	];

	const securityAndPrivacy = [
		'100% Self-Custodial',
		'100% Open Source code with reproducible releases',
		'ZERO data collection',
		'Tor support',
		'PIN protected access',
		'Scrambled PIN by default',
		'User guardian system',
		'Protection against screen recording',
		'Hide total balance'
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
		<img src="/images/logo.svg" alt="BitBanana" class="mx-auto hidden lg:block" />
		<img src="/images/logo-mobile.svg" alt="BitBanana" class="mx-auto block lg:hidden" />

		<h1 class="text-center text-2xl font-bold lg:text-3xl pb-6">
			<span class="avoidwrap">Lightning Node </span>
			<span class="avoidwrap">Management for Android</span>
		</h1>

		<Button link="/download" title="Download" />
	</section>

	<section id="privacy" class="justify-between lg:flex">
		<div class="space-y-4 lg:w-1/2">
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
			class="mx-auto mt-8 drop-shadow-[0_0_100px_rgba(255,247,92,1)] lg:mx-0 lg:mt-0"
		/>
	</section>

	<section id="fees" class="justify-between lg:flex">
		<img
			src="/images/app/2.svg"
			alt="app screenshot"
			class="hidden drop-shadow-[0_0_100px_rgba(255,247,92,1)] lg:block"
		/>

		<div class="space-y-4 lg:w-1/2">
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
			class="mx-auto mt-8 block drop-shadow-[0_0_100px_rgba(255,247,92,1)] lg:hidden"
		/>
	</section>

	<section id="tools" class="justify-between lg:flex">
		<div class="space-y-4 lg:w-1/2">
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
			class="mx-auto mt-8 drop-shadow-[0_0_100px_rgba(255,247,92,1)] lg:mx-0 lg:mt-0"
		/>
	</section>

	<section id="navigate" class="space-y-8 lg:space-y-32">
		<div class="space-y-4 lg:text-center">
			<h2 class="text-4xl font-bold lg:text-5xl">Navigate Effortlessly</h2>

			<p class="mx-auto max-w-xl text-lg font-semibold text-body lg:text-xl">
				BitBanana’s powerful, user-friendly dashboard is like a pocket sized remote control for your
				node.
			</p>
		</div>

		<div
			class="justify-between space-y-8 drop-shadow-[0_0_100px_rgba(253,190,0,1)] lg:flex lg:space-y-0"
		>
			<img src="/images/app/4.svg" alt="app screenshot" class="mx-auto lg:mx-0" />
			<img src="/images/app/5.svg" alt="app screenshot" class="mx-auto lg:mx-0" />
			<img src="/images/app/6.svg" alt="app screenshot" class="mx-auto lg:mx-0" />
		</div>
	</section>

	<section id="get">
		<div class="mb-16 space-y-4">
			<div class="flex items-center justify-center space-x-1">
				<h2 class="text-center text-4xl font-bold lg:text-5xl pe-1">Get</h2>
				<img src="/images/logo-mobile.svg" alt="BitBanana" class="w-44 lg:w-auto" />
			</div>

			<Button link="/download" title="Download" />
		</div>

		<h3 class="mb-8 text-2xl font-bold lg:mb-16 lg:text-3xl">Feature Overview</h3>
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
