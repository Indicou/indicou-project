<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="logo"></div>
      <div class="circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'preloader',
  data () {
    return {
      show: true
    }
  },
  mounted () {
    if (this.show) this.showToggle()
  },
  methods: {
    showToggle () {
      setTimeout(() => {
        this.show = false
      }, 800)
    }
  }
}
</script>

<style scoped lang="scss">
.preloader{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.685);
  z-index: 9999;
  .logo{
    width: 80px;
    height: 80px;
    background: url('../../assets/Logoteste.png') center center;
    background-repeat: no-repeat;
  }
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 1s;
  .logo {
    animation-name: scaleOut;
    animation-duration: 1s
  }
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}
  .circles{
    display: flex;
    margin-top: 0.5rem;
    .circle{
      width: 1.5rem;
      height: 1.5rem;
      margin: .75rem;
      background-color: hsl(142, 90%, 61%);
      border-radius: 50%;
      animation-name: scaleIn;
      animation-duration: .7s;
      transform: scale(0);
      &:nth-child(1){
        animation-delay: 0s
      }
      &:nth-child(2){
        animation-delay: .05s
      }
      &:nth-child(3){
        animation-delay: .1s
      }
      &:nth-child(4){
        animation-delay: .15s
      }
      &:nth-child(5){
        animation-delay: .2s
      }
    }
  }

@keyframes scaleOut{
  0%{
    transform: scale(1)
  }
  100%{
    transform: scale(0)
  }
}
@keyframes scaleIn{
  0%{
    transform: scale(0)
  }
  100%{
    transform: scale(1)
  }
}
</style>
