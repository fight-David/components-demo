<template>
  <div>
    <el-button
      v-bind="$attrs"
      v-on="$listeners"
      icon="el-icon-search"
      type="primary"
      >{{ btnName }}</el-button
    >
  </div>
</template>
<script>
export default {
  name: "MyButton",
  props: { btnName: { type: String, default: "搜索" } },
};
</script>
