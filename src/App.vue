<template>
  <div id="app">
    <layout-notification/>
    <div v-if="business">
      <menu-bar v-if="showMenu"/>
      <router-view/>
    </div>
    <div v-else>
      <side-bar/>
      <div class="wrap-all-the-things bg-light">
        <top-bar/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/business/SideBar.vue'
import TopBar from './components/business/TopBar.vue'
import LayoutNotification from './components/global/LayoutNotification'
import MenuBar from './components/global/MenuBar.vue'

export default {
  components: {
    LayoutNotification,
    MenuBar,
    SideBar,
    TopBar
  },
  data () {
    return {
      showMenu: false,
      business: true
    }
  },
  created () {
    this.$root.$on('Business::hide', () => {
      this.business = true
    })
    this.$root.$on('Business::show', () => {
      this.business = false
    })
    this.$root.$on('MenuBar::show', () => {
      this.showMenu = true
    })
    this.$root.$on('MenuBar::hide', () => {
      this.showMenu = false
    })
  }
}
</script>
