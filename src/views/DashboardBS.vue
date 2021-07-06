<template>
  <div>
    <preloader></preloader>
    <div class="hide">
      <svg-icons/>
    </div>
    <!-- //main-head -->
   <div>
       <div class="pb-4 pt-3 bg-light" >
    <div class="container-fluid px-5 font-poppins">
      <div class="row">
        <div class="col-md-3 px-1">
          <div class="col-md-12 bg-white px-4" style="height: 200px; border-radius:15px;box-shadow: 0 6px 14px -7px grey;">
            <h5 class="mb-0 pt-4 pb-1 fw-300 font-poppins text-muted" style="font-size:13px;">Convertidos</h5>
            <h3 class="display-3 pt-0 mt-n2 mb-0" style="margin-left: -3px;font-weight:800;background: linear-gradient(88deg, rgb(69 255 145 / 95%), rgb(57 116 146));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{quantConvertidos}}</h3>
            <p class="mt-n1 font-poppins fw-200" style="font-size:11px">indicações</p>
            <img src="../assets/linha-2.png" style="width: 112px;" alt="">
          </div>
        </div>
        <div class="col-md-3 px-1">
          <div class="col-md-12 bg-white px-4" style="height: 200px;border-radius:15px;box-shadow: 0 6px 14px -7px grey;">
            <h5 class="mb-0 pt-4 pb-1 fw-300 text-muted font-poppins" style="font-size:13px">Recebidos</h5>
            <h3 class="display-3 pt-0 mt-n2 mb-0" style="margin-left: -4px;font-weight:800;background: linear-gradient(88deg, rgb(69 255 145 / 95%), rgb(57 116 146));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{quantRecebidos}}</h3>
            <p class="mt-n1 fw-200 font-poppins" style="font-size:11px">indicações</p>
            <img src="../assets/linha-2.png" style="width: 112px;transform: rotate(180deg);" alt="">
          </div>
        </div>
        <div class="col-md-3 px-1">
          <div class="col-md-12 bg-white px-4" style="height:200px;border-radius:15px;box-shadow: 0 6px 14px -7px grey;">
            <h5 class="mb-0 pt-4 pb-1 fw-300 text-muted font-poppins" style="font-size:13px">Interessados em Indicar</h5>
            <h3 class="display-3 pt-0 mt-n2 mb-0" style="margin-left: -4px;font-weight:800;background: linear-gradient(88deg, rgb(69 255 145 / 95%), rgb(57 116 146));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{quantInteressados}}</h3>
            <p class="mt-n1 fw-200 font-poppins" style="font-size: 11px;">pessoas</p>
            <img src="../assets/linha-2.png" style="width: 112px;" alt="">
          </div>
        </div>
        <div class="col-md-3 px-1">
          <div class="col-md-12 bg-white px-4 overflow-hidden" style="height: 500px;border-radius:15px;box-shadow: 0 6px 14px -7px grey;">
            <h5 class="pb-1 pt-4 pb-2 fw-300 text-muted font-poppins" style="font-size:13px">Indicações Recentes</h5>
            <div class="row px-3" v-for="(index, item) in Recentes" :key="item">
              <div class="col-md-12 bg-light border rounded py-2 mb-2">
                <div class="row">
                  <div class="col-md-7 pr-0 pb-0 mb-0">
                    <p style="font-size: 9px;font-weight:600" class="mb-0 text-muted">{{index.form['Nome']}}</p>
                  </div>
                  <div class="col-md-5">
                    <p style="font-size: 9px;font-weight:600" class="text-right text-muted mb-1" v-dates-format="index.dataCriacao"></p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <p style="font-size: 9px;" class="mb-0 fw-300 text-muted">Email: {{index.form['Email']}}; telefone: {{index.form['Cel']}}; CPF: {{index.form['CPF']}}&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 bg-white mt-2 px-4" style="height: 300px;border-radius:15px;box-shadow: 0 6px 14px -7px grey;" draggable="true">
            <h5 class="mb-0 pt-4 pb-2 font-poppins fw-300 text-muted" style="font-size:13px">Status (Reportado Vs Pendente)</h5>
            <div class="mt-4" id="chart">
                <apexchart  type="pie" width="340" :options="GraficoDonnut" :series="seriesSoma"></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-5" style="margin-top:-670px">
    <div class="container-fluid px-5">
      <div class="row">
        <div class="col-md-3 px-1">
          <div class="col-md-12 bg-white px-4 pr-4 overflow-hidden" style="height: 598px;border-radius:15px;box-shadow: 0 6px 14px -7px grey;">
            <h5 class="mb-2 pt-4 pb-2 font-poppins text-muted fw-300" style="font-size:13px">Principais Indicadores</h5>
            <card-principais
            :data="index"
            :key="item"
            v-for="(index, item) in quantPrincipais"
            />
          </div>
        </div>
        <div class="col-md-6 px-1">
          <div class="col-md-12 bg-white px-4" style="height: 290px;border-radius:15px;box-shadow: 0 6px 14px -7px grey;">
            <h5 class="mb-0 pt-4 pb-2 font-poppins text-muted fw-300" style="font-size:13px">Anúncios que mais Performaram (Convertidos Vs Data)</h5>
            <apexchart type="line" height="240" :options="GraficoLinha" :series="dadoslinha"></apexchart>
          </div>
          <div class="col-md-12 bg-white mt-2 px-4" style="height: 300px;border-radius:15px;box-shadow: 0 6px 14px -7px grey;">
            <h5 class="mb-0 pt-4 pb-2 font-poppins text-muted fw-300" style="font-size:13px">Quantidade de Indicações por Anuncio (Qtd. Indicações Vs Data)</h5>
            <div id=chart1>
            <apexchart type="bar" height="240" :options="GraficoBarra" :series="dadosbarra"></apexchart>
            </div>
          </div>
        </div>
        <div class="col-md-3">
        </div>
      </div>
    </div>
  </div>
   </div>
  </div>
