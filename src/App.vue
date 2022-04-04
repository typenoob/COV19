<template>
  <div class="map">
    <h1 align="center">全国疫情数据地图</h1>
    <van-grid direction="vertical" :column-num="3">
      <statistical-card
        title="现存确诊"
        :count="numberToFormatString(currentConfirmedCount)"
        :countIncr="numberToFormatString(currentConfirmedIncr)"
      ></statistical-card>
      <statistical-card
        title="境外输入"
        :count="numberToFormatString(suspectedCount)"
        :countIncr="numberToFormatString(suspectedIncr)"
      ></statistical-card>
      <statistical-card
        title="现存无症状"
        :count="numberToFormatString(seriousCount)"
        :countIncr="numberToFormatString(seriousIncr)"
      ></statistical-card>
      <statistical-card
        title="累计确诊"
        :count="numberToFormatString(confirmedCount)"
        :countIncr="numberToFormatString(confirmedIncr)"
      ></statistical-card>
      <statistical-card
        title="累计死亡"
        :count="numberToFormatString(deadCount)"
        :countIncr="numberToFormatString(deadIncr)"
      ></statistical-card>
      <statistical-card
        title="累计治愈"
        :count="numberToFormatString(curedCount)"
        :countIncr="numberToFormatString(curedIncr)"
      ></statistical-card>
    </van-grid>
    <!--准备挂载Echarts的容器-->
    <div id="covid-map" style="width: 350px; height: 400px"></div>
  </div>
</template>

<script>
import echarts from "echarts"; //引入echarts
import "echarts/map/js/china"; //引入中国地图
import axios from "axios"; //引入axios
import StatisticalCard from "./components/StatisticalCard.vue";
import { Grid } from "vant";
import option from "./map";
export default {
  name: "App",
  components: {
    [Grid.name]: Grid,
    StatisticalCard,
  },
  data() {
    return {
      covidMap: "",
      currentConfirmedCount: "",
      suspectedCount: "",
      seriousCount: "",
      confirmedCount: "",
      deadCount: "",
      curedCount: "",
      currentConfirmedIncr: "",
      suspectedIncr: "",
      seriousIncr: "",
      confirmedIncr: "",
      deadIncr: "",
      curedIncr: "",
    };
  },
  mounted() {
    // //钩子函数，生命周期为挂载完成后，Dom操作一般是在mounted钩子函数中进行。
    this.getData();
    // 基于准备好的dom，初始化echarts实例
    this.covidMap = echarts.init(document.getElementById("covid-map"));
  },
  methods: {
    getData() {
      //获取网络接口数据
      axios
        .get(
          "https://raw.githubusercontent.com/typenoob/navigation/master/src/data/area.json"
        )
        .then((response) => {
          option.series[0].data = response.data.map((item) => {
            return { name: item.name, value: item.currentConfirmedCount };
          });
          this.covidMap.setOption(option);
        })
        .catch(function (error) {
          console.log(error);
        });
      axios
        .get(
          "https://raw.githubusercontent.com/typenoob/navigation/master/src/data/overall.json"
        )
        .then((response) => {
          this.currentConfirmedCount = response.data.currentConfirmedCount;
          this.suspectedCount = response.data.suspectedCount;
          this.seriousCount = response.data.seriousCount;
          this.confirmedCount = response.data.confirmedCount;
          this.deadCount = response.data.deadCount;
          this.curedCount = response.data.curedCount;
          this.currentConfirmedIncr = response.data.currentConfirmedIncr;
          this.suspectedIncr = response.data.suspectedIncr;
          this.seriousIncr = response.data.seriousIncr;
          this.confirmedIncr = response.data.confirmedIncr;
          this.deadIncr = response.data.deadIncr;
          this.curedIncr = response.data.curedIncr;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    numberToFormatString(number) {
      //数字转换为字符串
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
<style scoped>
#covid-map {
  margin: 0 auto;
}
</style>