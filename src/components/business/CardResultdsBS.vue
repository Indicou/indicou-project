<template>
  <div v-if="quantInfoForm > 0" class="col-md-12 shadow border bg-white mb-2" style="border-bottom-right-radius: 10px;border-top-right-radius: 10px;border-bottom-left-radius: 10px;border-top-left-radius: 10px;">
    <div class="row">
      <div class="col-md-8 pb-3">
        <h3 class="my-3 ml-3 fw-300">{{ data.titulo }}</h3>
          <div  v-if="ultimoForm[0].vistoempresa === ''" class="d-flex alert alert-danger" role="alert">
            <span class="mr-1">Você tem até {{tempoFinal}} para reportar o status da indicação</span>
            <span v-if="ultimoForm[0].contform < 10">ID: 0{{ultimoForm[0].contform}}</span>
            <span v-else> ID: {{ultimoForm[0].contform}}</span>
            </div>
          <div class="row">
            <div class="col-md-4 px-4">
              <div class="row">
              <div class="col-md-10 bg-white mx-auto border-top border-right border-left rounded-top">
                <p class="my-1 text-center fw-300">Indicações</p>
              </div>
                <div class="col-md-10 bg-light mx-auto">
                  <h1 class="text-muted text-center my-1" style="font-weight:800">{{ quantInfoForm }}</h1>
                </div>
                </div>
                  </div>
                    <div class="col-md-4 px-4">
                      <div class="row">
                        <div class="col-md-10 bg-white mx-auto border-top border-right border-left rounded-top">
                          <p class="my-1 text-center fw-300">Em aguardo...</p>
                        </div>
                        <div class="col-md-10 bg-light mx-auto">
                          <h1 class="text-muted text-center my-1" style="font-weight:800">{{ quantInfoAguardo }}</h1>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 px-4">
                      <div class="row">
                        <div class="col-md-10 bg-white mx-auto border-top border-right border-left rounded-top">
                          <p class="my-1 text-center fw-300">Finalizadas</p>
                        </div>
                        <div class="col-md-10 bg-light mx-auto">
                          <h1 class="text-muted text-center my-1" style="font-weight:800">{{ quantInfoFinalizada }}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div class="col-md-4 pt-1 d-flex flex-column justify-content-center">
          <div class="row">
            <div class="col-md-12 d-flex justify-content-center align-items-center flex-row"><router-link :to="{name: 'StatusBS', params: { id: this.idbusiness, card: this.id }}" class="logbtn btn btn-secondary w-75 mt-3 mb-2 py-2 fw-200" tag="button"
            :disabled="quantInfoForm == 0" style="">Reportar Status</router-link></div>
          </div>
        <div class="row">
          <div class="col-md-12 d-flex flex-row justify-content-center align-items-center"><a class="btn btn-dark w-75 py-2 mt-3 mb-3 fw-200" href="#" tag="button" :disabled="quantInfoForm == 0">Acessar Resultados</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../../firebase'
import moment from 'moment'

export default {
  name: 'CardResult',
  props: {
    data: { type: Object, required: true }
  },
  data () {
    return {
      id: this.data.id,
      iduser: null,
      idbusiness: this.data.idbusiness,
      infoForm: [],
      infoFormFinalizadas: [],
      infoFormAguardando: []
    }
  },
  created () {
    var user = auth.currentUser
    if (user != null) {
      this.iduser = user.uid
    }
    this.getInfo()
  },
  computed: {
    /* eslint-disable */
    ultimoForm () {
      if (this.infoForm !== null) {
        return this.infoForm.sort((a,b) => {
          return b.dataCriacao - a.dataCriacao
        })
      } else {
        return 0
      }
    },
    tempoReportar () {
      if (this.infoForm[0].vistoempresa === '') {
        const tempoTotal = moment(this.infoForm[0].dataCriacao).add(5,'d')
        const tempo = new Date()
        const time = tempoTotal - tempo
        return moment(time).format('D')
      }
    },
    tempoFinal () {
      if (this.infoForm[0].vistoempresa === '') {
        const tempoTotal = moment(this.infoForm[0].dataCriacao).add(5,'d')
        return moment(tempoTotal).format('DD/MM/YY')
      }
    },
    quantInfoForm: function () {
      if (this.infoForm !== null) {
        return this.infoForm.length
      } else {
        return 0
      }
    },
    quantInfoAguardo: function () {
      if (this.infoFormAguardando !== null) {
        return this.infoFormAguardando.length
      } else {
        return 0
      }
    },
    quantInfoFinalizada: function () {
      if (this.infoFormFinalizadas !== null) {
        return this.infoFormFinalizadas.length
      } else {
        return 0
      }
    }
    /* eslint-enable */
  },
  methods: {
    getInfo () {
      const reft = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').where('idcard', '==', this.id).get()
      reft.then(snapshot => {
        snapshot.forEach(doc => {
          this.infoForm.push(doc.data())
        })
      })
      const refa = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').where('idcard', '==', this.id)
        .where('vistoempresa', 'in', ['Conversa Iniciada', 'O Indicado é um lead (ficou interessado)', ''])
        .get()
      refa.then(snapshot => {
        snapshot.forEach(doc => {
          this.infoFormAguardando.push(doc.data())
        })
      })
      const refb = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').where('idcard', '==', this.id)
        .where('vistoempresa', 'in', ['Venda realizada', 'Conversão realizada', 'Cadastro efetuado'])
        .get()
      refb.then(snapshot => {
        snapshot.forEach(doc => {
          this.infoFormFinalizadas.push(doc.data())
        })
      })
    }
  }
}
</script>

<style>

</style>
