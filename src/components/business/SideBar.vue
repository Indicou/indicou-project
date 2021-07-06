<template>
  <header class="main-head">
      <nav class="head-nav h-100">
        <ul class="menu h-100">
          <li class="text-w">
            <router-link class="back-top" :to="{name: 'Dashboard', params: { id: this.tag }}">
              <svg class="teste icon-top margin-align2 mt-3">
                <use xlink:href="#menu-icon"></use></svg><img class="perfil" :src="this.img"/>
                <span>
          <div class="row">
            <div class="col-12 pt-3">
              <p class="text-center-adj text-top text-uppercase mb-0 fw-600">{{marca}}</p>
            </div>
            <div class="col-12">
              <p class="text-center-adj text-top fw-200" style="font-size:12px;">Administrador</p>
            </div>
          </div>
          </span>
          </router-link>
          </li>
      <!--    <li class="plus">
            <router-link :to="{name: 'CreateAdBS', params: { id: this.tag }}">
              <svg class="teste">
                <use xlink:href="#plus"></use></svg>
                <span>
                  <button type="button" class="dell-btn neon-button btn btn-dark">
                  Criar Anúncio
                  </button></span></router-link>
          </li> -->
          <li class="margin-align">
            <router-link :to="{name: 'Dashboard', params: { id: this.tag }}">
              <svg class="dash">
                <use xlink:href="#dashboard"></use></svg
              ><span class="text-center-adj">Dashboard</span></router-link
            >
          </li>
          <li>
            <router-link :to="{name: 'CreateAdBS', params: { id: this.tag }}">
              <svg class="plus">
                <use xlink:href="#plus"></use></svg
              ><span class="text-center-adj">Criar Anúncio</span></router-link
            >
          </li>
          <li>
            <router-link :to="{name: 'MyAdBS', params: { id: this.tag }}">
              <svg class="video-player">
                <use xlink:href="#play"></use></svg
              ><span class="text-center-adj">Meus Anúncios</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'ResultsBS', params: { id: this.tag }}">
              <svg class="speech-bubble">
                <use xlink:href="#megaphone"></use></svg
              ><span class="text-center-adj">Resultados</span>
            </router-link>
          </li>
          <li>
            <a href="#">
              <svg class="paper-airplane">
                <use xlink:href="#share"></use></svg
              ><span class="text-center-adj">Financeiro</span></a
            >
          </li>
          <li>
            <a href="#">
              <svg class="paper-airplane">
                <use xlink:href="#user"></use></svg
              ><span class="text-center-adj">Meu Perfil</span></a
            >
          </li>
          <li>
            <a href="#">
              <svg class="paper-airplane">
                <use xlink:href="#settings"></use></svg
              ><span class="text-center-adj">Configurações</span></a
            >
          </li>
          <li class="position-absolute mb-3" style="bottom:0!important">
            <router-link style="background-color: #464646;" :to="{name: 'Market', params: { id: this.tag }}">
              <svg class="paper-airplane pl-3" style="max-height: 37px;fill: rgb(146 143 143);margin-bottom: -18px;">
                <use xlink:href="#exit"></use></svg
              ><span class="text-center-adj text-white fw-600" style="color: rgb(202, 202, 202)!important;">indicou.me</span></router-link>
          </li>
        </ul>
      </nav>
    </header>
</template>

<script>
import { auth, db } from '../../firebase'

