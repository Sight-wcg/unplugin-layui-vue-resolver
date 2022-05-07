## layui-vue 按需引入插件示例

### 快速开始
```
// 安装依赖
pnpm install

// 运行
pnpm dev
```

### 按需导入插件说明

- 安装 `unplugin-vue-components` 和 `unplugin-auto-import` 

```
npm install -D unplugin-vue-components unplugin-auto-import unplugin-layui-vue-resolver
```

- Vite 配置
```
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { LayuiVueResolver } from 'unplugin-layui-vue-resolver'

export default {
  plugins: [
    // ...其它插件配置
    
    // 自动导入 layer-vue 相关函数,例如 指令,layer 等
    AutoImport({
      resolvers: [LayuiVueResolver()],
    }),
    // 自动解析 layui-vue 组件
    Components({
      resolvers: [LayuiVueResolver()],
    }),
  ],
}

```

- LayuiVueResolver(option: LayuiVueResolverOptions)参数

```
export interface LayuiVueResolverOptions {
  /**
   * import style along with components
   * 将样式与组件一起导入
   *
   * @default 'css'
   */
  importStyle?: boolean | 'css'

  /**
   * resolve `@layui/layui-vue' icons
   * requires package `@layui/icons-vue`
   * 是否解析图标
   *
   * @default false
   */
  resolveIcons?: boolean

  /**
   * exclude components that do not require automatic import
   * 排除不需要自动导入的组件
   * 
   * eg: exclude: ['LayAnchor', /^LayDoc[A-Z]/,]
   * 
   */
  exclude?: Array<string | RegExp>;
}
```