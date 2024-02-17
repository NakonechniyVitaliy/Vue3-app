<script>
import axios from "axios";
export default {
    data(){
      return{
          persons: null,
      }
    },

    mounted() {
        this.getPersons()
    },

    methods:{
      getPersons(){
          axios.get('/api/person')
              .then(res =>{
                  this.persons = res.data.data
                  console.log(this.persons);
              })
      },
      deletePerson(id){
          axios.delete(`/api/person/${id}`)
              .then(res =>{
                  this.getPersons()
              })
      },
    },

}
</script>

<template>
<div>
    <table class="table w-50 mt-5" style="margin-left: 3vw">
        <thead>
        <tr >
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Job</th>
            <th scope="col">Edit</th>
            <th scope="col">Show</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="person in persons">
            <th scope="row">{{ person.id}}</th>
            <td>{{ person.name}}</td>
            <td>{{ person.age}}</td>
            <td>{{ person.job}}</td>
            <td>
                <router-link :to="{ name:'person.edit', params:{ id:person.id}}" class="btn btn-primary">Edit</router-link>
            </td>
            <td>
                <router-link :to="{ name:'person.show', params:{ id:person.id}}" class="btn btn-success">Show</router-link>
            </td>
            <td>
                <a @click.prevent="deletePerson(person.id)" href="#" class="btn btn-outline-danger">Delete</a>
            </td>
        </tr>

        </tbody>
    </table>
</div>
</template>

<style scoped>

</style>
