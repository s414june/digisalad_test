<template>
  <section class="about" id="about">
    <div class="scroll-down">
      <div class="line"></div>
    </div>
    <div class="container">
      <div class="title-container">
        <h3 class="title">ABOUT DIGISALAD</h3>
        <div class="line">
          <img src="~/assets/img/line.svg" alt="decoration-line" />
          <img src="~/assets/img/line.svg" alt="decoration-line" />
        </div>
      </div>
    </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptates, vero
    consequatur quidem totam tempore doloribus quia veritatis voluptatibus?
    Repellendus at, dignissimos iure tempora est pariatur earum? A, sunt
    deserunt!
  </section>
</template>
<style scoped lang="scss">
.scroll-down {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Proxima Nova";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .line {
    width: 1px;
    height: 60px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #fff;
    background-color: #000;
  }
}
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  margin-top: 60px;
  width: 80%;
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
      right: 0;
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
</style>
