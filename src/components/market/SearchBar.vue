<template>
    <div class="pt-5 pb-4" style="background-image:linear-gradient(rgb(84 255 154 / 75%), rgb(242 255 248 / 10%));background-position:top left;background-size: 100%;background-repeat: repeat;">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" style="">
            <div class="input-group w-100">
              <input type="text" class="busca form-control pl-3 border-left-0 border-bottom" id="inlineFormInputGroup" style="border-color:#e7e7e7;border-bottom-width:20px;border-top-width: 0px;box-shadow: 0px 0px #333;height: 70px;" placeholder="Estou procurando por...">
              <div class="input-group-append" style="">
                <button class="btn btn-secondary px-3" type="button" style="width: 77px!important; background-image:linear-gradient(rgb(255 255 255), rgb(255 255 255));background-position: top left;background-size: 100%;background-repeat: repeat;border-color: rgb(231 231 231);">
                  <i class="fa fa-search" style="font-size: 19px;color: #7f7f7f;"></i>&nbsp;<span style="font-weight:700" class=""></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        <div class="container mt-4 px-5">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-3 text-center">
              <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center"  :class="{active: imo}" @click="imoveis()"><i class="fa fa-home fa-lg"></i></button>
              <p class="text-center pt-1 text-dark txt-customer">Imóveis</p>
            </div>
            <div class="col-md-3 text-center">
              <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center" :class="{active: vei}" @click="veiculos()"><i class="fa fa-car fa-lg"></i></button>
              <p class="txt-customer ext-center pt-1 text-dark">Veículos</p>
            </div>
            <div class="col-md-3 text-center">
              <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center"  :class="{active: pro}" @click="prodfisico()"><i class="fa fa-cubes fa-lg"></i></button>
              <p class="txt-customer text-center pt-1 text-dark">Produtos Físicos</p>
            </div>
            <div class="col-md-3 text-center">
              <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center"  :class="{active: dig}" @click="digitais()"><i class="fa fa-home fa-laptop fa-lg"></i></button>
              <p class="txt-customer text-center pt-1 text-dark">Serviços Digitais</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="text-center col-md-3">
              <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center" :class="{active: ser}" @click="servfisico()"><i class="fa fa-briefcase fa-lg"></i></button>
              <p class="txt-customer text-center pt-1 text-dark">Serviços Físicos<br></p>
            </div>
            <div class="text-center col-md-3">
              <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center"  :class="{active: emp}" @click="empresa()"><i class="fa fa-building fa-lg"></i></button>
              <p class="txt-customer text-center pt-1 text-dark">Empresas<br></p>
            </div>
            <div class="text-center col-md-3">
              <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center"  :class="{active: ap}" @click="app()"><i class="fa fa-mobile fa-lg"></i></button>
              <p class="txt-customer text-center pt-1 text-dark">Apps/Softwares<br></p>
            </div>
            <div class="text-center col-md-3">
              <button type="button" class="btn btn-white btn-circle btn-xl btn-light text-center" :class="{active: tod}" @click="todos()"><i class="fa fa-th-large fa-lg"></i></button>
              <p class="txt-customer text-center pt-1 text-dark">Todos<br></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imo: false,
      pro: false,
      ser: false,
      vei: false,
      dig: false,
      emp: false,
      ap: false,
      tod: true
    }
  },
  methods: {
    imoveis () {
      this.tod = false
      this.imo = true
      this.pro = false
      this.ser = false
      this.dig = false
      this.emp = false
      this.ap = false
      this.vei = false
      this.$root.$emit('imoveis')
    },
    veiculos () {
      this.vei = true
      this.tod = false
      this.imo = false
      this.pro = false
      this.ser = false
      this.dig = false
      this.emp = false
      this.ap = false
      this.$root.$emit('veiculos')
    },
    prodfisico () {
      this.vei = false
      this.tod = false
      this.imo = false
      this.pro = true
      this.ser = false
      this.dig = false
      this.emp = false
      this.ap = false
      this.$root.$emit('prodfisicos')
    },
    digitais () {
      this.vei = false
      this.tod = false
      this.imo = false
      this.pro = false
      this.ser = false
      this.dig = true
      this.emp = false
      this.ap = false
      this.$root.$emit('digitais')
    },
    servfisico () {
      this.vei = false
      this.tod = false
      this.imo = false
      this.pro = false
      this.ser = true
      this.dig = false
      this.emp = false
      this.ap = false
      this.$root.$emit('servfisicos')
    },
    empresa () {
      this.vei = false
      this.tod = false
      this.imo = false
      this.pro = false
      this.ser = false
      this.dig = false
      this.emp = true
      this.ap = false
      this.$root.$emit('empresa')
    },
    app () {
      this.vei = false
      this.tod = false
      this.imo = false
      this.pro = false
      this.ser = false
      this.dig = false
      this.emp = false
      this.ap = true
      this.$root.$emit('app')
    },
    todos () {
      this.vei = false
      this.tod = true
      this.imo = false
      this.pro = false
      this.ser = false
      this.dig = false
      this.emp = false
      this.ap = false
      this.$root.$emit('todos')
    }
  }
}
</script>

<style>
.txt-customer{
  font-size:12px!important;
  font-family: 'Avenir', 'Poppins', sans-serif;
}
.btn-circle {
      width: 30px;
      height: 30px;
      text-align: center;
      padding: 6px 0;
      font-size: 12px;
      line-height: 1.428571429;
      border-radius: 15px;
    }

    .btn-circle.btn-lg {
      width: 50px;
      height: 50px;
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.33;
      border-radius: 25px;
    }

    .btn-circle.btn-xl {
      width: 70px;
      height: 70px;
      padding: 10px 16px;
      font-size: 24px;
      line-height: 1.33;
      border-radius: 35px;
    }
</style>
