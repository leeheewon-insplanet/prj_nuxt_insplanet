<template>
  <!-- START : 메인 페이지 -->
  <div id="wrapper" class="main">
    <div
      v-swiper="swiperOption"
      class="w-5/6 ml-auto relative"
      :loadtheme="false"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="banner" v-for="banner in banners">
          <!-- Render original HTML in server, render Swiper in browser (client) -->
          <img class="h-64 w-64" :src="banner" />
        </div>
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
    <div class="list-item" :style="{ backgroundImage: `url(${MainImage})` }">
      <MainText />
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import MainImage from '@/assets/images/img/img_project17_head.png'
import MainText from '@/components/main/MainText.vue'

export default {
  name: 'MainPage',
  directives: {
    swiper: directive,
  },
  components: { MainText },
  data() {
    return {
      MainImage,
      banners: ['/slider-1.png', '/slider-2.png', '/slider-3.png'],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
}
</script>
