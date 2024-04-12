<template>
  <section class="landing">
    <div class="mask"></div>
    <iframe
      src="https://www.youtube.com/embed/8_4JRK4QkqU?si=kyXo5NyguDngRCzu&autoplay=1&controls=0&mute=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
    <div class="decoration">
      <div class="text">
        <span>DIGITAL AGENCY</span>
      </div>
      <div class="line"></div>
    </div>
    <div class="title-container">
      <img src="@/assets/img/logo-landing.svg" alt="digi salad" class="logo" />
      <h2 class="slogan">
        WE CREATE<br />
        AMAZING <br />
        DIGITAL EXPERIENCES
      </h2>
    </div>
  </section>
</template>
<style scoped lang="scss">
.landing {
  width: 100%;
  height: 100dvh;
  position: absolute;
  top: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  border-radius: 0 0 30px 30px;
  overflow: hidden;
}
.mask {
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100dvh;
  position: absolute;
  top: 0;
  z-index: -1;
}
iframe {
  width: calc(560px / 315px * 100dvh);
  height: 100dvh;
  position: relative;
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: -2;
}
.logo {
  position: relative;
  width: 198.71px;
  height: 88px;
  flex-shrink: 0;
}
.title-container {
  margin-top: 100px;
  padding: 12px 100px;
  width: 60%;
}
.slogan {
  color: #fff;
  font-family: "Proxima Nova";
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px; /* 184.211% */
  letter-spacing: 9.167px;
}
.decoration {
  position: absolute;
  left: 0;
  margin-left: 50px;
  top: 50%;
  transform: translateY(-50%);
  .text {
    transform: rotate(-90deg);
    transform-origin: 0px;
  }
  span {
    color: #fff;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.222px;
  }
  > .line {
    width: 2px;
    height: 113px;
    background-color: #fff;
  }
}
</style>
