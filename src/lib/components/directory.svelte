<script lang="ts">
  import Page from "../../routes/+page.svelte";
  import Reference from "./reference.svelte";

  export let className: string = "";
</script>

<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />

<div class={className}>
  <p>
    Find me on
    <!-- logo="/images/linkedin.png" -->
    <Reference
      site="LinkedIn"
      color="#4750DD"
      link="http://linkedin.com/in/martin-stier"
      text_color="#EAFFD9"
      size="30"
    ></Reference>,
    <!-- logo="/images/email.png" -->
    <Reference
      site="email"
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
    <!-- logo="/images/file.png" -->
    <Reference
      site="resume"
      color="#F5BF0F"
      text_color="#000000"
      logo=""
      link="https://drive.google.com/file/d/1xj2ojdyRkvwwlcHOKEhnNENTHUsMVijl/view?usp=sharing"
      size="30"
    ></Reference>.
  </p>
  <!-- <p>
    <i>See also:</i> friends with whom I maintain enduring and generative
    collaborations.
  </p>
  <p>
    Ben Antonow, Nate Boxer, Hugh Jacks, Braden Leung, Jack Lille-Yerrington,
    Ben Neumaier
  </p> -->
</div>
