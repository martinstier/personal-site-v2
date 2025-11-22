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

  function goTo(index: number) {
    current = index;
  }

  const sections = ["about", "experience", "projects", "directory"];

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
</script>

<nav class="flex flex-col gap-4 fixed z-50 top-8 {className}">
  <!-- Image carousel -->
  <div class="image-carousel">
    <div class="w-60 h-50 overflow-hidden rounded-xl">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img
        class="w-full h-full object-cover cursor-pointer select-none"
        src={images[current]}
        onclick={next}
        alt="Images of Martin."
      />
    </div>

    <!-- Dots -->
    <div class="flex gap-2 mt-1">
      {#each images as _, i}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div
          class="w-1.5 h-1.5 rounded-full cursor-pointer transition
            {i === current
            ? 'bg-blue-500 scale-110'
            : 'bg-gray-400 hover:bg-gray-500'}"
          onclick={() => goTo(i)}
        ></div>
      {/each}
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
  </div>
</nav>
