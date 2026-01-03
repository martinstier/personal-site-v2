<script lang="ts">
  export let site: string;
  export let logo: string;
  export let color: string;
  export let text_color: string;
</script>

<span
  class="bg-[{color}] text-[{text_color}]"
  style="cursor: url('{logo}') 16 16, auto;"
>
  {site}
</span>
