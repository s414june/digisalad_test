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
          <span>OUR SERVICES</span>
        </button>
      </div>
    </div>
    <div class="service-container">
      <div class="service" v-for="(service, index) in serviceList" :key="index">
        <ServiceBlock
          :title="service.title"
          :btn="service.btn"
          :img="service.img"
          >{{ service.text }}</ServiceBlock
        >
      </div>
    </div>
    <div class="view-more-text">
      <p>VIEW MORE DIGISALAD’S INGRADIENTS</p>
    </div>
    <HomeQuote />
  </section>
</template>
<style scoped lang="scss">
.ingredient {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #26c6d0;
  border-radius: 30px;
  padding-top: 286px;
  position: relative;
  .container {
    width: 60%;
  }
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
  margin: 20px 0 400px;
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
.service-container {
  width: 80%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  .service {
    position: relative;
    margin: 80px 25px;
    width: calc(33.3% - 33.3px);
    display: flex;
    justify-content: center;
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>
<script setup>
import ingredient1 from "~/assets/img/ingredient1.png";
import ingredient2 from "~/assets/img/ingredient2.png";
import ingredient3 from "~/assets/img/ingredient3.png";
import ingredient4 from "~/assets/img/ingredient4.png";
import ingredient5 from "~/assets/img/ingredient5.png";
import ingredient6 from "~/assets/img/ingredient6.png";
import ingredient7 from "~/assets/img/ingredient7.png";
import ingredient8 from "~/assets/img/ingredient8.png";
import ingredient9 from "~/assets/img/ingredient9.png";
const serviceList = reactive([
  {
    title: "UX Design",
    btn: "VIEW MORE",
    text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    img: ingredient1,
  },
  {
    title: "UI Design",
    btn: "VIEW MORE",
    text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    img: ingredient2,
  },
  {
    title: "website development",
    btn: "VIEW MORE",
    text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    img: ingredient3,
  },
  {
    title: "mobile app development",
    btn: "VIEW MORE",
    text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    img: ingredient4,
  },
  {
    title: "ecommerce",
    btn: "VIEW MORE",
    text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    img: ingredient5,
  },
  {
    title: "customer loyalty",
    btn: "VIEW MORE",
    text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    img: ingredient6,
  },
  {
    title: "digital transformation",
    btn: "VIEW MORE",
    text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    img: ingredient7,
  },
  {
    title: "digital\nmarketing",
    btn: "VIEW MORE",
    text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    img: ingredient8,
  },
  {
    title: "BRANDING",
    btn: "BRANDING",
    text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
    img: ingredient9,
  },
]);
</script>
