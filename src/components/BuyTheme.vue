<template>
    <div class="buy-wrapper d-flex flex-column">
        <div class="card">
            <div>
                <div v-for="n in 2" :key="n">
                    <div class="wrapper">
                        <div class="avada-logo">
                            <img src="../assets/avada.png" alt="">
                        </div>
                        Prebuilts
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div>
                <div v-for="n in 2" :key="n">
                    <div class="wrapper">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" class="fa" />
                        Prebuilts
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>

    export default {

    }

</script>

<style lang="scss" scoped>

    .buy-wrapper {
        gap: 0.5rem;
        position: fixed;
        right: 1rem;
        top: 9rem;

        .card {
            padding: 1rem;
            background-color: #FFF;
            cursor: pointer;
            display: flex;
            border-radius: 0.5rem;
            font-size: 0.75rem;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
            width: 5rem;
            height: 5rem;
            position: relative;
            overflow: hidden;

            &:hover >* {
                transform: translateX(calc(-50% - 1rem));
            }
            
            &>* {
                transition: 200ms ease-in-out;
                flex-basis: 100%;
                position: absolute;
                display: flex;
                gap: 2rem;
            }

            .fa {
                margin-bottom: 0.75rem;
                font-size: 1.5rem;
            }
            
            .wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;

                .avada-logo {
                    padding: 0.5rem 1rem;
                    background-color: #000;
                    border-radius: 0.5rem;
                    margin-bottom: 0.5rem;
                    
                    img {
                        width: 0.75rem;
                        filter: invert(1);
                    }
                }
            }
        }
    }

</style>