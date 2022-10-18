import { createApp } from "vue";
import "@/assets/main.css";
import App from "@/App.vue";
import router from "@/router";

const forumApp = createApp(App);
forumApp.use(router);
forumApp.mount("#app");
