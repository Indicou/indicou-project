<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modall" :class="{altura: valid_password}">
      <form @submit.prevent="registerUser()" id=18>
      <header class="modal-header">
        <slot name="header" >
          <span class="cadastro">Cadastro</span>
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="CloseRegister()"
        >
          x
        </button>
      </header>

      <section class="modal-body mt-1">
        <div class="row">
        <div class="form-group col-12">
          <input
          required
          type="text"
          v-model.trim="userData.userid"
          class="form-control"
          placeholder="Usuário">
        </div>
        <div class="form-group col-12">
          <input
          required
          type="email"
          v-model.trim="userData.email"
          class="form-control"
          placeholder="E-mail">
        </div>
        <div class="form-group col-12">
          <input
          autocomplete="off"
          @input="checkPassword"
          required
          type="password"
          v-model.trim="password"
          class="form-control"
          placeholder="Senha">
        </div>
        <div class="form-group col-12">
          <input
          @input="checkPassword"
          autocomplete="off"
          required
          type="password"
          v-model.trim="password2"
          class="form-control"
          placeholder="Confirme sua Senha">
        </div>
        <div class="input_container" v-show="confirm">
            <ul class="mb-1" style="font-size: 15px">
              <li class="lista mb-2">A Senha deve conter:</li>
              <li v-bind:class="{ is_valid: contains_eight_characters }">8 Caracteres</li>
              <li v-bind:class="{ is_valid: contains_number }">Números</li
              ><li v-bind:class="{ is_valid: contains_uppercase }">Letra Maiúscula</li>
              <li v-bind:class="{ is_valid: contains_special_character }">Caracteres Especiais</li>
              <li v-bind:class="{ is_valid: contains_confirm }">As Senhas Combinam</li>
          </ul>
          </div>
        <div class="col-12 mb-2">
        <button v-show="valid_password" class="btn btn-primary w-100" :disabled="loading">
          <template v-if="loading">
            Cadastrando... <i class="fas fa-spinner fa-spin"></i>
          </template>
          <template v-else>
            Confirmar <i class="fas fa-sign-in-alt"></i>
          </template>
        </button>
        </div>
      </div>
      </section>
      </form>
      <div class="modal-footer mt-0" style="color: #4AAE9B; font-size: 18px !important;" v-show="confirm">
        <div class="d-flex justify-content-center">
          Ou acesse
        </div>
        <div class="d-flex justify-content-center mt-2" style="cursor: pointer;">
            <img @click="Google()" src="../../assets/google.png" width="35px">
          </div>
      </div>
    </div>
  </div>
  </transition>
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
      valid_password: false,
      confirm: true
    }
  },
  methods: {
    checkPassword () {
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
        this.valid_password = true
        this.confirm = false
      } else {
        this.valid_password = false
        this.confirm = true
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
      } catch (err) {
        console.error(err)
      }
      this.$router.push({ name: 'Market' })
    }
  }
}
</script>

<style scoped lang="scss">
.altura{
  height: 350px !important;
}
.is_valid { color: rgba(60, 187, 109, 0.8); }
li {
  color: #525f7f;
  position: relative;
  }
li:before {
  content: "";
  width: 0%;
  height: 2px;
  background: #2ecc71;
  position: absolute;
  left: 0;
  top: 50%;
  display: block;
  transition: all .6s
  cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.lista {
  list-style: none;
}
  .cadastro{
    font-size: 20px !important;
  }
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .7s ease;
  }
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modall {
    border-radius: 5px;
    max-width: 500px;
    width: 90%;
    height: 543px;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    padding: 15px;
    display: flex;
  }
  .modal-footer {
    padding-top: 5px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: center;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px 0px 20px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
