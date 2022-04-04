export default {
  title: {
    //标题
    text: "",
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
    formatter: "地区：{b}<br/>现存确诊：{c}",
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
        fontSize: 12,
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
    top: "bottom",
    show: true,
    orient: "horizontal", //水平布局
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
    textGap: 5,
    itemGap: 5,
    textStyle: {
      fontSize: 10,
    }
  },
  toolbox: {
    show: false,
    orient: "horizontal",
    left: "right",
    top: "top",
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {},
    },
  },
}
