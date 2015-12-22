'use strict';
var validation = require('./conf/validation');
var request = require("node-weixin-request");
var auth = require('node-weixin-auth');
var util = require("node-weixin-util");
var v = require('node-form-validator');

var baseUrl = 'https://api.weixin.qq.com/card/'
var uploadUrl = 'https://api.weixin.qq.com/cgi-bin/media/'

module.exports = {
    coupon: {
        create: function(app, data, cb){
            auth.determine(app, function(){
                var url = baseUrl + 'create' + '?' + util.toParam({
                        access_token: app.auth.accessToken
                    })
                var error = {};
                if(!v.validate(data, validation.coupon, error)){
                    cb(true, error)
                    return;
                }
                request.json(url, data, cb)
            })
        },
        uplogo: function(app, path, cb){
            auth.determine(app, function(){
                var url = uploadUrl + 'uploadimg' + '?' +util.toParam({
                        access_token: app.auth.accessToken
                    })
                request.file(url, path, cb);
            })
        },
        color: {
            "Color010": "#63b359",
            "Color020": "#2c9f67",
            "Color030": "#509fc9",
            "Color040": "#5885cf",
            "Color050": "#9062c0",
            "Color060": "#d09a45",
            "Color070": "#e4b138",
            "Color080": "#ee903c",
            "Color081": "#f08500",
            "Color082": "#a9d92d",
            "Color090": "#dd6549",
            "Color100": "#cc463d",
            "Color101": "#cf3e36",
            "Color102": "#5E6671"
        }

    }
}