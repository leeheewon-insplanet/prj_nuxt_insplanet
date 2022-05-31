<template>
  <!-- START : 메인 페이지 -->
  <div id="wrapper" class="main">
    <div class="list-item" :style="'background-image: ' + work.bgImg">
      <MainText />
    </div>
  </div>
</template>

<script>
import MainText from '@/components/main/MainText.vue'
export default {
  name: 'MainPage',
  components: { MainText },
  data() {
    return {
      work: [
        {
          bgImg: '"../assets/images/img/img_project17_head.png"',
        },
      ],
    }
  },
}
</script>
