<template>
  <div id="app" ref="app">
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
    data() {
      return {
        scroll: 0,
      }
    },
    components: {
      MainHeader,
      MainContent,
      MainFooter,
      BuyTheme
    },
    methods: {
            scrollHandler() {
                console.dir(this.$refs.app);
                console.log(this.scroll);
            },
        },
        mounted() {
            this.$nextTick(() => {
                window.addEventListener('scroll', this.scrollHandler);
                this.scroll = this.$refs.app.scrollTop;
            })
        },
  }

</script>

<style lang="scss">

  @import './style/general.scss';

</style>
