<script lang="ts">
  import Page from "../../routes/+page.svelte";
  import Reference from "./reference.svelte";

  export let className: string = "";
</script>

<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />

<div class={className}>
  <p>
    Find me on
    <Reference
      site="LinkedIn"
      logo="/images/linkedin.png"
      color="#4750DD"
      text_color="#EAFFD9"
      link="http://linkedin.com/in/martin-stier"
      size="30"
    ></Reference>,
    <Reference
      site="Email"
      logo="/images/email.png"
      color="#F3000E"
      text_color="#EAFFD9"
      link="mailto:mastier@umich.edu"
      size="20"
    ></Reference>, or
    <Reference
      site="Letterboxd"
      logo="/images/boxd.png"
      color="#248C54"
      text_color="#EAFFD9"
      link="https://letterboxd.com/marticicleta/"
      size="30"
    ></Reference>. Additionally, here's my
    <Reference
      site="resume"
      logo="/images/file.png"
      color="#F5BF0F"
      text_color="#000000"
      link=""
      size="30"
    ></Reference>.
  </p>
  <p>
    See also: friends with whom I maintain enduring and generative
    collaborations.
  </p>
  <p>
    Ben Antonow, Nate Boxer, Hugh Jacks, Braden Leung, Jack Lille-Yerrington,
    Ben Neumaier
  </p>
</div>
