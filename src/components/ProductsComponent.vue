<template>
    <div class="d-flex container-fluid" :class="smallCar ? 'gap' : 'small-gap'">
        <div class="d-flex flex-column" :class="smallCar? 'col-33 align-items-start' : 'col-25 align-items-center text-center justify-content-end'">
            <h4 v-if="content.subTitle">
                {{ content.subTitle}}
            </h4>

            <h3>
                {{ content.title }}
            </h3>

            <p>
                {{ content.para}}
            </p>

            <div class="my_btn violet">
                {{ content.btn }}
            </div>
        </div>

        <div :class="smallCar? 'col-66' : 'col-75'">
            <div class="p-rel carousel d-flex">
                <div class="arrow prev" @click="smallCar ? move(0) : smallMove(0)" ref="prev">
                    <font-awesome-icon icon="fa-solid fa-chevron-left"/>
                </div>
                <div class="img-container" ref="carousel">
                    <img v-for="img,i in content.img" :key="i" :src="img" alt="">
                    <template v-if="content.imgDesc">
                        <div class="img-desc">
                            <div v-for="desc,i in content.imgDesc" :key="1000-i">
                                <h5>
                                    {{ desc.name }}
                                </h5>
                                <div>
                                    {{ desc.price }}
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="arrow next" @click="smallCar ? move(1) : smallMove(1)" ref="next">
                    <font-awesome-icon icon="fa-solid fa-chevron-right"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: Object,
        smallCar: Boolean
    },
    data() {
        return {
            i: 0
        }
    },
    methods: {
        move(num){
            this.$refs.carousel.style.transform = `translateX(calc((-100% - 1.5rem) * ${num}))`
            if(num) {
                this.$refs.next.style.display = 'none'
                this.$refs.prev.style.display = 'block'
            }
            else {
                this.$refs.next.style.display = 'block'
                this.$refs.prev.style.display = 'none'
            }
        },
        smallMove(num) {
            this.$refs.carousel.style.transform = `translateX(calc((-100% - (1.5rem * 3)) * ${num}))`
            if(num) {
                this.$refs.next.style.display = 'none'
                this.$refs.prev.style.display = 'block'
            }
            else {
                this.$refs.next.style.display = 'block'
                this.$refs.prev.style.display = 'none'
            }
        }
    }
}
</script>

<style>

</style>