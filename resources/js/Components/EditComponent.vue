<script>
  export default {

      props: [
          'person',
      ],


      data(){
          return{
                name:null,
                age:null,
                job:null,
          }
      },

      mounted() {
      },


  }
</script>


<template>
    <tr :class="this.$parent.isEdit(person.id) ? '' : 'd-none' ">
        <th scope="row">{{ person.id }}</th>
        <td><input type="text" v-model="person.name" class="form-control"></td>
        <td><input type="number" v-model="person.age" class="form-control"></td>
        <td><input type="text" v-model="person.job" class="form-control"></td>
        <td><a href="#" @click.prevent="this.$parent.updatePersons(person.id)" class="btn btn-primary">Update</a></td>
    </tr>
</template>


<style>

</style>
