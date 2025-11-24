<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.ico";
  import Nav from "$lib/components/navigation.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="flex">
  <Nav className="w-94 h-screen fixed left-0 top-0" />
  <main class="ml-94 flex-1 h-screen overflow-y-auto p-8">
    {@render children()}
  </main>
</div>
