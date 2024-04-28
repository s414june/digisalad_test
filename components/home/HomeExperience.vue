<template>
  <section class="experience" id="experience">
    <div class="container">
      <div class="title-container">
        <h3 class="title" data-animate="animate__fadeIn">OUR BRAND EXPERIENCE</h3>
        <div class="line">
          <img src="~/assets/img/line.svg" alt="decoration-line" />
          <img src="~/assets/img/line.svg" alt="decoration-line" />
          <img src="~/assets/img/line.svg" alt="decoration-line" />
        </div>
      </div>
      <div class="info-container">
        <p data-animate="animate__fadeIn">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.
        </p>
      </div>
    </div>
    <img src="~/assets/img/client.png" alt="client" class="client-img" data-animate="animate__fadeIn">
  </section>
</template>
<style scoped lang="scss">
.experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 400px;
  position: relative;
}
.container {
  width: 60%;
  @media screen and (max-width: 992px) {
    width: calc(100% - 50px);
  }
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: #262626;
    font-family: "Proxima Nova";
      @media screen and (max-width: 992px) {
    font-size: 24px
  };
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.636px;
    margin-bottom: 0;
    position: relative;
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
  .line {
    text-align: center;
    transform: translateX(calc(35px));
    white-space: wrap;
    width: max-content;
    img:nth-child(2) {
      transform: translateX(-35px);
    }
    img:nth-child(3) {
      transform: translateX(-70px);
    }
  }
}
.info-container {
  margin-top: 70px;
  text-align: center;
  iframe {
    width: 60dvw;
    height: calc(315px / 560px * 60dvw);
  }
  p {
    margin: 30px 0;
    color: #262626;
    text-align: center;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
    letter-spacing: 1px;
  }
}
.more-btn {
  border: 0;
  border-radius: 1px;
  background: #26c6d0;
  padding: 18px 28px;
  position: relative;
  padding-right: calc(50px + 14px + 28px);
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
.client-img{
  width: 80%;
}
</style>
<script setup>
const viewStore = useViewsStore();
</script>
