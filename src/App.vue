<template>
  <div class="map">
    <!--准备挂载Echarts的容器-->
    <div id="covid-map" style="width: 400px; height: 300px"></div>
  </div>
</template>

<script>
import echarts from "echarts"; //引入echarts
import "echarts/map/js/china"; //引入中国地图
import axios from "axios";
//ES6中let、const和var的区别,var定义的变量，作用域是整个封闭函数，是全域的；
//let定义的变量，作用域是在块级
//const用来专门声明一个常量，它跟let一样作用于块级作用域。
//配置图表，option
let option = {
  title: {
    //标题
    text: "实时疫情地图",
    x: "center", //居中
    textStyle: {
      //标题 样式
      color: "#9c0505",
    },
  },
  tooltip: {
    //提示信息
    trigger: "item", //类型
    //地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
    formatter: "地区：{b}<br/>确诊：{c}",
  },
  series: [
    //数据
    {
      type: "map", //图表的类型
      map: "china",
      data: [
        { name: "浙江", value: 200 },
        { name: "湖北", value: 20000 },
        { name: "湖南", value: 300 },
        { name: "西藏", value: 20 },
        { name: "云南", value: 300 },
      ],
      label: {
        //图形上的文本标签,用于显示数据信息
        show: true,
        color: "red",
        fontSize: 10,
      },
      zoom: 1.3, //当前视角的缩放比例。
      itemStyle: {
        //地图区域的多边形,图形样式。
        borderColor: "blue",
      },
      emphasis: {
        //高亮状态
        label: {
          //图形上的文本标签,用于显示数据信息
          color: "#055",
          fontSize: 12,
        },
        itemStyle: {
          //地图区域的多边形 图形样式。
          areaColor: "yellow",
        },
      },
    },
  ],
  visualMap: {
    //视觉地图，视觉映射组件
    type: "piecewise", //分段型
    show: true,
    pieces: [
      { min: 10000 }, // 不指定 max，表示 max 为无限大（Infinity）。
      { min: 1000, max: 9999 },
      { min: 100, max: 999 },
      { min: 10, max: 99 },
      { min: 1, max: 9 },
      { value: 0 }, // 不指定 min，表示 min 为无限大（-Infinity）。
    ],
    inRange: {
      //范围
      color: ["#fff", "#ffaa85", "#660208"],
    },
    itemWidth: 10,
    itemHeight: 10,
  },
  toolbox: {
    show: true,
    orient: "horizontal",
    left: "right",
    top: "top",
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {},
    },
  },
};

//指定模块默认输出一个data()函数，返回myEchart
export default {
  name: "App",
  data() {
    return {
      covidMap: "",
    };
  },
  mounted() {
    // //钩子函数，生命周期为挂载完成后，Dom操作一般是在mounted钩子函数中进行。
    this.getData();
    // 基于准备好的dom，初始化echarts实例
    this.covidMap = echarts.init(document.getElementById("covid-map"));
    // 使用刚指定的配置项和数据显示图表。
    //this.myEchart.setOption(option);
  },
  methods: {
    getData() {
      console.log(option.series[0]);
      //获取网络接口数据
      //jsonp('url',function(){})    //1585397547284
      // console.log(data.data.list)
      //data.data.list
      //使用js里面map()方法，循环遍历后，获取数据里面一部分值。
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
    },
  },
};
</script>
<style scoped>
#covid-map {
  margin: 0 auto;
}
</style>