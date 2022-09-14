<template>
    <ul class="list-wrapper d-flex">

        <li
            class="list-item"
            v-for="link,i in listItems"
            :key="i"
            :class="i === active ? 'active' : ''"
            @click="active = i"
        >

            {{ link }}

        </li>

    </ul>
</template>

<script>
export default {
    props: {
        listItems: Array
    },
    data() {
        return {
            active: 0
        }
    },
}
</script>

<style lang="scss" scoped>

</style>