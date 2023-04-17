<template lang="pug">
.thumb
  .left
    h1 {{ props?.name }}
      .desc {{ props?.en }}
    .list
      slot
  img(:src="props?.image")
</template>
<script lang="ts" setup name="Thumb">
// data
const props = defineProps<{
  image: string
  name: string
  en: string
}>()
// methods
// lifecycle
</script>
<style lang="stylus">
.thumb
  display flex
  h1
    font-size 72px
    color #666
    z-index -1
    font-family "zihundaruhei_trial"
    padding-left 20px
    position relative

  .desc
    font-size 32px
    color #aaa
    z-index -1
    font-family "zihundaruhei_trial"
    position absolute
    bottom -30px
    right 10px

  img
    width 50%

  .list
    padding 30px
    font-family zihunchuangxihei
    p
      margin-bottom 30px
      font-size 24px
</style>
