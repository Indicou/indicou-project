<template>
  <div class="tudo log">
  <div class="register-form"><router-link to="/home" class="btn-voltar" style="text-align: left; margin-top: 10px; padding-left: 10px;"><i class="fas fa-arrow-left" style="padding-right: 5px;"></i> Voltar</router-link>
      <form action="registro.html" style="padding: 0px 40px;">
        <div style="text-align: center;">
        </div>
        <h1>Registro</h1>
        <div class="txtb">
          <input type="text"
          required
          v-model.trim="userData.userid"
          >
          <span data-placeholder="Usuário"></span>
        </div>
        <div class="txtb">
            <input type="email"
            required
            v-model.trim="userData.email"
            >
            <span data-placeholder="Endereço de Email"></span>
          </div>
        <div class="txtb">
          <input type="password"
          autocomplete="off"
          @input="checkPassword"
          required
          v-model.trim="password"
          >
          <span data-placeholder="Senha"></span>
        </div>
        <div class="txtb">
            <input type="password"
            @input="checkPassword"
            autocomplete="off"
            required
            v-model.trim="password2"
            >
            <span data-placeholder="Confirme sua Senha"></span>
          </div>
        <button class="regbtn" :disabled="valid_password" :class="{cinza: valid_password}">
          <template v-if="loading">
            Cadastrando... <i class="fas fa-spinner fa-spin"></i>
          </template>
          <template v-else>
            Confirmar <i class="fas fa-sign-in-alt"></i>
          </template>
        </button>
        <div class="input_container" style="margin-top: 31px" v-if="senha">
            <ul class="mb-1" style="font-size: 15px;">
              <div class="lista mb-2" style="font-family: 'Poppins', sans-serif;">A Senha deve conter:</div>
              <li style="font-family: 'Poppins', sans-serif;" v-bind:class="{ is_valid: contains_eight_characters }">8 Caracteres</li>
              <li style="font-family: 'Poppins', sans-serif;" v-bind:class="{ is_valid: contains_number }">Números</li
                ><li style="font-family: 'Poppins', sans-serif;" v-bind:class="{ is_valid: contains_uppercase }">Letra Maiúscula</li>
              <li style="font-family: 'Poppins', sans-serif;" v-bind:class="{ is_valid: contains_special_character }">Caracteres Especiais</li>
              <li style="font-family: 'Poppins', sans-serif;" v-bind:class="{ is_valid: contains_confirm }">As Senhas Combinam</li>
          </ul>
          </div>
          <div v-else style="text-align:center; padding-top:10px; padding-bottom:10px; font-size: 17px; font-family: 'Poppins', sans-serif;">
          <div class="mb-3">Ou acesse</div>

        <button @click="Google()" class="btn btn-lg btn-google btn-block" style="border-radius: 25px; font-size: 15px; height: 45px; margin-bottom: 10px; font-family: 'Poppins', sans-serif;" type="buttom"><i class="fab fa-google mr-2" style="margin-right: 10px;"></i> Entrar via Google</button>
        <button disabled @click="Facebook()" class="btn btn-lg btn-facebook btn-block cinza" style="border-radius: 25px; font-size: 15px; height: 45px; font-family: 'Poppins', sans-serif;" type="buttom"><i class="fab fa-facebook-f mr-2" style="margin-right: 10px;"></i> Entrar via Facebook</button></div>
        <div class="bottom-text-register" style="font-size: 15px; font-family: 'Poppins', sans-serif;">
          Já possui uma conta? <router-link to="/login" style="font-family: 'Poppins', sans-serif;color: #34db7f">Logar-se</router-link>
        </div>

      </form>
      </div>
      </div>
</template>

