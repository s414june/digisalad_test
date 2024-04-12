<template>
  <div class="menu-btn" :class="{ 'is-top': isTop }">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<style scoped lang="scss">
.menu-btn {
  display: grid;
  grid-row-gap: 6px;
  justify-items: end;
  > div {
    width: 30px;
    height: 3px;
    border-radius: 3px;
    background-color: #000;
    &:last-child {
      width: 25px;
    }
  }
  &.is-top {
    > div {
      background-color: #fff;
    }
  }
}
</style>
<script setup>
const isTop = defineProps(["isTop"]);
</script>
