<template>
  <div>
    <div class="hide">
      <svg-icons/>
    </div>
    <!-- //main-head -->
      <div class="container-fluid bg-light">
        <preloader></preloader>
      <div class="row">
        <div class="col-md-12 pt-3 px-3 mb-4" >
            <h2 class="text-muted pl-4 py-2 mx-4" style="background:linear-gradient(89deg, rgb(239 239 239 / 35%) 0%, rgb(248, 249, 250) 100%);font-weight: 400;margin-left: 4px;border: 1px solid rgb(242 242 242);;border-radius: 6px;">
              <b><i class="fas fa-1x fa-shopping-bag pr-2" style="color: #91f89a;-webkit-text-stroke: 1px rgb(57, 57, 57);"></i>Meus Anúncios</b>
            </h2>
        </div>

      </div>
      <div class="row">
        <div class="col-md-12 px-5 mb-5" style="padding-bottom: 227px;">
          <ul class="nav nav-tabs">
            <li class="nav-item bg-unset"> <a href="" class="active nav-link text-dark" data-toggle="tab" data-target="#tabone">Publicados</a> </li>
            <li class="nav-item mx-3"> <a href="" class="text-dark nav-link" data-toggle="tab" data-target="#tabtwo">Aguardando Publicação</a> </li>
            <li class="nav-item" style=""> <a class="text-dark nav-link" href="" data-toggle="tab" data-target="#tabthree">Inativos</a> </li>
            <li class="nav-item mx-3"> <a href="" class="text-dark nav-link" data-toggle="tab" data-target="#tabfour">Expirados</a> </li>
          </ul>
          <div class="tab-content mt-2">
            <div class="tab-pane fade show active pt-3" id="tabone" role="tabpanel">
              <p v-if="cardsAtivo.length === 0" class="text-center text-muted lead my-5 py-5"><i class="fas text-muted fa-3x fa-heart-broken"></i><br>Ops... Não há nenhum Anúncio Aqui!</p>
              <div class="row px-3">
                <cardmy
                :key="item"
                :data="index"
                v-for="(index, item) in cardsAtivo"/>
              </div>
            </div>
            <div class="tab-pane fade" id="tabtwo" role="tabpanel">
              <p v-if="cardsAguardando.length === 0" class="text-center text-muted lead my-5 py-5"><i class="fas text-muted fa-3x fa-heart-broken"></i><br>Ops... Não há nenhum Anúncio Aqui!</p>
              <div v-else class="row px-3">
                <cardmy
                :key="item"
                :data="index"
                v-for="(index, item) in cardsAguardando"/>
              </div>
            </div>
            <div class="tab-pane fade" id="tabthree" role="tabpanel">
              <p class="text-center text-muted lead my-5 py-5"><i class="fas text-muted fa-3x fa-heart-broken"></i><br>Ops... Não há nenhum Anúncio Aqui!</p>
            </div>
            <div class="tab-pane fade mb-5" id="tabfour" role="tabpanel">
              <p class="text-center text-muted lead my-5 py-5"><i class="fas text-muted fa-3x fa-heart-broken"></i><br>Ops... Não há nenhum Anúncio Aqui!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

</template>

<style scoped>
html,
body {
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
}
.btn:focus{
  box-shadow: unset!important;
}

</style>

<script>
import { auth, db } from '../firebase'
import SvgIcons from '../components/global/SvgIcons'
import cardmy from '../components/business/CardMyAdBS.vue'
import Preloader from '../components/global/Preloader.vue'

export default {
  components: {
    SvgIcons,
    cardmy,
    Preloader
  },
  name: 'MyAdBS',
  data () {
    return {
      iduser: '',
      idbusiness: '',
      naotemAnuncio: false,
      cardsAguardando: [],
      cardsAtivo: [],
      marca: '',
      tag: ''
    }
  },
  created () {
    this.$root.$emit('Business::show')
    this.$root.$emit('MenuBar::hide')
    this.idbusiness = this.$route.params.id
    this.getUser()
  },
  methods: {
    getUser () {
      var user = auth.currentUser
      if (user != null) {
        this.iduser = user.uid
      }
      db.collection('business').doc(this.idbusiness).get()
        .then(doc => {
          this.marca = doc.data().marca
        })
      this.getCards()
      this.getCardsAtivo()
    },
    getCards () {
      const reft = db.collection('business').doc(this.idbusiness).collection('Cards').where('ativo', '==', 'Aguardando').get()
      reft.then(snapshot => {
        snapshot.forEach(doc => {
          this.cardsAguardando.push(doc.data())
        })
      })
    },
    getCardsAtivo () {
      const ref = db.collection('business').doc(this.idbusiness).collection('Cards').where('ativo', '==', 'Ativo').get()
      ref.then(snapshot => {
        snapshot.forEach(doc => {
          this.cardsAtivo.push(doc.data())
        })
      })
    }
  }
}
</script>
