<template>
    <div>
        Username : <input type="text" placeholder="username" v-model="Createuser.username"><br>
        Password : <input type="text" placeholder="password" v-model="Createuser.password"><br>  
        Balance :  <input type="text" placeholder="balance" v-model="Createuser.balance"><br><br>
        <button type="submit" @click="addUser()">submit</button>      

    </div>    
</template>

<script>

import {mapActions} from 'vuex'
export default {
    data(){
        return{
            Createuser:{
                username:'',
                password:'',
                balance:''
            }
        }
    },
    methods:{
         ...mapActions({
        createuser: 'createuser'
        }),
        addUser(){
            this.createuser({
                username : this.Createuser.username,
                password : this.Createuser.password,
                balance : parseInt(this.Createuser.balance)
            })
            this.$router.push({name:'home'})
        }
    }
}
</script>