<template>
  <div class="hello">
    <my-table :table-list="tableData" :header="header"></my-table>
    <my-dialog v-model="detailVisible" >
      <el-button>sure</el-button>
      <el-button type="info">cacel</el-button>
    </my-dialog>
  </div>
</template>

<script>
import MyTable from "@/components/MyTable";
import MyDialog from "@/components/MyDialog";
export default {
  name: "About",
  components: {
    MyTable,
    MyDialog,
  },
  data() {
    return {
      header: [
        { prop: "w", label: "w" },
        {
          prop: "x",
          label: "x",
          formatter: (row) => {
            return row.x.toFixed(3);
          },
        },
        {
          prop: "d",
          label: "d",
          formatter: (row) => {
            return row.d.toFixed(2);
          },
        },
        {
          label: "操作",
          render: (h, data) => {
            return (
              <el-button
                type="primary"
                onClick={() => {
                  this.handleClick(data.row);
                }}
              >
                点我获取行数据
              </el-button>
            );
          },
        },
      ],
      tableData: [
        { w: 1, x: 99.25123, d: 0.23892 },
        { w: 1, x: 255.6666, d: 0.99134 },
      ],
      detailVisible: true,
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>
