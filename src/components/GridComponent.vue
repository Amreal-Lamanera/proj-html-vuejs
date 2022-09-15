<template>
    <div class="container-fluid grid">

        <div v-for="i in 7" :key='i' :class="i === 2 ? 'span-2 d-flex justify-content-center align-items-center' : ''">
            <div v-if="i === 2" class="text-center d-flex flex-column align-items-center">
                <h4>
                    {{ socials.subTitle }}
                </h4>

                <h3>
                    {{ socials.title }}
                </h3>

                <div class="my_btn violet d-flex alidn-items-center">
                    <font-awesome-icon :icon="socials.btn[0]" class="fa" />
                    {{ socials.btn[1]}}
                </div>
            </div>

            <img v-else :src="socials.img[i-1]" alt="">
        </div>

    </div>
  </template>
  
  <script>

    import socials from '../socials'
    
    export default {
        data() {
            return {
                socials
            }
        },
    }
  </script>
  
  <style lang="scss" scoped>

    @import '../style/variables.scss';

    .grid {
        grid-template-columns: repeat(4, 1fr);
        margin-bottom: 10.25rem;
        gap: 2.25rem;

        .span-2 {
            grid-column: span 2;
            background-color: $light-grey;

            h3 {
                margin-bottom: 1.75rem;
            }

            .fa {
                font-size: 1rem;
                margin-right: 0.5rem;
            }
        }
    }

  </style>