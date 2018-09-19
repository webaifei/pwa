<template id="main">
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img class="item" :src="image" />
            </van-swipe-item>
        </van-swipe>
        <ul
            v-waterfall-lower="loadMore"
            waterfall-disabled="disabled"
            waterfall-offset="400"
            >
            <li :key="item.id" v-for="item in list">
                <van-card
                    :title="item.title"
                    :desc="item.desc"
                    :num="item.num"
                    :price="item.price"
                    :thumb="item.thumb"
                    />
            </li>
        </ul>
    </div>
</template>

<script>
// @ is an alias to /src
import { Waterfall } from 'vant';
const cuid = require('cuid');
export default {
  data() {
    return {
      images: [
        '//m.360buyimg.com/mobilecms/jfs/t1/20/28/6321/90696/5b9f3ba2Ed1c88b47/acb5719ab32a090f.jpg!cr_1125x549_0_72',
        '//m.360buyimg.com/mobilecms/s1125x690_jfs/t1/422/7/6095/166725/5ba0a85aE4016b739/e0856889d1c4e519.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        '//m.360buyimg.com/mobilecms/jfs/t1/2866/29/4425/101141/5b9c76a9E1d2428f0/31cdeaa65e5b59e4.jpg!cr_1125x549_0_72',
        require('../assets/local-goods.jpg'),
      ],
      disabled: false,
      list: [
        {
          id: 0,
          title: '品牌电脑',
          num: 10,
          price: '2000.00',
          thumb: 'http://m.360buyimg.com/mobilecms/s300x300_jfs/t1/3902/9/5700/431086/5ba09bfcEe9576792/845a5283708bfa66.jpg!q70.jpg',

        },
        {
          id: 1,
          title: '品牌电脑',
          num: 10,
          price: '2000.00',
          thumb: 'http://m.360buyimg.com/mobilecms/s300x300_jfs/t1/4412/31/5742/365907/5ba09c13E5ce1144f/462eb3b6719addef.jpg!q70.jpg',

        },
        {
          id: 2,
          title: '品牌电脑',
          num: 10,
          price: '2000.00',
          thumb: ' http://m.360buyimg.com/mobilecms/s300x300_jfs/t1/811/22/1670/495640/5b93d82eEc2ff6f25/1ab6ec3a71674416.jpg!q70.jpg',

        },
        {
          id: 3,
          title: '品牌电脑',
          num: 10,
          price: '2000.00',
          thumb: 'http://m.360buyimg.com/mobilecms/s300x300_jfs/t1/4470/12/1485/355915/5b93f667E0d29b84a/ff104d3c72cec6cb.jpg!q70.jpg',

        },
        {
          id: 4,
          title: '品牌电脑',
          num: 10,
          price: '2000.00',
          thumb: 'http://m.360buyimg.com/mobilecms/s300x300_jfs/t19243/276/1141184961/190978/77edb1ae/5abe2782Ne9270f27.jpg!q70.jpg',

        },

      ],
    };
  },
   directives: {
    WaterfallLower: Waterfall('lower')
  },
  methods: {
    loadMore() {
      this.disabled = true;
      setTimeout(() => {
          const list = this.list.map((item, index)=> {
              const newItem = {...item};
              newItem.id =  cuid();
              return newItem;
          });
          this.list.push(...list);
        
        this.disabled = false;
      }, 500);
    },
  },
};
</script>
<style scoped>
.item {
    width: 100%;
}
</style>

