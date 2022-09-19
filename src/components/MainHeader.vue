<!-- Macro-componente intestazione/header -->

<template>
  <header class="d-flex align-items-center justify-content-between">
    <a class="logo" href=".">
        <img src="../assets/avada-bakery-logo.png" alt="Bakery logo">
    </a>

    <nav class="nav-list">
        <ul class="list-wrapper d-flex">

            <ListComponent :listItems="headerLinks" />
            <li>
                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            </li>

        </ul>
    </nav>
  </header>
</template> 

<script>

    import headerLinks from '../headerLinks'
    import ListComponent from './ListComponent.vue';

    export default {
    data() {
        return {
            headerLinks
        };
    },
    components: { ListComponent }
}

</script>

<style lang="scss">

    @import '../style/headerStyle.scss';

</style>