<!--  -->
<template>
  <el-dialog title="标题" :visible.sync="innerVisible" width="720px">
    <slot />
  </el-dialog>
</template>

<script>
import vModelDialog from "./vModelDialog.js";
export default {
  mixins: [vModelDialog],
};
</script>
