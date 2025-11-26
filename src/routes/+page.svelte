<script lang="ts">
  import About from "$lib/components/about.svelte";
  import Experience from "$lib/components/experience.svelte";
  import Projects from "$lib/components/projects.svelte";
  import Directory from "$lib/components/directory.svelte";
</script>

<div class="pr-8">
  <div id="about">
    <About className="mb-20" />
  </div>

  <div id="experience">
    <Experience className="mb-20" />
  </div>

  <div id="projects">
    <Projects className="mb-20" />
  </div>

  <div id="directory">
    <Directory className="mb-20" />
  </div>
</div>
