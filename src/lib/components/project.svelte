<script lang="ts">
  export let title: string;
  export let collaborators: string[] | string = [];
  export let location: string;
  export let description: string;
  export let images: string[] = [];
  export let color: string = "#000000";

  let current = 0;

  $: imagesList = Array.isArray(images) ? images : [];
  $: collaboratorsText = Array.isArray(collaborators)
    ? collaborators.join(", ")
    : collaborators;

  function next() {
    if (imagesList.length === 0) return;
    current = (current + 1) % imagesList.length;
  }
</script>

<div class="flex flex-col gap-4">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
    <div class="flex flex-col gap-4">
      <div class="flex items-baseline gap-4">
        <span class="bg-[var(--project-bg)]" style={`--project-bg: ${color}`}
          >{title}</span
        >
        <span class="text-[25px]">@ {location}</span>
      </div>
      <div class="text-[35px]">{description}</div>
    </div>
    <div class="relative w-full">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <div class="relative w-full aspect-video overflow-hidden">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <img
          src={imagesList[current]}
          alt={title}
          class="w-full h-full object-contain select-none {imagesList.length >
          1
            ? 'cursor-pointer'
            : ''}"
          onclick={next}
          draggable="false"
        />
        <div
          class="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center z-10"
        >
          <span class="text-white text-sm font-semibold"
            >{current + 1}/{imagesList.length}</span
          >
        </div>
      </div>
    </div>
  </div>
</div>
