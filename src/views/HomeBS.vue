<template>
  <div>
    <preloader></preloader>
    <div class="py-5 text-white h-100 align-items-center d-flex bg-business" style="">
    <div class="container py-5">
      <div class="row">
        <div class=" col-lg-9 col-md-10">
          <h1 class="mb-4 display-2"><b>Seja <span style="color:#7bff86;font-weight:700">Bem Vindo</span> ao Indicou Business!</b></h1>
          <h5 class="pb-3 font-poppins">Para Realizar a Criação e Publicação de Anúncios é necessário realizar um upgrade da sua conta para business! É gratuito! Bora?!
          </h5>
          <a href="#" v-if="contanormal" class="btn btn-primary btn-lg text-white " style="background-color: #7bff86;font-weight:700;text-shadow:rgb(73, 148, 100) 1px 0px 12px;width:250px;" data-toggle="modal" data-target="#upgrade">Eu Quero Anunciar</a>
          <router-link :to="{name: 'Dashboard', params: { id: this.tag }}" v-else class="btn btn-primary btn-lg text-white " style="background-color: #7bff86;font-weight:700;text-shadow:rgb(73, 148, 100) 1px 0px 12px;width:250px;" >Entre na Dashboard</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="modal mt-5" id="upgrade">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content font-poppins">
        <form class=""  @submit.prevent="Business()">
        <div class="modal-header border-bottom-0 pb-1 bg-light" style="">
          <button type="button" class="close" data-dismiss="modal" id="close"> <span >×</span> </button>
        </div>
        <div class="modal-body pt-0 bg-light">
          <h4 class="text-center px-3">Antes de entrar no Indicou Business precisamos que você preencha alguns dados referentes ao seu negócio :) </h4>
          <div class="row mt-3">
            <div class="col-md-4 pl-4 pr-0 pt-1">
              <label class="w-100 ml-4"></label>
              <img v-if="this.perfil == '' " class="img-fluid d-block rounded-circle mx-auto my-2" src="https://static.pingendo.com/img-placeholder-3.svg" width="90%">
              <img v-else class="img-fluid d-block rounded-circle mx-auto my-2 teste"  :src="this.img" width="90%">
            </div>
            <div class="col-md-8 pr-5 pt-1">

                <div class="form-group">
                  <p style="font-size:15px" class="mb-1 mt-3">Nome / Marca:</p>
                  <input type="text" class="form-control bg-light mt-0" placeholder="Digite o nome do seu negócio..." required v-model="marca">
                  </div>
                <div class="form-group">
                  <p style="font-size:15px" class="mb-1 mt-4">Em qual ramo atua seu negócio?</p>
                  <select class="form-control bg-light form-select" aria-label="Default select example" required v-model="ramo">
                    <option selected="" value="">Selecione uma atuação</option>
                    <option value="Imobiliária">Imobiliária</option>
                    <option value="Rede Social">Rede Social</option>
                    <option value="Barbearia">Barbearia</option>
                    <option value="Eletrodoméstico">Eletrodoméstico</option>
                    <option value="E-book">E-book</option>
                    <option value="Pintura">Pintura</option>
                    <option value="Energia Solar">Energia Solar</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <div class="form-group">
                  <p style="font-size:15px" class="mb-1 mt-3">Sua LogoMarca:</p>
                  <input
                  type="file"
                  class="pl-0 form-control form-control-sm border-0 border-light w-100 mt-1 bg-light"
                  accept="image/jpeg"
                  @change="onFile"
                  required>
                </div>

            </div>
          </div>
        </div>
        <div class="modal-footer border-top-0 d-flex flex-column justify-content-center align-items-center pb-4 bg-light">
          <button class="btn w-50 btn-dark btn-lg" :disabled="loading">
            <template v-if="loading">
              Carregando... <i class="fas fa-spinner fa-spin"></i>
              </template>
              <template v-else>
                Começar agora!
              </template>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { auth, db, st } from '../firebase'
import Preloader from '../components/global/Preloader.vue'
export default {
  name: 'Business',
  components: {
    Preloader
  },
  data () {
    return {
      perfil: '',
      filename: null,
      marca: '',
      ramo: '',
      useruid: '',
      loading: false,
      contanormal: true
    }
  },
  created () {
    this.$root.$emit('Business::hide')
    this.$root.$emit('MenuBar::hide')
    var user = auth.currentUser
    if (user != null) {
      this.useruid = user.uid
    }
    const ref = db.collection('users').doc(this.useruid).get()
    ref.then(doc => {
      this.business = doc.data().business
      this.tag = doc.data().businessid
    }).then(() => {
      if (this.business === true) {
        this.contanormal = false
      }
    })
  },
  methods: {
    onFile (event) {
      this.perfil = event.target.files[0]
      this.filename = this.perfil.name
      this.img = URL.createObjectURL(this.perfil)
    },
    async Business () {
      try {
        this.loading = true
        var user = auth.currentUser
        if (user != null) {
          this.useruid = user.uid
        }

        if (this.perfil) {
          const snapshot = await st.ref(this.useruid).child(this.filename).put(this.perfil)

          this.url = await snapshot.ref.getDownloadURL()
        }
      } catch (err) {
        console.log(err)
      }

      var crypto = require('crypto')
      var ola = crypto.randomBytes(20).toString('hex')

      this.ale = ola
      db.collection('business').doc(this.ale).set({
        marca: this.marca,
        ramo: this.ramo,
        businessimg: this.url
      }).then(() => {
        db.collection('users').doc(this.useruid).set({
          businessid: this.ale,
          business: true
        }, { merge: true })
          .then(() => {
            document.getElementById('close').click()
            this.$router.push({ name: 'Dashboard', params: { id: this.ale } })
          })
      })
    }
  }
}
</script>

<style scoped>
.teste{
  max-width: 90%;
  max-height: 90%;
  min-width: 90%;
  min-height: 90%;
  object-fit: cover;
}
</style>
