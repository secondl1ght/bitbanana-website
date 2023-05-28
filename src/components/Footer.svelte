<script>
	import { links } from '$lib/store';
</script>

<footer class="space-y-8 bg-gradient-to-t from-gradient to-primary py-8 lg:space-y-16 lg:py-16">
	<div class="flex items-center justify-center space-x-8">
		<a href={$links.github} target="_blank" rel="noreferrer">
			<img src="/images/social/github.svg" alt="github" />
		</a>
		<a href={$links.discord} target="_blank" rel="noreferrer">
			<img src="/images/social/discord.svg" alt="discord" />
		</a>
	</div>

	<div class="flex justify-center space-x-8">
		<a href="/privacy" class="text-sm text-grey">Privacy Policy</a>
		<a href="/license" class="text-sm text-grey">License</a>
	</div>
</footer>
