<script lang="ts">
  import About from "$lib/components/about.svelte";
  import Work from "$lib/components/work.svelte";
  import Projects from "$lib/components/projects.svelte";
  import Directory from "$lib/components/directory.svelte";
</script>

<div class="pr-8">
  <div id="about">
    <About className="mb-7.5" />
  </div>

  <div id="work">
    <Work className="mb-15" />
  </div>

  <div id="projects">
    <Projects className="mb-15" />
  </div>

  <div id="directory">
    <Directory className="mb-15" />
  </div>
  <footer class="mb-3 text-[20px] opacity-70">
    Built with SvelteKit and Tailwind CSS · Deployed on Vercel
  </footer>
</div>
