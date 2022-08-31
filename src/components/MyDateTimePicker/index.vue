<template>
  <div class="el-input-group">
    <div class="el-input-group__prepend" v-if="pickerName">
      {{ pickerName }}
    </div>
    <el-date-picker
      v-bind="$attrs"
      value-format="timestamp"
      v-on="$listeners"
      :value="value"
      @change="change"
      :type="type"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"
    />
  </div>
</template>

<script>
export default {
  name: "MyDateTimePicker",
  props: {
    type: {
      type: String,
      default: "datetimerange",
    },
    value: {
      type: Array,
      default: () => [],
    },
    pickerName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
    };
  },
  watch: {
    value(newVal) {
      this.$emit("input", newVal);
      this.$emit("change", newVal);
    },
  },
  methods: {
    change(val) {
      this.$emit("input", val);
      this.$emit("change", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-input-group {
  line-height: normal;
  display: inline-table;
  width: auto;
  border-collapse: separate;
  border-spacing: 0;
}
</style>
