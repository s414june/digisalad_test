<template>
  <NavBar />
  <NuxtPage />
</template>
<style scoped lang="scss"></style>
<script setup>
onMounted(() => {
  const onscrollShowDoms = document.querySelectorAll("[data-animate]");
  onscrollShowDoms.forEach((dom) => {
    dom.style.opacity = 0;
  });
  window.addEventListener("scroll", () => {
    const innerHeight = window.innerHeight;
    const showOffset = (window.innerHeight / 3) * 2;
    onscrollShowDoms.forEach((dom) => {
      // const showOffset = innerHeight - dom.clientHeight;
      const animateData = dom.dataset.animate;
      if (dom.getBoundingClientRect().top < showOffset) {
        dom.style.opacity = 1;
        dom.classList.add("animate__animated");
        dom.classList.add(animateData);
      } else if (dom.getBoundingClientRect().top > innerHeight) {
        dom.style.opacity = 0;
        dom.classList.remove("animate__animated");
        dom.classList.remove(animateData);
      }
    });
  });
});
</script>
