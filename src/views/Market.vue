<template>
    <div>
      <preloader></preloader>
        <div class="pt-5 pb-4" style="background-image:linear-gradient(rgb(84 255 154 / 75%), rgb(242 255 248 / 10%));background-position:top left;background-size: 100%;background-repeat: repeat;">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <form class="form-inline" style="">
                <div class="input-group w-100">
                  <input type="text" v-model="busca" class="busca form-control pl-4 border-left-0 border-bottom font-poppins" id="inlineFormInputGroup" style="border-color:#e7e7e7;border-bottom-width:20px;border-top-width: 0px;box-shadow: 0px 0px #333;height: 70px;" placeholder="Estou procurando por...">
                  <div class="input-group-append" style="">
                    <button class="btn btn-secondary px-3" type="button" style="width: 77px!important;background-image:linear-gradient(rgb(255 255 255), rgb(255 255 255));background-position: top left;background-size: 100%;background-repeat: repeat;border-color: rgb(231 231 231);">
                      <i class="fa fa-search" style="font-size: 19px;color: #7f7f7f;"></i>&nbsp;<span style="font-weight:700" class=""></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
            <div class="container mt-4 px-5">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-3 text-center">
                  <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center"  :class="{active: imo}" @click="imoveisb()"><i class="fa fa-home fa-lg"></i></button>
                  <p class="text-center pt-1 text-dark txt-customer">Imóveis</p>
                </div>
                <div class="col-md-3 text-center">
                  <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center" :class="{active: vei}" @click="veiculosb()"><i class="fa fa-car fa-lg"></i></button>
                  <p class="txt-customer ext-center pt-1 text-dark">Veículos</p>
                </div>
                <div class="col-md-3 text-center">
                  <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center"  :class="{active: pro}" @click="prodfisicob()"><i class="fa fa-cubes fa-lg"></i></button>
                  <p class="txt-customer text-center pt-1 text-dark">Produtos Físicos</p>
                </div>
                <div class="col-md-3 text-center">
                  <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center"  :class="{active: dig}" @click="digitaisb()"><i class="fa fa-home fa-laptop fa-lg"></i></button>
                  <p class="txt-customer text-center pt-1 text-dark">Serviços Digitais</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="text-center col-md-3">
                  <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center" :class="{active: ser}" @click="servfisicob()"><i class="fa fa-briefcase fa-lg"></i></button>
                  <p class="txt-customer text-center pt-1 text-dark">Serviços Físicos<br></p>
                </div>
                <div class="text-center col-md-3">
                  <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center"  :class="{active: emp}" @click="empresab()"><i class="fa fa-building fa-lg"></i></button>
                  <p class="txt-customer text-center pt-1 text-dark">Empresas<br></p>
                </div>
                <div class="text-center col-md-3">
                  <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center"  :class="{active: ap}" @click="appb()"><i class="fa fa-mobile fa-lg"></i></button>
                  <p class="txt-customer text-center pt-1 text-dark">Apps/Softwares<br></p>
                </div>
                <div class="text-center col-md-3">
                  <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center" :class="{active: tod}" @click="todosb()"><i class="fa fa-th-large fa-lg"></i></button>
                  <p class="txt-customer text-center pt-1 text-dark">Todos<br></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal-product/>
    <div class="pt-3 pb-5">
      <div class="container">
        <div class="row">
          <!-- <nav-left/> -->
          <div class="col-md-12 col-lg-12">
          <div class="text-center pb-4">
            <div class="container">
              <div class="font-poppins row" style="font-size:14px">
                <div class="col-md-2 text-left pt-3"><i class="fas d-inline fa-lg fa-grip-horizontal text-muted"></i></div>
                <div class="col-md-6"></div>
                <div class="col-md-2 px-0 pr-1">
                  <p class="py-1 text-right pr-1 pt-1">Ordenar por:</p>
                </div>
                <div class="col-md-2 px-0 pr-2">
                  <select  style="font-size:14px" class="form-control" v-model="value">
                    <option>Menor Comissão</option>
                    <option>Maior Comissão</option>
                    <option>Mais Recentes</option>
                    <option>Mais Relevantes</option>
                  </select>
                </div>
              </div>
              <!-- Aqui começa com 16 itens-->
              <div class="row">
                <card-product
                :key="item"
                :data="index"
                v-for="(index, item) in pageOfItems"/>
              </div>
              <div class="justify-content-center mt-5">
                <jw-pagination style="font-size: 14px;color: #7d7d7d!important;" :items="Valores" :pageSize=12 @changePage="onChangePage" :labels="customLabels" ></jw-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <fotter/>
</div>
</template>

<script>
import { db } from '../firebase'
import ModalProduct from '../components/market/ModalProduct'
/* import NavLeft from '../components/market/NavLeft.vue' */
import CardProduct from '../components/market/CardProduct.vue'
import Fotter from '../components/global/Footer.vue'
import Preloader from '../components/global/Preloader'

const customLabels = {
  first: '<<',
  last: '>>',
  previous: 'Anterior',
  next: 'Próxima'
}

