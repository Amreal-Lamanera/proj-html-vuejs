<!-- Componenti liste di link -->

<template>
    <ul class="list-wrapper d-flex">

        <li
            class="list-item"
            v-for="link,i in listItems"
            :key="i"
            :class="i === active ? 'active' : ''"
            @click="active = i"
        >
        
            <a href="#nogo">
                {{ link }}
            </a>

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

    @import '../style/variables.scss';

    .list-wrapper {
        gap: 1rem;
        font-size: 0.75rem;
        text-transform: uppercase;

        .list-item {
            cursor: pointer;
            position: relative;

            &:hover {
                border-bottom: 1px solid $dark-violet;
            }
        }
    }

</style>