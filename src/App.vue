<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
    <van-tabbar
      v-model="active"
      @change="changeTabbar(active)"
      active-color="#2d95ff"
      v-if="footShow"
      style="z-index:1000;"
    >
      <van-tabbar-item :icon="item.icon" v-for="(item, index) in tarList" :key="index">{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      tarList: [
        {
          name: "中查QC",
          icon: "clock-o"
        },
        {
          name: "尾查QC",
          icon: "todo-list-o"
        },
        {
          name: "外发QC",
          icon: "orders-o"
        },
        {
          name: "成/半成品外发",
          icon: "logistics"
        },
        {
          name: "关于我们",
          icon: "wap-nav"
        }
      ],
      footShow: true //$route.meta.footShow
    };
  },
  watch: {
    // 监听路由变化
    // $route(to, from) {
    //   let ThisPage = to.name;
    //   if (
    //     ThisPage == "Profit" ||
    //     ThisPage == "My" ||
    //     ThisPage == "Invest"
    //   ) {
    //     this.footShow = true;
    //     if (ThisPage == "Invest") {
    //       this.active = 0;
    //     } else if (ThisPage == "Profit") {
    //       this.active = 1;
    //     } else if (ThisPage == "My") {
    //       this.active = 2;
    //     }
    //   } else {
    //     this.footShow = false;
    //   }
    // }
  },
  methods: {
    changeTabbar(active) {
      console.log(active);
      // switch (active) {
      //   case 0:
      //     this.$router.push({ name: "Invest" });
      //     break;
      //   case 1:
      //     this.$router.push({ name: "Profit" });
      //     break;
      //   case 2:
      //     this.$router.push({ name: "My" });
      //     break;
      //   case 3:
      //     break;
      // }
    },
    initFootShow: function() {
      console.info("路由：", this.$route);
      let ThisPage = this.$route.name;
      var that = this;
      if (ThisPage == "Profit" || ThisPage == "My" || ThisPage == "Invest") {
        this.footShow = true;
        if (ThisPage == "Profit") {
          that.active = 1;
        } else if (ThisPage == "My") {
          that.active = 2;
        } else {
          that.active = 0;
        }
      } else {
        this.footShow = false;
      }
    }
  },
  created: function() {
    //this.initFootShow();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background: white;
  /* margin-top: 60px; */
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.1s;
}
</style>
