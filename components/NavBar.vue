<template>
  <nav class="nav" :class="{ 'is-top': viewStore.isTop }" id="nav">
    <div class="logo-container">
      <img src="~/assets/img/logo.svg" alt="digi salad" class="logo" />
    </div>
    <div class="flex">
      <button class="nav-btn">START YOUR PROJECT</button>
      <div class="menu-btn-container">
        <MenuBtn />
      </div>
      <div class="menu-mask" :class="{ 'is-open': viewStore.menuOpened }">
        <div class="menu" :class="{ 'is-open': viewStore.menuOpened }">
          <div class="menu-logo-container">
            <img src="~/assets/img/menu-logo.svg" alt="" />
          </div>
          <div class="menu-item menu-about">
            <img src="~/assets/img/icon-about.png" alt="" class="menu-img" />
            <div>
              <p class="sub-title">EMPOWERING BRANDS</p>
              <h2 class="title">ABOUT US</h2>
            </div>
          </div>
          <div class="menu-item menu-careers">
            <img src="~/assets/img/icon-careers.png" alt="" class="menu-img" />
            <div>
              <p class="sub-title">EMPOWERING BRANDS</p>
              <h2 class="title">ABOUT US</h2>
            </div>
          </div>
          <div class="menu-item menu-insights">
            <img src="~/assets/img/icon-insights.png" alt="" class="menu-img" />
            <div>
              <p class="sub-title">EMPOWERING BRANDS</p>
              <h2 class="title">ABOUT US</h2>
            </div>
          </div>
          <div class="menu-item menu-services">
            <img src="~/assets/img/icon-services.png" alt="" class="menu-img" />
            <div>
              <p class="sub-title">EMPOWERING BRANDS</p>
              <h2 class="title">ABOUT US</h2>
            </div>
          </div>
          <div class="menu-item menu-works">
            <img src="~/assets/img/icon-works.png" alt="" class="menu-img" />
            <div>
              <p class="sub-title">EMPOWERING BRANDS</p>
              <h2 class="title">ABOUT US</h2>
            </div>
          </div>
          <div class="menu-item menu-contact">
            <div>
              <p class="sub-title">EMPOWERING BRANDS</p>
              <h2 class="title">ABOUT US</h2>
            </div>
          </div>
        </div>
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
  z-index: 1;
}
.menu-mask {
  width: 100dvw;
  height: 100dvw;
  position: fixed;
  clip-path: ellipse(0px 0px at 100% 0%);
  top: 0;
  right: 0;
  transition: 0.8s;
  transition-timing-function: linear;
  &.is-open {
    transition-timing-function: linear;
    transition: 0.8s;
    clip-path: ellipse(150dvw 150dvw at 100% 0%);
    @media (max-aspect-ratio: 1) {
      width: 100dvh;
      height: 100dvh;
    }
  }
}
.menu {
  position: absolute;
  right: 0;
  top: 0;
  width: 100dvw;
  height: 100dvh;
  background: linear-gradient(180deg, #585880 3.61%, #26c6d0 95.7%);
  opacity: 0.9;
}
.menu-about {
  width: 350px;
  height: 200px;
  border-radius: 30px;
  background: #26c6d0;
  background-image: url(~/assets/img/menu-about.png);
  left: 10%;
}
.menu-careers {
  flex-direction: column;
  top: 60px;
  width: 290px;
  height: 430px;
  border-radius: 30px;
  background: #e6a94e;
  background-image: url(~/assets/img/menu-careers.png);
  left: 40%;
}
.menu-insights {
  width: 350px;
  height: 200px;
  border-radius: 30px;
  background: #26d0a8;
  background-image: url(~/assets/img/menu-insights.png);
  left: 40%;
  bottom: 90px;
}
.menu-services {
  width: 380px;
  height: 320px;
  border-radius: 30px;
  background: #585880;
  background-image: url(~/assets/img/menu-services.png);
  right: 10%;
}
.menu-works {
  width: 380px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #ff7a7a;
  background-image: url(~/assets/img/menu-works.png);
  left: 10%;
  bottom: 15%;
  .title {
    &::before {
      background-color: #26c6d0 !important;
    }
  }
}
.menu-contact {
  width: 350px;
  height: 200px;
  border-radius: 30px;
  background: #fff;
  right: 10%;
  bottom: 15%;
  .sub-title {
    color: #262626 !important;
  }
  .title {
    color: #26c6d0 !important;
  }
}
.menu-logo-container {
  padding: 40px 60px;
}
.menu-item {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  .menu-img {
    width: 50px;
    height: fit-content;
    max-height: 80px;
    max-width: fit-content;
    margin-right: 20px;
  }
  .sub-title {
    color: #fff;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.8px;
    margin: 0;
  }
  .title {
    margin: 0;
    color: #fff;
    font-family: "Proxima Nova";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.636px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #ee6c8a;
      border-radius: 100%;
      top: 60%;
      transform: translateY(-50%);
      right: 0px;
    }
  }
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
