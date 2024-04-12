<template>
  <nav class="nav">
    <div class="logo-container">
      <img
        src="@/assets/img/logo.svg"
        alt="digi salad"
        class="logo"
        v-show="!isTop"
      />
    </div>
    <div class="flex">
      <button class="nav-btn">START YOUR PROJECT</button>
      <div class="menu-btn-container">
        <MenuBtn :isTop="isTop" />
      </div>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.nav {
  padding: 40px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-container {
  padding-left: 20px;
}
.logo {
  width: 120px;
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
const isTop = ref(true);
</script>
