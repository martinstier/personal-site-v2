<script lang="ts">
  export let className: string = "";
  import Project from "$lib/components/project.svelte";
</script>

<div class={className}>
  <Project
    title="SATT"
    location="CHEPS"
    description="A staff-management platform for better scheduling, tracking, and workload distribution in public hospitals."
    images={["/images/infatrode.gif"]}
    color="#4750DD"
    text_color="#EAFFD9"
    stack={["VBA", "SQL"]}
  />
  <Project
    title="Infatrode"
    location="MHacks '25"
    description="A graph-based knowledge platform that blends personal journaling with a social network."
    images={["/images/infatrode.gif"]}
    color="#F5BF0F"
    stack={["Svelte", "Supabase", "TypeScript"]}
  />
  <Project
    title="Insta Clone"
    location=""
    description="Instagram-style web app with a dynamic, client-side feed powered by JavaScript and a REST API."
    images={["/images/insta_demo_cropped.gif"]}
    color="#F3000E"
    text_color="#EAFFD9"
    stack={["Python", "React.js", "SQL", "Jinja2", "Flask", "AWS"]}
  />
</div>
