<template>
  <div class="card mb-2 shadow-sm">
    <div class="card-body pl-5 py-2">
        <div class="row">
          <div class="pt-2 col-md-6 pl-5 py-1">
            <h5 class="pl-4 card-title mb-1 text-left">{{data.titulo}}&nbsp;</h5>
            <p class="pl-4 card-subtitle text-muted text-left">{{data.empresa}}</p>
          </div>
            <div class="text-right col-md-4 py-1">
              <router-link class="btn btn-lg btn-primary text-white fw-700 mt-1" style="font-size: 17px;width: 150px;background:linear-gradient(102deg, #2eff83, #4ac9a9);margin-top: 2px;width:150px" :to="{ name: 'InfoIndications', params:{id: this.id}}">Indicar</router-link></div>
            <div class="col-md-2" style="padding-top:8px">
            <div class="btn-group dropright">
            <button class="btn btn-link shadow-none" data-toggle="dropdown" aria-expanded="false">
              <i class="text-dark fa fa-2x fa-ellipsis-v"></i></button>
            <div class="dropdown-menu" x-placement="right-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(33px, 0px, 0px);">
              <a class="dropdown-item" href="#">Configurações</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="excluir()">Excluir</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../../firebase'
import firebase from 'firebase/app'
const fv = firebase.firestore.FieldValue

export default {
  name: 'CardDig',
  props: {
    data: { type: Object, required: true }
  },
  data () {
    return {
      id: this.data.id,
      useruid: null
    }
  },
  created () {
    var user = auth.currentUser
    if (user != null) {
      this.useruid = user.uid
    }
  },
  methods: {
    excluir () {
      db.collection('users').doc(this.useruid).collection('Forms').doc(this.id).delete()
      db.collection('mercado').doc(this.id).set({
        user: fv.arrayRemove(this.useruid)
      }, { merge: true }).then(() => {
        this.$root.$emit('indset:show')
        this.$root.$emit('marketset:hide')
        this.$router.go()
      })
    }
  }
}
</script>

<style>
.card-subtitle {
  font-size: 12px!important;
}
</style>
