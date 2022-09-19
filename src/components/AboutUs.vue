<!-- Baking special moments & Our Bakeries -->

<template>
    <div>

        <h4>
            {{ content.subTitle }}
        </h4>

        <h3>
            {{ content.title }}
        </h3>

        <!-- SE NON è presente una descrizione -->
        <div class="d-flex container-fluid" v-if="!content.location">
            <div class="col-50" v-for="img,i in content.img" :key="i">
                <img :src="img" alt="">
            </div>
        </div>

        <!-- ALTRIMENTI -->
        <div class="d-flex container-fluid" v-else>
            <div class="col-50 d-flex flex-column" v-for="img,i in content.img" :key="i">
                <img :src="img" alt="" class="zoom">
                <div class="where d-flex flex-column justify-content-center">
                    <h3>
                        {{ content.location[i].title}}
                    </h3>

                    <div class="desc d-flex justify-content-between align-items-center">
                        <div>
                            <h4> CALL US </h4>
                            {{ content.location[i].numb }}
                        </div>

                        <div>
                            <h4> OPEN ALL WEEK </h4>
                            {{ content.location[i].hours }}
                        </div>

                        <div class="my_btn">
                            <span>View Map</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  </template>
  
  <script>

    
    export default {
        props: {
            content: Object
        }
    }
  </script>
  
  <style lang="scss" scoped>

    @import '../style/variables.scss';

    h3 {
        margin-bottom: 4rem;
    }
        
    .special-moments {
        .d-flex {
            gap: 6.25rem;
        }
    }

    .d-flex:first-child .where {
        background-color: $light-blue;
    }

    .where {
        background-color: $light-gold;
        padding: 3.75rem 4.5rem;
        z-index: 1;

        h3 {
            margin-bottom: 2rem;
        }
    }

    .col-50 {
        overflow: hidden;
        
        .zoom:hover {
            transform: scale3d(1.1,1.1,1.1);
        }
        
        .zoom{
            transition: 500ms ease-in-out;
        }
    }

  </style>