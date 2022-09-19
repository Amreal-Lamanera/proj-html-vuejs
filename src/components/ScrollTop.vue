<!-- Pulsante per tornare in testa alla pagina -->

<template>
  <div class="scroll-btn" ref="btn" @click="goTop">
    <font-awesome-icon icon="fa-solid fa-chevron-up"/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            scrollTimer: 0,
            scrollY: 0,
        }
    },
    methods: {
        scrollHandler() {
            if(window.scrollY < 800) {
                this.$refs.btn.style.display = 'none';
                console.log('ORA');
            }
            if(window.scrollY >= 800) {
                this.$refs.btn.style.display = 'block';
                console.log('ORA');
            }
            if (this.scrollTimer) return;
            this.scrollTimer = setTimeout(() => {
                this.scrollY = window.scrollY;
                clearTimeout(this.scrollTimer);
                this.scrollTimer = 0;
            }, 100);
        },
        goTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    },
    mounted() {
    this.$nextTick(() => {
        window.addEventListener('scroll', this.scrollHandler);

    })
},
}
</script>

<style lang="scss" scoped>

    .scroll-btn {
        position: fixed;
        bottom: 2rem;
        right: 4rem;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 0.75rem;
        border-radius: 0.5rem;
        display: none;
        color: #FFF;
        font-size: 0.75rem;
        cursor: pointer;
        z-index: 9999;
    }

</style>