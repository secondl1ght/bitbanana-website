<script lang="ts">
	import { Icon, Link } from '$lib/comp';
</script>

<svelte:head>
	<title>BitBanana - Download</title>
	<meta property="twitter:title" content="BitBanana - Download" />
</svelte:head>

<div class="space-y-16 text-center text-lg lg:text-xl">
	<img src="/images/logo.svg" alt="BitBanana" class="mx-auto w-[218px] lg:w-auto" />

	<p class="font-semibold">
		What you see is what you get...
		<br /><br />
		100% Open Source.
		<br />
		100% Reproducible.
	</p>

	<div class="mx-auto max-w-xl grid-cols-3 space-y-16 lg:grid lg:space-y-0">
		<div class="space-y-4">
			<p class="font-bold">F-Droid</p>
			<a
				href="https://f-droid.org/en/packages/app.michaelwuensch.bitbanana/"
				target="_blank"
				rel="noreferrer"
				class="inline-block"
			>
				<Icon icon="fdroid" style="mx-auto text-link hover:text-hover w-[57px] h-[64px]" />
			</a>
		</div>

		<div class="space-y-4">
			<p class="font-bold">Google Play</p>
			<a
				href="https://play.google.com/store/apps/details?id=app.michaelwuensch.bitbanana"
				target="_blank"
				rel="noreferrer"
				class="inline-block"
			>
				<Icon icon="play" style="mx-auto text-link hover:text-hover w-[58px] h-[64px]" />
			</a>
		</div>

		<div class="space-y-4">
			<p class="font-bold">APK</p>
			<a
				href="https://github.com/michaelWuensch/BitBanana/releases/latest"
				target="_blank"
				rel="noreferrer"
				class="inline-block"
			>
				<Icon icon="apk" style="mx-auto text-link hover:text-hover w-[64px] h-[59px]" />
			</a>
		</div>
	</div>

	<p class="mx-auto max-w-xl font-semibold">
		With our commitment to <Link
			link="https://github.com/michaelWuensch/BitBanana/blob/master/docs/REPRODUCE.md"
			title="reproducible"
		/> builds, we guarantee the absence of hidden code in our software deliveries. Our releases exactly
		mirror the open-source code, making them fully auditable by anyone seeking transparency and trust.
	</p>
</div>
