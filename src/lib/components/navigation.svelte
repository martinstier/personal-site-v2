<script lang="ts">
  import { onMount } from "svelte";

  export let className: string = "";

  const images = [
    "/images/img0.JPG",
    // "/images/img1.jpeg",
    // "/images/img2.JPG",
    "/images/img3.JPG",
    "/images/img4.JPG",
    // "/images/img5.JPG",
    // "/images/img6.JPG",
    // "/images/img7.jpg",
    // "/images/img8.jpg",
    "/images/img9.JPG",
    "/images/img10.jpg",
    "/images/img11.JPG",
    "/images/img12.jpeg",
    "/images/img13.jpeg",
    // "/images/img14.JPG",
    // "/images/img15.JPG",
    "/images/img16.jpeg",
    // "/images/img17.jpg",
  ];

  let current = 3;

  function next() {
    current = (current + 1) % images.length;
  }

  // function goTo(index: number) {
  //   current = index;
  // }

  let interval: NodeJS.Timeout | null = null;

  function startRotation() {
    if (!interval) {
      interval = setInterval(next, 125);
    }
  }

  function stopRotation() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }

    current = 3;
  }

  const sections = ["about", "experience", "projects", "directory"];

  function scrollToSection(id: string) {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      //   const y = el.getBoundingClientRect().top + window.scrollY - 8;

      //   window.scrollTo({
      //     top: y,
      //     behavior: "smooth",
      //   });
    }
  }
</script>

<!-- <nav class="pl-8 flex flex-col gap-0 fixed z-50 top-8 {className}"> -->
<nav
  class="fixed left-0 top-0 h-screen pl-8 p-8 pr-4 flex flex-col gap-6 overflow-y-auto {className}"
>
  <!-- Image carousel -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="w-75 h-75 overflow-hidden rounded-xs shrink-0"
    onmouseenter={startRotation}
    onmouseleave={stopRotation}
  >
    <img
      class="w-full h-full object-cover select-none"
      src={images[current]}
      alt="Images of Martin."
    />
  </div>

  <!-- Sections -->
  <div class="flex flex-col gap-1 mt-auto">
    {#each sections as section}
      <button
        type="button"
        class="cursor-cell text-left"
        onclick={() => scrollToSection(section)}
      >
        <p>
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </p>
      </button>
    {/each}
  </div>
</nav>
