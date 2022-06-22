<template>
  <!-- START : 메인 페이지 -->
  <div id="wrapper" class="main">
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="swiper-slide list-item"
          :style="{ backgroundImage: `url(${MainImage})` }"
        >
          <h2>{{ slide.name }}</h2>
          <MainText />
        </div>
      </div>

      <!-- navigation -->
      <div slot="button-prev" class="swiper-button-prev swiper-btn-prev"></div>
      <div slot="button-next" class="swiper-button-next swiper-btn-next"></div>

      <!-- pagination -->
      <!-- <div v-if="slides.length > 1" class="swiper-pagination"></div> -->
    </div>
  </div>
</template>

<script>
import MainImage from '@/assets/images/img/img_project17_head.png'
import MainText from '@/components/main/MainText.vue'

export default {
  name: 'MainPage',
  components: { MainText },
  data() {
    return {
      MainImage,
      slides: [
        {
          name: '1',
        },
        {
          name: '2',
        },
        {
          name: '3',
        },
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 2,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        //   dynamicBullets: true,
        //   dynamicMainBullets: 2,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1264: {
            slidesPerView: 1,
          },
        },
      },
    }
  },
}
</script>
