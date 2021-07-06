<template>
  <div>
    <preloader></preloader>
    <div class="hide">
      <svg-icons/>
    </div>
    <div style="padding-bottom: 149px;height: 670px;" class="container-fluid bg-light font-poppins">
      <div class="row">
        <div class="col-md-12 pt-3 px-3 mb-4">
          <h2 class="text-muted pl-4 py-2 mx-4" style="background:linear-gradient(89deg, rgb(239 239 239 / 35%) 0%, rgb(248, 249, 250) 100%);font-weight: 400;margin-left: 4px;border: 1px solid rgb(242 242 242);;border-radius: 6px;">
              <b><i class="fa fa-1x fa-gift pr-2" style="color: #91f89a;-webkit-text-stroke: 1px rgb(57, 57, 57);"></i>Resultados</b>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 px-4 mb-5">
          <div class="row px-5">
            <p
            v-if="contForms === 0"
            class="justify-content-center d-flex">
              Ops... Não há nenhum resultado para mostrar no momento, aguarde seu anúncio ser indicado.
              </p>
            <cardresultdsbs
            :key="item"
            :data="index"
            v-for="(index, item) in cardsFiltro"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SvgIcons from '../components/global/SvgIcons'
import { db, auth } from '../firebase'
import cardresultdsbs from '../components/business/CardResultdsBS.vue'
import Preloader from '../components/global/Preloader.vue'

export default {
  components: {
    SvgIcons,
    cardresultdsbs,
    Preloader
  },
  name: 'ResultBs',
  data () {
    return {
      iduser: null,
      idbusiness: null,
      cardsAtivo: [],
      infoForm: []
    }
  },
  computed: {
    /* eslint-disable */
    cardsFiltro () {
      if (this.cardsAtivo !== null) {
        return this.cardsAtivo.sort(function (a, b) {
          return b.contform - a.contform
        })
      } else {
        return null
      }
    },
    contForms () {
      if (this.infoForm !== null) {
        return this.infoForm.length
      } else {
        return 0
      }
    }
    /* eslint-enable */
  },
  created () {
    this.$root.$emit('Business::show')
    this.$root.$emit('MenuBar::hide')
    this.idbusiness = this.$route.params.id
    var user = auth.currentUser
    if (user != null) {
      this.iduser = user.uid
    }
    db.collection('business').doc(this.idbusiness).get()
      .then(doc => {
        this.marca = doc.data().marca
      })
    this.getCardsAtivo()
  },
  methods: {
    getCardsAtivo () {
      const ref = db.collection('business').doc(this.idbusiness).collection('Cards').where('ativo', '==', 'Ativo').get()
      ref.then(snapshot => {
        snapshot.forEach(doc => {
          this.cardsAtivo.push(doc.data())
        })
      })
      const reft = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').get()
      reft.then(snapshot => {
        snapshot.forEach(doc => {
          this.infoForm.push(doc.data())
        })
      })
    }
  }
}

</script>

<style scoped>
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
