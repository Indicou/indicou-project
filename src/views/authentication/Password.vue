<template>
  <div class="log tudo">
    <div class="login-form"><router-link class="btn-voltar" to="/home" style="text-align: left; margin-top: 10px; padding-left: 10px;">
      <i class="fas fa-arrow-left" style="padding-right: 5px;"></i> Voltar</router-link>
      <form action="login.html" style="padding: 0px 40px;"
      @submit.prevent="senhaUser()"
      >
        <div class="" style="text-align: center;">
        </div>
        <h1>Esqueci minha Senha</h1>
        <div class="txtb" style="margin: 25px 0px">
          <input
          required
          v-model="email"
          type="email"
          >
          <span data-placeholder="E-mail"></span>
        </div>
        <button class="logbtn" :disabled="loading">
          <template v-if="loading">
            Enviando.. <i class="fas fa-spinner fa-spin"></i>
          </template>
          <template v-else>
            Enviar <i class="fas fa-sign-in-alt"></i>
          </template>
        </button>
        <div class="bottom-text" style="font-size: 15px; font-family: 'Poppins', sans-serif;">
          Não possui uma conta?
          <router-link to="/register" style="font-family: 'Poppins', sans-serif;color:#34db7f">Cadastre-se</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase/app'
import { auth } from '../../firebase'

export default {
  data () {
    return {
      email: '',
      userid: '',
      useruid: '',
      loading: false,
      senhaerrada: false
    }
  },
  mounted () {
    this.teste()
  },
  methods: {
    async senhaUser () {
      this.loading = true
      try {
        await auth.sendPasswordResetEmail(this.email).then(() => {
          this.$root.$emit('Notification::show', {
            message: 'E-mail para redefenir a senha encaminhado.',
            type: 'success'
          })
        })
      } catch (err) {
        let message = ''
        switch (err.code) {
          case 'auth/user-not-found':
            message = 'O E-mail digitado está incorreto.'
            break
          case 'auth/wrong-password':
            message = 'O E-mail digitado está incorreto.'
            break
          default:
            message = 'O E-mail digitado está incorreto.'
        }
        this.$root.$emit('Notification::show', {
          message,
          type: 'danger'
        })
      }
      this.loading = false
      if (auth.currentUser === !null) {
        this.$router.push({ name: 'Market' })
      }
    },
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
    }
  }
}
</script>

<style lang="scss" scoped>
.cinza{
  opacity: 0.6;
  cursor: not-allowed !important;
}
.mudatamanho{
  margin: 25px 0px 1px 0px !important;
}
.senhaerrada{
    font-size:12px;
    color: #4AAE9B;
    cursor: pointer;
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
  height: 300px;
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
  margin-bottom: 25px;
}

.logbtn:hover{
  background-position: right;
}

.regbtn:hover{
  background-position: right;
}

.bottom-text{
  margin-top: 20px;
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
