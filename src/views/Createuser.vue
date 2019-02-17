<template>
    <div>
        Username : <input type="text" placeholder="username" v-model="Createuser.username"><br>
        Password : <input type="text" placeholder="password" v-model="Createuser.password"><br>
        Re-Password : <input type="text" placeholder="re-password" v-model="Createuser.repassword"><br>    
        Balance :  <input type="number" placeholder="balance" v-model="Createuser.balance"><br><br>
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
                repassword:'',
                balance:''
            }
        }
    },
    methods:{
         ...mapActions({
        createuser: 'createuser'
        }),
        addUser(){
            if(this.Createuser.password === this.Createuser.repassword){
                this.createuser({
                    username : this.Createuser.username,
                    password : this.Createuser.password,
                    balance : parseInt(this.Createuser.balance)
                })
                this.$router.push({name:'home'})
            }else{
                alert('Password ไม่ตรงกัน!!')
            }
        }
    }
}
</script>