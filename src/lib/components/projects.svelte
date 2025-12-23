<script lang="ts">
  export let className: string = "";
  import Project from "$lib/components/project.svelte";
</script>

<div class={className}>
  <Project
    title="Infatrode"
    collaborators={["Jack LY", "Ben N", "Connor D"]}
    location="MHacks 2025"
    description="A novel social media approach: mapping relationships between people, things, and concepts."
    images={["/images/infatrode.gif"]}
    color="#F5BF0F"
  />
</div>
