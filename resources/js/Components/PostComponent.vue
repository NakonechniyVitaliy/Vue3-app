<script>
    import CreateComponent from "@/Components/CreateComponent.vue";
    import IndexComponent from "@/Components/IndexComponent.vue";
  export default {
    components: {
        CreateComponent,
        IndexComponent,
    },

    methods: {
        postLog(){
            console.log('this is a post log');
        }
    },

    mounted() {
        console.log(this.$refs.index.indexLog())
    },
  }

</script>


<template>
    <create-component></create-component>
    <index-component ref="index"></index-component>
</template>


<style>

</style>
