<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.navbar {
  height: 44px;
  display: flex;
  background: #abcdef;
  text-align: center;
  line-height: 44px;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>