<template>
  <div class="card mb-2 shadow-sm">
                <div class="card-body pl-5 py-2">
                  <div class="row">
                    <div class="col-md-5 pt-2 pl-5">
                      <h5 class="pl-4 card-title mb-1 text-left">{{data.titulo}}&nbsp;</h5>
                      <p class="pl-4 card-subtitle text-muted text-left fw-700">{{somaIndicacao}} indicações</p>
                    </div>
                    <div class="text-right col-md-5 py-1 pl-5">
                      <div class="row">
                        <div class="col-md-2 pt-2 px-0 d-flex flex-column align-items-center">
                          <div class="row">
                            <div class="col-md-6 flex-row align-items-center d-flex justify-content-end px-0 pr-1" ><i class="fa fa-check-circle fa-lg" style="padding-top:2px"></i></div>
                            <div class="col-md-6 px-0 d-flex flex-row justify-content-start align-items-start pt-1" >
                              <p class="mb-0">{{somaValidos}}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2 pr-0 pt-2">
                          <div class="row">
                            <div class="col-md-6 flex-row align-items-center d-flex justify-content-end px-0 pr-1" ><i class="fa fa-trophy fa-lg" style="padding-top:2px"></i></div>
                            <div class="col-md-6 px-0 d-flex flex-row justify-content-start align-items-start pt-1" >
                              <p class="mb-0">{{somaFaturados}}</p>
                            </div>
                          </div>
                        </div>
                        <div class="pt-2 col-md-3">
                          <div class="row">
                            <div class="col-md-6 flex-row align-items-center d-flex justify-content-end px-0 pr-1"><i class="fas fa-money-bill-alt icon-color fa-lg" style="padding-top:2px"></i></div>
                            <div class="col-md-6 px-0 d-flex flex-row justify-content-start align-items-start pt-1" >
                              <p class="mb-0" v-din-format="somaValor"></p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <router-link :to="{name: 'InfoResults', params: { id: this.data.id }}" :disabled="somaIndicacao == 0" tag="button" class="btn btn-lg btn-primary text-white fw-600 mt-1" style="font-size: 17px;width: 150px;background:linear-gradient(102deg, #2eff83, #4ac9a9);margin-top: 2px;">Resultados</router-link>
                          </div>
                      </div>
                    </div>
                    <div class="col-md-2" style="padding-top:8px">
                      <div class="btn-group dropright">
                        <button class="btn btn-link" data-toggle="dropdown" aria-expanded="false"> <i class="text-dark fa fa-2x fa-ellipsis-v"></i></button>
                        <div class="dropdown-menu" x-placement="right-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(33px, 0px, 0px);">
                          <a class="dropdown-item" href="#">Configurações</a>
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
  name: 'CardResult',
  props: {
    data: { type: Object, required: true },
    date: { type: Array, required: true }
  },
  data () {
    return {
      idcard: this.data.id,
      useruid: null,
      form: [],
      validos: [],
      faturados: []
    }
  },
  created () {
    this.getUser()
  },
  computed: {
    somaIndicacao () {
      if (this.form !== null) {
        return this.form
          .filter(index => (this.date[0] <= index.dataCriacao && index.dataCriacao <= this.date[1])).length
      } else {
        return 0
      }
    },
    somaValor () {
      if (this.faturados !== null) {
        return this.faturados.filter(index => (this.date[0] <= index.dataCriacao && index.dataCriacao <= this.date[1])).reduce((a, b) => {
          return parseFloat(a) + parseFloat(b.comissao.valorcomissao)
        }, 0)
      } else {
        return 0
      }
    },
    somaValidos () {
      if (this.validos !== null) {
        return this.validos.filter(index => (this.date[0] <= index.dataCriacao && index.dataCriacao <= this.date[1])).length
      } else {
        return 0
      }
    },
    somaFaturados () {
      if (this.faturados !== null) {
        return this.faturados.filter(index => (this.date[0] <= index.dataCriacao && index.dataCriacao <= this.date[1])).length
      } else {
        return 0
      }
    }
  },
  methods: {
    getUser () {
      var user = auth.currentUser
      if (user != null) {
        this.useruid = user.uid
      }
      const reft = db.collection('cardsusers').doc(this.useruid).collection('Cards').doc(this.idcard).collection('Forms').get()
      reft.then(snapshot => {
        snapshot.forEach(doc => {
          this.form.push(doc.data())
        })
      })
      const refa = db.collection('cardsusers').doc(this.useruid).collection('Forms').where('idcard', '==', this.idcard)
        .where('vistoempresa', 'in', ['Venda realizada', 'Conversão realizada', 'Conversa Iniciada', 'Cadastro efetuado', 'Agendamento realizado', 'O Indicado é um lead (ficou interessado)'])
        .get()
      refa.then(snapshot => {
        snapshot.forEach(doc => {
          this.validos.push(doc.data())
        })
      })
      const refc = db.collection('cardsusers').doc(this.useruid).collection('Forms').where('idcard', '==', this.idcard)
        .where('vistoempresa', 'in', ['Venda realizada', 'Cadastro efetuado', 'Conversão realizada'])
        .get()
      refc.then(snapshot => {
        snapshot.forEach(doc => {
          this.faturados.push(doc.data())
        })
      })
    }
  }
}
</script>

<style>

</style>
