<script lang="ts">
  import { onDestroy, onMount } from "svelte";

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
    "/images/img14.JPG",
    // "/images/img15.JPG",
    "/images/img16.jpeg",
    // "/images/img17.jpg",
  ];

  let current = 3;

  function next() {
    current = (current + 1) % images.length;
  }

  let interval: NodeJS.Timeout | null = null;

  function startRotation() {
    if (!interval) {
      interval = setInterval(next, 155);
    }
  }

  function stopRotation() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }

    current = 3;
  }

  const sections = ["about", "work", "projects", "directory"];

  let mainElement: HTMLElement | null = null;
  let ticking = false;
  const TOP_OFFSET = 40; // pixels from the top of the main scroll area

  function updateActiveSection() {
    if (!mainElement) return;
    const mainTop = mainElement.getBoundingClientRect().top;
    let current = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top - mainTop;
      if (top <= TOP_OFFSET) {
        current = id;
      } else {
        // as soon as we find a section below the threshold, stop
        break;
      }
    }
    activeSection = current;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateActiveSection);
    }
  }

  let activeSection: string = sections[0];

  function scrollToSection(id: string) {
    const el = document.getElementById(id);

    if (el) {
      const mainEl = document.querySelector("main");
      if (mainEl) {
        const rect = el.getBoundingClientRect();
        const mainRect = mainEl.getBoundingClientRect();
        const scrollTop = (mainEl as HTMLElement).scrollTop;

        const offset = rect.top - mainRect.top + scrollTop - 30;
        (mainEl as HTMLElement).scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }
  }

  onMount(() => {
    mainElement = document.querySelector("main");
    if (!mainElement) return;
    mainElement.addEventListener("scroll", onScroll, { passive: true });
    // initialize once
    updateActiveSection();
  });

  onDestroy(() => {
    if (mainElement) {
      mainElement.removeEventListener("scroll", onScroll);
      mainElement = null;
    }
  });
</script>

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
  <div class="w-75 flex flex-col mt-auto">
    {#each sections as section}
      <button
        type="button"
        class="pl-1 cursor-cell text-left {activeSection === section
          ? 'bg-[#000000] text-[#F2F0EF]' // rounded-xs'
          : ''}"
        onclick={() => scrollToSection(section)}
      >
        <p>
          <span
            class={activeSection === section
              ? "bg-[#000000] text-[#FFFFFF]"
              : "opacity-100"}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}</span
          >
        </p>
      </button>
    {/each}
  </div>
</nav>
