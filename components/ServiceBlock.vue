<template>
  <div class="container">
    <div class="img-container">
      <img :src="props.img" :alt="props.title" />
    </div>
    <h4 class="title">{{ props.title }}</h4>
    <p class="text">
      <slot
        >Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
        ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
        Nam condimentum vitae ligula vel ornare.</slot
      >
    </p>
    <button class="btn">{{ props.btn }}</button>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img-container {
    width: 108px;
    height: 108px;
    border-radius: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;

    /* H4 */
    font-family: "Proxima Nova";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .text {
    color: #fff;
    text-align: center;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
    letter-spacing: 1px;
  }
  .btn {
    margin-top: 20px;
    border-radius: 30px;
    border: 2px solid #fff;
    padding: 20px 35px;
    background: none;
    color: #fff;
    font-family: "Proxima Nova";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.222px;
  }
}
</style>
<script setup>
import ingredient1 from "~/assets/img/ingredient1.png";
const props = defineProps({
  img: {
    type: String,
    default: ingredient1,
  },
  title: {
    type: String,
    default: "UX Design",
  },
  btn: {
    type: String,
    default: "VIEW MORE",
  },
});
</script>
