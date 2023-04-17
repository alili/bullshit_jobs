<template lang="pug">
.list
  slot
</template>
<script lang="ts" setup name="Page">
// data
// methods
// lifecycle
</script>
<style lang="stylus">
.list
  display flex
  flex-direction column
  justify-content center
  align-items center
  h1
    text-align center
    position absolute
    top 5%
    left 5%
    font-size 72px
    color #666
    z-index -1
    font-family "zihundaruhei_trial"
    &:before
      content: '「'
    &:after
      content: '」'
  ul
    margin-top 40px
    max-width 80%
    li
      font-size 20px
      line-height 2
      list-style square
      font-family zihunchuangxihei
</style>
