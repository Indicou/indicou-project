<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modall">
      <form @submit.prevent="SenhaErrada()">
      <header class="modal-header">
        <slot name="header">
          <span class="login">Recuperar Senha</span>
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="CloseForget()"
        >
          x
        </button>
      </header>
      <section class="modal-body pb-0">
        <div class="row col-12" style="padding: 0">
        <div class="form-group col-12" style="padding: 0">
          <input
          required
          type="email"
          v-model.trim="email"
          class="form-control"
          placeholder="E-mail">
        </div>
        <div class="col-12 mt-3 " style="padding: 0">
        <button class="btn btn-primary w-100" :disabled="loading">
          <template v-if="loading">
            Enviando... <i class="fas fa-spinner fa-spin"></i>
          </template>
          <template v-else>
            Enviar <i class="fas fa-sign-in-alt"></i>
          </template>
        </button>
        </div>
      </div>
      </section>
      </form>
    </div>
  </div>
  </transition>
</template>

<script>
import { auth } from '../../firebase'

export default {
  data () {
    return {
      email: '',
      loading: false,
      enviado: false
    }
  },
  methods: {
    CloseForget () {
      this.$root.$emit('ShowForget::hide')
    }
  },
  SenhaErrada () {
    auth.sendPasswordResetEmail(this.email).then(function () {
      this.enviado = true
      this.loading = true
    })
  }
}
</script>

<style scoped lang="scss">
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
    height: 220px;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
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
