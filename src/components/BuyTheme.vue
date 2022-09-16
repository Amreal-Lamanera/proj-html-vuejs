<template>
    <div class="buy-wrapper d-flex flex-column">
        <div class="card">
            <div>
                <div v-for="n in 2" :key="n">
                    <div class="wrapper">
                        <div class="avada-logo">
                            <img src="../assets/avada.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            Products
        </div>
        
        <div class="card">
            <div>
                <div v-for="n in 2" :key="n">
                    <div class="wrapper">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" class="fa" />
                    </div>
                </div>
            </div>
            Shop
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
            width: 6rem;
            height: 6rem;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: flex-end;
            justify-content: center;

            &:hover >* {
                transform: translateX(calc(-50% - 1rem));
            }
            
            &>* {
                transition: 200ms ease-in-out;
                flex-basis: 100%;
                position: absolute;
                top: 1rem;
                left: 1.5rem;
                display: flex;
                gap: 2rem;
            }

            .fa {
                margin-bottom: 0.75rem;
                font-size: 2rem;
                margin-left: 0.25rem;
            }
            
            .wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                flex-shrink: 0;

                .avada-logo {
                    padding: 0.5rem 1rem;
                    background-color: #000;
                    border-radius: 0.5rem;
                    margin-bottom: 0.5rem;
                    
                    img {
                        max-width: none;
                        width: 1rem;
                        filter: invert(1);
                    }
                }
            }
        }
    }

</style>