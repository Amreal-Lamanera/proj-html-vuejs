<template>
    <div class="" :class="index === 1 ? 'first container-fluid' : index === 2 ? 'second' : 'third'">
        <div class="container d-flex">
            
            <div class="" :class="index === 2 ? 'd-flex flex-column' : 'col-50'">
                <h3>
                    {{ index ===1 ? tellUs01.title : index === 2 ? tellUs02.title : tellUs03.title }}
                </h3>

                <div v-if="index === 2">
                    <h4>
                        {{ tellUs02.subTitle }}
                    </h4>
                    <p>
                        {{ tellUs02.para}}
                    </p>
                </div>
            </div>
        
            <div class="d-flex flex-column justify-content-between align-items-end" :class="index !==2 ? 'col-50' : ''">
                <strong>
                    {{ index === 1 ? tellUs01.num : index === 2 ? tellUs02.num : tellUs03.num }}
                </strong>
                
                <div v-if="index!==2">
                    <h4>
                        {{ index === 1 ? tellUs01.subTitle : tellUs03.subTitle }}
                    </h4>
                    <p>
                        {{ index === 1 ? tellUs01.para : tellUs03.para }}
                    </p>
                </div>
            </div>
        
        </div>

        <div class="layover"></div>
    </div>

</template>

<script>

    import tellUs01 from'../tellUs01';
    import tellUs02 from'../tellUs02';
    import tellUs03 from'../tellUs03';

    export default {
        props: {
            index: Number
        },

        data() {
            return {
                tellUs01,
                tellUs02,
                tellUs03,
            }
        },
    }

</script>

<style lang="scss" scoped>

    @import '../style/tellUs.scss';

</style>