export default {
  name: 'Market',
  components: {
    /* NavLeft, */
    CardProduct,
    Fotter,
    ModalProduct,
    Preloader
  },
  data () {
    return {
      indicacoes: [],
      imo: false,
      pro: false,
      ser: false,
      vei: false,
      dig: false,
      emp: false,
      ap: false,
      tod: true,
      busca: '',
      pageOfItems: [],
      customLabels,
      filtro: '',
      categoria: '',
      value: 'Mais Recentes'
    }
  },
  computed: {
    Buscatodos: function () {
      if (this.busca === '' || this.busca === ' ' || this.busca === null) {
        if (this.filtro !== '') {
          return this.indicacoes
            .filter(index => index.filtro === this.filtro)
        } else {
          if (this.categoria !== '') {
            return this.indicacoes
              .filter(index => index.tiponegocio === this.categoria)
          } else {
            return this.indicacoes
          }
        }
      } else {
        return this.indicacoes
          .filter(index => {
            return (
              this.busca.toLowerCase().split(' ').every(v =>
                index.titulo.toLowerCase().includes(v) ||
                index.empresa.toLowerCase().includes(v)
              )
            )
          })
      }
    },
    /* eslint-disable */
    Valores: function () {
      if (this.value === 'Menor Comissão') {
        return this.Buscatodos.sort(function (a, b) {
        return a.comissao[0].valorcomissao - b.comissao[0].valorcomissao
        })
      }
      if (this.value === 'Maior Comissão') {
        return this.Buscatodos.sort(function (a, b) {
        return b.comissao[0].valorcomissao - a.comissao[0].valorcomissao
        })
      }
      if (this.value === 'Mais Recentes') {
        return this.Buscatodos.sort(function (a, b) {
        return b.dataCriacao - a.dataCriacao
        })
      }
      if (this.value === 'Mais Relevantes') {
        return this.Buscatodos.sort(function (a, b) {
        return b.contform - a.contform
        })
      }
    }
    /* eslint-enable */
  },
  created () {
    this.$root.$emit('MenuBar::show')
    this.$root.$emit('marketset:show')
    this.$root.$emit('indset:hide')
    this.$root.$emit('Business::hide')
    this.$root.$emit('resultset:hide')
    this.getData()
  },
  updade () {
    this.$root.$emit('MenuBar::show')
    this.$root.$emit('marketset:show')
    this.$root.$emit('indset:hide')
    this.$root.$emit('Business::hide')
  },
  methods: {
    onChangePage (pageOfItems) {
      this.pageOfItems = pageOfItems
    },
    mostraMais () {
      this.cont = this.cont + 1
      if (this.mostra16 === true) {
        this.mostra16 = false
        this.getData32()
        this.mostra32 = true
        this.cont = this.cont + 1
      } if (this.motra32 === true && this.cont === 3) {
        this.mostra32 = false
        this.mostra64 = true
        this.getData64()
        this.cont = this.cont + 1
      }
    },
    getData () {
      const reft = db.collection('mercado').where('ativo', '==', 'Ativo').get()
      reft.then(snapshot => {
        snapshot.forEach(doc => {
          this.indicacoes.push(doc.data())
        })
      })
    },
    imoveisb () {
      this.categoria = 'Imobiliaria'
      this.filtro = ''
      this.tod = false
      this.imo = true
      this.pro = false
      this.ser = false
      this.dig = false
      this.emp = false
      this.ap = false
      this.vei = false
    },
    veiculosb () {
      this.filtro = 'Veiculos'
      this.vei = true
      this.tod = false
      this.imo = false
      this.pro = false
      this.ser = false
      this.dig = false
      this.emp = false
      this.ap = false
    },
    prodfisicob () {
      this.filtro = 'Prod Fisico'
      this.vei = false
      this.tod = false
      this.imo = false
      this.pro = true
      this.ser = false
      this.dig = false
      this.emp = false
      this.ap = false
    },
    digitaisb () {
      this.filtro = 'Prod Digital'
      this.vei = false
      this.tod = false
      this.imo = false
      this.pro = false
      this.ser = false
      this.dig = true
      this.emp = false
      this.ap = false
    },
    servfisicob () {
      this.filtro = 'Serv Fisico'
      this.vei = false
      this.tod = false
      this.imo = false
      this.pro = false
      this.ser = true
      this.dig = false
      this.emp = false
      this.ap = false
    },
    empresab () {
      this.filtro = 'Empresa'
      this.vei = false
      this.tod = false
      this.imo = false
      this.pro = false
      this.ser = false
      this.dig = false
      this.emp = true
      this.ap = false
    },
    appb () {
      this.filtro = 'App'
      this.vei = false
      this.tod = false
      this.imo = false
      this.pro = false
      this.ser = false
      this.dig = false
      this.emp = false
      this.ap = true
    },
    todosb () {
      this.filtro = ''
      this.categoria = ''
      this.vei = false
      this.tod = true
      this.imo = false
      this.pro = false
      this.ser = false
      this.dig = false
      this.emp = false
      this.ap = false
    }
  }
}
</script>

<style scoped lang="scss">
.page-link{
    background-color: rgb(178, 178, 178) !important;
    border-color: rgb(178, 178, 178) !important;
}
.txt-customer{
  font-size:12px!important;
  font-family: 'Avenir', 'Poppins', sans-serif;
}
.btn-circle {
      width: 30px;
      height: 30px;
      text-align: center;
      padding: 6px 0;
      font-size: 12px;
      line-height: 1.428571429;
      border-radius: 15px;
    }

    .btn-circle.btn-lg {
      width: 50px;
      height: 50px;
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.33;
      border-radius: 25px;
    }

    .btn-circle.btn-xl {
      width: 70px;
      height: 70px;
      padding: 10px 16px;
      font-size: 24px;
      line-height: 1.33;
      border-radius: 35px;
    }
    .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle{
      background-color:#f8f9fa!important;
      border: 4px solid #54ff9a;

      .fa-home{
        margin-left:-3px;
        }
      .fa-car,.fa-cubes,.fa-th-large,.fa-briefcase{
        margin-left:-1px;
      }
    }
    .form-control:focus{
      box-shadow:initial!important;
    }

</style>
