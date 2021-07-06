<template>
  <div>
    <preloader></preloader>
    <div class="hide">
      <svg-icons/>
    </div>
      <div class="container-fluid">
        <form @submit.prevent="envioForm()">
        <div class="row">
          <div class="col-md-12 pt-3 px-3 mb-4">
           <!-- <ul class="breadcrumb bg-light border-muted border-bottom">
              <li class="breadcrumb-item"><u><router-link :to="{name: 'Dashboard', params: { id: this.idbusiness }}" class="text-dark">Dashboard</router-link></u></li>
              <li class="breadcrumb-item active">Criação de Anúncio</li>
            </ul>-->
            <h2 class="text-muted pl-4 py-2 mx-4" style="background:linear-gradient(89deg, rgb(239 239 239 / 35%) 0%, rgb(248, 249, 250) 100%);font-weight: 400;margin-left: 4px;border: 1px solid rgb(242 242 242);;border-radius: 6px;">
              <b><i class="fas fa-1x fa-puzzle-piece pr-2" style="color: #91f89a;-webkit-text-stroke: 1px rgb(57, 57, 57);"></i>Criar Anúncio de Indicação</b>
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 px-5">
            <div class="pl-3">
              <div class="form-group">
                <label>Categoria do seu negócio</label>
                <select
                  class="form-control"
                  aria-label="Default select example"
                  v-model="categoria"
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="Website">Website</option>
                  <option value="App">App</option>
                  <option value="Serv Fisico">Serviço Físico</option>
                  <option value="Serv Digital">Serviço Digital</option>
                  <option value="Estab Fisico">Estabelecimento Físico</option>
                  <option value="Prod Fisico">Produto Físico</option>
                  <option value="Prod Digital">Produto Digital</option>
                  <option value="Sistema Web">Sistema Web</option>
                  <option value="Empregos">Empregos</option>
                  <option value="Veiculos">Veículos</option>
                </select>
                <small class="form-text text-muted">A Categoria do negócio é o meio em que seu negócio realiza a conversão</small>
              </div>
            </div>
          </div>
          <div class="col-md-6 pr-5">
            <div class="form-group pr-3 mr-5">
              <label>Tipo do negócio</label>
              <select
              class="form-control"
              aria-label="Default select example"
              v-model="tiponegocio"
              required
              >
                <option value="">Selecione um Tipo</option>
                <option value="Imobiliaria">Imobiliária</option>
                <option value="Rede Social">Rede Social</option>
                <option value="Barbearia">Barbearia</option>
                <option value="Eletrodoméstico">Eletrodoméstico</option>
                <option value="E-book">E-book</option>
                <option value="Pintura">Pintura</option>
                <option value="Energia Solar">Energia Solar</option>
                <option value="Outros">Outros</option>
              </select>
              <small class="form-text text-muted">O Tipo do negócio é o ramo em que seu negócio está inserido</small>
            </div>
          </div>
        </div>
        <div class="row bg-light pl-5">
          <div class="col-11 ml-3 shadow rounded">
            <div class="row">
              <div class="border-light bg-white border-top border-bottom border-left col-md-3 py-3 pl-4 rounded-left">
                <label>Imagem do Anúncio:</label>
                <img
                  v-if="this.cardimagem == ''"
                  class="img-fluid d-block"
                  src="https://static.pingendo.com/img-placeholder-1.svg"
                  width="280px"
                  height="280px"
                />
                <img
                  v-else
                  class="img-fluid d-block testeimagem"
                  :src="this.img"
                  width="280px"
                  height="280px"
                  style="object-fit: cover;"
                />
                <input
                  class="form-control form-control-sm border-0 px-0 my-2 border-light w-75"
                  id="formFileSm"
                  type="file"
                  accept="image/jpeg"
                  @change="onFile"
                  required
                />
              </div>
              <div class="bg-white border-right border-top border-bottom border-left-0 py-4 pr-4 col-md-9 rounded-right">
                  <div class="form-group">
                    <label>Título do Anúncio:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Digite o título do Anúncio..."
                      required
                      v-model="titulo"
                    />
                  </div>
                  <div class="form-group">
                    <label>Sobre:</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Digite a descrição do Anúncio..."
                      required
                      v-model="sobre"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label>Termos:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Termos pré-definidos em Configurações..."
                      required
                      v-model="termos"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pl-5 pb-3 bg-light">
          <div class="col-md-12 pl-3 pt-4" style="">
              <div class="form-group">
                <label>O seu anúncio de Indicação é limitado para regiões específicas?</label>
              </div>
          </div>
          <div class="col-md-2 pl-3" style="">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="exampleRadios1"
                value="Sim"
                v-model="regiao"
                required
              />
              <label class="form-check-label" for="exampleRadios1"> Sim </label>
            </div>
          </div>
          <div class="col-md-6" style="">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="exampleRadios2"
                value="Não"
                checked="checked"
                v-model="regiao"
                required
              />
              <label class="form-check-label" for="exampleRadios2">
                Não (Minha Indicação deve ser disponível no Brasil inteiro)
              </label>
            </div>
          </div>
        </div>
        <div class="row bg-light">
          <div class="col-md-4 pl-5">
            <div class="form-group pl-3">
              <label>Estado:</label>
              <b-form-select
              class="form-control"
              aria-label="Default select example"
              :disabled="regiao == 'Não'"
              v-model="estado"
              :options="estados"
              >
              </b-form-select>
            </div>
          </div>
          <div class="col-md-4 pl-3 pr-3">
            <div class="form-group">
              <label>Cidade:</label>
              <b-form-select
              class="form-control"
              aria-label="Default select example"
              :disabled="regiao == 'Não'"
              v-model="cidade"
              :options="cidades"
              >
              </b-form-select>
            </div>
          </div>
          <div class="col-md-4 pt-4">
            <button
              type="button"
              class="btn btn-primary"
              style="width: 180px; margin-top: 8px"
              :disabled="regiao == 'Não'"
              @click="addTodo()"
              >Adicionar</button
            >
          </div>
        </div>
        <div class="row bg-light">
          <div class="col-md-12 px-5">
            <div class="form-group px-3">
              <label>Localizações adicionadas:</label>
              <div class="card" style="background-color: #fcfcfc">
                <div class="card-body" style="height: 130px">
                  <transition-group tag="ol" name="list" class="todo-list">
                  <span class="badge badge-info badge-pill mr-1" :key="index+1" v-for="(todo, index) in todos">
                    <span class="bad">{{ todo.cidade }} | {{ todo.estado }}</span>
                    <span
                      class="ml-2 lixeira"
                      style="cursor: pointer"
                      @click="deleteTodo(index)"
                      >X</span>
                    </span>
                  </transition-group>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-3 px-5 bg-light">
          <div class="col-md-2">
            <p class="text-left pl-2"><b>Tipos de Indicação:</b></p>
          </div>
          <div class="px-0 col-md-3">
            <div class="md-checkbox form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                v-model="tipo"
                value="form"
                required
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">Indicação via Formulário</label>
            </div>
          </div>
          <div class="col-md-7">
            <div class="md-checkbox form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                disabled
                value="link"
                required
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">Indicação via Link</label>
            </div>
          </div>
        </div>
        <div class="row pl-5 bg-light">
          <div class="col-11 ml-3 shadow rounded">
            <div class="row">
              <div class="col-md-4 px-0 border-light border-top border-left py-3 pl-4 pr-3 bg-white">
                <div class="form-group">
                  <label>Campos Disponíveis</label>
                  <b-form-select
                    class="form-control"
                    aria-label="Default select example"
                    :options="campos"
                    v-model="campo"
                  ></b-form-select>
                    <small class="form-text text-muted">Campos disponíveis pré-definidos pela Indicou</small>
                </div>
              </div>
              <div class="bg-white col-md-8 pt-3 border-light border-top border-right pl-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  href="#"
                  style="width: 180px; margin-top: 32px"
                  @click="addTodo1()"
                  >Adicionar</button
                >
              </div>
              <div class="bg-white col-md-12 px-0 border-light border-left border-right px-4">
                <div class="form-group">
                  <label>Deseja criar campos novos?</label>
                </div>
              </div>
              <div class="bg-white col-md-2 px-0 border-light border-left pb-3 pl-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="exampleRadios3"
                    value="Sim"
                    v-model="newCamp"
                  />
                  <label class="form-check-label" for="exampleRadios3">
                    Sim
                  </label>
                </div>
              </div>
              <div class="bg-white col-md-10 border-light border-right">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="exampleRadios4"
                    value="Não"
                    checked="checked"
                    v-model="newCamp"
                  />
                  <label class="form-check-label" for="exampleRadios4">
                    Não (Quero utilizar os campos da Indicou)
                  </label>
                </div>
              </div>
              <div class="bg-white col-md-4 px-0 border-light border-left pb-3 pl-4 pr-3">
                <div class="form-group">
                  <label>Nome do Campo:</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Digite o nome do Campo..."
                    required="required"
                    :disabled="newCamp == 'Não'"
                    v-model="nameCamp"
                  />
                </div>
              </div>
              <div class="bg-white col-md-3 pl-2 pr-3">
                <div class="form-group">
                  <label>Tipo do Campo:</label>
                  <select
                    class="form-control"
                    aria-label="Default select example"
                    :disabled="newCamp == 'Não'"
                    v-model="typeCamp"
                  >
                    <option value="">
                      Selecione o tipo
                    </option>
                    <option value="Texto">Texto</option>
                    <option value="Número">Número</option>
                  </select>
                </div>
              </div>
              <div class="bg-white col-md-5 pt-4 border-light border-right pl-2">
                <button
                  class="btn btn-primary"
                  type="button"
                  style="width: 180px; margin-top: 8px"
                  :disabled="newCamp == 'Não'"
                  @click="addTodo2()"
                  >Criar e Adicionar</button
                >
              </div>
              <div class="bg-white col-md-12 border-light pb-3 px-4 border-left border-right border-bottom">
                <div class="form-group">
                  <label>Campos adicionadas:</label>
                  <div class="card" style="background-color: #fcfcfc">
                    <div class="card-body" style="height: 120px">
                      <transition-group tag="ol" name="list" class="todo-list">
                      <span class="badge badge-info badge-pill mr-1" :key="index+1" v-for="(formpersonalizado, index) in formpersonalizado">
                        <span class="bad">{{ formpersonalizado.campo}}
                          <span v-if="formpersonalizado.tipo !== undefined"> | {{formpersonalizado.tipo}}</span>
                        </span>
                        <span
                          class="ml-2 lixeira"
                          style="cursor: pointer"
                          @click="deleteTodo1(index)"
                          >X</span>
                        </span>
                      </transition-group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-2 bg-light pl-5">
          <div class="col-11 ml-3 shadow rounded">
            <div class="row">
              <div class="col-md-4 border-light border-top border-left py-3 pl-4 pr-3 bg-white">
                <div class="form-group">
                  <label>Tipos de Comissão:</label>
                  <b-form-select
                    class="form-control"
                    aria-label="Default select example"
                    :options="tipocomissao"
                    v-model="valuecomissao"
                  ></b-form-select>
                  <small class="form-text text-muted">Comissões disponíveis pré-definidas pela Indicou</small>
                </div>
              </div>
              <div class="bg-white col-md-3 pt-3 border-light border-top pl-2 pr-3">
                <div class="form-group">
                  <label>Valor(R$):</label>
                  <money
                    type="text"
                    class="form-control"
                    placeholder="Digite o valor..."
                    v-model="valorcomissao"
                    v-bind="money"
                  />
                </div>
              </div>
              <div class="bg-white col-md-5 pt-3 border-light border-top border-right pl-2">
                <button
                  class="btn btn-primary"
                  style="width: 180px; margin-top: 32px"
                  @click="saveComission()"
                  type="button"
                  >Adicionar</button>
              </div>
              <div class="bg-white col-md-12 px-0 border-light border-left border-right px-4">
                <div class="form-group">
                  <label>Deseja criar um novo tipo de comissão?</label>
                </div>
              </div>
              <div class="bg-white col-md-2 px-0 border-light border-left pb-3 pl-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="exampleRadios5"
                    value="Sim"
                    v-model="testecomissao"
                  />
                  <label class="form-check-label" for="exampleRadios5">
                    Sim
                  </label>
                </div>
              </div>
              <div class="bg-white col-md-10 border-light border-right">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="exampleRadios6"
                    value="Não"
                    v-model="testecomissao"
                  />
                  <label class="form-check-label" for="exampleRadios6">
                    Não (Já estão disponíveis as comissões que preciso)
                  </label>
                </div>
              </div>
              <div class="bg-white col-md-4 px-0 border-light border-left pb-3 pl-4 pr-3">
                <div class="form-group">
                  <label>Nome do Tipo de Comissão:</label>
                  <input
                   :disabled="testecomissao == 'Não'"
                    type="text"
                    class="form-control"
                    placeholder="Digite o nome da comissão..."
                    required="required"
                    v-model="valuecomissao1"
                  />
                </div>
              </div>
              <div class="bg-white col-md-3 pl-2 pr-3">
                <div class="form-group">
                  <label>Valor da comissão(R$):</label>
                  <money
                    :disabled="testecomissao == 'Não'"
                    type="text"
                    class="form-control"
                    placeholder="Digite o valor..."
                    required="required"
                    v-model="valorcomissao1"
                    v-bind="money"
                  />
                </div>
              </div>
              <div class="bg-white col-md-5 pt-4 border-light border-right pl-2">
                <button
                  :disabled="testecomissao == 'Não'"
                  type="button"
                  class="btn btn-primary"
                  style="width: 180px; margin-top: 8px"
                  @click="saveComission1()"
                  >Criar e Adicionar</button
                >
              </div>
              <div class="bg-white col-md-12 border-light pb-3 px-4 border-left border-right border-bottom">
                <table class="table table-striped" v->
                  <thead>
                    <tr class="">
                      <th scope="col" class="text-left">
                      </th>
                      <th scope="col" class="">Tipo de Comissão</th>
                      <th scope="col" class="">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody :key="index+1" v-for="(guardcomissao, index) in guardcomissao">
                    <tr>
                      <td>
                        <i style="font-size: 20px; cursor: pointer" class="lixeira fa fa-times" @click="deleteComission()"></i>
                      </td>
                      <td>{{ guardcomissao.tipocomissao }}</td>
                      <td v-money-format="guardcomissao.valorcomissao"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="container-fluid mt-3">
            <div class="row">
              <div class="col-md-12 d-flex justify-content-center pb-5 bg-light">
                <button class="logbtn text-center btn-lg w-25 my-3" :disabled="loading">
                    <template v-if="loading">
                      Criando Anúncio... <i class="fas fa-spinner fa-spin"></i>
                    </template>
                    <template v-else>
                      Salvar e Criar Anúncio
                    </template>
                </button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
  </div>
