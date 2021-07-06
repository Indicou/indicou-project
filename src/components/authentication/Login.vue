<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modall" :class="{mudatamanho: senhaerrada}">
      <form @submit.prevent="LoginUser()" id=15>
      <header class="modal-header">
        <slot name="header">
          <span class="login">Login</span>
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="CloseLogin()"
        >
          x
        </button>
      </header>

      <section class="modal-body pb-0">
        <div class="row">
        <div class="form-group col-12">
          <input
          required
          type="email"
          v-model.trim="userLogin.email"
          class="form-control"
          placeholder="E-mail">
        </div>
        <div class="form-group col-12 mb-0">
          <input
          required
          type="password"
          v-model.trim="userLogin.password"
          class="form-control"
          placeholder="Senha">
          <span v-show="senhaerrada" @click="esqueci()" class="senhaerrada">Esqueceu sua senha?</span>
        </div>
        <div class="col-12 mt-3 mb-3">
        <button class="btn btn-primary w-100" :disabled="loading">
          <template v-if="loading">
            Entrando... <i class="fas fa-spinner fa-spin"></i>
          </template>
          <template v-else>
            Login <i class="fas fa-sign-in-alt"></i>
          </template>
        </button>
        </div>
      </div>
      </section>
      </form>
      <div class="modal-footer mr-0 mb-0 ml-0" style="color: #4AAE9B; font-size: 18px !important;">
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
import firebase from 'firebase/app'
import { auth, db } from '../../firebase'

export default {
  data () {
    return {
      userLogin: {
        email: '',
        password: ''
      },
      email: '',
      userid: '',
      useruid: '',
      loading: false,
      senhaerrada: false
    }
  },
  methods: {
    esqueci () {
      this.$root.$emit('ShowLogin::hide')
      this.$root.$emit('ShowForget::show')
    },
    CloseLogin () {
      this.$root.$emit('ShowLogin::hide')
    },
    async LoginUser () {
      this.loading = true
      try {
        await auth.signInWithEmailAndPassword(this.userLogin.email, this.userLogin.password)
      } catch (err) {
        let message = ''
        switch (err.code) {
          case 'auth/user-not-found':
            message = 'Usuário e/ou senha inválidos.'
            this.senhaerrada = true
            break
          case 'auth/wrong-password':
            message = 'Usuário e/ou senha inválidos.'
            this.senhaerrada = true
            break
          default:
            message = 'Não foi possível fazer login.'
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

<style scoped lang="scss">
  .mudatamanho{
    height: 368px !important;
  }
  .senhaerrada{
    font-size: 14px;
    color: #4AAE9B;
    cursor: pointer;
  }
  .login{
    font-size: 20px;
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
    height: 345px;
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
  .modal-footer{
    display: flex;
    padding-top: 5px !important;
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
    padding: 20px;
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
