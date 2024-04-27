<template>
  <section class="landing">
    <div class="mask">
      <img
        src="~/assets/img/landing.png"
        alt="landing"
        class="temp-img"
        :class="{ 'opacity-0': !loadingYT }"
      />
    </div>
    <div :class="{ 'opacity-0': loadingYT }" class="player-container">
      <div id="player"></div>
    </div>
    <!-- <iframe
        src="https://www.youtube.com/embed/8_4JRK4QkqU?si=kyXo5NyguDngRCzu&autoplay=1&controls=0&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe> -->
    <div class="scroll-down" @click="scrollDown()">
      <img
        src="~/assets/img/taste.svg"
        alt="TASTE US NOW!"
        class="animate__animated animate__pulse animate__infinite"
      />
      <p class="animate__animated animate__pulse animate__infinite">
        TASTE US NOW!
      </p>
      <div class="line"></div>
    </div>
    <div
      class="decoration animate__animated animate__fadeInUp animate__delay-2s"
    >
      <div class="text">
        <span>DIGITAL AGENCY</span>
      </div>
      <div class="line"></div>
    </div>
    <div class="title-container">
      <img
        src="~/assets/img/logo-landing.svg"
        alt="digi salad"
        class="logo animate__animated animate__fadeIn animate__delay"
      />
      <h2 class="slogan animate__animated animate__fadeIn animate__delay-1s">
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
  // position: absolute;
  // top: 0;
  position: relative;
  z-index: 0;
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
  overflow: hidden;
}
.temp-img,
.player-container,
:deep(#player) {
  width: calc(560px / 315px * 100dvh);
  height: 100dvh;
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: -2;
  transition: 0.5s;
}
.player-container {
  width: 100%;
  overflow: hidden;
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
.scroll-down {
  position: absolute;
  top: 100dvh;
  left: 50%;
  transform: translate(-50%, -100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    --animate-duration: 2s;
  }
  p {
    color: #fff;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: "Proxima Nova";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    --animate-duration: 2s;
  }
  .line {
    width: 1px;
    height: 44.044px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #fff;
    background-color: #fff;
    margin-top: 10px;
  }
}
@media screen and (max-width: 992px) {
  .title-container {
    margin-top: 58px;
    padding-top: 50px;
    width: calc(100% - 120px);
  }
  .logo {
    width: 100px;
  }
  .slogan {
    margin: 0;
    font-size: 24px;
    line-height: 40px;
  }
  .decoration {
    margin-left: 24px;
    span {
      font-size: 12px;
    }
    .line {
      width: 1px;
      height: 100px;
    }
  }
}
</style>
<script setup>
const loadingYT = ref(true);
onMounted(() => {
  onYouTubeIframeAPIReady();

  function onYouTubeIframeAPIReady() {
    let player = new YT.Player("player", {
      videoId: "8_4JRK4QkqU",
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
      playerVars: {
        autoplay: 1, // 自動播放視頻
        controls: 0, // 不顯示控制項
        mute: 1, // 靜音
        loop: 1,
      },
    });
  }
  function onPlayerReady(event) {
    setTimeout(() => {
      loadingYT.value = false;
    }, 3500);
  }
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      event.target.playVideo(); // 当视频结束时再次播放视频，实现循环播放
    }
  }
});
function scrollDown() {
  console.log(111);
  window.scrollTo(0, window.innerHeight);
}
</script>
