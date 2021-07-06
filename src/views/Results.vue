<template>
  <div class="">
    <preloader></preloader>
    <div class="py-5" >
    <div class="container font-poppins">
      <div class="row">
        <div class="col-md-12">
          <div class="row mb-4">
                <div class="col-md-6">
                  <div class="row">
                    <div class="text-right d-flex flex-row justify-content-end align-items-center col-md-2 py-1 pr-2 pl-0">
                      <p class="">Período: </p>
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
                      <p class="lead text-center mb-0 text-muted" style="font-weight:700">Ganhos </p>
                    </div>
                    <div class="col-md-12 px-0">
                      <h1 class="text-center bg-light py-2 border rounded" style="font-weight:800;color: #464646!important;" v-money-format="somaValorFaturados"></h1>
                    </div>
                  </div>
                </div>
              </div>
          <div class="row">
            <div class="col-md-6">
              <ul class="nav nav-tabs mb-4 border-bottom-0" style="">
                <li class="nav-item w-25 text-center"> <a href="" class="nav-link text-dark active" data-toggle="pill" data-target="#tabone"><i class="fas fa-globe mx-1"></i>&nbsp;Geral</a> </li>
                <li class="nav-item w-25 text-center"> <a href="" class="nav-link text-dark" data-toggle="pill" data-target="#tabtwo"><i class="fas fa-laptop mx-1"></i>&nbsp;Digital</a> </li>
                <li class="nav-item w-25 text-center"> <a class="nav-link text-dark" href="" data-toggle="pill" data-target="#tabthree"><i class="fas fa-box-open mx-1"></i>&nbsp;Físico</a> </li>
              </ul>
            </div>
            <div class="col-md-6">
              <div class="row">
              </div>
            </div>
          </div>
          <div class="tab-content mt-2">
            <div class="tab-pane fade active show" id="tabone" role="tabpanel">
              <p
              v-if="cards.length === 0"
              class="justify-content-center d-flex">
                Ops... Não há nenhum resultado para mostrar no momento, realize indicações.
              </p>
              <results
              :key="item"
              :data="index"
              :date="range"
              v-for="(index, item) in cards"></results>
            </div>
            <div class="tab-pane fade" id="tabtwo" role="tabpanel">
              <p
              v-if="cardsdigital.length === 0"
              class="justify-content-center d-flex">
                Ops... Não há nenhum resultado para mostrar no momento, realize indicações.
                </p>
              <results
              :key="item"
              :data="index"
              :date="range"
              v-for="(index, item) in cardsdigital">
              </results>
            </div>
            <div class="tab-pane fade" id="tabthree" role="tabpanel">
              <p
              v-if="cardsfisico.length === 0"
              class="justify-content-center d-flex">
                Ops... Não há nenhum resultado para mostrar no momento, realize indicações.
                </p>
              <results
              :key="item"
              :data="index"
              :date="range"
              v-for="(index, item) in cardsfisico">
              </results>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style>
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
    border-radius: 9px!important;
    background-color: #fbfbfb!important;
    border: 1px solid #f0f0f0 !important;
}
</style>

<script>
import 'vue2-datepicker/scss/index.scss'
import 'vue2-datepicker/locale/pt-br'
import DatePicker from 'vue2-datepicker'
import { auth, db } from '../firebase'
import Results from '../components/results/CardResults'
import Preloader from '../components/global/Preloader.vue'

const customLabels = {
  first: '<<',
  last: '>>',
  previous: 'Anterior',
  next: 'Próxima'
}

const defaultStyles = {
  ul: {
    margin: 10,
    padding: 0,
    display: 'inline-block'
  },
  li: {
    listStyle: 'none',
    display: 'inline',
    textAlign: 'center'
  },
  a: {
    cursor: 'pointer',
    padding: '4px 8px',
    display: 'block',
    float: 'left'
  }
}

export default {
  name: 'Resultados',
  components: {
    DatePicker,
    Results,
    Preloader
  },
  data () {
    return {
      useruid: null,
      customLabels,
      resultados: [],
      cards: [],
      range: [],
      data1: null,
      data2: null,
      cardsfisico: [],
      cardsdigital: [],
      validos: [],
      faturados: [],
      defaultStyles,
      pageOfItems: []
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
    somaResults () {
      if (this.resultados !== null) {
        return this.resultados.filter(index => (this.range[0] <= index.dataCriacao && index.dataCriacao <= this.range[1])).length
      } else {
        return 0
      }
    },
    somaValidos () {
      if (this.resultados !== null) {
        return this.validos.filter(index => (this.range[0] <= index.dataCriacao && index.dataCriacao <= this.range[1])).length
      } else {
        return 0
      }
    },
    somaFaturados () {
      if (this.resultados !== null) {
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
    onChangePage (pageOfItems) {
      this.pageOfItems = pageOfItems
    },
    dateTeste () {
      if (this.resultados !== null) {
        this.data1 = this.filtroMounth[0].dataCriacao
        this.data2 = new Date().getTime()
        this.range = [this.data1, this.data2]
      }
    },
    getData () {
      this.id = this.$route.params.id
      var user = auth.currentUser
      if (user != null) {
        this.useruid = user.uid
      }
      const refd = db.collection('cardsusers').doc(this.useruid).collection('Cards').get()
      refd.then(snapshot => {
        snapshot.forEach(doc => {
          this.cards.push(doc.data())
        })
      })
      const reff = db.collection('cardsusers').doc(this.useruid).collection('Cards').where('fisico', '==', true).get()
      reff.then(snapshot => {
        snapshot.forEach(doc => {
          this.cardsfisico.push(doc.data())
        })
      })
      const refdd = db.collection('cardsusers').doc(this.useruid).collection('Cards').where('fisico', '==', false).get()
      refdd.then(snapshot => {
        snapshot.forEach(doc => {
          this.cardsdigital.push(doc.data())
        })
      })
      const reft = db.collection('cardsusers').doc(this.useruid).collection('Forms').get()
      reft.then(snapshot => {
        snapshot.forEach(doc => {
          this.resultados.push(doc.data())
        })
      }).then(() => {
        this.dateTeste()
      })
      const refb = db.collection('cardsusers').doc(this.useruid).collection('Forms')
        .where('vistoempresa', 'in', ['Venda realizada', 'Conversão realizada', 'Conversa Iniciada', 'Cadastro efetuado', 'Agendamento realizado', 'O Indicado é um lead (ficou interessado)'])
        .get()
      refb.then(snapshot => {
        snapshot.forEach(doc => {
          this.validos.push(doc.data())
        })
      })
      const refg = db.collection('cardsusers').doc(this.useruid).collection('Forms')
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
