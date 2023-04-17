<template lang="pug">
.vs-content
  slot
  .container
    .left
      slot(name="left")
    .vs VS
    .right
      slot(name="right")
</template>
<script lang="ts" setup name="vs">
// data
// methods
// lifecycle
</script>
<style lang="stylus">
.vs-content
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
  .container
    height 50%
    display flex
    font-family zihun73hao-jiangnanshoushu
    .left
    .right
      flex 1
      display flex
      justify-content center
      position relative
      font-size 48px
    .left
      align-items flex-start
    .right
      align-items flex-end
    .vs
      font-size 72px
      align-self: center
      font-family "zihun55hao-longyinshoushu"
</style>
