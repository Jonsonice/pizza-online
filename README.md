# pizza-online

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

需要注意的坑

在 npm run build 之前要将 config/index.js 里边 build 配置里边的 assetsPublicPath: '/' 改成 assetsPublicPath: './' 将 webpack.prod.conf.js 中的 removeAttributeQuotes 改为 false# pizza-online
