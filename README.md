# node-weixin-coupon
此模块为微信卡券api接口开发，依赖[node-weixin](https://github.com/node-weixin)项目下的工具子项目

node-form-validator

node-weixin-request

node-weixin-util

##Install
```sh
npm install --save node-weixin-coupon
```

##Usage
举个栗子：创建一张卡券

```js
var nodeWeixinCoupon = require('node-weixin-coupon');
var weixinCoupon = nodeWeixinCoupon.coupon;
var weixinCouponTypes = nodeWeixinCoupon.types;

var app = {
    id: process.env.APP_ID,
    secret: process.env.APP_SECRET,
    token: process.env.APP_TOKEN,
    auth: {
        accessToken: ''
    }
};
var base_info = {...} // 卡券基础参数包

var coupon = weixinCoupon.build_coupon(weixinCouponTypes.card_type.CASH, base_info,  {least_cost: 10000, reduce_cost: 10000});

weixinCoupon.coupon.create(app, coupon, function(err, resp){
    //创建卡券成功
})


```

## License

MIT © [lgyhitler]