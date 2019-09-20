import Vue from "vue";
import Router from "vue-router";
import QcMid from "@/components/pages/steps/QcMid";

Vue.use(Router);

export default new Router({
  base: "/mp",

  routes: [
    {
      path: "/qcmid",
      name: "QcMid",
      component: QcMid
    },
    {
      path: "/",
      name: "QcMid",
      component: QcMid
    }
  ]
});
