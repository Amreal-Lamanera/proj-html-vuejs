<template>
  <header>
    <div id="header-logo">
        <img src="../assets/avada-bakery-logo.png" alt="Bakery logo">
    </div>

    <nav class="nav-list">
        <ul class="list-wrapper">

            <!-- <li v-for="link,i in headerLinks" :key="i">



            </li> -->

            <ListComponent :listItems="headerLinks" />
            <li>
                CARRELLO
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

<style lang="scss" scoped>

</style>