</template>

<script>
import { auth, db, st } from '../firebase'
import SvgIcons from '../components/global/SvgIcons'
import brasil from '../assets/brasil.json'
import Preloader from '../components/global/Preloader.vue'

export default {
  components: {
    SvgIcons,
    Preloader
  },
  name: 'CriarAnuncio',
  data () {
    return {
      money: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: false
      },
      iduser: '',
      idbusiness: '',
      categoria: '',
      tiponegocio: '',
      img: '',
      titulo: '',
      sobre: '',
      termos: '',
      tipo: ['form'],
      testetipo: null,
      regiao: 'Não',
      estado: null,
      cidade: null,
      todos: [],
      cidades: [],
      brasil,
      estados: [
        { value: null, text: 'Selecione um estado' },
        { value: 'AC', text: 'Acre' },
        { value: 'AL', text: 'Alagoas' },
        { value: 'AP', text: 'Amapá' },
        { value: 'AM', text: 'Amazonas' },
        { value: 'BA', text: 'Bahia' },
        { value: 'CE', text: 'Ceará' },
        { value: 'DF', text: 'Distrito Federal' },
        { value: 'ES', text: 'Espírito Santo' },
        { value: 'GO', text: 'Goiás' },
        { value: 'MA', text: 'Maranhão' },
        { value: 'MT', text: 'Mato Grosso' },
        { value: 'MS', text: 'Mato Grosso do Sul' },
        { value: 'MG', text: 'Minas Gerais' },
        { value: 'PA', text: 'Pará' },
        { value: 'PB', text: 'Paraíba' },
        { value: 'PR', text: 'Paraná' },
        { value: 'PE', text: 'Pernambuco' },
        { value: 'PI', text: 'Piauí' },
        { value: 'RJ', text: 'Rio de Janeiro' },
        { value: 'RN', text: 'Rio Grande do Norte' },
        { value: 'RS', text: 'Rio Grande do Sul' },
        { value: 'RO', text: 'Rondônia' },
        { value: 'RR', text: 'Roraima' },
        { value: 'SC', text: 'Santa Catarina' },
        { value: 'SP', text: 'São Paulo' },
        { value: 'SE', text: 'Sergipe' },
        { value: 'TO', text: 'Tocantins' }
      ],
      campo: null,
      campos: [
        { value: null, text: 'Selecione o campo dejado' },
        { value: 'Nome Completo', text: 'Nome Completo' },
        { value: 'Idade', text: 'Idade' },
        { value: 'CPF', text: 'CPF' },
        { value: 'Email', text: 'Email' },
        { value: 'Telefone Residêncial', text: 'Telefone Residêncial' },
        { value: 'Celular', text: 'Celular' },
        { value: 'Data', text: 'Data' },
        { value: 'CEP', text: 'CEP' },
        { value: 'Estado', text: 'Estado' },
        { value: 'Cidade', text: 'Cidade' },
        { value: 'Bairro', text: 'Bairro' },
        { value: 'Endereço', text: 'Endereço' },
        { value: 'Número Residêncial', text: 'Número Residêncial' },
        { value: 'Complemento', text: 'Complemento' }
      ],
      formpersonalizado: [
        { campo: 'Nome Completo' },
        { campo: 'Celular' },
        { campo: 'Email' }
      ],
      newCamp: 'Não',
      nameCamp: '',
      typeCamp: '',
      valuecomissao: null,
      valorcomissao: 0,
      valuecomissao1: null,
      valorcomissao1: 0,
      guardcomissao: [],
      tipocomissao: [
        { value: null, text: 'Selecione o tipo da Comissão' },
        { value: 'Cadastro', text: 'Cadastro' },
        { value: 'Reserva', text: 'Reserva' },
        { value: 'Venda', text: 'Venda' },
        { value: 'Aluguel', text: 'Aluguel' },
        { value: 'Conversão', text: 'Conversão' },
        { value: 'Lead', text: 'Lead' },
        { value: 'Agendamento', text: 'Agendamento' },
        { value: 'Número de Indicações', text: 'Número de Indicações' },
        { value: 'Conversa', text: 'Conversa' }
      ],
      testecomissao: 'Não',
      marca: '',
      filename: '',
      loading: false,
      url: null,
      cardimagem: '',
      fisico: false,
      aleatorio: '',
      valorcomissao4: '',
      valorcomissao3: ''
    }
  },
  watch: {
    estado: function () {
      this.cidades = brasil[this.estado].cidades
    }
  },
  created () {
    this.getUser()
    this.$root.$emit('Business::show')
    this.$root.$emit('MenuBar::hide')
    this.idbusiness = this.$route.params.id
  },
  methods: {
    onFile (event) {
      this.cardimagem = event.target.files[0]
      this.filename = new Date().getTime() + this.cardimagem.name
      this.img = URL.createObjectURL(this.cardimagem)
    },
    async envioForm () {
      this.loading = true

      if (this.cardimagem) {
        const snapshot = await st.ref(this.iduser).child(this.filename).put(this.cardimagem)

        this.url = await snapshot.ref.getDownloadURL()
      }

      if (this.categoria === 'Prod Fisico' || this.categoria === 'Estab Fisico' || this.categoria === 'Serv Fisico') {
        this.fisico = true
      }
      if (this.tipo[0] === 'form') {
        this.testetipo = 'form'
      }
      this.dataCriacao = new Date().getTime()
      var crypto = require('crypto')
      var aleatorio = 'a' + crypto.randomBytes(8).toString('hex')
      this.idcard = aleatorio
      db.collection('business').doc(this.idbusiness).collection('Cards').doc(this.idcard).set({
        id: this.idcard,
        titulo: this.titulo,
        sobre: this.sobre,
        filtro: this.categoria,
        tiponegocio: this.tiponegocio,
        termo: this.termos,
        tipo: this.testetipo,
        empresa: this.marca,
        imagem: this.url,
        uid: this.iduser,
        idbusiness: this.idbusiness,
        comissao: this.guardcomissao,
        regiao: this.regiao,
        locais: this.todos,
        forms: this.formpersonalizado,
        fisico: this.fisico,
        ativo: 'Aguardando',
        dataCriacao: this.dataCriacao,
        contform: 0
      }, { merge: true }).then(() => {
        this.$router.push({ name: 'MyAdBS', params: { id: this.idbusiness } })
      })
    },
    saveComission1 () {
      if (this.valorcomissao1 >= 0 && this.valuecomissao1 !== null) {
        this.guardcomissao.push({
          tipocomissao: this.valuecomissao1,
          valorcomissao: this.valorcomissao1
        })
        this.valuecomissao1 = null
        this.valorcomissao1 = null
        this.testecomissao = 'Não'
      } else {
        this.$root.$emit('Notification::show', {
          message: 'Escolha um tipo de comissão e digite o valor',
          type: 'danger'
        })
      }
    },
    saveComission () {
      if (this.valorcomissao >= 0 && this.valuecomissao !== null) {
        this.guardcomissao.push({
          tipocomissao: this.valuecomissao,
          valorcomissao: this.valorcomissao
        })
        this.valuecomissao = null
        this.valorcomissao = null
      } else {
        this.$root.$emit('Notification::show', {
          message: 'Escolha um tipo de comissão e digite o valor',
          type: 'danger'
        })
      }
    },
    deleteComission: function (index) {
      this.guardcomissao.splice(index, 1)
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1)
    },
    addTodo () {
      if (this.estado !== null && this.cidade !== null) {
        this.todos.push({
          estado: this.estado,
          cidade: this.cidade
        })
        this.estado = null
        this.cidade = null
      } else {
        this.$root.$emit('Notification::show', {
          message: 'Escolha um estado e cidade',
          type: 'danger'
        })
      }
    },
    deleteTodo1: function (index) {
      this.formpersonalizado.splice(index, 1)
    },
    addTodo1 () {
      if (this.campo !== null) {
        this.formpersonalizado.push({
          campo: this.campo
        })
        this.campo = null
      } else {
        this.$root.$emit('Notification::show', {
          message: 'Escolha um campo do formulário',
          type: 'danger'
        })
      }
    },
    addTodo2 () {
      if (this.typeCamp !== '' && this.nameCamp !== '') {
        this.formpersonalizado.push({
          campo: this.nameCamp,
          tipo: this.typeCamp
        })
        this.nameCamp = ''
        this.typeCamp = ''
        this.newCamp = 'Não'
      } else {
        this.$root.$emit('Notification::show', {
          message: 'Digite o nome do campo e escolha o tipo',
          type: 'danger'
        })
      }
    },
    getUser () {
      var user = auth.currentUser
      if (user != null) {
        this.iduser = user.uid
      }
      const ref = db.collection('users').doc(this.iduser).get()
      ref.then(doc => {
        this.tag = doc.data().businessid
      }).then(() => {
        db.collection('business').doc(this.tag).get()
          .then(doc => {
            this.marca = doc.data().marca
          })
      })
    }
  }
}
</script>

