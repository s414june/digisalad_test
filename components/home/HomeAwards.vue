<template>
  <section class="awards" id="awards">
    <div class="container">
      <div class="title-container">
        <h3 class="title" data-animate="animate__fadeIn">AWARDS</h3>
        <div class="line" data-animate="animate__fadeIn">
          <img src="~/assets/img/line.svg" alt="decoration-line" />
        </div>
      </div>
      <div class="info-container">
        <p data-animate="animate__fadeIn">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc.
        </p>
      </div>
    </div>
    <div class="images">
      <div
        v-for="(item, index) in 4"
        :key="index"
        class="award-container"
        data-animate="animate__fadeIn"
      >
        <img src="~/assets/img/award.png" alt="award" class="award" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.awards {
  position: absolute;
  bottom: 0;
  background-color: #fff;
  border-radius: 30px 0 30px 30px;
  display: flex;
  align-items: center;
  z-index: 2;
  transform: translateY(50%);
  margin-left: 150px;
  padding: 60px;
}
.container {
  width: 40%;
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateX(35px);
  .title {
    color: #262626;
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
    transform: translateX(calc(-35px / 2));
  }
}
.info-container {
  margin-top: 30px;
  text-align: left;
  p {
    margin: 30px 0;
    color: #262626;
    text-align: left;
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
.images {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;
  .award-container {
    width: 50%;
    position: relative;
  }
  .award {
    width: 250px;
    min-width: calc(100% - 60px);
    max-width: calc(100% - 60px);
    padding-right: 30px;
  }
}
</style>
<script setup>
const viewStore = useViewsStore();
</script>
