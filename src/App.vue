<template>
  <div id="app">
    <MainHeader />
    <MainContent />
    <MainFooter />
    <BuyTheme />
    <ScrollTop />
  </div>
</template>

<script>

  import MainHeader from './components/MainHeader.vue';
  import MainContent from './components/MainContent.vue';
  import MainFooter from './components/MainFooter.vue';
  import BuyTheme from './components/BuyTheme.vue';
import ScrollTop from './components/ScrollTop.vue';

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainContent,
      MainFooter,
      BuyTheme,
      ScrollTop
    },
  }

</script>

<style lang="scss">

  @import './style/general.scss';

</style>
