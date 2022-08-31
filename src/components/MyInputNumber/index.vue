<template>
  <el-input-number
    id="InputNumber"
    style="width: 100%"
    v-model="insideValue"
    v-bind="$attrs"
    :controls="controls"
    v-on="$listeners"
  />
</template>

<script>
export default {
  // 让父组件 v-model 传参
  model: {
    prop: "numberValue",
    event: "change",
  },
  props: {
    numberValue: {
      type: [Number, String],
      default: undefined,
    },
    // 默认不显示控制按钮，这个可以根据实际情况做调整
    controls: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    insideValue: {
      get() {
        return this.numberValue;
      },
      set(newV) {
        typeof newV === "number"
          ? this.$emit("change", newV)
          : this.$emit("change", undefined);
      },
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
#InputNumber {
  /deep/ .el-input__inner {
    text-align: left;
  }
}
</style>
