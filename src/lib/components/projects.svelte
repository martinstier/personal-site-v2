<script lang="ts">
  export let className: string = "";
  import Project from "$lib/components/project.svelte";
</script>

<div class={className}>
  <Project
    title="SATT"
    location="CHEPS"
    description="A staff management platform for better scheduling, tracking, and workload distribution in public hospitals."
    images={["/images/infatrode.gif"]}
    color="#4750DD"
    text_color="#EAFFD9"
    stack={["VBA", "SQL"]}
  />
  <Project
    title="Infatrode"
    location="MHacks '25"
    description="Mapping relationships between people, things, and concepts (socially)."
    images={["/images/infatrode.gif"]}
    color="#F5BF0F"
    stack={["Svelte", "Supabase", "Full-stack"]}
  />
</div>
