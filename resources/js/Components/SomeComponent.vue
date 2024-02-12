<script>
  export default {

      props: [
          'object',
      ],

      data(){
          return{

          }
      },

      mounted() {
      },

      methods: {

          },
  }
</script>


<template>
    <div class="mt-5" style="width: 60vw; height: 20vh;background: lightgreen">
        <div>Color: {{object.color}}</div>
        <div>Number: {{object.number > 10 ? " >10 " : ' <10 '}}</div>
        <div>Is Published: {{object.isPublished ? 'not published' : 'is publiches'}}</div>
    </div>
</template>


<style>

</style>
