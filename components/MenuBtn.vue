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
  --menu-height: 3px;
  --menu-width: calc(var(--menu-height) * 10);
  --menu-width-last: calc(var(--menu-width) / 6 * 5);
  --menu-gap: calc(var(--menu-height) * 2);

  @media screen and (max-width: 992px) {
    --menu-height: 2px;
  }

  display: grid;
  grid-row-gap: var(--menu-gap);
  justify-items: end;
  > div {
    width: var(--menu-width);
    height: var(--menu-height);
    border-radius: calc(var(--menu-height) / 2);
    background-color: #000;
    transition: 0.3s;
    &:last-child {
      width: var(--menu-width-last);
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
      --tran-x: calc(var(--menu-height) * 2);
      --tran-y: calc(var(--menu-height) * 3);
      transform: rotate(45deg) translate(var(--tran-x), var(--tran-y))
        scale(1.1);
      transform-origin: center;
    }
    &:nth-child(2) {
      --tran-x: calc(var(--menu-height) * (-1));
      transform: rotate(-45deg) translate(var(--tran-x), 0) scale(1.1);
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
