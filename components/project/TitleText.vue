<template>
  <div class="prj-txt-wrap">
    <div class="layout-left">
      <span class="category">{{ category }}</span>
      <strong class="title">{{ title }}</strong>
    </div>
    <span class="layout-right">
      {{ date }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TitleText',
  data() {
    return {
      category: 'Application',
      title: '마이홈즈',
      date: '2021.07 - 2021.09',
    }
  },
}
</script>
