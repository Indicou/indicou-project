<template>
<div class="col-lg-3 py-2 px-2">
  <div class="card shadow">
    <div class="card-body px-4 pt-4 border-0 font-poppins" style="box-shadow: 0px 0px #333;background-image: linear-gradient(to bottom, #fdfcfc, #fdfcfc);background-position: top left;background-size: 100%;background-repeat: repeat;border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom-right-radius: 10px;border-bottom-left-radius: 10px;">
      <img class="img-fluid d-block mb-3 mx-auto rounded-circle shadow teste" :src="data.imagem" width="170">
      <h6 class="text-left text-muted font-poppins card-product fw-500"><b>{{data.titulo}}</b></h6>
      <p class="mb-0 text-right text-muted" style="font-size:13px">Comissão por <span>{{data.comissao[0].tipocomissao}}</span></p>
      <p class="text-right pt-0 mb-0 mt-0" style="color: #656565 !important;">
        <span style="font-weight:800;font-size:25px" v-money-format="data.comissao[0].valorcomissao"></span>
      </p>
      <a :data-target="'#'+data.id" @click="enviarid()" data-toggle="modal" class="py-2 btn btn-dark w-100 mt-2 border-0" style="border-radius:20px;text-shadow: 1px 0px 19px rgb(73 148 100);color: #ffffff!important;font-weight:800;background-image: linear-gradient(102deg, #2eff83, #2eff83);background-position: top left;background-size: 100%;background-repeat: repeat;">INDICAR</a>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    data: { type: Object, required: true }
  },
  data () {
    return {
      id: this.data.id
    }
  },
  created () {
  },
  methods: {
    enviarid () {
      const ativo = this.data.ativo
      const comissao = this.data.comissao
      const empresa = this.data.empresa
      const filtro = this.data.filtro
      const fisico = this.data.fisico
      const forms = this.data.forms
      const id = this.data.id
      const imagem = this.data.imagem
      const locais = this.data.locais
      const regiao = this.data.regiao
      const sobre = this.data.sobre
      const termo = this.data.termo
      const tipo = this.data.tipo
      const tiponegocio = this.data.tiponegocio
      const titulo = this.data.titulo
      const idbusiness = this.data.idbusiness
      const dataCriacao = this.data.dataCriacao
      this.$root.$emit('showid', {
        ativo,
        comissao,
        empresa,
        filtro,
        fisico,
        forms,
        id,
        imagem,
        locais,
        regiao,
        sobre,
        termo,
        tipo,
        tiponegocio,
        titulo,
        idbusiness,
        dataCriacao
      })
    }
  }
}
</script>

<style scoped>

.teste{
  min-width: 170px;
  min-height: 170px;
  max-width: 170px;
  max-height: 170px;
  object-fit: cover;
}

</style>
