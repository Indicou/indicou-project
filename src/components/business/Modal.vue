<template>
  <div class="modal fade my-3 font-poppins" :id="idform" >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="data.contform < 9" class="modal-title">Formulário ID: 0{{data.contform}}</h5>
          <h5 v-else class="modal-title">Formulário ID: {{data.contform}}</h5>
          <button type="button" id="close" class="close" data-dismiss="modal"> <span>×</span> </button>
        </div>
        <div class="modal-body px-0 pb-0">
          <div class="row">
            <div class="col-md-12 pr-5 pt-2" style="">
              <div class="row">
                <div class="col-md-12 text-center">Deseja alterar o status do formulário para:</div>
              </div>
              <h5 class="text-right mb-0 pt-1 font-poppins" style="font-size:24px;"></h5>
              <p class="text-center text-info fw-300">{{teste}}</p>
              <div
              v-if="teste == 'Venda realizada' ||
              teste == 'Conversão realizada' ||
              teste == 'Cadastro efetuado'
              "
              class="col-md-12 text-center">
                Estará liberando a comissão no valor de <span v-money-format="data.comissao.valorcomissao"></span>
              </div>
              <div class="row d-flex justify-content-center pt-3">
                <div class="d-flex justify-content-center py-1 mb-1 col-md-4">
                  <button type="button"  class="btn btn-success btn-block btn-lg" :disabled="loading" @click="enviaStatus()">
                    <template v-if="loading">
                      <i class="fas fa-spinner fa-spin"></i>
                    </template>
                    <template>
                      Confirmar
                    </template>
                  </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../../firebase'
export default {
  props: {
    data: { type: Object, required: true },
    teste: { type: String, required: true }
  },
  data () {
    return {
      idform: this.data.idform,
      idbusiness: this.data.idbusiness,
      idcard: this.data.idcard,
      user: this.data.user,
      vistoempresa: this.teste,
      loading: false
    }
  },
  created () {
    var user = auth.currentUser
    if (user != null) {
      this.useruid = user.uid
    }
  },
  methods: {
    enviaStatus () {
      /* eslint-disable */
      this.loading = true
      if (this.teste == 'Venda realizada' || this.teste == 'Conversão realizada' || this.teste == 'Cadastro efetuado') {
        db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').doc(this.idform).set({
          pago: true,
          vistoempresa: this.teste
        }, { merge: true })
        db.collection('cardsusers').doc(this.user).collection('Forms').doc(this.idform).set({
          pago: true,
          vistoempresa: this.teste
        }, { merge: true }).then(() => {
        db.collection('cardsusers').doc(this.user).collection('Cards').doc(this.idcard).collection('Forms').doc(this.idform).set({
          pago: true,
          vistoempresa: this.teste
        }, { merge: true })
        }).then(() => {
          this.loading = false
        $('#'+this.idform).modal('hide')
        })
      } else {
        db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').doc(this.idform).set({
          vistoempresa: this.teste
        }, { merge: true })
        db.collection('cardsusers').doc(this.user).collection('Forms').doc(this.idform).set({
          vistoempresa: this.teste
        }, { merge: true }).then(() => {
        db.collection('cardsusers').doc(this.user).collection('Cards').doc(this.idcard).collection('Forms').doc(this.idform).set({
          vistoempresa: this.teste
        }, { merge: true })
        }).then(() => {
          this.loading = false
        $('#'+this.idform).modal('hide')
      })
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
