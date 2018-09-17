<template>
  <div id="app">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="list"
        left-arrow
        @click-right="onClickRight"
        @click-left="onClickLeft"
        />
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    onClickRight() {
      this.$router.push('/about');
    },
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
