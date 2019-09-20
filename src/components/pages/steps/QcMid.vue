<template>
  <div class="qc-box">
    <!-- <van-field v-model="valuePo" placeholder="查询PO" /> -->
    <div class="search-box">
      <van-search v-model="valuePo" placeholder="查询PO" show-action shape="round" @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="select-info-box">
      <van-cell title="生产线" is-link arrow-direction="down" :border="borderShow" value="请选择" />
      <van-cell title="PO列表" is-link arrow-direction="down" :border="borderShow" value="请选择" />
      <van-cell-group>
        <van-field v-model="valuePo" label="PO" placeholder="请输入PO" />
        <van-field v-model="valuePo" label="贴纸号" placeholder="请输入贴纸号" />
        <van-field v-model="valuePo" label="查片数" placeholder="请输入查片数" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valuePo: "",
      borderShow: true
    };
  },
  methods: {
    onSearch() {}
  }
};
</script>

<style lang="scss" scoped>
.qc-box {
  min-height: 100vh;
  width: 94vw;
  background: #f8f8f8;
  //   background: gray;
  padding: 0 3vw;
  .search-box {
    margin-left: 2rem;
    margin-right: 2rem;
    padding-top: 3rem;
    border-bottom: 0.1rem solid #eee;
  }
  .select-info-box {
    margin-top: 3rem;
    padding: 2rem 0;
    box-shadow: 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.1);
  }
}
</style>