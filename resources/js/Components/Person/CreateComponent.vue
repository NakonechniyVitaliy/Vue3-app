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

    methods:{
        store(){
            axios.post('/api/person/', {name:this.name, age:this.age, job:this.job})
                .then( res =>{
                    this.$router.push({ name: 'person.index'})
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
            <input :disabled="!isDisabled"  @click.prevent="store"  type="submit" class="btn btn-primary mt-2" value="Add">
        </div>
    </div>
</div>
</template>

<style scoped>

</style>