</template>

<script>
import CardPrincipais from '../components/business/CardPrincipais'
import Preloader from '../components/global/Preloader.vue'
import SvgIcons from '../components/global/SvgIcons'
import { auth, db } from '../firebase'
import groupBy from 'lodash.groupby'
import moment from 'moment'

export default {
  name: 'DashboardBs',
  components: {
    SvgIcons,
    CardPrincipais,
    Preloader
  },
  data () {
    return {
      idbusiness: null,
      iduser: null,
      recebidos: [],
      titulos: [],
      convertidos: [],
      interessados: [],
      receb: [],
      teste: [],
      aguardo: [],
      pendentes: [],
      Dadostitulos: [],
      testeLinha: [],
      GraficoDonnut: {
        colors: ['#34db7f', '#448fad'],
        chart: {
          width: 380,
          type: 'pie'
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + '%'
          },
          offsetX: 0,
          offsetY: 0,
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold'
          }
        },
        labels: ['Reportado', 'Pendente'],
        responsive: [{
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: 'top'
            }
          }
        }]
      },
      dadosbarra: [{
        data: []
      }],
      GraficoBarra: {
        colors: ['#34db7f', '#448fad'],
        chart: {
          type: 'bar',
          height: 220
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          }
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#fff']
          }
        },
        xaxis: {
          categories: []
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: true
          },
          y: {
            title: {
              formatter: function () {
                return ''
              }
            }
          }
        }
      },
      dadoslinha: [],
      GraficoLinha: {
        colors: ['#34db7f', '#448fad'],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          convertedCatToNumeric: false,
          categories: ['Jun']
        }
      }
    }
  },
  created () {
    this.$root.$emit('Business::show')
    this.$root.$emit('MenuBar::hide')
    this.idbusiness = this.$route.params.id
    var user = auth.currentUser
    if (user != null) {
      this.iduser = user.uid
    }
    db.collection('mercado').where('idbusiness', '==', this.idbusiness).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.GraficoBarra.xaxis.categories.push(doc.data().titulo)
          this.dadosbarra[0].data.push(doc.data().contform)
        })
      })
    this.getData()
  },
  computed: {
    /* eslint-disable */
    groupedMonths () {
      let groupedMonths = []
      moment.locale('pt-br')
      const addCurrentMonth = () => {
        groupedMonths.push({
          data: 0,
          month: moment().format('MMMM/YYYY')
        })
      }

      if (this.convertidos.length) {
        const months = groupBy(this.convertidos, i => (
          moment(i.dataCriacao).format('MMMM/YYYY')
        ))
        const sortedMonths = Object.keys(months).sort((a, b) => {
          const pattern = 'MMMM/YYYY HH'
          if (moment(`${a} 01`, pattern).isBefore(moment(`${b} 01`, pattern))) {
            return -1
          } else {
            return +1
          }
        })
        groupedMonths = sortedMonths.map(month => ({
          month,
          data: months[month].length,
        }))

        const lastMonth = moment(groupedMonths[groupedMonths.length - 1].month, 'MMMM/YYYY')

        if (!lastMonth.isSame(moment(), 'month')) {
          addCurrentMonth()
        }
      } else {
        addCurrentMonth()
      }
      return groupedMonths
    },
    idCardConvertido () {
      var teste = JSON.parse(JSON.stringify(this.convertidos))
      return teste.filter(function (a) {
        return !this[JSON.stringify(a.idcard)] && (this[JSON.stringify(a.idcard)] = true)
      }, Object.create(null))
    },
    quantRecebidos () {
      if (this.recebidos !== null) {
        return this.recebidos.length
      } else {
        return 0
      }
    },
    Recentes () {
      if (this.recebidos !== null) {
        return this.recebidos.sort((a, b) => {
          return b.dataCriacao - a.dataCriacao
        })
      } else {
        return 0
      }
    },
    quantConvertidos () {
      if (this.convertidos !== null) {
        return this.convertidos.length
      } else {
        return 0
      }
    },
    seriesSoma () {
      if (this.convertidos !== null || this.aguardo !== null) {
        return [this.convertidos.length, this.aguardo.length]
      } else {
        return 0
      }
    },
    copiaRecebidos () {
      if (this.recebidos !== null) {
        const copia = this.recebidos.slice()
        return copia
      } else {
        return 0
      }
    },
    Testeee () {
      return [{data: [1]}]
    },
    FiltroRecebidos () {
      if (this.copiaRecebidos !== null) {
        return this.copiaRecebidos.sort((a, b) => {
          return a.dataCriacao - b.dataCriacao
        })
      } else {
        return 0
      }
    },
    quantPrincipais () {
      if (this.FiltroRecebidos !== null) {
        return this.FiltroRecebidos.filter(function (a) {
	      return !this[JSON.stringify(a.user)] && (this[JSON.stringify(a.user)] = true);
        }, Object.create(null))
      } else {
        return 0
      }
    },
    quantInteressados () {
      if (this.receb !== null) {
        var soma = 0
        var teste1 = this.receb.filter(x => x != null)
        for (var i=0; i<teste1.length; i++) {
          soma += teste1[i].length
        }
        return soma
      } else {
        return 0
      }
    }
    /* eslint-enable */
  },
  methods: {
    getData () {
      const ref = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').get()
      ref.then(snapshot => {
        snapshot.forEach(doc => {
          this.recebidos.push(doc.data())
        })
      })
      const refa = db.collection('mercado').where('idbusiness', '==', this.idbusiness).get()
      refa.then(snapshot => {
        snapshot.forEach(doc => {
          this.receb.push(doc.data().user)
        })
      })
      const refc = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms')
        .where('vistoempresa', 'in', ['Venda realizada', 'Cadastro efetuado', 'Conversão realizada'])
        .get()
      refc.then(snapshot => {
        snapshot.forEach(doc => {
          this.convertidos.push(doc.data())
        })
      })
      const refaa = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms')
        .where('vistoempresa', '==', '')
        .get()
      refaa.then(snapshot => {
        snapshot.forEach(doc => {
          this.aguardo.push(doc.data())
        })
      })
      const refb = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms')
        .where('vistoempresa', 'in', ['Venda realizada', 'Cadastro efetuado', 'Conversão realizada'])
        .get()
      refb.then(snapshot => {
        snapshot.forEach(doc => {
          this.pendentes.push(doc.data())
        })
      })
      const refi = db.collection('mercado').where('idbusiness', '==', this.idbusiness).get()
      refi.then(snapshot => {
        snapshot.forEach(doc => {
          this.interessados.push(doc.data())
        })
      })
    }
  }
}
</script>
