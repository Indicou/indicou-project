<template>
  <div class="row">
    <div class="col-md-7 pr-0 overflow-hidden">
      <p class="mt-1 mb-2 text-muted" style="font-size: 11px;font-weight:700">{{nomeUser}}
        <!--<i class="fas fa-crown pl-1 text-warning"></i>-->
        </p>
    </div>
    <div class="col-md-5 pl-0">
      <p class="mt-1 mb-2 text-right text-muted" style="font-size: 11px;font-weight:700">{{somaIndicacoes}}</p>
    </div>
  </div>
</template>

<script>
import { db } from '../../firebase'

export default {
  name: 'CardMy',
  props: {
    data: { type: Object, required: true }
  },
  data () {
    return {
      nomeUser: this.data.nomeUser,
      iduser: this.data.user,
      idcard: this.data.idcard,
      idbusiness: this.data.idbusiness,
      recebidos: []
    }
  },
  created () {
    this.getData()
  },
  computed: {
    somaIndicacoes () {
      if (this.recebidos !== null) {
        return this.recebidos.length
      } else {
        return 0
      }
    }
  },
  methods: {
    getData () {
      const ref = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').where('user', '==', this.iduser).get()
      ref.then(snapshot => {
        snapshot.forEach(doc => {
          this.recebidos.push(doc.data())
        })
      })
    }
  }
}
</script>

<style>

</style>
