/*
 * @Author: liushoukun liushoukun66@gmail.com
 * @Date: 2023-12-25 23:08:04
 * @LastEditors: liushoukun liushoukun66@gmail.com
 * @LastEditTime: 2024-05-18 15:45:29
 * @FilePath: \docs\.vitepress\config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {defineConfig} from 'vitepress'
// @ts-ignore
import markdownItTextualUml from 'markdown-it-textual-uml';
// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: './docs',
    title: "RedJasmine Docs",
    description: "A VitePress Site",
    base: '/docs/',
    appearance: "dark",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: '快速入门',
                items: [
                    {text: '概述', link: '/markdown-examples'},
                    {text: '安装', link: '/api-examples'},
                    {text: '配置', link: '/api-examples'},
                    {text: '初始化', link: '/api-examples'},

                ]
            },
            {
                text: '功能',
                items: [
                    {
                        text: '商品',
                        link: '/products',
                        items: [
                            {text: '类目', link: '/products/category/'},
                            {text: '品牌', link: '/products/brands/'},
                            {text: '属性', link: '/products/property/'},
                            {text: '商品', link: '/products/product/'},
                            {text: '库存', link: '/products/stock/'},
                            {text: '系列', link: '/products/series/'},
                            {text: '卖家分类', link: '/products/seller-category/'},
                            {text: '评价', link: '/products/comment/'},
                        ]
                    },
                    {
                        text: '订单', link: '/orders/',
                        items: [
                            {text: '订单', link: '/orders/order/'},
                            {text: '售后', link: '/orders/refund/'},
                        ]
                    },
                    {text: '支付', link: '/payment'},
                    {text: '用户', link: '/user'},
                    {text: '地址', link: '/address'},
                    {
                        text: '购买', link: '/shopping/',
                        items: [
                            {text: '订单', link: '/shopping/'},
                        ]
                    },
                    {text: '客户', link: '/customer'},
                    {text: '账户', link: '/account'},
                    {text: '卡密仓库', link: '/card-key'},
                    {text: '验证码', link: '/captcha'},
                    {text: '短网址', link: '/short-url'},
                    {text: '商户', link: '/seller'},
                    {text: '内容', link: '/content'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    },
    markdown: {
        config(md) {
            md.use(markdownItTextualUml);
        },
        image: {
            // image lazy loading is disabled by default
            lazyLoading: true
        }
    }
})
