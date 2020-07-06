<template>
  <div class="Wapper">
    <div class="swiper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper"
};
</script>

<style>
.Wapper{
  /* overflow: hidden; */
  position: relative;
}
.swiper {
  display: flex;
}
</style>