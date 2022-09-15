import Vue from 'vue'
import App from './App.vue'

import "@fontsource/roboto-slab"
import "@fontsource/roboto/100.css"

// BOOTSTRAP START

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

//BOOTSTRAP END

// FONTAWESOME START

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faCartShopping)
library.add(faChevronLeft)
library.add(faChevronRight)
library.add(faInstagram)


/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

//FONTAWESOME END

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
