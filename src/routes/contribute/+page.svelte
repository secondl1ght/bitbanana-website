<script>
	import { Template, Link } from '$comp';
	import { links } from '$lib/store';
</script>

<svelte:head>
	<title>BitBanana - Contribute</title>
	<meta property="twitter:title" content="BitBanana - Contribute" />
</svelte:head>

<Template title="Contribute" link={$links.github} button="Contribute on GitHub">
	Hey, do you like BitBanana? Awesome! We could really use your help! Open Source isn't just writing
	code. You can contribute to BitBanana in many different ways:

	<ul class="my-5 ml-5 list-disc">
		<li>Drop a star on GitHub</li>
		<li>Share a positive review and rate the app in the app store</li>
		<li>Tell your friends about it</li>
		<li>
			<Link
				link="https://github.com/michaelWuensch/BitBanana/blob/master/docs/TRANSLATING.md"
				title="Translate"
			/>
			the app using Weblate
		</li>
		<li>
			Find and report bugs - <Link
				link="https://github.com/michaelWuensch/BitBanana/issues"
				title="Open Issue"
			/>
		</li>
		<li>Suggest new features</li>
		<li>
			Provide support to fellow users on <Link link={$links.discord} title="Discord" />
		</li>
		<li>Contribute to documentation</li>
		<li>Review pull requests</li>
		<li>Fix bugs & implement new features</li>
	</ul>

	If you would like to contribute to the project code, please see the <Link
		link="https://github.com/michaelWuensch/BitBanana/blob/master/docs/CONTRIBUTING.md"
		title="Contributing Guide"
	/>.
</Template>
