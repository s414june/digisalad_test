<template>
  <section class="project" id="project">
    <div class="container">
      <div class="images-container">
        <div class="images" data-animate="animate__fadeIn"></div>
        <button class="more-btn" data-animate="animate__fadeIn">
          <span>VIEW PROJECT</span>
        </button>
      </div>
      <div class="project-container">
        <div class="title-container">
          <h6 class="sub-title" data-animate="animate__fadeIn">
            HIGHLIGHTED SHOWCASE
          </h6>
          <div class="title" data-animate="animate__fadeIn">
            <h5>LP CLUB MOBILE APP</h5>
          </div>
        </div>
        <div class="info-container">
          <p data-animate="animate__fadeIn">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper
            turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
            sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a
            dolor et, venenatis facilisis dolor. In feugiat orci odio, sed
            lacinia sem elementum quis. Aliquam consectetur, eros et vulputate
            euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus.
            Cras lobortis molestie faucibus.
          </p>
        </div>
      </div>
      <div class="prev-btn">
        <img src="../../assets/img/next.svg" alt="" />
      </div>
      <div class="next-btn">
        <img src="../../assets/img/next.svg" alt="" />
      </div>
      <div class="pages">
        <span class="page-now">01</span>
        <div class="line"></div>
        <span class="page-total">04</span>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  padding-bottom: 286px;
  position: relative;
  background-image: url(../../assets/img/project.png);
  background-size: cover;
  border-radius: 0 0 30px 30px;
  margin-bottom: 82px;
}
.container {
  width: 80%;
  display: flex;
  position: relative;
}
.images-container {
  width: 50%;
  position: relative;
}
.images {
  width: 100%;
  height: 454px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-image: url(~/assets/img/app.png);
}
.title-container {
  .sub-title {
    color: #fff;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.222px;
  }
  .title {
    color: #fff;
    font-family: "Proxima Nova";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.636px;
    position: relative;
    h5 {
      position: relative;
      width: fit-content;
      z-index: 1;
      &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #ee6c8a;
        border-radius: 100%;
        top: 50%;
        transform: translateY(-50%);
        right: -20px;
      }
    }
    &::after {
      content: "";
      position: absolute;
      width: 360px;
      height: 10px;
      background: #26c6d0;
      left: 0;
      z-index: 0;
      top: 24px;
    }
  }
}
.project-container {
  width: 50%;
  margin-top: 63px;
  margin-left: 60px;
}
.info-container {
  color: #fff;
  font-feature-settings:
    "clig" off,
    "liga" off;

  /* Body / White */
  font-family: "Proxima Nova";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 1px;
}

.more-btn {
  border: 0;
  border-radius: 1px;
  background: #26c6d0;
  padding: 18px 28px;
  position: relative;
  padding-right: calc(50px + 14px + 28px);
  position: absolute;
  bottom: 0;
  right: -30px;
  height: 140px;
  span {
    color: #fff;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.222px;
  }
  ::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 1.229px;
    flex-shrink: 0;
    background-color: #fff;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 14px;
  }
}
.prev-btn,
.next-btn {
  position: absolute;
  width: 53px;
  height: 53px;
  background-color: #26c6d0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  img {
    width: 100%;
  }
}
.prev-btn {
  left: -100px;
  img {
    transform: rotate(180deg);
  }
}
.next-btn {
  right: -100px;
}
.pages {
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  font-family: "Proxima Nova";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 2.222px;
  .line {
    width: 1px;
    height: 50px;
    background-color: #26c6d0;
    transform: rotate(45deg);
  }
  .page-now {
    position: absolute;
    top: 0;
    left: -30px;
  }
  .page-total {
    position: absolute;
    bottom: 0;
    right: -30px;
  }
}
</style>
<script setup>
const viewStore = useViewsStore();
</script>
