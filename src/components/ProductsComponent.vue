<template>
    <div class="d-flex container-fluid" :class="smallCar ? 'gap' : 'small-gap'">
        <div class="d-flex flex-column justify-content-start" :class="smallCar? 'col-4 align-items-start' : 'col-2 align-items-center text-center'">
            <h4 v-if="content.subTitle">
                {{ content.subTitle}}
            </h4>

            <h3>
                {{ content.title }}
            </h3>

            <p>
                {{ content.para}}
            </p>

            <div class="my_btn">
                {{ content.btn }}
            </div>
        </div>

        <div :class="smallCar? 'col-8' : 'col-10'">
            <div class="carousel">
                <img v-for="img,i in content.img" :key="i" :src="img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: Object,
        smallCar: Boolean
    }
}
</script>

<style>

</style>