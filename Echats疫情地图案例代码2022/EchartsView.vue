<template>
  <div class="about">
    <TabLayer msg="ECharts"/>
    <div id="mychart1" style="width: 100%;height:300px;"></div> <!--准备显示图表的容器-->
  </div>

</template>
<script>
// @ is an alias to /src
import TabLayer from '@/components/TabLayer.vue'
import * as echarts from 'echarts'  //引入echarts
export default {
  name: 'EchartsView',
  components: {
    TabLayer
  },
  data(){
    return {
    }
  },
  mounted(){   //钩子函数，生命周期为挂载完成后，Dom操作一般是在mounted钩子函数中进行。
    this.init();  //挂载完成，执行init
  },
  methods:{
    init(){
      // 基于准备好的dom，初始化echarts实例
      var myEchart = echarts.init(document.getElementById('mychart1'));
      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 2390, 1330, 1320],
          type: 'line'
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myEchart.setOption(option);
    }
  }

}
</script>