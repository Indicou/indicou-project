<template>
  <div class="bg-light pb-5">
    <preloader></preloader>
    <div class="hide">
      <svg-icons/>
    </div>
    <div class="container-fluid bg-light pb-5 mb-5 font-poppins" style="height: 670px;">
      <div class="row">
        <div class="col-md-12 pt-1 px-3">
          <ul class="breadcrumb bg-light border-muted border-bottom pl-4" style="font-size: 13px;">
            <li class="breadcrumb-item text-muted fw-300"> <router-link class="text-muted" :to="{name: 'ResultsBS', params: { id: this.idbusiness }}">Resultados</router-link> </li>
            <li class="breadcrumb-item active">Reportar Status Indicações</li>
          </ul>
          <h2 class="text-muted pl-4 py-2 mx-4 mb-4" style="background:linear-gradient(89deg, rgb(239 239 239 / 35%) 0%, rgb(248, 249, 250) 100%);font-weight: 400;margin-left: 4px;border: 1px solid rgb(242 242 242);;border-radius: 6px;">
              <b><i class="fas fa-1x fa-stopwatch pr-3" style="color: #91f89a;-webkit-text-stroke: 1px rgb(57, 57, 57);"></i>Status Indicações</b>
          </h2>
          <div class="row">
            <div class="col-md-2">
              <div class="btn-group dropright ml-5">
                <button class="btn btn-primary dropdown-toggle logbtn" data-toggle="dropdown"> Exportar Dados</button>
                <div class="dropdown-menu">
                  <button class="dropdown-item" type="button">
                    <download-csv
                      :data="testeJson"
                      :name="idcard+'.csv'"
                      :separator-excel="true"
                      :labels="labels"
                      :encoding="'utf-8'"
                      >
                      Exportar em CSV
                    </download-csv>
                  </button>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" style="">Exportar em XML</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" style="">Exportar em TXT</a>
                </div>
              </div>
            </div>
            <div class="col-md-5"></div>
            <div class="col-md-5" style="padding-right: 30px;">
              <div class="form-group row">
                <label for="example-date-input" class="col-2 col-form-label text-right">Período:</label>
                <div class="col-5 pr-4 pl-0">
                  <date-picker v-model="range" range-separator=" - " lang="pt-br" value-type="timestamp" format="DD/MM/YYYY" range id="example-date-input"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-5 accordion" id="accordionExample">
        <card-form
        :key="item"
        :data="index"
        v-for="(index, item) in filtro"
        />
      </div>
    </div>
  </div>
</template>

<script>
import 'vue2-datepicker/scss/index.scss'
import 'vue2-datepicker/locale/pt-br'
import DatePicker from 'vue2-datepicker'
import moment from 'moment'
import { db, auth } from '../firebase'
import CardForm from '../components/business/CardForm.vue'
import SvgIcons from '../components/global/SvgIcons'
import Preloader from '../components/global/Preloader.vue'

export default {
  name: 'StatusBS',
  components: {
    CardForm,
    SvgIcons,
    DatePicker,
    Preloader
  },
  data () {
    return {
      iduser: null,
      idbusiness: null,
      formsAtivo: [],
      range: [],
      data1: null,
      data2: null,
      menorData: '',
      idcard: null,
      utf: 'UTF-8',
      labels: {
        nomeUser: 'Quem Indicou',
        idform: 'IDFormulario',
        vistoempresa: 'Status Empresa',
        tipocomissao: 'Tipo da Comissao',
        valorcomissao: 'Valor da Comissao',
        StatusEmpresa: 'Status',
        comissao: 'Comissoes',
        idcard: 'IDCard',
        contform: 'IDFormulario',
        data: 'Data Criacao',
        form: 'Formulario'
      }
    }
  },
  computed: {
    /* eslint-disable */
    filtroMounth () {
      if (this.formsAtivo !== null) {
        return this.formsAtivo.sort(function (a, b) {
          return a.dataCriacao - b.dataCriacao
        })
      } else {
        return this.formsAtivo
      }
    },
    maiorMounth () {
      if (this.formsAtivo !== null) {
        return this.formsAtivo.sort(function (a, b) {
          return b.dataCriacao - a.dataCriacao
        })
      } else {
        return this.formsAtivo
      }
    },
    filtro () {
      if (this.maiorMounth !== null) {
        return this.maiorMounth
            .filter(index => (this.range[0] <= index.dataCriacao && index.dataCriacao <= this.range[1]))
      } else {
        return this.maiorMounth
      }
    },
    testeJson () {
      var teste = JSON.parse(JSON.stringify(this.filtro))
      var alo = []
      for(var i=0; i<teste.length; i++) {
        delete teste[i].status
        teste[i].data = moment(teste[i].dataCriacao).format('DD/MM/YYYY')
        delete teste[i].dataCriacao
        delete teste[i].idform
        const tes = teste[i].form
        const com = teste[i].comissao
        delete teste[i].user
        delete teste[i].comissao
        delete teste[i].form
        delete teste[i].idbusiness
        delete teste[i].pago
        alo[i] = Object.assign(teste[i], tes, com)
      }
      return alo
    },
    /* eslint-enable */
  },
  created () {
    this.$root.$emit('Business::show')
    this.$root.$emit('MenuBar::hide')
    this.idbusiness = this.$route.params.id
    this.idcard = this.$route.params.card
    var user = auth.currentUser
    if (user != null) {
      this.iduser = user.uid
    }
    this.getForms()
  },
  methods: {
    dateTeste () {
      if (this.filtroMounth !== null) {
        this.data1 = this.filtroMounth[0].dataCriacao
        this.data2 = new Date().getTime()
        this.range = [this.data1, this.data2]
      }
    },
    getForms () {
      const ref = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').where('idcard', '==', this.idcard).get()
      ref.then(snapshot => {
        snapshot.forEach(doc => {
          this.formsAtivo.push(doc.data())
        })
      }).then(() => {
        this.dateTeste()
      })
    }
  }
}

</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);
html,
body {
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
}
.btn:focus{
  box-shadow: unset!important;
}
.logbtn{
  border: none;
  background: linear-gradient(120deg,#7bff86,#44adad,#34db74);
  background-size: 200%;
  color: #fff;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  outline: none;
  cursor: pointer;
  transition: .5s;
}
</style>