<script>
import { db, auth } from '../../firebase'
import firebase from 'firebase/app'
export default {
  name: 'Register',
  data () {
    return {
      userData: {
        userid: '',
        email: ''
      },
      showRegisterModal: false,
      loading: false,
      useruid: '',
      password: null,
      password2: null,
      password_length: 0,
      contains_eight_characters: false,
      contains_number: false,
      contains_uppercase: false,
      contains_confirm: false,
      contains_special_character: false,
      valid_password: true,
      senha: false
    }
  },
  mounted () {
    this.teste()
  },
  methods: {
    teste () {
      /* eslint-disable */
      $(".txtb input").on("focus",function(){
        $(this).addClass("focus");
      });
      $(".txtb input").on("blur",function(){
        if($(this).val() == "")
        $(this).removeClass("focus");
      });
      /* eslint-enable */
    },
    testeSenha () {
      this.senha = true
    },
    checkPassword () {
      this.testeSenha()
      this.password_length = this.password.length
      // eslint-disable-next-line
      const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

      if (this.password_length > 7) {
        this.contains_eight_characters = true
      } else {
        this.contains_eight_characters = false
      }

      this.contains_number = /\d/.test(this.password)
      this.contains_uppercase = /[A-Z]/.test(this.password)
      this.contains_special_character = format.test(this.password)

      if (this.password === this.password2) {
        this.contains_confirm = true
      } else {
        this.contains_confirm = false
      }
      if (this.contains_special_character === true && this.contains_eight_characters === true && this.contains_uppercase === true && this.contains_number === true && this.contains_confirm === true) {
        this.valid_password = false
      } else {
        this.valid_password = true
      }
    },
    CloseRegister () {
      this.$root.$emit('ShowRegister::hide')
    },
    async registerUser () {
      this.loading = true
      try {
        auth.createUserWithEmailAndPassword(this.userData.email, this.password)
          .then(() => {
            var user = auth.currentUser
            if (user != null) {
              this.useruid = user.uid
            }
            auth.currentUser.sendEmailVerification()
            auth.currentUser.updateProfile({
              displayName: this.userData.userid,
              email: this.userData.email
            }).then(() => {
              db.collection('users').doc(this.useruid).set({
                email: this.userData.email,
                userid: this.userData.userid,
                business: false
              }).then(() => {
                this.$router.push({ name: 'Market' })
              })
            })
          })
      } catch (err) {
        console.error(err)
      }
    },
    Google () {
      const provider = new firebase.auth.GoogleAuthProvider()
      try {
        firebase.auth().signInWithPopup(provider).then(() => {
        }).then(() => {
          var user = auth.currentUser
          if (user != null) {
            this.useruid = user.uid
            this.email = user.email
            this.userid = user.displayName
          }
          auth.currentUser.updateProfile({
          }).then(() => {
            db.collection('users').doc(this.useruid).set({
              email: this.email,
              userid: this.userid
            }, { merge: true }).then(() => {
              this.$router.push({ name: 'Market' })
            })
          })
        })
      } catch {
      }
      this.$router.push({ name: 'Market' })
    }
  }
}
</script>

<style lang="scss" scoped>
.is_valid { color: rgba(60, 187, 109, 0.8); }
li {
  color: #212529;
  position: relative;
  }
.tudo{
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;;
  box-sizing: border-box;
}

.log{
  min-height: 100vh;
  background-image: linear-gradient(120deg,#34db7f,#448fad);
}

.login-form{
  width: 400px;
  background: #f1f1f1;
  height: 580px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.register-form{
  width: 400px;
  background: #f1f1f1;
  height: 680px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.login-form h1{
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 60px;
  float: center;
  font-size: 25px;
  font-weight: 500;
  padding: 3px 0;
  margin-top: 0px;
}

.register-form h1{
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 60px;
  float: center;
  font-size: 25px;
  font-weight: 500;
  padding: 3px 0;
  margin-top: 0px;
}

.txtb{
  border-bottom: 2px solid #adadad;
  position: relative;
  margin: 25px 0px;
}

.txtb input{
  font-size: 15px;
  color: #333;
  border: none;
  width: 100%;
  outline: none;
  font-family: 'Poppins', sans-serif;
  background: none;
  padding: 0 5px;
  height: 40px;
}

.txtb span::before{
  content: attr(data-placeholder);
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  z-index: -1;
  transition: .5s;
}

.txtb span::after{
  content: '';
  position: absolute;
  top: 100%;
  left: 0px;
  width: 0%;
  height: 2px;
  background: linear-gradient(120deg,#34db7f,#448fad);
  transition: .5s;
}

.focus + span::before{
  top: -5px;
}
.focus + span::after{
  width: 100%;
}

.logbtn{
  display: block;
  width: 100%;
  height: 45px;
  border: none;
  background: linear-gradient(120deg,#42db34,#44adad,#34db74);
  background-size: 200%;
  color: #fff;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  outline: none;
  cursor: pointer;
  transition: .5s;
  border-radius: 25px;
}

.regbtn{
  display: block;
  width: 100%;
  height: 45px;
  border: none;
  background: linear-gradient(120deg,#42db34,#44adad,#34db74);
  background-size: 200%;
  color: #fff;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  outline: none;
  transition: .5s;
  border-radius: 25px;
  margin-bottom: 10px;
}

.cinza{
  opacity: 0.6;
  cursor: not-allowed;
}

.logbtn:hover{
  background-position: right;
}

.regbtn:hover{
  background-position: right;
}

.bottom-text{
  margin-top: 60px;
  text-align: center;
  font-size: 13px;
  font-family: 'Poppins', sans-serif;
}

.bottom-text-register{
  margin-top: 35px;
  text-align: center;
  font-size: 13px;
  font-family: 'Poppins', sans-serif;
}

.btn-google {
  color: white;
  background: linear-gradient(120deg,#c72222,#ff5e00,#c72222) !important;
  background-size: 200% !important;
  outline: none !important;
  cursor: pointer !important;
  transition: .5s !important;
  border-radius: 25px !important;
}

.btn-facebook {
  color: white;
  background: linear-gradient(120deg,#3a21c5,#3b5998,#2d22c4) !important;
  background-size: 200% !important;
  outline: none !important;
  transition: .5s !important;
  border-radius: 25px !important;
}

.btn-google:hover {
  color: white !important;
  background-position: right !important;
}

.btn-facebook:hover {
  color: white !important;
  background-position: right !important;
}

.btn-voltar{
    display: block;
    border: none;
    color: rgb(0, 0, 0);
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    outline: none;
    cursor: pointer;
}

a, a:hover{
  color:#333
}
</style>
