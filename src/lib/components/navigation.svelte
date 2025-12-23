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
      interval = setInterval(next, 175);
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

  let activeSection: string = sections[0];

  onMount(() => {
    const mainElement = document.querySelector("main");
    if (!mainElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            if (sections.includes(id)) {
              activeSection = id;
            }
          }
        }
      },
      {
        root: mainElement,
        threshold: 0.6,
        // Account for top padding by shrinking the top root area
        rootMargin: "-32px 0px 0px 0px",
      }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  });

  function scrollToSection(id: string) {
    const el = document.getElementById(id);

    if (el) {
      const mainElement = document.querySelector("main");
      if (mainElement) {
        const rect = el.getBoundingClientRect();
        const mainRect = mainElement.getBoundingClientRect();
        const scrollTop = mainElement.scrollTop;

        const offset = rect.top - mainRect.top + scrollTop - 30;
        mainElement.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }
  }
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
  <div class="flex flex-col mt-auto">
    {#each sections as section}
      <button
        type="button"
        class="cursor-cell text-left"
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