<style lang="scss">
$color-main: #4fc08d;

.lixeira:hover{
  color: lightgreen;
}

.todo-list {
  $block: #{&};
  width: 100%;
  padding: 0 1rem;
  flex: 1;
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em;
    margin-bottom: .5em;
    border-radius: 3px;
    transition: 200ms;
    color: $color-main;
    &:last-child { margin-bottom: 0; }
    &.complete {
      color: lightgreen;
      #{$block}__item-content {
        &:after {
          background: lightgreen;
        }
      }
    }
  }
}

.list-move,
.list-leave-active,
.list-enter-active {
  transition: 500ms cubic-bezier(.87,-.41,.19,1.44);
}
.list-enter,
.list-leave-active {
  transform: translate(100%, 0);
  opacity: 0;
}

html,
body {
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
  font-weight: 300 !important;
}
.hide {
  display: none;
}

.dash {
  max-height: 26px!important;
}

.plus {
  margin-bottom: 40px;
}

.text-center-adj {
  padding-top: 4px!important;
}

.dell-btn {
  background-color: #7bff86!important;
  border: none;
  color: black!important;
  font-weight: bold;
  width: 160px;
  height: 42px;
  margin-left: -18px;
  margin-top: 13px;
}

.wrap-all-the-things {
  min-height: 100%;
  height: 100%;
  padding-left: 74px;
  margin-top: 0;
  background-size: cover;
  background-position: center center;
  transition: transform 400ms, opacity 400ms;
}

@media screen and (max: 480px) {
  .wrap-all-the-things {
    padding-left: 70px;
  }
}

.badge-info {
  color: #ffffff!important;
  background-color: #a5a5a5!important;
}
</style>

<style scoped>
.testeimagem{
  max-width: 280px;
  max-height: 280px;
  min-width: 280px;
  min-height: 280px;
  object-fit: cover;
}

small{
  font-weight: 300 !important;
}

.form-control{
  font-weight: 300 !important;
}
</style>
