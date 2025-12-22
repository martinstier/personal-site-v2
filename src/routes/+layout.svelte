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
  <nav class="hidden lg:block">
    <Nav className="w-94 h-screen fixed left-0 top-0" />
  </nav>
  <main class="flex-1 h-screen overflow-y-auto pt-7.5 p-8 lg:ml-94">
    {@render children()}
  </main>
</div>
