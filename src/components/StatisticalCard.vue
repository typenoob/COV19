<template>
  <van-grid-item style="height: 95px">
    <p style="font-size: 12px">
      较昨日<em style="color: rgb(247, 76, 49)">{{
        distinctPlusMinus(countIncr)
      }}</em>
    </p>
    <strong style="color: rgb(247, 76, 49); font-size: 25px">{{ count }}</strong
    ><span style="font-weight: bold">{{ title }}</span>
  </van-grid-item>
</template>
<script>
import { GridItem } from "vant";
export default {
  name: "StatisticalCard",
  components: {
    [GridItem.name]: GridItem,
  },
  props: {
    title: String,
    count: String,
    countIncr: String,
  },
  methods: {
    distinctPlusMinus(num) {
      num = this.formatedStringToNumber(num);
      num = num > 0 ? "+" + num : num;
      return this.numberToFormatedString(num);
    },
    formatedStringToNumber(str) {
      return Number(str.replace(/,/g, ""));
    },
    numberToFormatedString(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

