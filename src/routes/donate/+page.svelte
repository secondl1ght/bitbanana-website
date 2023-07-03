<script>
	import { Template, Team } from '$comp';

	const team = [
		{
			name: 'Michael',
			title: 'Main Developer',
			lightning: 'michael90@getalby.com',
			onchain: 'bc1pxdvk8h2tgfkgrg52yz34wscfyamz5cfsnk6nndkw3ep5g25sd26q0c7xrj'
		},
		{
			name: 'secondl1ght',
			title: 'Website Developer',
			lightning: 'secondl1ght@getalby.com',
			onchain: 'bc1q2y54dtz77ln9f9flmk7aj09wk9prsfzjsa2uqd'
		},
		{
			name: '3j2009',
			title: 'Website Designer',
			lightning: '3j2009@getalby.com',
			onchain: 'bc1qmrsl6w87p6cag40nztq0au9jfagupm9g7vtj0p'
		}
	];
</script>

<svelte:head>
	<title>BitBanana - Donate</title>
	<meta property="twitter:title" content="BitBanana - Donate" />
</svelte:head>

<Template title="Donate to" position="top">
	Thank you for considering a donation!
	<br />
	At BitBanana we do everything for free and donations are the only source of income.
	<br /><br />
	Your donation will directly help us to spend more time on the project.
	<br />
	My dream (Michael, main developer) is to do this full-time and deliver what you love at an unprecedented
	speed and quality.

	<div class="mt-14 grid-cols-3 gap-4 space-y-14 lg:grid lg:space-y-0">
		{#each team as member}
			<Team
				name={member.name}
				title={member.title}
				lightning={member.lightning}
				onchain={member.onchain}
			/>
		{/each}
	</div>
</Template>
