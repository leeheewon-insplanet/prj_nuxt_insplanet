<template>
  <div class="txt-wrap">
    <span class="category">{{ category }}</span>
    <strong class="title">{{ title }}</strong>
  </div>
</template>

<script>
export default {
  name: 'MainText',
  data() {
    return {
      category: 'Application',
      title: '서비스 접근성 확대와 트렌드를 녹인\n신한플러스 메인 개편',
    }
  },
}
</script>
