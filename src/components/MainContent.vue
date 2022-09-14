<template>
    <div>
        <section>
            <HeroComponent :content='heroContent' class="hero" />
        </section>

        <section>
            <HeroComponent :content='products' class="products" />
        </section>

    </div>
  </template>
  
  <script>

    import heroContent from '../hero';
    import HeroComponent from './HeroComponent.vue';
    import products from '../products';
    
    export default {
        data() {
            return {
                heroContent,
                products
            }
        },
        components: {
            HeroComponent
        }
    }
  </script>
  
  <style lang="scss">

    @import '../style/heroStyle.scss';
    @import '../style/products.scss';

  </style>