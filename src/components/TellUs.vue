<!-- Sezione delle ordinazioni in 3 punti -->

<template>
  
    <div>

        <TellUsContent :index="1" />

        <div class="d-flex container-fluid">
            <div class="col-50">
                <TellUsContent :index="2" />
            </div>
            <div class="col-50">
                <h4>
                    {{ cit.subTitle }}
                </h4>
                <q>
                    {{ cit.para }}
                </q>
                <h4>
                    {{ cit.author }}
                </h4>
            </div>
        </div>
        
        <TellUsContent :index="3" />

    </div>

</template>

<script>

    import TellUsContent from './TellUsContent.vue';
    import cit from '../cit';

    export default {
    data() {
        return {
            cit
        };
    },
    components: { TellUsContent,}
}

</script>

<style lang="scss" scoped>

    @import '../style/variables.scss';

    .d-flex {
        gap: 2rem;
        
        .col-50:last-child {
            background-color: $light-grey;
            padding: 7.25rem 5.25rem;

            q {
                font-size: 2.5rem;
                font-weight: bold;
                color: $dark-violet;
                margin: 3.75rem 0;
                display: block;
                line-height: 1.5;
            }

            h4 {
                font-weight: normal;
                margin: 0;
            }

            h4:last-child {
                font-size: 1rem;
            }
        }
    }

    .container-fluid {
        padding: 2.25rem 0;
    }


</style>