<template>
  <section class="quote" id="quote">
    <div class="images">
      <img
        src="~/assets/img/founder.png"
        alt="founder"
        class="founder-img"
        data-animate="animate__fadeIn"
      />
      <h4 class="name" data-animate="animate__fadeIn">Tony Ng</h4>
      <h5 class="desc" data-animate="animate__fadeIn">
        Founder & Creative Director
      </h5>
    </div>
    <div class="container">
      <div class="title-container">
        <img src="~/assets/img/left-quote.svg" alt="left quote" data-animate="animate__fadeIn" />
      </div>
      <div class="info-container">
        <p data-animate="animate__fadeIn">
          A great digital work isn’t about designing beautiful pages purely. It
          is about context - how do we deliver the
          <strong>right experience to the right person at the right time</strong
          >. The most important thing is that your work can engage customers at
          anytime, anywhere and let users experience an entire amazing digital
          journey.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.quote {
  position: absolute;
  bottom: 0;
  background-image: url(../../assets/img/quote.png);
  background-size: cover;
  border-radius: 0 30px 30px 30px;
  display: flex;
  align-items: center;
  z-index: 2;
  transform: translateY(50%);
  margin-right: 150px;
  padding: 60px;
}
.container {
  width: 70%;
  @media screen and (max-width: 992px) {
    width: calc(100% - 50px);
  }
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateX(35px);
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
    transform: translateX(calc(-35px / 2));
  }
}
.info-container {
  margin-top: 30px;
  text-align: left;
  p {
    color: #fff;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: "Proxima Nova";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 218.182% */
    letter-spacing: 2px;
    strong {
      color: #ffbc58;
      font-feature-settings:
        "clig" off,
        "liga" off;
      font-family: "Proxima Nova";
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 2px;
    }
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
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  .founder-img {
    border-radius: 50%;
  }
  .name {
    color: #fff;
    text-align: center;
    font-feature-settings:
      "clig" off,
      "liga" off;

    /* H4 */
    font-family: "Proxima Nova";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .desc {
    color: #fff;
    text-align: center;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2px;
    margin-top: 0;
  }
}
</style>
<script setup>
const viewStore = useViewsStore();
</script>
