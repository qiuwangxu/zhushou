# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

React-classnames库
https://blog.csdn.net/duola8789/article/details/71514450 

由于react原生动态添加多个className会报错

import style from './style.css'

<div className={style.class1 style.class2}</div>
想要得到最终渲染的效果是：

<div class='class1 class2'></div>

## 使用
import classnames from 'classnames'

<div className=classnames({
    'class1': true,
    'class2': true
    )>
</div>


├── dist/                          // 默认的 build 输出目录
|
├── mock/                          // mock 文件所在目录，基于expres存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件
├── config/
|    ├── config.ts                  // umi 配置，同 .umirc.js，二选一
|    |—— config.local.ts            // 本地临时配置这份配置会和 .umirc.ts 做 deep merge 后形成最终配置。
|—— public                          // 直接被copy到dist
|
└── src/                           // 源码目录，可选
    ├── layouts/index.tsx           // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // 临时文件目录，比如入口文件、路由等，都会被临时生成到这里。不要提交 .umi 目录到 git 仓库，他们会在 umi dev 和 umi build 时被删除并重新生成，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        |
        ├── document.ejs           // HTML 模板
        |
        ├── 404.ts                 // 404 页面
        ├── page1.tsx               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.tsx          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件

    |—— document.ejs               //约定如果这个文件存在，会作为默认模板
    ├── global.less                 // 约定的全局样式文件，自动引入
    ├── global.ts                  // 可以在这里加入 polyfill
    ├── app.ts                     // 运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等
|
├── .env                           // 环境变量
└── package.json
