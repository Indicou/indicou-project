<template>
    <div class="py-5 back-my-indications">
      <preloader></preloader>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-tabs mb-4" style="border-bottom:none!important">
          <li class="nav-item w-25 text-center"> <a class="b30-radius nav-link text-dark active" href="" data-toggle="pill" data-target="#tabone"><i class="fas fa-globe"></i>&nbsp;Todos</a> </li>
            <li class="nav-item w-25 text-center"> <a href="" class="b30-radius nav-link text-dark" data-toggle="pill" data-target="#tabtwo"><i class="fas fa-laptop mx-1"></i>&nbsp;Digital</a> </li>
            <li class="nav-item w-25 text-center"> <a class="b30-radius nav-link text-dark" href="" data-toggle="pill" data-target="#tabtree"><i class="fa fa-suitcase mx-1"></i>&nbsp;Físico</a> </li>
          </ul>
          <div class="tab-content mt-2">
            <div class="tab-pane fade active show" id="tabone" role="tabpanel">
              <card-digital
              :data="index"
              :key="item"
              v-for="(index, item) in pageOfItems"
              />
              <div v-if="pageOfItems.lenght < 6" class="row">
                <div class="col-md-12 text-center my-4"><router-link class="btn btn-circulo btn-outline-success" to="/market"><i class="fa fa-2x fa-plus btn-icone"></i></router-link>
                  <p class="mb-0 py-1 text-muted font-poppins" style="font-size:11px">Adicionar Novo</p>
                </div>
              </div>
              <jw-pagination style="font-size: 14px;color: #7d7d7d!important;"
              class="d-flex justify-content-center mt-4" :class="{teste: soma}" :items="indicacoes" :pageSize=5 @changePage="onChangePage" :labels="customLabels" ></jw-pagination>
            </div>
            <div class="tab-pane fade show" id="tabtwo" role="tabpanel">
              <card-digital
              :data="index"
              :key="item"
              v-for="(index, item) in pageOfItems1"
              />
              <div v-if="pageOfItems1.lenght < 6" class="row">
                <div class="col-md-12 text-center my-4">
                  <router-link class="btn btn-circulo btn-outline-success" to="/market"><i class="fa fa-2x fa-plus btn-icone"></i>
                  </router-link>
                  <p class="mb-0 py-1 text-muted font-poppins" style="font-size:11px">Adicionar Novo</p>
                </div>
              </div>
              <jw-pagination style="font-size: 14px;color: #7d7d7d!important;"
              class="d-flex justify-content-center mt-4" :class="{teste: somaDigitais}" :items="indicacoesdigitais" :pageSize=5 @changePage="onChangePage1" :labels="customLabels" ></jw-pagination>
            </div>
            <div class="tab-pane fade" id="tabtree" role="tabpanel">
              <card-fisico
              :data="index"
              :key="item"
              v-for="(index, item) in pageOfItems2"
              />
              <div v-if="pageOfItems2.lenght < 6" class="row">
                <div class="col-md-12 text-center mt-2"><router-link class="btn btn-circulo btn-outline-success" to="/market"><i class="fa fa-2x fa-plus btn-icone"></i></router-link>
                  <p class="mb-0 py-1 text-muted font-poppins" style="font-size:11px">Adicionar Novo</p>
                </div>
              </div>
              <jw-pagination style="font-size: 14px;color: #7d7d7d!important;"
              class="d-flex justify-content-center mt-4" :class="{teste: somaFisicas}" :items="indicacoesfisicas" :pageSize=5 @changePage="onChangePage2" :labels="customLabels" ></jw-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
