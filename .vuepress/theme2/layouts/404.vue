<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>۴۰۴</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        برگردیم صفحه اول
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `اینجا چیزی نیست متاسفانه.`,
  `اینجا چیکار میکنیم؟`,
  `اینجا اتاق ۴۰۴ هسش که خالیه`,
  `ای بابا! انگار یه لینک خراب بوده`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
