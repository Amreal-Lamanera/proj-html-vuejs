<template>
    <div>
        <section>
            <HeroComponent :content='heroContent' class="hero" />
        </section>

        <section class="products-section">
            <ProductsComponent :content="products" :smallCar="true" class="products" />
        </section>

        <section class="special-moments text-center">
            <SpecialMoments />
        </section>

        <section class="shop-section">
            <ProductsComponent :content="shopProducts" :smallCar="false" class="products" />
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
    import ProductsComponent from './ProductsComponent.vue';
    import products from '../products';
    import shopProducts from '../shopProducts';
    import SpecialMoments from './SpecialMoments.vue';
    
    export default {
        data() {
            return {
                heroContent,
                buyList,
                products,
                shopProducts,
            }
        },
        components: {
            HeroComponent,
            ProductsComponent,
            SpecialMoments
        }
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

  </style>