.teste{
  display: none !important;
}
    .nav-tabs .nav-link.active,
    .nav-tabs .nav-item.show .nav-link {
      background-color: #f2f2f2 !important;
    }
    .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
    border-radius: 9px!important;
    background-color: #fbfbfb!important;
    border: 1px solid #f0f0f0 !important;
}
   .back-my-indications{
    background: linear-gradient(0deg, rgb(255 254 254) 26%, rgb(84 255 154 / 88%) 290%), url(../assets/abstract-back.jpg)!important;
    background-size: 100%!important;
    height: 648px;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus{
    border-color: #e2e2e2!important;
    border-radius: 30px!important;
}
.b30-radius{
  border-radius:30px!important;
}
.nav-tabs .nav-link.active{
  border-radius:30px!important;
}
  </style>

<script>
import Preloader from '../components/global/Preloader.vue'
import CardDigital from '../components/myindications/CardDigital.vue'
import CardFisico from '../components/myindications/CardFisico.vue'
import { db, auth } from '../firebase'

const defaultStyles = {
  ul: {
    margin: 10,
    padding: 0,
    display: 'inline-block'
  },
  li: {
    listStyle: 'none',
    display: 'inline',
    textAlign: 'center'
  },
  a: {
    cursor: 'pointer',
    padding: '4px 8px',
    display: 'block',
    float: 'left'
  }
}

const customLabels = {
  first: '<<',
  last: '>>',
  previous: 'Anterior',
  next: 'Próxima'
}

export default {
  name: 'MinhasIndicacoes',
  components: {
    CardDigital,
    CardFisico,
    Preloader
  },
  data () {
    return {
      indicacoesdigitais: [],
      indicacoesfisicas: [],
      indicacoes: [],
      customLabels,
      defaultStyles,
      pageOfItems: [],
      pageOfItems1: [],
      pageOfItems2: [],
      paginacao2: false
    }
  },
  computed: {
    somaIndicacoes () {
      return this.indicacoes.length
    },
    somaFisicas () {
      if (this.indicacoesfisicas.length > 5) {
        return false
      } else {
        return true
      }
    },
    soma () {
      if (this.indicacoes.length > 5) {
        return false
      } else {
        return true
      }
    },
    somaDigitais () {
      if (this.indicacoesdigitais.length > 5) {
        return false
      } else {
        return true
      }
    }
  },
  created () {
    this.$root.$emit('MenuBar::show')
    this.$root.$emit('indset:show')
    this.$root.$emit('marketset:hide')
    this.$root.$emit('Business::hide')
    this.$root.$emit('resultset:hide')
    this.getData()
  },
  updated () {
    this.$root.$emit('MenuBar::show')
    this.$root.$emit('indset:show')
    this.$root.$emit('marketset:hide')
    this.$root.$emit('Business::hide')
  },
  methods: {
    onChangePage (pageOfItems) {
      this.pageOfItems = pageOfItems
    },
    onChangePage1 (pageOfItems1) {
      this.pageOfItems1 = pageOfItems1
    },
    onChangePage2 (pageOfItems2) {
      this.pageOfItems2 = pageOfItems2
    },
    getData () {
      var user = auth.currentUser
      if (user != null) {
        this.useruid = user.uid
      }
      const refd = db.collection('mercado').where('user', 'array-contains', this.useruid).where('fisico', '==', false).get()
      refd.then(snapshot => {
        snapshot.forEach(doc => {
          const data = {
            id: doc.id,
            titulo: doc.data().titulo,
            empresa: doc.data().empresa,
            valor: doc.data().valor,
            comissao: doc.data().comissao,
            tipo: doc.data().tipo,
            termo: doc.data().termo,
            sobre: doc.data().sobre,
            imagem: doc.data().imagem,
            fisico: doc.data().fisico
          }
          this.indicacoesdigitais.push(data)
        })
      })
      const refa = db.collection('mercado').where('user', 'array-contains', this.useruid).get()
      refa.then(snapshot => {
        snapshot.forEach(doc => {
          const data = {
            id: doc.id,
            titulo: doc.data().titulo,
            empresa: doc.data().empresa,
            valor: doc.data().valor,
            comissao: doc.data().comissao,
            tipo: doc.data().tipo,
            termo: doc.data().termo,
            sobre: doc.data().sobre,
            imagem: doc.data().imagem,
            fisico: doc.data().fisico
          }
          this.indicacoes.push(data)
        })
      })
      const reff = db.collection('mercado').where('user', 'array-contains', this.useruid).where('fisico', '==', true).get()
      reff.then(snapshot => {
        snapshot.forEach(doc => {
          const data = {
            id: doc.id,
            titulo: doc.data().titulo,
            empresa: doc.data().empresa,
            valor: doc.data().valor,
            comissao: doc.data().comissao,
            tipo: doc.data().tipo,
            termo: doc.data().termo,
            sobre: doc.data().sobre,
            imagem: doc.data().imagem,
            fisico: doc.data().fisico
          }
          this.indicacoesfisicas.push(data)
        })
      })
    }
  }
}
</script>
