<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.ico";
  import Nav from "$lib/components/navigation.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="flex">
  <Nav className="w-64 h-screen fixed left-0 top-0 border-r" />
  <main class="ml-64 flex-1 h-screen overflow-y-auto p-8">
    {@render children()}
  </main>
</div>
