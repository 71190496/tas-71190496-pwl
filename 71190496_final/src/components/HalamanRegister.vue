<template>
  <v-app>
    <v-container>
    <v-card>
      <v-card-title>
        <h1>Register</h1>
      </v-card-title>
      
      <div>
                    <v-text-field 
                    label="Email" 
                    v-model="email" 
                    solo
                    id="inpRegis"></v-text-field>
                    <v-text-field 
                    label="Password" 
                    v-model="password" 
                    type="password" 
                    solo
                    id="inpRegis"></v-text-field>
                </div>
      
      <v-card-actions>
        <v-btn color="success" @click="register()">Save</v-btn>
      </v-card-actions>
    </v-card>
    </v-container>
  </v-app>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "HalamanRegister",
    data:()=>({
      email:'',
      password:''  
    }),
    methods:{
        register(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
                alert("Register Bershasil "+this.email+" silahkan login")
                this.email = ""
                this.password = ""
                this.$router.push('/')
            })
            .catch(err =>{
                err.alert("Register Error")
            })
        },
    }
}
</script>
<style>
    #inpRegis{
        background-color: white;
    }
</style>