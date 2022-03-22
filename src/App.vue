<template>
  <router-view />
  <van-tabbar route class="tabbar">
    <van-tabbar-item
      replace
      :class="{
        chosen: isChoose('index'),
        shake: is_shaking && isChoose('index'),
      }"
      icon="home-o"
      to="index"
      @touchstart="animationStart"
      @animationend="animationEnd"
    >
      首页
    </van-tabbar-item>
    <van-tabbar-item
      replace
      :class="{
        chosen: isChoose('classification'),
        shake: is_shaking && isChoose('classification'),
      }"
      icon="filter-o"
      to="classification"
      @touchstart="animationStart"
      @animationend="animationEnd"
    >
      分类
    </van-tabbar-item>
    <van-tabbar-item
      replace
      :class="{
        chosen: isChoose('star'),
        shake: is_shaking && isChoose('star'),
      }"
      icon="star-o"
      to="star"
      @touchstart="animationStart"
      @animationend="animationEnd"
    >
      收藏
    </van-tabbar-item>
    <van-tabbar-item
      replace
      :class="{
        chosen: isChoose('profile'),
        shake: is_shaking && isChoose('profile'),
      }"
      icon="user-o"
      to="profile"
      @touchstart="animationStart"
      @animationend="animationEnd"
    >
      账户
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "App",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return { is_shaking: false };
  },
  methods: {
    sorry() {},
    isChoose: function (route) {
      if (this.$route.name == route) return true;
      else return false;
    },
    animationStart: function () {
      this.is_shaking = true;
    },
    animationEnd: function () {
      this.is_shaking = false;
    },
  },
  computed: {},
  directives: {},
};
</script>

<style>
:root {
  --chosen-color: green;
  --van-tabbar-background-color: #f7f8fa;
  --van-tabbar-item-icon-size: 36px;
  --van-tabbar-height: 70px;
  --van-tabbar-item-font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tabbbar {
  display: flex;
  justify-content: space-between;
}
.tabbar:before,
.tabbar:after {
  content: "";
}
.chosen {
  --van-tabbar-item-text-color: var(--chosen-color);
}
.shake {
  animation: shake 800ms ease-in-out;
  animation-play-state: false;
}
@keyframes shake {
  /* 水平抖动，核心代码 */
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(+2px, 0, 0);
  }
  30%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(+4px, 0, 0);
  }
  50% {
    transform: translate3d(-4px, 0, 0);
  }
}
</style>
