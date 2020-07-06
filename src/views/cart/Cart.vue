<template>
  <div>
    <li
      v-for="(item, index) of items"
      :key="item"
    >{{ parentMessage }} - {{ index }} - {{ item.message }}</li>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
       parentMessage: 'Parent',
      items: [{ message: "Foo" }, { message: "Bar" }]
    };
  }
};
</script>

<style scoped>
</style>
