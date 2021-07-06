<template>
  <div class="py-3 mx-5 font-poppins">
    <preloader></preloader>
    <div class="container px-1" >
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb border-info bg-default bg-white border-0 mb-1 pl-0 custom-font2">
          <li class="breadcrumb-item"><router-link to="/results" class="text-success" style="font-weight:800"><u class="text-muted">Resultados</u></router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{card.titulo}}</li>
        </ol>
      </nav>
    </div>
    <div class="container bg-light px-4 py-3" >
      <div class="row">
        <div class="col-md-12 pb-4">
          <h3 class="mb-0 family-font" style="font-weight:800">{{card.titulo}}</h3>
          <p class="text-success family-font">{{card.empresa}}</p>
        </div>
      </div>
                <div class="row mb-4">
                <div class="col-md-6">
                  <div class="row">
                    <div class="text-right d-flex flex-row justify-content-end align-items-center col-md-2 py-1 pr-2 pl-0">
                      <p class="">Período:</p>
                    </div>
                    <div class="col-md-6 pl-0">
                      <date-picker v-model="range" range-separator=" - " lang="pt-br" value-type="timestamp" format="DD/MM/YYYY" range id="example-date-input"/>
                      </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-6"></div>
                    <div class="col-md-6"></div>
                  </div>
                </div>
              </div>
              <div class="row mb-5 border py-2 mx-1 rounded shadow-sm">
                <div class="col-md-1">
                </div>
                <div class="px-3 col-md-2 ml-1">
                  <div class="row">
                    <div class="col-md-12" style="">
                      <p class="lead text-center mb-0 text-muted" style="font-weight:700">Indicados</p>
                    </div>
                    <div class="col-md-12 px-0" style="">
                      <h1 class="text-center bg-light py-2 border rounded" style="font-weight:800;color: #464646!important;">{{somaResults}}</h1>
                    </div>
                  </div>
                </div>
                <div class="px-3 col-md-2 mx-2">
                  <div class="row">
                    <div class="col-md-12">
                      <p class="lead text-center mb-0 text-muted" style="font-weight:700">Válidos</p>
                    </div>
                    <div class="col-md-12 px-0">
                      <h1 class="text-center bg-light py-2 border rounded" style="font-weight:800;color: #464646!important;">{{somaValidos}}</h1>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 px-3 mr-2">
                  <div class="row">
                    <div class="col-md-12">
                      <p class="lead text-center mb-0 text-muted" style="font-weight:700">Faturados</p>
                    </div>
                    <div class="col-md-12 px-0">
                      <h1 class="text-center bg-light py-2 border rounded" style="font-weight:800;color: #464646!important;">{{somaFaturados}}</h1>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 px-3 pr-5">
                  <div class="row">
                    <div class="col-md-12">
                      <p class="lead text-center mb-0 text-muted" style="font-weight:700">Ganhos</p>
                    </div>
                    <div class="col-md-12 px-0">
                      <h1 class="text-center bg-light py-2 border rounded" style="font-weight:800;color: #464646!important;" v-money-format="somaValorFaturados"></h1>
                    </div>
                  </div>
                </div>
              </div>
          <div class="row">
            <div class="col-md-6 pl-4 pt-2">
              <p class="">Status Indicações</p>
            </div>
            <div class="col-md-6 pr-4">
              <div class="row">
                <div class="col-md-7 pt-1 px-0">
                  <p class="text-right">Filtrar por:</p>
                </div>
                <div class="col-md-5">
                  <select v-model="filtrar" class="form-control">
                    <option value="Todos">Todos</option>
                    <option value="Faturados">Faturados</option>
                    <option value="Em Análise">Em Análise</option>
                    <option value="Descartados">Descartados</option>
                  </select></div>
              </div>
            </div>
          </div>
      <div class="row mx-1 mt-2">
        <div class="col-md-3 px-2" v-for="(index, item) in filtro" :key="item">
          <div class="col-md-12 border py-2 mt-3 bg-white" style="border-radius:10px!important">
            <p class="mb-1 fw-600 title-card-status"
            >{{index.form.Nome}}</p>
            <div class="row">
              <div class="col-md-4">
                <p class="f-size-13" v-date-format="index.dataCriacao"></p>
              </div>
              <div class="col-md-6">
                <p class="f-size-13" v-time-format="index.dataCriacao"></p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7">
                <span
                v-if="index.vistoempresa == 'Conversa Iniciada' ||
                index.vistoempresa == '' ||
                index.vistoempresa == 'O Indicado é um lead (ficou interessado)'
                "
                class="badge badge-warning text-white px-4 py-1">Em Análise</span>
                <span
                v-if="index.vistoempresa == 'Venda realizada' ||
                index.vistoempresa == 'Cadastro efetuado' ||
                index.vistoempresa == 'Conversão realizada'
                "
                class="badge badge-success text-white px-4 py-1">Faturado</span>
                <span
                v-if="index.vistoempresa == 'Indicação já realizada por outro parceiro' ||
                index.vistoempresa == 'Contato não retornou as mensagens' ||
                index.vistoempresa == 'Contato não interessado' ||
                index.vistoempresa == 'Número de telefone não existe' ||
                index.vistoempresa == 'Indicado não atendeu o telefone' ||
                index.vistoempresa == 'Indicação fora da área de atuação da empresa'
                "
                class="badge badge-danger text-white px-4 py-1">Descartado</span>
                </div>
              <div class="col-md-2 text-center px-1 pl-2">
                <i
                v-if="index.vistoempresa == 'Conversa Iniciada' ||
                index.vistoempresa == '' ||
                index.vistoempresa == 'O Indicado é um lead (ficou interessado)'
                "
                class="far fa-clock text-warning py-1" style="font-size:19px"></i>
                <i

                v-if="index.vistoempresa == 'Venda realizada' ||
                index.vistoempresa == 'Cadastro efetuado' ||
                index.vistoempresa == 'Conversão realizada'
                "
                class="fas fa-check text-success py-1" style="font-size:19px"></i>
                <i
                v-if="index.vistoempresa == 'Indicação já realizada por outro parceiro' ||
                index.vistoempresa == 'Contato não retornou as mensagens' ||
                index.vistoempresa == 'Contato não interessado' ||
                index.vistoempresa == 'Número de telefone não existe' ||
                index.vistoempresa == 'Indicado não atendeu o telefone' ||
                index.vistoempresa == 'Indicação fora da área de atuação da empresa'
                "
                class="fas fa-times text-danger py-1" style="font-size:20px"></i>
                </div>
              <div  class="col-md-2 pl-1">
                <i class="far text-muted fa-question-circle py-1"
                v-if="index.vistoempresa == 'Conversa Iniciada' ||
                index.vistoempresa == '' ||
                index.vistoempresa == 'O Indicado é um lead (ficou interessado)'
                "
                v-b-tooltip.hover
                title="O anunciante ainda não reportou o status, aguarde... "
                id="analise" style="font-size:19px"></i>
                <i class="far text-muted fa-question-circle py-1"
                v-if="index.vistoempresa == 'Venda realizada' ||
                index.vistoempresa == 'Cadastro efetuado' ||
                index.vistoempresa == 'Conversão realizada'
                "
                v-b-tooltip.hover
                title="Parabéns a sua indicação obteve resultado positivo!" id="faturado" style="font-size:19px"></i>
                <i class="far text-muted fa-question-circle py-1"
                v-b-tooltip.hover
                title="Ops... Seu contato indicado não atendeu o telefone." id="descartado" style="font-size:19px"
                v-if="index.vistoempresa == 'Indicação já realizada por outro parceiro' ||
                index.vistoempresa == 'Contato não retornou as mensagens' ||
                index.vistoempresa == 'Contato não interessado' ||
                index.vistoempresa == 'Número de telefone não existe' ||
                index.vistoempresa == 'Indicado não atendeu o telefone' ||
                index.vistoempresa == 'Indicação fora da área de atuação da empresa'
                "
                >
                </i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../firebase'
