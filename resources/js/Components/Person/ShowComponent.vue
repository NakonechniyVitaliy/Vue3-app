<script>
import axios from "axios";

export default {
    data(){
      return{
          person: null,
      }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson() {
            axios.get(`/api/person/${this.$route.params.id}`)
                .then(res => {
                    this.person = res.data.data
                })
        },
    }
}

</script>

<template>
<div v-if="person" style="margin-left: 3vw; margin-top: 3vw">
    <div>
        Name: {{ person.name }}
    </div>
    <div>
        Age: {{ person.age }}
    </div>
    <div>
        Job: {{ person.job }}
    </div>
</div>
</template>

<style scoped>

</style>
