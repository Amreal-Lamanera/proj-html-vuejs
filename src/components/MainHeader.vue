<template>
  <header>
    <div id="header-logo">
        <img src="../assets/avada-bakery-logo.png" alt="Bakery logo">
    </div>

    <nav class="nav-list">
        {{ headerLinks }}
    </nav>
  </header>
</template> 

<script>

    import headerLinks from '../headerLinks'

    export default {
        data() {
            return {
                headerLinks
            }
        },
    }

</script>

<style lang="scss" scoped>

</style>