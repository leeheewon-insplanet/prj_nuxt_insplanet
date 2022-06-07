<template>
  <!-- START : 메인 페이지 -->
  <div id="wrapper" class="main">
    <div class="list-item" :style="{ backgroundImage: `url(${MainImage})` }">
      <MainText />
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
    }
  },
}
</script>
