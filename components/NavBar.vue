<template>
  <nav class="nav" :class="{ 'is-top': viewStore.isTop }" id="nav">
    <div class="logo-container">
      <img src="~/assets/img/logo.svg" alt="digi salad" class="logo" />
    </div>
    <div class="flex">
      <button class="nav-btn">START YOUR PROJECT</button>
      <div class="menu-btn-container">
        <MenuBtn :isTop="viewStore.isTop" />
      </div>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.nav {
  z-index: 10;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: calc(100% - 60px * 2);
  left: 0;
  transition: 0.3s;
  &:not(.is-top) {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    transition: 0.3s;
    .logo {
      opacity: 1;
      transition: 0.3s;
    }
  }
}
.logo-container {
  padding-left: 20px;
}
.logo {
  width: 120px;
  opacity: 0;
  transition: 0.3s;
}
.nav-btn {
  border-radius: 24px;
  background: linear-gradient(90deg, #4ee5ea 3.94%, #26d0a8 94.73%);
  border: 0;
  padding: 12px;
  color: #fff;
  text-align: center;
  font-family: "Proxima Nova";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.143px;
}
.menu-btn-container {
  display: flex;
  align-items: center;
  margin-left: 40px;
}
</style>
<script setup>
const viewStore = useViewsStore();
onMounted(() => {
  window.addEventListener("scroll", () => {
    const navHeight = document.getElementById("nav").clientHeight;
    const windowHeight = window.innerHeight;
    if (window.scrollY >= windowHeight - navHeight) {
      viewStore.isTop = false;
    } else {
      viewStore.isTop = true;
    }
  });
});
</script>
