<script lang="ts">
  export let className: string = "";

  let images = [
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

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
</script>

<nav class="flex flex-col gap-4 fixed z-50 top-8 {className}">
  <!-- Image carousel -->
  <div class="image-carousel">
    <div class="w-70 h-70 overflow-hidden rounded-xl">
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
  </div>

  <button
    type="button"
    class="cursor-pointer"
    onclick={() => scrollToSection("about")}
  >
    About
  </button>

  <button
    type="button"
    class="cursor-pointer"
    onclick={() => scrollToSection("experience")}
  >
    Experience
  </button>

  <button
    type="button"
    class="cursor-pointer"
    onclick={() => scrollToSection("projects")}
  >
    Projects
  </button>

  <button
    type="button"
    class="cursor-pointer"
    onclick={() => scrollToSection("directory")}
  >
    Directory
  </button>
</nav>
