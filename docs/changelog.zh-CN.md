# Arco Design Pro React v2.0

## v2.1.0

2022-01-19

### 🐛 bugfix

- 修复 `vite` 生产构建产物后，`lazy load module` 失败的 bug。
- 修复构建产物后登录多次重定向的 bug。

### 🆕 新增功能

- 新增 `权限控制` 功能。

## v2.2.0

2022-01-25

### 💅 样式调整

- 所有卡片区块的 `padding` 统一为 `20px`。

### 💎 功能优化

- 删除全局样式覆盖代码，引入 [Arco Pro 主题包](https://arco.design/themes/design/2207)
- 使用 [arco-vite-plugin](https://github.com/arco-design/arco-plugins/blob/main/packages/plugin-vite-react/README.md) 实现 `vite` 架构下按需加在及主题包引入功能。
