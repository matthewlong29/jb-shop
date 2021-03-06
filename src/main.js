import  "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_API_KEY,
    libraries: "places" // necessary for places input
  }
});

Vue.use(VueLazyload);

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faClock,
  faArrowLeft,
  faArrowRight,
  faCar,
  faAward,
  faCarSide,
  faTools,
  faTruckPickup,
  faMagic,
  faClipboard,
  faCheckCircle,
  faPlus,
  faMinus,
  faMapMarkerAlt,
  faUserPlus,
  faUserMinus,
  faFileDownload,
  faWrench,
  faPaintBrush,
  faSprayCan,
  faInbox,
  faSmileBeam
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPhone,
  faClock,
  faArrowLeft,
  faArrowRight,
  faCar,
  faAward,
  faCarSide,
  faTools,
  faTruckPickup,
  faMagic,
  faClipboard,
  faCheckCircle,
  faPlus,
  faMinus,
  faMapMarkerAlt,
  faUserPlus,
  faUserMinus,
  faFileDownload,
  faWrench,
  faPaintBrush,
  faSprayCan,
  faInbox,
  faSmileBeam
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
