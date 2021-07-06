<template>
  <div class="card border-0 shadow mt-3 overflow-unset">
    <modal
    :data="data"
    :teste="statusForm"
    ></modal>
          <div class="card-header bg-white px-4 pt-2 border-left-0 border-right-0 border-top-0 border-0" id="data.idform" style="">
            <div class="row">
              <div class="col-md-3 py-1 fw-300" >
                <p  class="mb-0">ID:
                  <span v-if="data.contform < 10" class="fw-500">0{{ data.contform }}</span>
                  <span v-else class="fw-500">{{ data.contform }}</span>
                </p>
                <p class="mb-0">Nome:
                  <span :id="data.idform+'nome'" class="fw-500">{{ data.form['Nome']}}</span>
                  <i
                  :data-clipboard-target="'#'+data.idform+'nome'"
                  class="fa fa-clone ml-1"
                  aria-hidden="true"
                  v-b-tooltip.hover="'Copiar'"
                  style="cursor: pointer"></i>
                </p>
              </div>
              <div class="py-1 col-md-4 fw-300" style="padding: 6px !important">
                <p class="mb-0">E-mail:
                  <span :id="data.idform+'email'" class="fw-500">{{ data.form['Email'] }}</span>
                  <i
                  style="cursor: pointer"
                  :data-clipboard-target="'#'+data.idform+'email'"
                  v-b-tooltip.hover="'Copiar'"
                  class="fa fa-clone ml-1"
                  aria-hidden="true"></i>
                </p>
                <p class="mb-0">Telefone:
                  <span :id="data.idform+'tel'" class="fw-500">{{ data.form['Cel'] }}</span>
                  <i
                  style="cursor: pointer"
                  :data-clipboard-target="'#'+data.idform+'tel'"
                  class="fa fa-clone ml-1"
                  v-b-tooltip.hover="'Copiar'"
                  aria-hidden="true"></i></p>
              </div>
              <div class="py-2 col-md-4" style="">
                <select :disabled="data.pago === true"
                @change="enviaStatus()"
                v-model="statusForm"
                class="form-control">
                  <option value="">Selecione o Status</option>
                  <option value="Venda realizada">Venda realizada</option>
                  <option value="Conversão realizada">Conversão realizada</option>
                  <option value="Cadastro efetuado">Cadastro efetuado</option>
                  <option value="Conversa Iniciada">Conversa Iniciada</option>
                  <option value="Agendamento realizado">Agendamento realizado</option>
                  <option value="O Indicado é um lead (ficou interessado)">O Indicado é um lead (ficou interessado)</option>
                  <option value="Contato não retornou as mensagens">Contato não retornou as mensagens</option>
                  <option value="Contato não interessado">Contato não interessado</option>
                  <option value="Número de telefone não existe">Número de telefone não existe</option>
                  <option value="Indicado não atendeu o telefone">Indicado não atendeu o telefone</option>
                  <option value="Indicação fora da área de atuação da empresa">Indicação fora da área de atuação da empresa</option>
                  <option value="Indicação já realizada por outro parceiro">Indicação já realizada por outro parceiro</option>
                </select>
              </div>
              <div class="col-md-1 d-flex flex-column align-items-end justify-content-center" style="">
                <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#'+data.idform" aria-expanded="false" aria-controls="data">
                  <i class="fa fa-long-arrow-down text-muted mt-1 fa-lg" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="collapse" :id="data.idform">
            <div class="card-body px-4 pt-0">
              <div class="col-6">
              <div class="row pb-1">
                <div class="col-md-6 fw-300" v-for="(index, item) in listaForm" :key="item" style="padding: 0px !important">
                  <p  class="mb-0">{{ item }}:
                    <span :id="data.idform+item" class="fw-500">{{ index }}</span>
                    <i
                    style="cursor: pointer"
                    v-b-tooltip.hover="'Copiar'"
                    :data-clipboard-target="'#'+data.idform+item" class="fa fa-clone ml-1" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              </div>
              <div class="row border-top pt-2">
                <div class="col-md-3">
                  <p class="mb-0">Data: <span v-date-format="data.dataCriacao"></span></p>
                  <p class="mb-0">Horário: <span v-time-format="data.dataCriacao"></span></p>
                </div>
                <div class="col-md-4">
                  <p class="mb-0">Prazo para reportar:&nbsp;
                    <b v-if="statusForm !== ''" class="text-danger" style="font-weight: 800;">Já Reportado!</b>
                    <b v-if="tempoReportar == 0 && statusForm == ''" class="text-danger" style="font-weight: 800;">Acabou o Prazo!!</b>
                    <b v-if="tempoReportar != 0 && statusForm == ''" class="text-danger" style="font-weight: 800;">
                      <vac :start-time="data.dataCriacao" :end-time="tempoTeste">
                      <span
                      v-if="tempoTeste > 1"
                      slot="process"
                      slot-scope="{ timeObj }">
                      {{ `${timeObj.d} dias | ${timeObj.h}h  ${timeObj.m}m  ${timeObj.s}s`}}
                      </span>
                      <span
                      v-else
                      slot="process"
                      slot-scope="{ timeObj }">
                      {{ `${timeObj.d} dia | ${timeObj.h}h  ${timeObj.m}m  ${timeObj.s}s`}}
                      </span>
                      </vac>
                      </b>
                    </p>
                  <p class="mb-0">Quem Indicou: {{ nomeuser }}</p>
                </div>
                <div class="col-md-5">
                  <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-2 d-flex flex-column justify-content-center align-items-end px-0">
                      <a class="btn btn-warning" :href="'mailto:'+data.form['Email']+'?Subject=Indicação'"><i class="fa fa-fw fa-1x py-1 fa-envelope fa-lg"></i></a></div>
                    <div class="col-md-2 px-0 d-flex flex-column justify-content-center align-items-center">
                      <a class="btn btn-success" :href="'https://web.whatsapp.com/send?phone=55'+ foneCorreto" target="_blank">
                        <i class="fa fa-fw fa-1x py-1 fa-whatsapp fa-lg"></i>
                      </a>
                    </div>
                    <div class="col-md-4 d-flex flex-column justify-content-center align-items-center">
                      <div class="btn-group  dropleft">
                        <button class="btn dropdown-toggle btn-dark" data-toggle="dropdown" style="height:41px!important;#7bff86;padding-top:5px!important"> Exportar Dados </button>
                        <div class="dropdown-menu">
                          <button type="button" class="dropdown-item">
                            <download-csv
                            :data="readableJson"
                            :name="data.idform+'.csv'"
                            :separator-excel="true"
                            :labels="labels"
                            >
                            Exportar em CSV
                            </download-csv></button>
                          <a class="dropdown-item" href="#">Exportar em TXT</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Separated link</a>
                        </div>
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
import ClipboardJS from 'clipboard'
import moment from 'moment'
import { db } from '../../firebase'
import Modal from './Modal'
/* eslint-disable */
new ClipboardJS('.fa')
/* eslint-enable */
export default {
  name: 'CardForm',
  props: {
    data: { type: Object, required: true }
  },
  components: {
    Modal
  },
  data () {
    return {
      idform: this.data.idform,
      user: this.data.user,
      nomeuser: null,
      statusForm: this.data.vistoempresa,
      idbusiness: null,
      iduser: this.data.iduser,
      idcard: this.data.idcard,
      labels: {
        nomeUser: 'Quem Indicou',
        idform: 'IDFormulario',
        vistoempresa: 'Status Empresa',
        tipocomissao: 'Tipo da Comissao',
        valorcomissao: 'Valor da Comissao',
        StatusEmpresa: 'Status',
        comissao: 'Comissoes',
        idcard: 'IDCard',
        contform: 'IDFormulario',
        data: 'Data Criacao'
      }
    }
  },
  created () {
    this.getUser()
    this.idbusiness = this.$route.params.id
  },
  computed: {
    /* eslint-disable */
    readableJson: function() {
      const copii = jQuery.extend(true, {}, this.data)
      delete copii['comissao']
      delete copii['form']
      delete copii['IDFormulario']
      delete copii['user']
      delete copii['status']
      delete copii['idbusiness']
      copii.dataCriacao = moment(this.data.dataCriacao).format('DD/MM/YYYY')
      return [Object.assign(copii, this.data.comissao, this.data.form)]
    },
    foneCorreto () {
      if (this.data.form['Cel'] !== null) {
        const d = this.data.form['Cel'].replace('(','')
        const r = d.replace(')','')
        const a = r.replace('-','')
        const b = a.replace(' ','')
        return b
      }
      return 0
    },
    tempoReportar () {
      if (this.data.dataCriacao !== null) {
        const tempoTotal = moment(this.data.dataCriacao).add(5,'d')
        const tempo = new Date()
        const time = tempoTotal - tempo
        return moment(time).format('DD')
      }
    },
    tempoTeste () {
      const tempoTotal = moment(this.data.dataCriacao).add(5,'d')
      return tempoTotal
    },
    listaForm () {
      if (this.data.form !== null) {
        const copia = jQuery.extend(true, {}, this.data.form)
        delete copia['Nome']
        delete copia['Email']
        delete copia['Cel']
        return (copia)
      }
    }
     /* eslint-enable */
  },
  methods: {
    getUser () {
      db.collection('users').doc(this.user).get()
        .then(doc => {
          this.nomeuser = doc.data().userid
        })
    },
    enviaStatus () {
      /* eslint-disable */
      $('#'+this.idform).modal('show')
    },
    copy (ref) {
      var linhaDigitavel = this.$refs.ref
      linhaDigitavel.select()
      try {
        var successful = document.execCommand('copy')
        var msg = successful ? 'sim!' : 'não!'
        alert('Texto copiado? ' + msg)
      } catch (err) {
        alert('Opa, Não conseguimos copiar o texto, é possivel que o seu navegador não tenha suporte, tente usar Crtl+C.')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.i{
  cursor: pointer !important;
}
.overflow-unset{
overflow:unset!important;
}

</style>
