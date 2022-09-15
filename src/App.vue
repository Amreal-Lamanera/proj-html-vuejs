<template>
  <div id="app">
    <MainHeader />
    <MainContent />
    <MainFooter />
    <BuyTheme />
  </div>
</template>

<script>

  import MainHeader from './components/MainHeader.vue';
  import MainContent from './components/MainContent.vue';
  import MainFooter from './components/MainFooter.vue';
  import BuyTheme from './components/BuyTheme.vue';

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainContent,
      MainFooter,
      BuyTheme
    }
  }

</script>

<style lang="scss">

  @import './style/general.scss';

</style>
