<template>
    <div>

        <h4>
            {{ specialMoments.subTitle }}
        </h4>

        <h3>
            {{ specialMoments.title }}
        </h3>

        <div class="d-flex container-fluid">
            <div class="col-50" v-for="img,i in specialMoments.img" :key="i">
                <img :src="img" alt="">
            </div>
        </div>

    </div>
  </template>
  
  <script>

    import specialMoments from '../specialMoments';
    
    export default {
        data() {
            return {
                specialMoments
            }
        },
    }
  </script>
  
  <style lang="scss">

    .special-moments {

        h3 {
            margin-bottom: 4rem;
        }

        .d-flex {
            gap: 6.25rem;
        }
    }

  </style>