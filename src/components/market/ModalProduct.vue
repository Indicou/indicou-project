<template>
  <div class="modal fade my-3 font-poppins" :id="id" >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"></h5>
          <button type="button" id="close" class="close" data-dismiss="modal"> <span>×</span> </button>
        </div>
        <div class="modal-body px-0 pb-0">
          <div class="row">
            <div class="col-md-5" style=""><img class="img-fluid d-block mx-auto fit" :src="imagem" style="" width="70%" height="50%"></div>
            <div class="col-md-7 pr-5 pt-2" style="">
              <div class="row">
                <div class="col-md-12 text-right"><span class="badge badge-pill text-right badge-info">Indicação via {{tipo}}<span></span></span></div>
              </div>
              <h5 class="text-right mb-0 pt-1 font-poppins" style="font-size:24px;">{{titulo}}</h5>
              <p class="text-right text-info fw-300">{{empresa}}</p>
              <div class="row mt-5 pt-3">
                <div class="mt-2 col-md-8">
                  <p class="text-right mb-0" style="font-size:15px;margin-top:3px">Comissão por {{comissao[0].tipocomissao}}<span></span></p>
                  <p class="lead text-right py-0 my-0" style="font-weight:900; font-size:26px;line-height:25px" v-money-format="comissao[0].valorcomissao"></p>
                </div>
                <div class="text-right py-1 mt-2 col-md-4">
                  <button type="button"  class="btn btn-dark btn-block btn-lg" :disabled="loading" @click="indicar()" data-dismiss="modal">
                    <template v-if="loading">
                      <i class="fas fa-spinner fa-spin"></i>
                    </template>
                    <template v-else>
                      Indicar
                    </template>
                </button>
                  </div>
              </div>
            </div>
          </div>
          <div class="card text-center mt-3">
            <div class="card-header pt-0">
              <ul class="nav nav-tabs justify-content-center card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link text-dark active" data-toggle="tab" data-target="#tabone" href="">Sobre</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="" data-toggle="tab" data-target="#tabtwo">Comissões</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" data-toggle="tab" data-target="#tabthree" href="">Termos</a>
                </li>
              </ul>
            </div>
            <div class="card-body px-5">
              <div class="tab-content mt-0">
                <div class="tab-pane fade active show" id="tabone" role="tabpanel">
                  <p class="">{{sobre}}</p>
                </div>
                <div class="tab-pane fade" id="tabtwo" role="tabpanel">
                  <div class="table-responsive">
                    <table class="table table-striped mx-auto mb-0">
                      <thead class="text-center text-white table-muted table-dark">
                        <tr>
                          <th scope="col">Tipo</th>
                          <th scope="col" class="">Valor</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr :key="item" v-for="(comissao, item) in comissao">
                          <td>{{comissao.tipocomissao}}</td>
                          <td>R$ {{comissao.valorcomissao}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane fade" id="tabthree" role="tabpanel">
                  <p class="">{{termo}}</p>
                </div>
              </div>
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
  data () {
    return {
      useruid: null,
      ver: true,
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
      loading: false,
      dataCriacao: null
    }
  },
  created () {
    var user = auth.currentUser
    if (user != null) {
      this.useruid = user.uid
    }
    this.$root.$on('showid', payload => {
      this.comissao = payload.comissao
      this.empresa = payload.empresa
      this.filtro = payload.filtro
      this.fisico = payload.fisico
      this.forms = payload.forms
      this.id = payload.id
      this.imagem = payload.imagem
      this.locais = payload.locais
      this.regiao = payload.regiao
      this.sobre = payload.sobre
      this.termo = payload.termo
      this.tipo = payload.tipo
      this.tiponegocio = payload.tiponegocio
      this.titulo = payload.titulo
      this.idbusiness = payload.idbusiness
      this.dataCriacao = payload.dataCriacao
    })
  },
  methods: {
    indicar () {
      this.loading = true
      const array = this.useruid
      db.collection('mercado').doc(this.id).set({
        user: fv.arrayUnion(array)
      }, { merge: true }).then(() => {
        document.getElementById('close').click()
        this.$router.push({ name: 'MyIndications' })
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
