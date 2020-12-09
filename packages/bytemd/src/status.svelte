<script lang="ts">
  export let value: string;

  $: bytes = new TextEncoder().encode(value).length;
  $: lines = value.split('\n').length;
</script>

<div class="bytemd-status">
  <span><strong>{bytes}</strong> bytes</span><span><strong>{lines}</strong>
    lines</span>
</div>
