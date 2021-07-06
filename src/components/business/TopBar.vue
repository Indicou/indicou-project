<template>
  <div class="container-fluid bg-light rounded">
        <div class="row">
          <div class="col-md-3 text-center pr-0" style="padding: 0.5rem 0 !important;">
            <div class="row">
              <div class="col-md-2 ml-3 px-0" style="padding-top: 6px">
                <img
                  style="
                    padding-top: 1px !important;
                    filter: opacity(0.2);
                    image-rendering: pixelated;
                  "
                  class="img-fluid d-block float-right my-1"
                  src="../../assets/logo-indicou.png"
                  width="24px"
                />
              </div>
              <div class="col-md-9 px-2" style="">
                <p
                  class="mb-0 text-left"
                  style="padding: 0.25rem 0 !important;
                    font-weight: 400;
                    color: #00000030;
                    letter-spacing: 6px;
                    font-size: 26px;">
                  BUSINESS
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 pl-1" style="padding: 0.5rem 0 !important;"></div>
          <div class="col-md-2 pr-0" style="padding-top: 0.5rem!important;">
            <p
              class="text-muted font-poppins mb-0 text-right py-1"
              style="font-weight:300;padding-top: 12px !important"
            >
              <span>Olá {{name}}!</span>
            </p>
          </div>
          <div class="col-md-1" style="padding-top: 9px !important">
            <img
              class="img-fluid d-block rounded-circle"
              style="width: 44px; border: 3px solid #7bff86" :src="photo" />
          </div>
        </div>
      </div>
</template>

<script>
import { auth } from '../../firebase'
export default {
  data () {
    return {
      abrir: false,
      uid: ''
    }
  },
  created () {
    this.getPhoto()
  },
  methods: {
    getPhoto () {
      var user = auth.currentUser
      if (user != null) {
        this.photo = user.photoURL
        this.name = user.displayName
      }
    },
    Sair () {
      var user = auth.currentUser
      if (user != null) {
        this.useruid = user.uid
      }
      auth.signOut()
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
