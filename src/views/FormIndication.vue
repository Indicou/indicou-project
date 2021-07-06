<template>
  <div class="py-3 mx-5 mb-5" style="">
    <preloader></preloader>
    <div class="container px-1">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb border-info bg-default bg-white border-0 mb-1 pl-0 custom-font2 family-font">
          <li class="breadcrumb-item"><router-link :to="{ name: 'InfoIndications', params:{id: this.id}}" class="text-muted">Minhas Indicações</router-link></li>
          <li class="breadcrumb-item active" aria-current="page" style="font-weight:800">{{titulo}}</li>
          <li class="breadcrumb-item"><router-link  :to="{ name: 'FormIndication', params:{id: this.id}}" class="text-muted">Indicar Via Form</router-link></li>
        </ol>
      </nav>
    </div>
    <form @submit.prevent="submitForm()">
    <div class="container bg-light px-4 py-3">
      <div class="row">
        <div class="col-md-11 pb-3">
          <h3 class="mb-0 family-font" style="font-weight:800">{{titulo}}</h3>
          <p class="text-success family-font">{{empresa}}</p>
        </div>
        <div class="col-md-1 text-right px-1 pb-5">
          <router-link :to="{ name: 'InfoIndications', params:{id: this.id}}" class="text-dark">
          <i class="fa fa-reply fa-lg " aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
      <div class="row mx-1 mt-4">
        <div class="col-md-12" >
          <div class="family-font row justify-content-center">
            <div class="col-md-12 px-0">
              <h4 class="pl-4 custom-font3">Formulário</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 my-0 px-0 pr-4" v-for="(divForm,item) in divForm" :key="item">
                <div class="form-group row">
                  <label :for="divForm.campo" class="col-form-label col-2 col-lg-2 py-1 text-right">
                  <i v-if="divForm.campo == 'Nome Completo'" class="fa fa-user fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'Data'" class="fa fa-calendar fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'Idade'" class="fa fa-user fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'CPF'" class="fa fa-id-card fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'Email'" class="fa fa-envelope fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'Telefone Residêncial'" class="fa fa-phone fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'Celular'" class="fa fa-phone fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'CEP'" class="fa fa-map-signs fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'Estado'" class="fa fa-map-marked-alt fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'Cidade'" class="fa fa-map-marker-alt fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'Bairro'" class="fa fa-map-marker-alt fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'Endereço'" class="fa fa-road fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'Número Residêncial'" class="fa fa-home fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i v-if="divForm.campo == 'Complemento'" class="fa fa-home fa-lg my-3 text-muted" aria-hidden="true"></i>
                  <i
                  v-if="divForm.campo != 'Nome Completo' &&
                  divForm.campo != 'Idade' &&
                  divForm.campo != 'CPF' &&
                  divForm.campo != 'Data' &&
                  divForm.campo != 'Email' &&
                  divForm.campo != 'Telefone Residêncial' &&
                  divForm.campo != 'Celular' &&
                  divForm.campo != 'CEP' &&
                  divForm.campo != 'Estado' &&
                  divForm.campo != 'Cidade' &&
                  divForm.campo != 'Bairro' &&
                  divForm.campo != 'Endereço' &&
                  divForm.campo != 'Número Residêncial' &&
                  divForm.campo != 'Complemento'"
                  class="fa fa-align-justify fa-lg my-3 text-muted" aria-hidden="true"></i>
                  </label>
                  <div class="col-10 py-2 pl-0 pr-4">
                    <input required v-mask="'###.###.###-##'" v-if="divForm.campo == 'CPF'" v-model="formcampo['CPF']" type="text" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-if="divForm.campo == 'Nome Completo'" v-model="formcampo['Nome']" type="text" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-if="divForm.campo == 'Idade'" v-model="formcampo['Idade']" type="text" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-if="divForm.campo == 'Email'" v-model="formcampo['Email']" type="email" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-if="divForm.campo == 'Data'" v-model="formcampo['Data']" type="date" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-mask="'(##) ####-####'" v-if="divForm.campo == 'Telefone Residêncial'" v-model="formcampo['Tel']" type="text" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-mask="'(##) #####-####'" v-if="divForm.campo == 'Celular'" v-model="formcampo['Cel']" type="tel" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-mask="'#####-###'" v-if="divForm.campo == 'CEP'" v-model="formcampo['CEP']" type="text" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-if="divForm.campo == 'Estado'" v-model="formcampo['Estado']" type="text" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-if="divForm.campo == 'Cidade'" v-model="formcampo['Cidade']" type="text" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-if="divForm.campo == 'Bairro'" v-model="formcampo['Bairro']" type="text" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-if="divForm.campo == 'Endereço'" v-model="formcampo['Endereço']" type="text" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-if="divForm.campo == 'Número Residêncial'" v-model="formcampo['Número Residêncial']" type="text" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required v-if="divForm.campo == 'Complemento'" v-model="formcampo['Complemento']" type="text" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                    <input required
                      v-if="
                      divForm.campo != 'Nome Completo' &&
                      divForm.campo != 'CPF' &&
                      divForm.campo != 'Data' &&
                      divForm.campo != 'Idade' &&
                      divForm.campo != 'Email' &&
                      divForm.campo != 'Telefone Residêncial' &&
                      divForm.campo != 'Celular' &&
                      divForm.campo != 'CEP' &&
                      divForm.campo != 'Estado' &&
                      divForm.campo != 'Cidade' &&
                      divForm.campo != 'Bairro' &&
                      divForm.campo != 'Endereço' &&
                      divForm.campo != 'Número Residêncial' &&
                      divForm.campo != 'Complemento'"
                    v-model="formcampo[divForm.campo]" :type="divForm.tipo" class="form-control form-control" :id="divForm.campo" :placeholder="divForm.campo">
                  </div>
                </div>
            </div>
            <div class="form-group">
              <div class="col-md-12 px-0">
              <h4 class="pl-4 custom-font3">Comissões</h4>
            </div>
              <div class="col-6 col-md-6 mt-4" v-for="(comissao, tipo) in comissao" :key="tipo">
                <div class="form-check" style="margin-left: 76px!important">
                  <input :value="comissao" v-model="selcomissao" class="form-check-input" type="radio" :id="comissao.tipocomissao" required>
                  <label class="form-check-label" :for="comissao.tipocomissao"> {{comissao.tipocomissao}}</label>
                  </div>
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <button type="submit" class="btn btn-primary btn-lg w-25 text-dark" style="font-weight:800">
                <template v-if="loading">
                      INDICANDO... <i class="fas fa-spinner fa-spin"></i>
                    </template>
                    <template v-else>
                      INDICAR
                    </template>
              </button>
              </div>
          </div>
          <div class="tab-content mt-2">
            <div class="mt-2 mb-3">
              <p v-if="regiao === 'Não'" class="text-center text-muted lead my-5 py-5"><br>O seu Anúncio é Disponível no Páis Inteiro</p>
              <div v-else>
              <p class="pb-0 mt-3 mb-2 family-font text-muted" style="font-size:14px;" contenteditable="true">Cidades que você pode indicar:</p>
              <span v-for="(locais, item) in locais" :key="item" class="badge badge-secondary badge-pill mr-1 mt-1">{{locais.cidade}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
import Preloader from '../components/global/Preloader.vue'
import { db, auth } from '../firebase'

export default {
  name: 'FormIndication',
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
      formcampo: {},
      selcomissao: null,
      idform: null,
      useruid: null,
      loading: false,
      infoForm: [],
      nomeuser: null
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
    divForm: function () {
      if (this.forms !== null) {
        return this.forms
      }
    },
    quantInfoForm: function () {
      if (this.infoForm !== null) {
        const quantidade = this.infoForm.length
        return quantidade
      }
    }
    /* eslint-enable */
  },
  methods: {
    async submitForm () {
      this.loading = true
      this.dataCriacao = new Date().getTime()
      var crypto = require('crypto')
      var aleatorio = 'a' + crypto.randomBytes(8).toString('hex')
      this.idform = aleatorio
      await db.collection('cardsusers').doc(this.useruid).collection('Cards').doc(this.id).set({
        comissao: this.comissao,
        empresa: this.empresa,
        filtro: this.filtro,
        fisico: this.fisico,
        forms: this.forms,
        id: this.id,
        imagem: this.imagem,
        locais: this.locais,
        regiao: this.regiao,
        sobre: this.sobre,
        termo: this.termo,
        tipo: this.tipo,
        tiponegocio: this.tiponegocio,
        titulo: this.titulo,
        idbusiness: this.idbusiness
      }, { merge: true })
      await db.collection('cardsusers').doc(this.useruid).collection('Forms').doc(this.idform).set({
        contform: this.quantInfoForm + 1,
        status: 'ativa',
        vistoempresa: '',
        idcard: this.id,
        idform: this.idform,
        idbusiness: this.idbusiness,
        form: this.formcampo,
        comissao: this.selcomissao,
        user: this.useruid,
        nomeUser: this.nomeuser,
        dataCriacao: this.dataCriacao
      }, { merge: true })
      await db.collection('cardsusers').doc(this.useruid).collection('Cards').doc(this.id).collection('Forms').doc(this.idform).set({
        contform: this.quantInfoForm + 1,
        status: 'ativa',
        vistoempresa: '',
        idcard: this.id,
        idform: this.idform,
        idbusiness: this.idbusiness,
        form: this.formcampo,
        comissao: this.selcomissao,
        user: this.useruid,
        nomeUser: this.nomeuser,
        dataCriacao: this.dataCriacao
      }, { merge: true })
      await db.collection('mercado').doc(this.id).set({
        contform: this.quantInfoForm + 1
      }, { merge: true })
      await db.collection('business').doc(this.idbusiness).collection('Cards').doc(this.id).set({
        dataform: this.dataCriacao,
        contform: this.quantInfoForm + 1,
        temform: true
      }, { merge: true })
      await db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').doc(this.idform).set({
        contform: this.quantInfoForm + 1,
        status: 'ativa',
        vistoempresa: '',
        idbusiness: this.idbusiness,
        idcard: this.id,
        idform: this.idform,
        form: this.formcampo,
        comissao: this.selcomissao,
        user: this.useruid,
        nomeUser: this.nomeuser,
        dataCriacao: this.dataCriacao
      }, { merge: true }).then(() => {
        this.loading = false
        this.$root.$emit('Notification::show', {
          message: 'Formulário enviado com sucesso!',
          type: 'success'
        })
        this.$router.go()
      })
    },
    getData () {
      this.id = this.$route.params.id
      var user = auth.currentUser
      if (user != null) {
        this.useruid = user.uid
      }
      db.collection('users').doc(this.useruid).get()
        .then(doc => {
          this.nomeuser = doc.data().userid
        })
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
      }).then(() => {
        this.getInfo()
      })
    },
    getInfo () {
      const reft = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').where('idcard', '==', this.id).get()
      reft.then(snapshot => {
        snapshot.forEach(doc => {
          this.infoForm.push(doc.data())
        })
      })
    }
  }
}
</script>

<style>
   .badge-secondary{
     background-color:rgb(197, 197, 197)!important;
     }
     .custom-font{
  font-weight:800!important;
}
.custom-font2{
  font-size: 14px;
}
.family-font{
   font-family: 'Avenir', 'Poppins', sans-serif;
}
.custom-font3{
  font-size:22px;
  margin-left:18px
}
</style>
