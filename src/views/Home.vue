<template>
  <div class="home">
    <Bubble :title="popTitle" :content="popContent" :placement="popPlacement">
      <button>点击弹出气泡卡片</button>
    </Bubble>
  </div>
</template>

<script>
// @ is an alias to /src
import Bubble from "@/components/Bubble";

export default {
  name: "Home",
  data: () => ({
    popTitle: "我是标题",
    popContent:
      "气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容气泡内容啊啊的范德萨发大水发射点发射点的撒飞洒地方撒地方爱的色放",
    popPlacement: "bottom",
  }),
  components: {
    Bubble,
  },
};
</script>
<style lang="sass" scoped></style>
