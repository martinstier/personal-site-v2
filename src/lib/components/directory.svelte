<script lang="ts">
  import Page from "../../routes/+page.svelte";
  import Reference from "./reference.svelte";

  export let className: string = "";
</script>

<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />

<div class={className}>
  <p>Where you can find me and things related to me.</p>
  <Reference site="LinkedIn" logo="in.png" color="#4750DD" text_color="#EAFFD9"
  ></Reference>
  <Reference site="Resume" logo="file.png" color="#F5BF0F" text_color="#000000"
  ></Reference>
  <Reference site="Email" logo="email.png" color="#F3000E" text_color="#EAFFD9"
  ></Reference>
  <Reference
    site="Letterboxd"
    logo="/images/boxd.png"
    color="#248C54"
    text_color="#EAFFD9"
  ></Reference>
  <p>
    See also: friends with whom I maintain enduring and generative
    collaborations, spanning both sustained inquiry and shared creative labor.
  </p>
  <p>
    Ben Antonow, Nate Boxer, Hugh Jacks, Braden Leung, Jack Lille-Yerrington,
    Hugh Jacks, Jack Lille-Yerrington, Ben Neumaier
  </p>
</div>
