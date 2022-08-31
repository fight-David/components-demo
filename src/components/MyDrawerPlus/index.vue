<template>
  <div id="drawerPlus">
    <el-drawer v-bind="$attrs" v-on="$listeners">
      <el-scrollbar class="scrollbar">
        <slot />
        <div class="seat"></div>
        <div class="footer">
          <slot name="footer" />
        </div>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
$height: 100px;
#drawerPlus {
  .scrollbar {
    height: 100%;
    position: relative;
    .seat {
      height: $height;
    }
    .footer {
      z-index: 9;
      box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.08);
      width: 100%;
      position: absolute;
      bottom: 0px;
      height: $height;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
