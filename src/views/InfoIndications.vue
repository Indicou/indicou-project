<template>
  <div class="py-3 mx-5">
    <preloader></preloader>
    <div class="container px-1" >
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb border-info bg-default bg-white border-0 mb-1 pl-0 custom-font2">
          <li class="breadcrumb-item"><router-link to="/myindications" class="text-success" style="font-weight:800"><u class="text-muted">Minhas Indicações</u></router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{titulo}}</li>
        </ol>
      </nav>
    </div>
    <div class="container bg-light px-4 py-3" >
      <div class="row">
        <div class="col-md-12 pb-5">
          <h3 class="mb-0 family-font" style="font-weight:800">{{titulo}}</h3>
          <p class="text-success family-font">{{empresa}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 text-center"><router-link style="" class="family-font custom-font btn  btn-dark btn-lg w-50 ml-5" :to="{ name: 'FormIndication', params:{id: this.id}}">INDICAR VIA FORM</router-link></div>
        <div class="col-md-6 text-center"><button disabled="disabled" class="family-font custom-font btn btn-outline-dark btn-lg w-50 mr-5" href="#">INDICAR VIA LINK</button></div>
      </div>
      <div class="row mx-1 mt-4">
        <div class="col-md-12 bg-white pt-3 mx-auto mt-3">
          <ul class="nav nav-pills text-center justify-content-center text-muted">
            <li class="nav-item mx-auto w-25">
              <a href="" class="nav-link text-dark" data-toggle="pill" data-target="#tabone">Regiões</a> </li>
            <li class="nav-item mx-auto w-25">
              <a href="" class="nav-link text-dark" data-toggle="pill" data-target="#tabtwo">Termos</a> </li>
            <li class="nav-item mx-auto w-25">
              <a class="nav-link text-dark" href="" data-toggle="pill" data-target="#tabthree">Descrição</a> </li>
            <li class="nav-item mx-auto w-25">
              <a href="" class="nav-link text-dark active" data-toggle="pill" data-target="#tabfour">Comissões</a> </li>
          </ul>
          <div class="tab-content mt-2">
            <div class="tab-pane fade mt-2 mx-3 mb-3" id="tabone" role="tabpanel">
              <p v-if="regiao === 'Não'" class="text-center text-muted lead my-5 py-5"><br>O seu Anúncio é Disponível no Páis Inteiro</p>
              <div v-else>
              <p class="pb-0 mt-3 mb-2">Estados:</p>
              <span v-for="(locais, item) in estadoIgual" :key="item">
              <span class="badge badge-primary badge-pill mr-1 mt-1">{{locais.estado}}</span>
              </span>
              <p class="pb-0 mt-3 mb-2">Cidades:</p>
              <div class="row">
                <div class="col-md-2">
                  <ul class="" v-for="(locais, item) in locais" :key="item">
                    <li>{{locais.cidade}}</li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
            <div class="tab-pane fade" id="tabtwo" role="tabpanel">
              <p class="my-4 mx-3">{{termo}}</p>
            </div>
            <div class="tab-pane fade" id="tabthree" role="tabpanel">
              <p class="my-4 mx-3">{{sobre}}</p>
            </div>
            <div class="tab-pane fade active show" id="tabfour" role="tabpanel">
              <div class="table-responsive px-3">
                <table class="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Tipo de Comissão</th>
                      <th scope="col">Valor da Comissão</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(comissao, item) in comissao" :key="item">
                      <td>{{comissao.tipocomissao}}</td>
                      <td>R$ {{comissao.valorcomissao}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from '../components/global/Preloader.vue'
import { db, auth } from '../firebase'
export default {
  name: 'MinhasIndicacoes',
  components: {
    Preloader
  },
  data () {
    return {
      indicacoes: [],
      comissao: null,
      empresa: null,
      filtro: null,
      fisico: null,
      forms: null,
      id: null,
      imagem: null,
      locais: null,
      regiao: null,
      sobre: null,
      termo: null,
      tipo: null,
      tiponegocio: null,
      titulo: null,
      idbusiness: null,
      filtered: []
    }
  },
  created () {
    this.$root.$emit('MenuBar::show')
    this.$root.$emit('indset:show')
    this.$root.$emit('marketset:hide')
    this.$root.$emit('Business::hide')
    this.getData()
  },
  computed: {
    /* eslint-disable */
    estadoIgual: function () {
      if (this.locais !== null) {
        return this.locais.filter((item, index,arr)=>{
        const c = arr.map(item=> item.estado);
        return  index === c.indexOf(item.estado)
        })
      }
    }
    /* eslint-enable */
  },
  methods: {
    getData () {
      this.id = this.$route.params.id
      var user = auth.currentUser
      if (user != null) {
        this.useruid = user.uid
      }
      const ref = db.collection('mercado').doc(this.id).get()
      ref.then(doc => {
        this.comissao = doc.data().comissao
        this.empresa = doc.data().empresa
        this.filtro = doc.data().filtro
        this.fisico = doc.data().fisico
        this.forms = doc.data().forms
        this.id = doc.data().id
        this.imagem = doc.data().imagem
        this.locais = doc.data().locais
        this.regiao = doc.data().regiao
        this.sobre = doc.data().sobre
        this.termo = doc.data().termo
        this.tipo = doc.data().tipo
        this.tiponegocio = doc.data().tiponegocio
        this.titulo = doc.data().titulo
        this.idbusiness = doc.data().idbusiness
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
</style>
