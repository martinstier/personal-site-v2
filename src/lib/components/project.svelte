<script lang="ts">
  export let title: string;
  export let location: string;
  export let description: string;
  export let images: string[] = [];
  export let color: string = "#000000";
  export let text_color: string = "#000000";
  export let stack: string[] = [];

  let current = 0;

  $: imagesList = Array.isArray(images) ? images : [];

  function next() {
    if (imagesList.length === 0) return;
    current = (current + 1) % imagesList.length;
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-15">
  <!-- Text -->
  <div class="flex flex-col">
    <div class="flex flex-wrap items-baseline gap-3">
      <span class="bg-[{color}] text-[{text_color}] pl-1 pr-1">
        {title}
      </span>
      {#if location}
        <span class="text-[28px]">@ {location}</span>
      {/if}
    </div>
    <div class="text-[35px]">{description}</div>
  </div>

  <!-- Images -->
  <div class="relative w-full">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div class="relative w-full aspect-video overflow-hidden">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img
        src={imagesList[current]}
        alt={title}
        class="w-full h-full object-contain select-none {imagesList.length > 1
          ? 'cursor-pointer'
          : ''}"
        onclick={next}
        draggable="false"
      />
      {#if imagesList.length > 1}
        <div
          class="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center z-10"
        >
          <span class="text-white text-sm font-semibold"
            >{current + 1}/{imagesList.length}</span
          >
        </div>
      {/if}
      {#if stack && stack.length}
        <div
          class="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2 max-w-full"
        >
          {#each stack as item}
            <span
              class="px-2 py-1 rounded-full bg-black/50 text-white text-sm backdrop-blur-sm"
            >
              {item}
            </span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
