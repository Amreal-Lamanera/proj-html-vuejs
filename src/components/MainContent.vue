<template>
    <div>
        <section>
            <HeroComponent :content='heroContent' class="hero" />
        </section>

        <section>
            <HeroComponent :content='buyList' class="buy" />
        </section>

    </div>
  </template>
  
  <script>

    import heroContent from '../hero';
    import HeroComponent from './HeroComponent.vue';
    import buyList from '../buyList';
    
    export default {
        data() {
            return {
                heroContent,
                buyList
            }
        },
        components: {
            HeroComponent
        }
    }
  </script>
  
  <style lang="scss">

    @import '../style/heroStyle.scss';
    @import '../style/buy.scss';

  </style>