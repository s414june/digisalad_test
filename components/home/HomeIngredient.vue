<template>
  <section class="ingredient" id="ingredient">
    <div class="container">
      <div class="title-container">
        <h3 class="title">OUR INGRADIENTS</h3>
        <div class="line">
          <img src="~/assets/img/line-dark.svg" alt="decoration-line" />
          <img src="~/assets/img/line-dark.svg" alt="decoration-line" />
        </div>
      </div>
      <div class="info-container">
        <article>
          <p>
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
        </article>
        <button class="more-btn">
          <span>VIEW MORE</span>
        </button>
      </div>
    </div>
    <div class="view-more-text">
      <p>VIEW MORE DIGISALAD’S INGRADIENTS</p>
    </div>
  </section>
</template>
<style scoped lang="scss">
.ingredient {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #26c6d0;
  border-radius: 30px;
  padding-top: 60px;
}
.container {
  width: 60%;
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;
    /* H3 */
    font-family: "Proxima Nova";
    font-size: 28px;
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
    transform: translateX(calc(35px / 2));
    img:last-child {
      transform: translateX(-35px);
    }
  }
}
.info-container {
  margin-top: 70px;
  text-align: center;
  p {
    margin: 30px 0;
    color: #fff;
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
  background: #585880;
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
.view-more-text {
  margin: 120px 0;
  position: relative;
  p {
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;

    /* Caption */
    font-family: "Proxima Nova";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    z-index: 1;
    position: relative;
  }
  &::after {
    content: "";
    position: absolute;
    width: 416px;
    height: 10px;
    background: #ffbc58;
    left: 0;
    z-index: 0;
    top: 32px;
  }
}
</style>
<script setup>
const viewStore = useViewsStore();
</script>
