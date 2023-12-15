<script lang="ts">
	export let icon: string;
	export let style: string;
</script>

<svg class={style}>
	<use href="/icons/spritesheet.svg#{icon}" />
</svg>
