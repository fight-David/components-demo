<template>
  <i
    :class="`${icon} icon-cursor`"
    title="点击复制"
    @click="handleCopy($event, text)"
  />
</template>

<script>
// 引入 clipboard.js
import Clipboard from "clipboard";
export default {
  props: {
    // 接收复制的内容
    text: {
      type: [String, Number],
      default: null,
    },
    // 默认是复制 icon,可自定义 icon
    icon: {
      type: [String],
      default: "el-icon-copy-document",
    },
    // 自定义成功提示
    message: {
      type: [String, Number],
      default: null,
    },
  },
  methods: {
    handleCopy(e, _text, message) {
      const clipboard = new Clipboard(e.target, { text: () => _text });
      const messageText = message || `复制成功：${_text}`;
      clipboard.on("success", () => {
        this.$message({ type: "success", message: messageText });
        clipboard.off("error");
        clipboard.off("success");
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        this.$message({ type: "warning", message: "复制失败，请手动复制" });
        clipboard.off("error");
        clipboard.off("success");
        clipboard.destroy();
      });
      clipboard.onClick(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-cursor {
  cursor: pointer;
}
</style>
