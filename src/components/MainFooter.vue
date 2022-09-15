<template>
    <footer class="d-flex">
        
        <div class="col-50 d-flex flex-column align-items-start">

            <a class="logo" href=".">
                <img src="../assets/avada-bakery-logo.png" alt="Bakery logo">
            </a>

            <ul class="list-wrapper d-flex">

                <ListComponent :listItems="footerLinks" />

                <li>
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </li>

                <li>
                    <div class="cart-count">
                        0
                    </div>
                </li>

            </ul>

            <div class="copy">
                &copy; Copyright 2019 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress
            </div>

        </div>

        <div class="col-50 d-flex flex-column align-items-end">
            <h3>
                Subscribe to our Newsletter
            </h3>

            <div class="subscribe d-flex">
                <div class="email">
                    <input type="email" placeholder="Enter email address*">
                </div>
                <div class="my_btn violet">
                    Subscribe
                </div>
            </div>

            <div class="socials">
                <ul class="d-flex list-wrapper">
                    <li>
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-pinterest-p" />
                    </li>
                </ul>
            </div>
        </div>

    </footer>
  </template>
  
  <script>

    import footerLinks from '../footerLinks';
    import ListComponent from './ListComponent.vue';

    export default {
        data() {
            return {
                footerLinks
            }
        },
        components: {
            ListComponent
        }
    }
</script>
  
  <style lang="scss" scoped>

    @import '../style/variables.scss';
    
    footer{
        padding: 5.25rem;

        .col-50 {
            gap: 3rem;

            .list-wrapper {
                gap: 2rem;
                font-size: 0.75rem;
                text-transform: uppercase;
                color: $dark-violet;
                margin-bottom: 1rem;

                & * {
                    cursor: pointer;
                }

                .cart-count {
                    margin-left: -1.5rem;
                    background-color: $light-grey;
                    border-radius: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 0.75rem;
                    height: 0.75rem;
                    padding: 0.5rem;
                }
            }

            .copy {
                font-size: 0.5rem;
            }

            .subscribe {
                gap: 1.5rem;
                width: 100%;
                margin-bottom: 1rem;
                
                .email {
                    flex-grow: 1;
                    display: flex;
                    justify-content: flex-end;

                    input {
                        width: 80%;
                        height: 100%;
                    }
                }

            }
        }
    }

  </style>