<template>
  <div id="app">
    <MainMenu />
  </div>
</template>

<script>
import MainMenu from './components/MainMenu';

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/main';
</style>
