<template>
    <main>
        <section>
            <HeroComponent :content='heroContent' class="hero" />
        </section>

        <section class="products-section">
            <ProductsComponent :content="products" :smallCar="true" class="products" />
        </section>

        <section class="special-moments text-center">
            <AboutUs :content="specialMoments" />
        </section>

        <section class="shop-section">
            <ProductsComponent :content="shopProducts" :smallCar="false" class="products" />
        </section>
        
        <section>
            <TellUs />
        </section>

        <section class="locations text-center">
            <AboutUs :content="locations" />
        </section>

        <section>
            <GridComponent />
        </section>

        <section>
            <HeroComponent :content='buyList' class="buy" />
        </section>

    </main>
  </template>
  
  <script>

    import heroContent from '../hero';
    import HeroComponent from './HeroComponent.vue';
    import buyList from '../buyList';
    import ProductsComponent from './ProductsComponent.vue';
    import products from '../products';
    import shopProducts from '../shopProducts';
    import AboutUs from './AboutUs.vue';
    import TellUs from './TellUs.vue';
    import specialMoments from '../specialMoments';
    import locations from '../locations';
    import GridComponent from './GridComponent.vue';
    
    export default {
        data() {
            return {
                heroContent,
                buyList,
                products,
                shopProducts,
                specialMoments,
                locations,
                // scroll: window.scrollY,

            }
        },
        // methods: {
        //     scrollHandler() {
        //         this.scroll = window.scrollY;
        //         if(this.scroll > 800) window.scrollY = 0
        //         console.log();
        //     },
        // },
        // mounted() {
        //     this.$nextTick(() => {
        //         window.addEventListener('scroll', this.scrollHandler);
        //         this.scroll = window.scrollY;
        //     })
        // },
        components: {
            HeroComponent,
            ProductsComponent,
            AboutUs,
            TellUs,
            GridComponent
        },
    }

  </script>
  
  <style lang="scss">

    @import '../style/heroStyle.scss';
    @import '../style/buy.scss';
    @import '../style/products.scss';

    .special-moments {

        h3 {
            margin-bottom: 4rem;
        }

        .d-flex {
            gap: 6.25rem;
        }
    }

    .locations {
        padding: 12rem 0;
    }

  </style>