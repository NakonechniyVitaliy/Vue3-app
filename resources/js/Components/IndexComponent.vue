<script>
import EditComponent from "@/Components/EditComponent.vue";
import ShowComponent from "@/Components/ShowComponent.vue";

export default {
    components: {ShowComponent, EditComponent},

      data(){
          return{
                editPersonId: null,
                persons: null,
                name:null,
                age:null,
                job:null,
          }
      },

      mounted() {
          this.getPersons()
      },

      methods: {
          getPersons(){
              axios.get('/api/person')
                  .then( res => {
                      this.persons = res.data;
                  })
          },

          updatePersons(id){
              this.editPersonId = null,
              axios.patch(`/api/person/${id}`, {name:this.name, age:this.age, job:this.job})
                  .then( res => {
                      this.getPersons();
                  })
          },

         deletePersons(id){
                  axios.delete(`/api/person/${id}`, {id:this.id})
                      .then( res => {
                          this.getPersons();
                      })
          },

          changeEditPersonId(id, name, age, job){
              this.editPersonId = id
              this.name = name
              this.age = age
              this.job = job
          },

          isEdit(id){
              return this.editPersonId === id
          },

          indexLog(){
              console.log('this is index log');
          }
      }
  }
</script>


<template>
    <table class="table mt-5">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Job</th>
            <th scope="col">Editing</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="person in persons">
            <show-component :person="person"></show-component>
            <edit-component :person="person"></edit-component>
        </template>
        </tbody>
    </table>
</template>


<style>

</style>
