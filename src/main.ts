import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router.ts'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaperPlane , faFileVideo, faFileArrowDown, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faYoutube, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons'

library.add(faPaperPlane, faFileVideo, faFileArrowDown, faCommentDots, faInstagram, faFacebook, faYoutube, faLinkedin, faTiktok)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
