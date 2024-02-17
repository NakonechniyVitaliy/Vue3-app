<script>
import axios from "axios";
export default {

    data(){
        return{
            name:null,
            age:null,
            job:null,
        }
    },

    mounted() {
        this.getPerson()
        this.updatePerson()
    },

    methods:{
        getPerson(){
            axios.get(`/api/person/${this.$route.params.id}`)
                .then( res=> {
                    this.name = res.data.data.name,
                    this.age = res.data.data.age,
                    this.job = res.data.data.job
                })
        },

        updatePerson(){
            axios.patch(`/api/person/${this.$route.params.id}`, {name:this.name, age:this.age, job:this.job})
                .then( res=> {
                    this.$router.push({name: 'person.show', params: this.$route.params.id})
                })
        }
    },

    computed: {
        isDisabled(){
            return this.name && this.age && this.job
        }
    }

}

</script>

<template>
    <div>
        <div class="w-25 mt-5" style="margin-left: 1.5vw;">
            <div>
                <input class="form-control mt-2" v-model="name" type="text" placeholder="Name">
            </div>
            <div>
                <input class="form-control mt-2" v-model="age" type="number" placeholder="Age">
            </div>
            <div>
                <input class="form-control mt-2" v-model="job" type="text" placeholder="Job">
            </div>
            <div>
                <input :disabled="!isDisabled" @click="updatePerson()" type="submit" class="btn btn-primary mt-2" value="Update">
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
