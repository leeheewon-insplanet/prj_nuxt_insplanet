<template>
  <div class="work-txt-wrap">
    <strong class="title"
      >{{ txt.title }} <span class="em">{{ txt.title_em }}</span></strong
    >
    <ul class="info">
      <li>{{ txt.category }}</li>
      <li>{{ txt.date }}</li>
    </ul>
    <p class="desc">{{ txt.desc }}}</p>
    <ul class="device-ico">
      <li v-for="(item, index) in device" :key="index" :class="item.kind"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WorkText',
  data() {
    return {
      device: [{ kind: 'mobile' }],
      txt: {
        title: 'Portal payment solution ',
        title_em: 'Biz Pay',
        category: 'Application',
        date: '2021.06 - 2021.07',
        desc: '비즈페이는 앱 가입 만으로 현금영수증, 카드결제, 수기결제가 가능한 간편결제 솔루션입니다.\n임팩트 있는 폰트와 사이즈로 더 빠르게 서비스를 이용할 수 있고 읽기 쉬운 앱을 만들었습니다.',
      },
    }
  },
}
</script>
