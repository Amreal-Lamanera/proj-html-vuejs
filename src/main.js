import Vue from 'vue'
import App from './App.vue'

import "@fontsource/roboto-slab"
import "@fontsource/roboto/100.css"

// FONTAWESOME START

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faCartShopping)
library.add(faChevronLeft)
library.add(faChevronRight)
library.add(faChevronUp)
library.add(faInstagram)
library.add(faTwitter)
library.add(faFacebookF)
library.add(faPinterestP)


/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

//FONTAWESOME END

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
