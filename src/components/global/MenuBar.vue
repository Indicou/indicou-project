<template>
  <nav class="navbar navbar-expand-md navbar-light py-3 px-0">
    <div class="container">
      <span data-toggle="dropdown" class="pb-0 pt-2 navbar-brand text-primary mr-0 dropright" style="cursor: pointer">
        <div class="d-inline">
          <img :src="photo" width="40px" style="border-radius: 50%" class="shadow">
        </div>
        <span class="text-muted ml-3 text-perfil">{{name}}</span>
        <div :class="{show: abrir}" class="pt-0 dropdown-menu row shadow" style="margin-top:55px!important;border:0;width:230px;">
            <div class="mt-1 row justify-content-center img-perfil" style="margin-left: 0px; margin-right: 0px">

                  <div class="col-12 d-flex justify-content-left link-coala">
                    <a href=""><i class="far px-2 fa-user pr-3"></i>Meus Dados</a>
                  </div>
                  <div class="col-12 d-flex justify-content-left link-coala ">
                    <a href=""><i class="far px-2 pr-3 fa-credit-card"></i>Financeiro</a>
                  </div>
                  <div class="col-12 d-flex justify-content-left link-coala ">
                    <a href=""><i class="fas px-2 pr-3 fa-chart-bar"></i>Estatísticas</a>
                  </div>
                  <div class="col-12 d-flex justify-content-left link-coala ">
                    <a href=""><i class="fas px-2 pr-3 fa-cogs"></i>Configurações</a>
                  </div>
                  <div class="col-12 d-flex justify-content-left link-coala ">
                    <a href=""><i class="px-2 pr-3 fas fa-shield-alt"></i>Segurança</a>
                  </div>
                  <div class="col-12 d-flex justify-content-left link-coala">
                    <a href=""><i class="far px-2 pr-3 fa-question-circle"></i>Suporte</a>
                  </div>
                 </div>
                 <div class="col-12 d-flex justify-content-end copyright mt-1">
                  <button @click="Sair()" class="btn text-danger" style="font-size: 16px">
                    Sair
                    <i class="fas fa-sign-out-alt ml-1" style="font-size: 16px"></i>
                  </button>
                 </div>
            </div>
      </span>
      <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar4" style="" aria-expanded="true">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse show" id="navbar4" style="">
        <ul class="navbar-nav m-auto text-dark" style="margin-right: 0px!important;">
          <li class="nav-item mx-4 pt-1" :class="{bordamenu: marketset}">
            <router-link class="nav-link txt-menu" to="/market"><b>Mercado</b></router-link>
          </li>
          <li class="nav-item mx-3 pt-1">
            <router-link class="nav-link txt-menu" :class="{bordamenu: indset}" to="/myindications"><b>Minhas Indicações</b></router-link>
          </li>
          <li class="nav-item mx-4 pt-1 pr-5 mr-5">
            <router-link class="nav-link txt-menu" :class="{bordamenu: resultset}" to="/results"><b>Resultados</b></router-link>
          </li>
          <li class="nav-item ml-5 mr-3 pt-1">
            <router-link v-if="bus" class="btn btn-primary w-100 border-0 btn-business" to="/business">Anunciar</router-link>
            <router-link v-else class="btn btn-primary w-100 border-0 btn-business" :to="{name: 'Dashboard', params: { id: this.tag }}">Business</router-link>
          </li>
        </ul>
          <span class="dropleft">
          <img class="ml-md-3 img-fluid d-block dropdown-toggle" src="../../assets/logo-indicou.png" style="width: 52px;z-index: 10!important;position:relative;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="dropdown-menu row shadow" style="width:270px; border-radius: 10px;z-index:5!important;position:absolute ;">
                <div class="col-12 d-flex justify-content-center">
                  <img src="../../assets/kapa2.png" class="justify-content-left mr-5" style="width: 186px;">
                </div>
                 <div class="row justify-content-center mt-2 font-poppins" style="margin-left: 0px; margin-right: 0px">
                   <div class="col-7 d-flex justify-content-center link-coala py-3 mt-1">
                    <a href="" style="font-size:15px">Preciso de Ajuda</a>
                  </div>
                  <div class="col-7 d-flex justify-content-center link-coala py-3">
                    <a href="" style="font-size:15px">Sobre Nós</a>
                  </div>
                  <div class="col-7 d-flex justify-content-center link-coala py-3">
                    <a href="" style="font-size:15px">Indicou Business</a>
                  </div>
                  <div class="col-7 d-flex justify-content-center link py-3">
                    <a href="" style="font-size:15px">Fale Conosco</a>
                  </div>
                 </div>
                 <div class="col-12 d-flex justify-content-center copyright mt-4">
                   &copy; Copyright Indicou Ltda.
                 </div>
            </div>
          </span>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth, db } from '../../firebase'
export default {
  data () {
    return {
      marketset: true,
      resultset: false,
      indset: false,
      abrir: false,
      uid: '',
      bus: true,
      business: '',
      tag: ''
    }
  },
  created () {
    var user = auth.currentUser
    if (user != null) {
      this.photo = user.photoURL
      this.name = user.displayName
      this.useruid = user.uid
    }
    const ref = db.collection('users').doc(this.useruid).get()
    ref.then(doc => {
      this.business = doc.data().business
      this.tag = doc.data().businessid
    }).then(() => {
      if (this.business === true) {
        this.bus = false
      }
    })
    if (this.$route.name === 'MyIndications') {
      this.indset = true
      this.marketset = false
      this.resultset = false
    }
    if (this.$route.name === 'Results') {
      this.resultset = true
      this.indset = false
      this.marketset = false
    }
    if (this.$route.name === 'InfoResults') {
      this.resultset = true
      this.indset = false
      this.marketset = false
    }
    if (this.$route.name === 'InfoIndications') {
      this.indset = true
      this.marketset = false
      this.resultset = false
    }
    if (this.$route.name === 'FormIndication') {
      this.indset = true
      this.marketset = false
      this.resultset = false
    }
    if (this.$route.name === 'Market') {
      this.indset = false
      this.marketset = true
      this.resultset = false
    }
    this.$root.$on('marketset:show', () => {
      this.marketset = true
    })
    this.$root.$on('marketset:hide', () => {
      this.marketset = false
    })
    this.$root.$on('indset:show', () => {
      this.indset = true
    })
    this.$root.$on('indset:hide', () => {
      this.indset = false
    })
    this.$root.$on('resultset:show', () => {
      this.resultset = true
    })
    this.$root.$on('resultset:hide', () => {
      this.resultset = false
    })
  },
  methods: {
    Sair () {
      var user = auth.currentUser
      if (user != null) {
        this.useruid = user.uid
      }
      auth.signOut()
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped lang="scss">
.dropleft:hover>.dropdown-menu {
  display: block;
}
.coala{
  margin-left: 140px;
}
.dropdown-menu.row.shadow{
  margin-top: -11px;
  margin-right: -0.70rem!important;
  margin-left: 30px;
}
.txt-menu{
  color: #333333!important;
  font-weight: 200!important;
}
.text-perfil{
  font-size: 15px!important;
  font-family: 'Avenir', 'Poppins', sans-serif;
}
.btn-business{
  width:140px!important;
  text-shadow: 1px 0px 19px #499464;
  color: #ffffff!important;
  font-weight:600;
  background-image: linear-gradient(102deg, #2eff83, #4ac9a9);
  background-position: top left;
  background-size: 100%;
  background-repeat: repeat;
  border-radius:30px;
  padding:10px 0;
}
</style>
