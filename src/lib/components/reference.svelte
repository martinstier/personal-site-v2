<script lang="ts">
  export let site: string;
  export let logo: string = "";
  export let color: string;
  export let text_color: string;
  export let link: string;
  export let size: string;

  let isHovering = false;
  let cursorX = 0;
  let cursorY = 0;

  function handleMouseMove(e: MouseEvent) {
    cursorX = e.clientX;
    cursorY = e.clientY;
  }

  function handleMouseEnter() {
    isHovering = true;
  }

  function handleMouseLeave() {
    isHovering = false;
  }
</script>

<span
  style="background-color: {color}; color: {text_color}; cursor: {logo
    ? 'none'
    : 'alias'};"
  on:mousemove={handleMouseMove}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  role="presentation"
  ><a href={link} target="_blank" style="cursor: {logo ? 'none' : 'alias'};"
    >{site}</a
  >
  <!-- Don't add whitespace -->
  <!-- Whitespace here renders on the page. -->
</span>{#if isHovering && logo}
  <img
    src={logo}
    alt="cursor"
    class="pointer-events-none fixed z-[9999]"
    style="left: {cursorX}px; top: {cursorY}px; transform: translate(-50%, -50%); height: {size}px; width: auto;"
  />
{/if}
