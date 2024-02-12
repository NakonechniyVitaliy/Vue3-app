<script>

export default {

        props:[
            'person'
        ] ,

      data(){
          return{
                name:null,
                age:null,
                job:null,
          }
      },

      mounted() {
      },

      methods: {
         deletePersons(id){
                  axios.delete(`/api/person/${id}`, {id:this.id})
                      .then( res => {
                          this.$parent.getPersons();
                      })
          },

          changeEditPersonId(id, name, age, job){
              this.$parent.editPersonId = id
              this.name = name
              this.age = age
              this.job = job
          },
      }
  }
</script>


<template>
        <tr :class="this.$parent.isEdit(person.id) ? 'd-none' : '' ">
            <th scope="row" >{{person.id}}</th>
            <td>{{person.name}}</td>
            <td>{{person.age}}</td>
            <td>{{person.job}}</td>
            <td><a href="#" @click.prevent="changeEditPersonId(person.id, person.name, person.age,person.job)" class="btn btn-primary">Edit</a></td>
            <td><a href="#" @click.prevent="deletePersons(person.id)" class="btn btn-danger">Delete</a></td>
        </tr>
</template>

