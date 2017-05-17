var consto = require('consto');
module.exports = {
    card_type: consto([
        'GROUPON',          // 团购
        'CASH',             // 现金
        'DISCOUNT',         // 折扣
        'GIFT',
        'GENERAL_COUPON',    // 通用
        'MEMBER_CARD'        // 会员卡
    ]),
    code_type: consto([
        'CODE_TYPE_TEXT',           //文本
        'CODE_TYPE_BARCODE',        //一维码
        'CODE_TYPE_QRCODE',         //二维码
        'CODE_TYPE_ONLY_QRCODE',    // 二维码无code显示
        'CODE_TYPE_ONLY_BARCODE',   // 一维码无code显示
        'CODE_TYPE_NONE'            // 不显示code和条形码类型
    ]),
    date_type: consto([
        'DATE_TYPE_FIX_TERM',       // 固定时长
        'DATE_TYPE_FIX_TIME_RANGE'  // 固定日期区间
    ]),
    color: consto([
        'Color010',
        'Color020',
        'Color030',
        'Color040',
        'Color050',
        'Color060',
        'Color070',
        'Color080',
        'Color081',
        'Color082',
        'Color090',
        'Color100',
        'Color101',
        'Color102'
    ]),
    landing_scene: consto([
        'SCENE_NEAR_BY',          // 附近
        'SCENE_MENU',             // 自定义菜单
        'SCENE_QRCODE',           // 二维码
        'SCENE_ARTICLE',          // 公众号文章
        'SCENE_H5',               //H5页面
        'SCENE_IVR',              // 自动回复
        'SCENE_CARD_CUSTOM_CELL'  // 卡券自定义cell
    ]),
    card_status: consto([
        'CARD_STATUS_NOT_VERIFY', // 待审核
        'CARD_STATUS_VERIFY_FAIL',// 审核失败
        'CARD_STATUS_VERIFY_OK',  // 通过审核
        'CARD_STATUS_USER_DELETE',// 卡券被商户删除
        'CARD_STATUS_DISPATCH'    // 投放过的卡券
    ])
};