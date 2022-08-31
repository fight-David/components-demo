<template>
  <el-input
    v-bind="$attrs"
    v-on="$listeners"
    v-model="inputVal"
    :placeholder="placeholder"
  >
    <template slot="prepend" v-if="inputName">{{ inputName }}</template>
  </el-input>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    value: {
      type: [Number, String, Array],
    },
    inputName: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(newV) {
        this.$emit("input", newV);
      },
    },
  },
  methods: {},
};
</script>
