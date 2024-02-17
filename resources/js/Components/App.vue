<template>
    <div>
        <router-link class="mt-5 ml-5" :to="{ name:'person.index' }">Persons</router-link>
        <br>
        <router-link class="mt-5 ml-5" :to="{ name:'person.create' }">Add</router-link>
        <router-view></router-view>
    </div>
</template>



<script setup>

</script>


<style scoped>

</style>

