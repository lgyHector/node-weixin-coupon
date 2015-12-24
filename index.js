'use strict';
var validation = require('./conf/validation');
var request = require("node-weixin-request");
var util = require("node-weixin-util");
var v = require('node-form-validator');

var baseUrl = 'https://api.weixin.qq.com/card/'
var uploadUrl = 'https://api.weixin.qq.com/cgi-bin/media/'

//FIXME: 暂时不依赖settings模块
module.exports = {
    coupon: {
        get: function(app, card_id, cb){
            var url = baseUrl + 'get' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            request.json(url, {card_id: card_id}, cb)
        },
        remove: function(app, card_id, cb){
            var url = baseUrl + 'delete' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            request.json(url, {card_id: card_id}, cb)
        },
        create: function(app, data, cb){
            var url = baseUrl + 'create' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            request.json(url, {card: data}, cb)
        },
        update: function(app, data, cb){
            var url = baseUrl + 'update' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            request.json(url, data, cb)
        },
        upload_logo: function(app, path, cb){
            var url = uploadUrl + 'uploadimg' + '?' +util.toParam({
                    access_token: app.auth.accessToken
                })
            request.file(url, path, cb);
        },
        landing_page: function(app, data, cb){
            var url = baseUrl + 'landingpage/create' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            var error = {}
            if(!v.validate(data, validation.coupon.landing.create, error)){
                throw new Error(JSON.stringify(error))
                return;
            }
            request.json(url, data, cb)
        },
        qrcode: function(app, data, cb){
            var url = baseUrl + 'qrcode/create' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            request.json(url, data, cb)
        },
        query: function(app, card_id, code, cb){
            var url = baseUrl + 'code/get' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            request.json(url, {
                card_id: card_id,
                code: code,
                check_consume: true
            }, cb)
        },
        consume: function(app, card_id, code, cb){
            var url = baseUrl + 'code/consume' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            var data = {
                code: code
            }
            if(card_id) data.card_id = card_id
            request.json(url, data, cb);
        },
        decrypt: function(app, encrypt_code, cb){
            var url = baseUrl + 'code/decrypt' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            request.json(url, {encrypt_code: encrypt_code}, cb)
        },
        user_getcard_list: function(app, openid, card_id, cb){
            var url = baseUrl + 'user/getcardlist' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            var data = { openid: openid }
            if(card_id) data.card_id = card_id
            request.json(url, data, cb);
        },
        batch_get: function(){

        },
        paycell: function(){

        },
        modify_stock: function(app, card_id, value, cb){
            var url = baseUrl + 'modifystock' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            var data = { card_id: card_id }
            value >=0 ? data.increase_stock_value = value
                : data.reduce_stock_value = Math.abs(value)
            request.json(url, data, cb)
        },
        code_update: function(){

        },
        unavailable: function(app, card_id, code, cb){
            var url = baseUrl + 'code/unavailable' + '?' + util.toParam({
                    access_token: app.auth.accessToken
                })
            var data = {
                code: code
            }
            if(card_id) data.card_id = card_id
            request.json(url, data, cb)
        },
        get_card_bizuin_info: function(){

        },
        get_card_cardinfo: function(){

        },
        get_cardmember_cardinfo: function(){

        },

        color: {
            "Color010": "Color010",
            "Color020": "Color020",
            "Color030": "Color030",
            "Color040": "Color040",
            "Color050": "Color050",
            "Color060": "Color060",
            "Color070": "Color070",
            "Color080": "Color080",
            "Color081": "Color081",
            "Color082": "Color082",
            "Color090": "Color090",
            "Color100": "Color100",
            "Color101": "Color101",
            "Color102": "Color102"
        },
        card_type: {
            "GROUPON": "GROUPON", // 团购
            "CASH": "CASH", // 现金
            "DISCOUNT": "DISCOUNT", // 折扣
            "GIFT": "GIFT",
            "GENERAL_COUPON": "GENERAL_COUPON"// 通用
        },
        code_type: {
            "CODE_TYPE_TEXT": "CODE_TYPE_TEXT",//文本
            "CODE_TYPE_BARCODE": "CODE_TYPE_BARCODE",//一维码
            "CODE_TYPE_QRCODE": "CODE_TYPE_QRCODE",//二维码
            "CODE_TYPE_ONLY_QRCODE": "CODE_TYPE_ONLY_QRCODE",// 二维码无code显示
            "CODE_TYPE_ONLY_BARCODE": "CODE_TYPE_ONLY_BARCODE", // 一维码无code显示
            "CODE_TYPE_NONE": "CODE_TYPE_NONE" // 不显示code和条形码类型
        },
        date_type: {
            "DATE_TYPE_FIX_TERM": "DATE_TYPE_FIX_TERM",// 固定时长
            "DATE_TYPE_FIX_TIME_RANGE": "DATE_TYPE_FIX_TIME_RANGE" //固定日期区间
        },
        landing_scene: {
            "SCENE_NEAR_BY": "SCENE_NEAR_BY", // 附近
            "SCENE_MENU": "SCENE_MENU", // 自定义菜单
            "SCENE_QRCODE": "SCENE_QRCODE",// 二维码
            "SCENE_ARTICLE": "SCENE_ARTICLE",// 公众号文章
            "SCENE_H5": "SCENE_H5", //H5页面
            "SCENE_IVR": "SCENE_IVR", // 自动回复
            "SCENE_CARD_CUSTOM_CELL": "SCENE_CARD_CUSTOM_CELL" // 卡券自定义cell
        }
    },
    validate:  function(coupon_info, coupon_type){
          var error = {}
          if(v.validate(coupon_info, validation.coupon.create[coupon_type], error)
              && v.validate(coupon_info.base_info, validation.coupon.create.base_info, error)
              && v.validate(coupon_info.base_info.sku, validation.coupon.create.sku, error)
              && v.validate(coupon_info.base_info.date_info, validation.coupon.create.data_info, error)){
              if(coupon_info.base_info.date_info.type === this.coupon.date_type.DATE_TYPE_FIX_TERM){
                  if(coupon_info.base_info.date_info.fixed_term >= 0
                      && coupon_info.base_info.date_info.fixed_begin_term >= 0)
                      return true;
                  throw new Error("date_info.type为DATE_TYPE_FIX_TERM时,必须指定fixed_term和fixed_begin_term");
                  return false;
              }
              return true
          }
          throw new Error(JSON.stringify(error))
          return false
    },
    build_coupon: function(type, base_info){
        var _self = this;
        var coupon = null;
        if(type === 'GROUPON')
            return function(deal_detail){
                coupon = {
                    card_type: 'GROUPON',
                    groupon: {
                        base_info: base_info,
                        deal_detail: deal_detail
                    }
                }
                if(_self.validate(coupon.groupon, 'groupon')){
                    return coupon
                }
            }
        if(type === 'CASH')
            return function(least_cost, reduce_cost){
                coupon = {
                    card_type: 'CASH',
                    cash: {
                        base_info: base_info,
                        least_cost: least_cost,
                        reduce_cost: reduce_cost
                    }
                }
                if(_self.validate(coupon.cash, 'cash')){
                    return coupon
                }
            }
        if(type === 'DISCOUNT')
            return function(discount){
                coupon = {
                    card_type: 'DISCOUNT',
                    discount: {
                        base_info: base_info,
                        discount: discount
                    }
                }
                if(_self.validate(coupon.discount, 'discount')){
                    return coupon
                }
            }
        if(type === 'GIFT')
            return function(gift){
                coupon = {
                    card_type: 'GIFT',
                    gift: {
                        base_info: base_info,
                        gift: gift
                    }
                }
                if(_self.validate(coupon.gift, 'gift')){
                    return coupon
                }
            }
        if(type === 'GENERAL_COUPON')
            return function(default_detail){
                coupon = {
                    card_type: 'GENERAL_COUPON',
                    general_coupon: {
                        base_info: base_info,
                        default_detail: default_detail
                    }
                }
                if(_self.validate(coupon.general_coupon, 'general_coupon')){
                    return coupon
                }
            }
    },
    build_qrcode: function(qrcode_info){
        var qrcode = {
            action_name: 'QR_CARD'
        }
        if(qrcode_info.expire_seconds)
            qrcode.expire_seconds = qrcode_info.expire_seconds
        if(qrcode_info instanceof Array){
            qrcode.action_name = 'QR_MULTIPLE_CARD'
            qrcode.action_info = {
                multiple_card: {
                    card_list: qrcode_info
                }
            }
        }else{
            qrcode.action_info = {
                card: {
                    code: qrcode_info.code,
                    is_unique_code: qrcode_info.is_unique_code || false
                }
            }
            if(qrcode_info.card_id)
                qrcode.action_info.card.card_id = qrcode_info.card_id
            if(qrcode_info.openid)
                qrcode.action_info.card.openid = qrcode_info.openid
            if(qrcode_info.outer_id)
                qrcode.action_info.card.outer_id = qrcode_info.outer_id
            var error = {}
            if(!v.validate(qrcode.action_info.card, validation.coupon.qrcode.create, error)){
                throw new Error(JSON.stringify(error));
                return;
            }
        }
        return qrcode;
    }
}