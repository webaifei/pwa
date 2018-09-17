<template id="main">
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img class="item" :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      images: [
        'https://tse2.mm.bing.net/th?id=OIP.FiE8UeJ8qGQzL3cw7eYskQHaEo&pid=Api',
        'https://tse2.mm.bing.net/th?id=OIP.Z-XiWPfJguYVQnG5KqWmXwHaEo&pid=Api',
        require('../assets/local-cat-img.jpg'),
      ],
    };
  },
};
</script>
<style scoped>
.item {
    width: 100%;
}
</style>

