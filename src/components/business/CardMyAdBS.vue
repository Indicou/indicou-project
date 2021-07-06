<template>
<div class="col-md-12 shadow border bg-white mb-2" style="border-bottom-right-radius: 10px;border-top-right-radius: 10px;border-bottom-left-radius: 10px;border-top-left-radius: 10px;">
  <div class="row align-items-center">
    <div class="col-md-3"><img class="img-fluid d-block border mx-auto my-3 rounded teste" :src="data.imagem" height="200px" width="200px"></div>
       <div class="col-md-8 pt-0">
        <h4 class="mb-0" style="font-weight:600">{{data.titulo}}</h4>
          <p>{{marca}}</p>
          <div class="row">
          <div class="col-md-3 border-left ml-2 " :key="item" v-for="(comissao, item) in data.comissao">
              <p class="lead mb-0" style="font-weight: 600;" v-money-format="comissao.valorcomissao"></p>
              <p style="font-size:14px" class="mb-0">Comissão por {{comissao.tipocomissao}}</p>
              </div>
              <div class="col-md-2"></div>
                </div>
                  <span class="badge badge-info badge-pill mt-2 mr-1" style="font-size:10px">Indicação via {{data.tipo}}</span>
                  <p class="mt-2 mb-0 pt-1">Data publicação: <span v-date-format="data.dataCriacao"></span></p>
                    </div>
                  <div class="col-md-1 text-center d-flex flex-column justify-content-center align-items-center">
                    <div class="btn-group  dropleft">
                      <button class="btn " data-toggle="dropdown"><i class="fa fa-ellipsis-v fa-2x text-body"></i></button>
                  <div class="dropdown-menu" style="">
                    <router-link v-if="ativo !== 'Ativo'" class="dropdown-item" :to="{name: 'EditAdBS', params: { id: this.idbusiness, idcard: this.id }}">
                    <i class="fa fa-cogs fa-1x text-body pr-2"></i>Editar Anúncio</router-link>
                    <div v-if="ativo !== 'Ativo'" class="dropdown-divider"></div>
                  <button class="dropdown-item" type="button" @click="excluirCard()"><i class="fa fa-trash fa-1x text-danger pr-2"></i>Excluir</button>
                <div class="dropdown-divider"></div>
                <button
                v-if="ativo !== 'Ativo'"
              @click="publicarCard()"
            class="dropdown-item"><i class="fa fa-power-off fa-1x text-body pr-2"></i>Publicar</button>
            <button
                v-else
              @click="inativarCard()"
            class="dropdown-item"><i class="fa fa-power-off fa-1x text-body pr-2"></i>Aguardando</button>
         </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { auth, db } from '../../firebase'

export default {
  name: 'CardMy',
  props: {
    data: { type: Object, required: true }
  },
  data () {
    return {
      iduser: '',
      marca: '',
      idbusiness: this.data.idbusiness,
      id: this.data.id,
      titulo: this.data.titulo,
      sobre: this.data.sobre,
      filtro: this.data.filtro,
      tiponegocio: this.data.tiponegocio,
      termo: this.data.termo,
      tipo: this.data.tipo,
      imagem: this.data.imagem,
      comissao: this.data.comissao,
      regiao: this.data.regiao,
      locais: this.data.locais,
      forms: this.data.forms,
      fisico: this.data.fisico,
      dataCriacao: this.data.dataCriacao,
      ativo: this.data.ativo,
      contagem: 0,
      user: [],
      formularios: []
    }
  },
  created () {
    this.getUser()
  },
  computed: {
    quantForm () {
      if (this.formularios !== null) {
        const quantidade = this.formularios.length
        return quantidade
      } else {
        return 0
      }
    }
  },
  methods: {
    getUser () {
      var user = auth.currentUser
      if (user != null) {
        this.iduser = user.uid
      }
      /* eslint-disable */
      const reft = db.collection('cardsbusiness').doc(this.idbusiness).collection('Forms').where('idcard', '==', this.id).get()
      reft.then(snapshot => {
        snapshot.forEach(doc => {
          this.formularios.push(doc.data())
        })
      })
    },
    publicarCard () {
      if (this.locais === undefined) {
        this.locais = []
      }
      if (this.dataCriacao === undefined) {
        this.dataCriacao = ''
      }
      if (this.formularios !== null) {
        this.contagem = this.formularios.length
      } else {
        this.contagem = 0
      }
      db.collection('mercado').doc(this.id).set({
        id: this.id,
        titulo: this.titulo,
        sobre: this.sobre,
        filtro: this.filtro,
        tiponegocio: this.tiponegocio,
        termo: this.termo,
        tipo: this.tipo,
        empresa: this.marca,
        imagem: this.imagem,
        uid: this.iduser,
        comissao: this.comissao,
        regiao: this.regiao,
        locais: this.locais,
        forms: this.forms,
        fisico: this.fisico,
        idbusiness: this.idbusiness,
        dataCriacao: this.dataCriacao,
        ativo: 'Ativo',
        contform: this.contagem
      }, { merge: true })
      db.collection('business').doc(this.idbusiness).collection('Cards').doc(this.id).set({
        ativo: 'Ativo'
      }, { merge: true }).then(() => {
        this.$router.go()
      })
    },
    inativarCard () {
      /* eslint-disable */
      db.collection('mercado').doc(this.id).set({
        ativo: 'Aguardando'
      }, { merge: true })
      db.collection('business').doc(this.idbusiness).collection('Cards').doc(this.id).set({
        ativo: 'Aguardando'
      }, { merge: true }).then(() => {
        this.$router.go()
      })
      /* eslint-enable */
    },
    excluirCard () {
      /* eslint-disable */
      db.collection('mercado').doc(this.id).set({
        ativo: 'Excluido'
      }, { merge: true })
      db.collection('business').doc(this.idbusiness).collection('Cards').doc(this.id).delete().then(() => {
        this.$router.go()
      })
      /* eslint-enable */
    }
  }
}
</script>

<style scoped lang="scss">
.teste{
  max-width: 180px;
  min-width: 180px;
  min-height: 180px;
  max-height: 180px;
  object-fit: cover;
}
</style>
