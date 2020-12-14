<script lang="ts">
  import tippy from 'tippy.js';
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import type { BytemdToolbarItem } from './types';

  const dispatch = createEventDispatcher();

  onMount(() => {
    if (tooltip) {
      tippy(el, {
        content: tooltip,
        animation: 'scale',
        animateFill: false,
        duration: 100,
        delay: 300,
      });
    }
  });

  let el: HTMLElement;
  export let tooltip: BytemdToolbarItem['tooltip'];
  export let icon: BytemdToolbarItem['icon'];
  export let style: string | undefined;
</script>

<svelte:options immutable={true} />

<span bind:this={el} on:click={() => dispatch('click')} {style}>
  {@html icon}
</span>