export default {
  name: 'SideBar',
  data () {
    return {
      tag: '',
      img: '',
      marca: ''
    }
  },
  created () {
    this.getPhoto()
  },
  methods: {
    getPhoto () {
      var user = auth.currentUser
      if (user != null) {
        this.useruid = user.uid
      }
      const ref = db.collection('users').doc(this.useruid).get()
      ref.then(doc => {
        this.tag = doc.data().businessid
      }).then(() => {
        db.collection('business').doc(this.tag).get()
          .then(doc => {
            this.img = doc.data().businessimg
            this.marca = doc.data().marca
          })
      })
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  height: 100%;
}
.hide {
  display: none;
}

.head-nav li:hover {
  background-color: #1a1a1a;
}
.margin-align{
  margin-top:80px;
}
.margin-align2{
  margin-bottom:47px!important;
}
.head-nav li:hover svg {
  fill: #7bff86;
}

.head-nav li:hover a {
  color: #7bff86;
}
.head-nav .text-w:hover {
  background-color: unset!important;
  color: white !important;
}
.head-nav .text-w:hover a {
  color: white !important;
}
.head-nav li:before {
  position: absolute;
  left: -0.925rem;
  top: 0;
  width: 0.925rem;
  height: 100%;
  content: "";
  z-index: 1;
  transition: background 400ms;
}

.head-nav ul {
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding: 0;
  list-style: none;
  margin-top: 0px!important;
}

.head-nav li {
  position: relative;
  clear: both;
  width: 100%;
  padding: 0;
  transition: background 400ms;
}

.head-nav li a {
  display: flex;
  padding-top: 9px;
  padding-bottom: 2vh;
}

.head-nav a {
  align-items: center;
  width: 100%;
  color: #fefefe;
  text-decoration: none!important;
  transition: color 400ms;
}

.head-nav a span {
  position: relative;
  display: block;
  z-index: 0;
  font-family: 'Poppins';
  text-indent: -20em;
  white-space: nowrap;
  transition: text-indent 400ms ease-in-out;
}

.head-nav svg {
  position: relative;
  max-width: 80px;
  max-height: 20px;
  z-index: 1;
  fill: #7bff86;
  transition: 400ms;
  margin: 3px 0px;
}

.dash {
  max-height: 26px!important;
}

@media screen and (max: 768px) {
  .head-nav ul {
    margin-top: 0.23125rem;
  }
  .head-nav svg {
    max-width: 20px;
  }
}

.main-head {
  position: fixed;
  bottom: 0;
  width: 83px;
  height: 98%;
  z-index: 1;
  background: #464646;
  transition: width 400ms;
  zoom: 90%!important;
  border-radius: 8px;
  margin-bottom: 9px;
  margin-left: 7px;
  font-family: 'Poppins', sans-serif !important;
  font-weight:200!important;
}

.main-head:hover {
  width: 300px;
}

.main-head:hover .head-nav .teste {
  opacity: 0!important;
}

.perfil {
  height: 90px !important;
  background-repeat: no-repeat;
  border-radius: 9px;
  width: 90px!important;
  background-position: center;
  border: 2px solid #7bff86;
  opacity: 0;
  object-fit: cover;
  margin-left: 25px;
  background-color:white
}

.main-head:hover .head-nav .perfil {
  opacity: 1;
  transition: opacity 2s!important;
  visibility: inherit;
  margin-right: 15px!important;
}

.main-head:hover .head-nav .text-top{
  opacity:1;
  transition: opacity 2s!important;
  visibility: inherit;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.text-top {
  opacity: 0;
  visibility: hidden;
}

.main-head:hover .head-nav .dell-btn {
  display: unset!important;
  transition: 2000ms!important;
}

.plus {
  max-height: 22px!important;
}

.text-center-adj {
  padding-top: 4px!important;
}

.main-head:hover+.wrap-all-the-things {
  margin-left: 271px;
  max-width: 100%;
  opacity: 0.4;
  padding-left: 0px!important;
}

/*.main-head:hover .head-nav li:nth-of-type(1) span {

}*/

.main-head:hover .head-nav li:nth-of-type(2) span {
  transition-delay: 100ms;
}

.main-head:hover .head-nav li:nth-of-type(3) span {
  transition-delay: 150ms;
}

.main-head:hover .head-nav li:nth-of-type(4) span {
  transition-delay: 200ms;
}

.main-head:hover .head-nav li:nth-of-type(5) span {
  transition-delay: 250ms;
}

.main-head:hover .head-nav li:nth-of-type(6) span {
  transition-delay: 300ms;
}

.main-head:hover .head-nav li:nth-of-type(7) span {
  transition-delay: 350ms;
}

.main-head:hover .head-nav li:nth-of-type(8) span {
  transition-delay: 400ms;
}

.main-head:hover .head-nav span {
  text-indent: 0;
}

.head-nav li:hover.plus {
  background-color: unset!important;
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

@media screen and (max: 768px) {
  .main-head {
    width: 70px;
    padding: 0 0.925rem;
  }
  .main-head .head-nav {
    padding-left: 7px;
  }
  .main-head:hover .head-nav span {
    text-indent: 1em;
  }
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
.icon-top{
  margin-right: -116px!important;
  display:unset;
  max-height: 45px!important;
}
.main-head:hover .head-nav .icon-top{
  display:none;
}

.main-head:hover .head-nav .back-top{
  height: 132px;
  border-radius: 7px;
  background-image: linear-gradient(0deg, rgb(70 70 70) 6%, rgb(123 255 134 / 51%) 157%), url(https://cdn.pixabay.com/photo/2020/04/12/20/37/abstract-5035778_960_720.jpg)!important;
  background-size: 286px!important;
  background-position-y: 133px!important;
}
.back-top{
  background:rgba(70,70,70,1)!important;
  border-radius: 8px;
}
</style>
