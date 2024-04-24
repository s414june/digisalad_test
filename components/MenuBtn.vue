<template>
  <div
    class="menu-btn"
    :class="{ 'is-top': viewStore.isTop, 'is-open': viewStore.menuOpened }"
    @click="viewStore.menuOpened = !viewStore.menuOpened"
  >
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
    transition: 0.3s;
    &:last-child {
      width: 25px;
    }
  }
  &.is-open {
    > div {
      background-color: #fff;
      transition: 0.3s;
    }
  }
  &.is-top {
    > div {
      background-color: #fff;
      transition: 0.3s;
    }
  }
}
.is-open {
  > div {
    transform: 0.3s;
    &:first-child {
      transform: rotate(45deg) translate(6px, 9px) scale(1.1);
      transform-origin: center;
    }
    &:nth-child(2) {
      transform: rotate(-45deg) translate(-3px, 0) scale(1.1);
      transform-origin: center;
    }
    &:last-child {
      opacity: 0;
    }
  }
}
</style>
<script setup>
const viewStore = useViewsStore();
</script>
