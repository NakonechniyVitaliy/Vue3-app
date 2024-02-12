<script>
    import SomeComponent from "@/Components/SomeComponent.vue";
  export default {
      components: {
          SomeComponent
      },


      data(){
          return{
            name: null,
            age: null,
            job: null,
            object:{
              color:'black',
              number: 8,
              isPublished: true,
            },
          }
      },
      mounted() {
          this.$parent.$refs.index.indexLog()
      },

      methods: {
        addPerson(){
            axios.post('/api/person', {name: this.name, age: this.age, job: this.job})
                .then(res => {
                    this.name = null,
                    this.age = null,
                    this.job = null,
                    this.$parent.$refs.index.getPersons()
                })
        }
      }
  }

</script>


<template>
    <div>
        <div class="form-group mt-3">
            <input type="text" class="form-control" v-model="name" id="name" placeholder="Enter name">
        </div>
        <div class="form-group mt-3">
            <input type="number" class="form-control" v-model="age" id="age" placeholder="Enter age">
        </div>
        <div class="form-group mt-3">
            <input type="text" class="form-control" v-model="job" id="job" aria-describedby="emailHelp" placeholder="Enter job">
        </div>
        <div class="form-group mt-3">
            <button @click="addPerson()" class="btn btn-primary">Add</button>
        </div>
    </div>
    <some-component :object="object"></some-component>
</template>


<style>

</style>
