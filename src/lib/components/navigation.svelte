<script lang="ts">
  import { onMount } from "svelte";

  export let className: string = "";

  const images = [
    "/images/image0.jpg",
    "/images/image1.jpeg",
    "/images/image2.jpg",
  ];

  let current = 0;

  function next() {
    current = (current + 1) % images.length;
  }

  // function goTo(index: number) {
  //   current = index;
  // }

  let interval: NodeJS.Timeout | null = null;

  function startRotation() {
    if (!interval) {
      interval = setInterval(next, 100);
    }
  }

  function stopRotation() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  const sections = ["about", "experience", "projects", "directory"];

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
</script>

<nav class="flex flex-col gap-0 fixed z-50 top-8 {className}">
  <!-- Image carousel -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="image-carousel"
    onmouseenter={startRotation}
    onmouseleave={stopRotation}
  >
    <div class="w-70 h-70 overflow-hidden rounded-sm">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img
        class="w-full h-full object-cover select-none"
        src={images[current]}
        alt="Images of Martin."
      />
    </div>
  </div>

  {#each sections as section}
    <button
      type="button"
      class="cursor-pointer rounded-full w-50"
      onclick={() => scrollToSection(section)}
    >
      <!-- {currentSection === section
        ? 'bg-blue-600 text-white'
        : 'hover:text-white hover:bg-blue-600'}" -->
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </button>
  {/each}
</nav>
