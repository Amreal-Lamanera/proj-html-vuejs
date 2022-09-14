<template>
    <div class="hero">
        <div class="row">
            <div class="col-3 d-flex flex-column align-items-start">

                <h4>
                    {{ heroContent.subTitle}}
                </h4>

                <h1>
                    {{ heroContent.title }}
                </h1>

                <p>
                    {{ heroContent.para}}
                </p>

                <div class="my_btn">
                    {{ heroContent.btn }}
                </div>

            </div>
        </div>
    </div>
  </template>
  
  <script>

    import heroContent from '../hero';

      export default {
        data() {
            return {
                heroContent
            }
        },
      }
  </script>
  
  <style lang="scss" scoped>

    @import '../style/variables.scss';

    .hero {
        background-image: url('../assets/hero-header-bakery.jpg');
        background-color: rgba(255, 255, 255, 0);
        background-size: contain;
        background-repeat: no-repeat;
        padding: 18rem 6rem;

        h4 {
            margin-bottom: 1.75rem;
            font-size: 0.75rem;
        }

        h1 {
            font-weight: 700;
            color: $dark-violet;
            font-size: 3rem;
            margin: 0;
            line-height: 1.25;
        }

        p {
            margin: 2.5rem 0;
        }
    }
  
  </style>