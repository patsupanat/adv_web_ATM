<template>
  <div class="home">
    ATM Login<br>
    Username : <input type="text" v-model="loginUser.username"><br>
    Password : <input type="password" v-model="loginUser.password"><br><br>
    <button type="submit" @click="login()">login</button>
    <button type="submit" @click="createuser()">register</button>


  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'home',
  data(){
    return{
      loginUser:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    login(){
      let index = this.users.findIndex(user => user.username === this.loginUser.username &&
      user.password === this.loginUser.password)
      if(index === -1){
        alert('Username or Password ไม่ถูกต้อง!!')
      }else{
        this.setUserLogin(this.loginUser)
        this.$router.push({name:'about'})
      }
    },
    ...mapActions({
      setUserLogin:'setUserLogin'
    }),
    createuser(){
       this.$router.push({name:'createuser'})
    }
  },
  computed:{
    ...mapState({
      users:state=>state.users
    })
  },

}
</script>
