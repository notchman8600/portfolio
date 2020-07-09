// import {Configuration} from '@nuxt/types'
//
// const config: Configuration = {
//     mode: 'universal',
//
//     head: {
//         htmlAttrs: {
//             prefix: 'og:http://ogp.me/ns#'
//         },
//         titleTemplate: '%s | Nuxt Sample Page',
//         meta: [
//             {charset: 'utf-8'},
//             {name: 'viewport', content: 'width=device-width,initial-scale=1'}
//         ]
//     },
//
//     loading: {color: '#fff'},
//     plugins: [
//         // サーバーサイドレンダリングを切っても良いのか問題
//         {src: "@/plugins/element-ui", ssr: false},
//         {src: "@/plugins/filters.js", ssr: false}
//     ],
//     css: ["element-ui/lib/theme-chalk/index.css"],
//     build: {
//         vendor: ["axios", "element-ui", "dayjs"],
//         extend(config, ctx) {
//             if (ctx.dev && ctx.isClient) {
//                 config.module.rules.push({
//                     enforce: "pre",
//                     test: /\.(js|vue)$/,
//                     loader: "eslint-loader",
//                     exclude: /(node_modules)/
//                 });
//             }
//             config.module.rules = config.module.rules.mpa(rule => {
//                 if (rule.loader === "babel-loader") {
//                     rule.exclude = /node_modules/;
//                 }
//                 return rule;
//             })
//         }
//     }
//
// }
