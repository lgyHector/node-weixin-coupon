module.exports = {
    coupon: {
        create: {
            card_type: {
                type: "string",
                maxLength: 24,
                required: true
            },
            deal_detail: {
                type: "string",
                maxLength: 24,
                required: true
            },
            date_info: {
                type: {
                    type: "string",
                    required: true
                },
                begin_timestamp: {
                    type: "int",
                    required: true
                },
                end_timestamp: {
                    type: "int",
                    required: true
                }
            },
            sku: {
                quantity: {
                    type: "int",
                    required: true
                }
            },
            base_info: {
                logo_url: {
                    type: "string",
                    maxLength: 128,
                    required: true
                },
                code_type: {
                    type: "string",
                    maxLength: 16,
                    required: true
                },
                brand_name: {
                    type: "string",
                    maxLength: 36,
                    required: true
                },
                title: {
                    type: "string",
                    maxLength: 27,
                    required: true
                },
                sub_title: {
                    type: "string",
                    maxLength: 54,
                    required: true
                },
                color: {
                    type: "string",
                    maxLength: 16,
                    required: true
                },
                notice: {
                    type: "string",
                    maxLength: 48,
                    required: true
                },
                description: {
                    type: "string",
                    maxLength: 3072,
                    required: true
                },
                fixed_term: {
                    type: "int",
                    required: true
                },
                fixed_begin_term: {
                    type: "int",
                    required: true
                },
                end_timestamp: {
                    type: "int",
                    required: true
                },
                use_custom_code: {
                    type: 'boolean'
                },
                bind_openid: {
                    type: 'boolean'
                },
                service_phone: {
                    type: 'string',
                    maxLength: 24
                },
                location_id_list: {
                    type: 'array'
                },
                source: {
                    type: 'string',
                    maxLength: 36
                },
                custom_url_name: {
                    type: 'string',
                    maxLength: 15
                },
                center_title: {
                    type: 'string',
                    maxLength: 18
                },
                center_sub_title: {
                    type: 'string',
                    maxLength: 24
                },
                center_url: {
                    type: 'string',
                    maxLength: 128
                },
                custom_url: {
                    type: 'string',
                    maxLength: 128
                },
                custom_url_sub_title: {
                    type: 'string',
                    maxLength: 18
                },
                promotion_url_name: {
                    type: 'string',
                    maxLength: 15
                },
                promotion_url: {
                    type: 'string',
                    maxLength: 128
                },
                promotion_url_sub_title: {
                    type: 'string',
                    maxLength: 18
                },
                get_limit: {
                    type: 'int',
                    maxLength: 1
                },
                can_share: {
                    type: 'boolean'
                },
                can_give_friend: {
                    type: 'boolean'
                }
            }
        }
    },
    logo: {
        buffer: {
            required: true
        }
    }
};