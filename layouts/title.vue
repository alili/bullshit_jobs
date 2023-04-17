<template lang="pug">
.title
  slot
</template>
<script lang="ts" setup name="Title">
// data
// methods
// lifecycle
</script>
<style lang="stylus">
.title
  display flex
  justify-content: center
  align-items: center
  h1
    text-align center
    font-size 72px
    color #ccc
    z-index -1
    font-family "zihundaruhei_trial"
    letter-spacing 5px
</style>
