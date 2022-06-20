import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue3, IconsPlugin } from "bootstrap-vue-3";
import "bootstrap-icons/font/bootstrap-icons.css";
import Multiselect from "vue-multiselect";
import "v3-infinite-loading/lib/style.css"; //required if you're not going to override d

// register globally
createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .use(IconsPlugin)
  .use("multiselect", Multiselect)
  .mount("#app");
