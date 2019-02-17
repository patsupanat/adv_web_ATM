<template>
  <div class="about">
    <h1>Username : {{userLogin.username}}</h1><br>
    <h2>ยอดเงิน : {{balance}}</h2><br>
    <button @click="logout()">logout</button>
    <hr>
    <h3>จำนวนเงินที่ต้องการฝาก  - ถอน</h3>
    <input type="text" v-model="amount"><br>
    <button @click="deposite()">ฝากเงิน</button>
    <button @click="withdraw()">ถอนเงิน</button>
    
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data(){
    return{
      amount:0
    }
  },
  methods:{
    ...mapActions({
       discoutBalance: 'discoutBalance',
       addBalance: 'addBalance',
       setLogout: 'setLogout'
    }),
    logout(){
       this.setLogout()
       this.$router.push({name:'home'})
    },
    deposite(){
      if(this.amount > 0){
        //ฝากเงิน
        this.addBalance({
          username: this.userLogin.username,
          amount: parseInt(this.amount)
        })
      }else{
        alert('กรุณากรอกจำนวนเงินให้มากกว่า 0 บาท')
      }
    },
    withdraw(){
      if(this.amount > this.balance){
        alert('ยอดเงินในบัญชีไม่พอ กรุณากรอกใหม่')
      }else if(this.amount < 0){
        alert('กรุณากรอกจำนวนเงินให้มากกว่า 0 บาท')
      }else{
        this.discoutBalance({
          username: this.userLogin.username,
          amount: parseInt(this.amount)
        })
      }
    }
  },
  computed:{
    ...mapState({
      users: state=> state.users,
      userLogin: state => state.userLogin
    }),
    balance (){
      try{
        let result = this.users.find(user => user.username === this.userLogin.username)
        return result.balance
      }
      catch(err){
        return 'ไม่พบ User'
      }
    }
  },
  mounted(){
    if(!this.userLogin.username){
      this.$router.push({name:'home'})
    }
  }
}
</script>

