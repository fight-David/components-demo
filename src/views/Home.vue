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

    <my-button @click="buttonFunc" />

    <my-date-time-picker pickerName="时间范围" v-model="orderTimer" />
  </div>
</template>

<script>
// @ is an alias to /src
import MyBubble from "@/components/MyBubble";
import MyInput from "@/components/MyInput";
import MyButton from "@/components/MyButton";
import MyDateTimePicker from "@/components/MyDateTimePicker";
export default {
  name: "Home",
  data: () => ({
    popTitle: "我是标题",
    popContent:
      "气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容啊啊的范德萨发大水发射点发射点的撒飞洒地方撒地方爱的色放",
    popPlacement: "bottom",
    value: "123",
    orderTimer: [1659715200000, 1662134400000],
  }),
  components: {
    MyBubble,
    MyInput,
    MyButton,
    MyDateTimePicker,
  },
  watch: {
    value() {
      console.log(this.value);
    },
    orderTimer() {
      console.log(this.orderTimer);
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
