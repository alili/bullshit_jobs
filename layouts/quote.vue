<template lang="pug">
.quote
  .inner
    slot
</template>
<script lang="ts" setup name="quote">
// data
// methods
// lifecycle
</script>
<style lang="stylus">
.quote
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  h1
    text-align center
    position absolute
    top 0%
    left 0%
    font-size 48px
    color #ac7a25
    z-index -1
    font-family "zihundaruhei_trial"
  .inner
    display flex
    flex-direction column
    justify-content center
    align-items flex-start
    height 80%
    width 80%
    position relative
    font-family zihunchuangxihei
    font-size 24px
    &:before
      content: '「'
      font-family "zihundaruhei_trial"
      font-size 54px
      color #666
      align-self: flex-start
      position relative
      left -1em
    &:after
      content: '」'
      font-family "zihundaruhei_trial"
      font-size 54px
      color #666
      align-self: flex-end
      position relative
      right -1em
    p
      margin-bottom 20px
      text-align-last left
</style>
