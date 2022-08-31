<template>
  <div class="home">
    <my-bubble
      :title="popTitle"
      :content="popContent"
      :placement="popPlacement"
    >
      <button>点击弹出气泡卡片</button>
    </my-bubble>

    <my-input
      inputName="订单号码"
      v-model="value"
      :clearable="true"
      placeholder="请输入订单号"
    />

    <span>{{ value }}</span>
    <my-copy-icon :text="value" />

    <my-button @click="buttonFunc" />

    <my-date-time-picker pickerName="时间范围" v-model="orderTimer" />

    <my-input-number v-model="numberValue" style="width: 200px" />

    <el-select v-model="selectValue" placeholder="请选择">
      <my-option-plus
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :width="200"
      >
      </my-option-plus>
    </el-select>
  </div>
</template>

<script>
// @ is an alias to /src
import MyBubble from "@/components/MyBubble";
import MyInput from "@/components/MyInput";
import MyButton from "@/components/MyButton";
import MyInputNumber from "@/components/MyInputNumber";
import MyDateTimePicker from "@/components/MyDateTimePicker";
import MyOptionPlus from "@/components/MyOptionPlus";
import MyCopyIcon from "@/components/MyCopyIcon";
export default {
  name: "Home",
  data: () => ({
    popTitle: "我是标题",
    popContent:
      "气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容啊啊的范德萨发大水发射点发射点的撒飞洒地方撒地方爱的色放",
    popPlacement: "bottom",
    value: "123",
    numberValue: 123,
    orderTimer: [1659715200000, 1662134400000],
    selectValue: null,
    options: [
      {
        value: "选项1",
        label: "黄金糕",
      },
      {
        value: "选项2",
        label: "双皮奶特别好吃，以顺德的最出名，推荐尝试",
      },
      {
        value: "选项3",
        label: "蚵仔煎",
      },
      {
        value: "选项4",
        label: "龙须面",
      },
      {
        value: "选项5",
        label: "北京烤鸭",
      },
    ],
  }),
  components: {
    MyBubble,
    MyInput,
    MyButton,
    MyInputNumber,
    MyDateTimePicker,
    MyOptionPlus,
    MyCopyIcon,
  },
  watch: {
    value() {
      console.log(this.value);
    },
    orderTimer() {
      console.log(this.orderTimer);
    },
    numberValue() {
      console.log(this.numberValue);
    },
  },
  methods: {
    buttonFunc() {
      console.log(123321);
    },
  },
};
</script>
<style lang="sass" scoped></style>
