<template>
    <ul class="list-wrapper">

        <li v-for="link,i in listItems" :key="i">

            {{ link }}

        </li>

    </ul>
</template>

<script>
export default {
    props: {
        listItems: Array
    }
}
</script>

<style lang="scss" scoped>

</style>