import 'vue2-datepicker/scss/index.scss'
import 'vue2-datepicker/locale/pt-br'
import DatePicker from 'vue2-datepicker'
import Preloader from '../components/global/Preloader.vue'

export default {
  name: 'InfoResults',
  components: {
    DatePicker,
    Preloader
  },
  data () {
    return {
      idcard: null,
      card: [],
      resultados: [],
      validos: [],
      faturados: [],
      range: [],
      data1: null,
      data2: null,
      filtrar: 'Todos'
    }
  },
  created () {
    this.$root.$emit('MenuBar::show')
    this.$root.$emit('indset:hide')
    this.$root.$emit('resultset:show')
    this.$root.$emit('marketset:hide')
    this.$root.$emit('Business::hide')
    this.getData()
  },
  computed: {
    /* eslint-disable */
    filtroMounth () {
      if (this.resultados !== null) {
        return this.resultados.sort(function (a, b) {
          return a.dataCriacao - b.dataCriacao
        })
      } else {
        return this.resultados
      }
    },
    maiorMounth () {
      if (this.resultados !== null) {
        return this.resultados.sort(function (a, b) {
          return b.dataCriacao - a.dataCriacao
        })
      } else {
        return this.resultados
      }
    },
    testee () {
      return this.resultados.sort(function (a, b) {
        return b.dataCriacao - a.dataCriacao
      })
    },
    filtrarForms () {
      if (this.filtrar === 'Todos') {
        return this.testee
      }
      if (this.filtrar === 'Faturados') {
        return this.testee
          .filter(index =>
          index.vistoempresa == 'Venda realizada' ||
          index.vistoempresa == 'Conversão realizada' ||
          index.vistoempresa == 'Cadastro efetuado')
      }
      if (this.filtrar === 'Em Análise') {
        return this.testee
          .filter(index =>
          index.vistoempresa == 'Conversa Iniciada' ||
          index.vistoempresa == 'O Indicado é um lead (ficou interessado)')
      }
      if (this.filtrar === 'Descartados') {
        return this.testee
          .filter(index =>
          index.vistoempresa == 'Indicação já realizada por outro parceiro' ||
          index.vistoempresa == 'Contato não retornou as mensagens' ||
          index.vistoempresa == 'Contato não interessado' ||
          index.vistoempresa == 'Número de telefone não existe' ||
          index.vistoempresa == 'Indicado não atendeu o telefone' ||
          index.vistoempresa == 'Indicação fora da área de atuação da empresa')
      }
    },
    filtro () {
      if (this.filtrarForms !== null) {
        return this.filtrarForms
            .filter(index => (this.range[0] <= index.dataCriacao && index.dataCriacao <= this.range[1]))
      } else {
        return this.filtrarForms
      }
    },
    somaResults () {
      if (this.filtro !== null) {
        return this.resultados.filter(index => (this.range[0] <= index.dataCriacao && index.dataCriacao <= this.range[1])).length
      } else {
        return 0
      }
    },
    somaValidos () {
      if (this.filtro !== null) {
        return this.validos.filter(index => (this.range[0] <= index.dataCriacao && index.dataCriacao <= this.range[1])).length
      } else {
        return 0
      }
    },
    somaFaturados () {
      if (this.filtro !== null) {
        return this.faturados.filter(index => (this.range[0] <= index.dataCriacao && index.dataCriacao <= this.range[1])).length
      } else {
        return 0
      }
    },
    somaValorFaturados () {
      if (this.faturados !== null) {
        return this.faturados.filter(index => (this.range[0] <= index.dataCriacao && index.dataCriacao <= this.range[1])).reduce((a, b) => {
          return parseFloat(a) + parseFloat(b.comissao.valorcomissao)
        }, 0)
      } else {
        return 0
      }
    }
    /* eslint-enable */
  },
  methods: {
    dateTeste () {
      if (this.filtroMounth !== null) {
        this.data1 = this.filtroMounth[0].dataCriacao
        this.data2 = new Date().getTime()
        this.range = [this.data1, this.data2]
      }
    },
    getData () {
      this.idcard = this.$route.params.id
      var user = auth.currentUser
      if (user != null) {
        this.useruid = user.uid
      }
      const refd = db.collection('mercado').doc(this.idcard).get()
      refd.then(doc => {
        this.card = doc.data()
      })
      const reft = db.collection('cardsusers').doc(this.useruid).collection('Forms').where('idcard', '==', this.idcard).get()
      reft.then(snapshot => {
        snapshot.forEach(doc => {
          this.resultados.push(doc.data())
        })
      }).then(() => {
        this.dateTeste()
      })
      const refb = db.collection('cardsusers').doc(this.useruid).collection('Forms').where('idcard', '==', this.idcard)
        .where('vistoempresa', 'in', ['Venda realizada', 'Conversão realizada', 'Conversa Iniciada', 'Cadastro efetuado', 'Agendamento realizado', 'O Indicado é um lead (ficou interessado)'])
        .get()
      refb.then(snapshot => {
        snapshot.forEach(doc => {
          this.validos.push(doc.data())
        })
      })
      const refg = db.collection('cardsusers').doc(this.useruid).collection('Forms').where('idcard', '==', this.idcard)
        .where('vistoempresa', 'in', ['Venda realizada', 'Cadastro efetuado', 'Conversão realizada'])
        .get()
      refg.then(snapshot => {
        snapshot.forEach(doc => {
          this.faturados.push(doc.data())
        })
      })
    }
  }
}
</script>

<style>
.custom-font{
  font-weight:800!important;
}
.custom-font2{
  font-size: 14px;
}
.family-font{
   font-family: 'Avenir', 'Poppins', sans-serif;
}
.title-card-status{
  width:210px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size:14px;
}
.f-size-13{
  font-size:13px;
}
</style>
