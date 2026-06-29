# 项目模板说明

这是一个完整的前端项目模板，包含：

## 🔧 功能特性
- ✅ Git & GitHub 版本控制
- ✅ Playwright E2E 自动化测试
- ✅ 单元测试
- ✅ GitHub Pages 自动部署
- ✅ GitHub Actions CI/CD

## 📁 项目结构
```
.
├── index.html              # 主页面
├── package.json            # 项目配置
├── playwright.config.js    # Playwright 配置
├── .gitignore           # Git 忽略文件
├── .github/
│   └── workflows/
│       └── ci-cd.yml     # CI/CD 配置
└── tests/
    ├── unit.test.js       # 单元测试
    └── e2e/
        └── app.spec.js     # E2E 测试
```

## 🚀 使用方法

### 1. 本地开发
```bash
npm run dev
```
访问 http://localhost:8000

### 2. 运行测试
```bash
# 运行所有测试
npm test

# 只运行单元测试
npm run test:unit

# 只运行 E2E 测试
npm run test:e2e

# UI 模式运行 E2E 测试
npm run test:e2e:ui
```

### 3. 安装 Playwright 浏览器（首次使用）
```bash
npm run test:e2e:install
```

## ☁️ GitHub Pages 部署配置（推荐，完全免费！）

### 开启 GitHub Pages
1. 进入 GitHub 仓库 → **Settings**
2. 左侧菜单点击 **Pages**
3. 在 **Build and deployment** 下：
   - Source: 选择 **Deploy from a branch**
   - Branch: 选择 **gh-pages** (第一次部署后会自动创建)
4. 点击 **Save**

### 自动部署流程
- 每次 `git push` 到 main 分支
- GitHub Actions 自动运行测试
- 测试通过后自动部署到 GitHub Pages
- 访问地址: `https://你的用户名.github.io/仓库名/`

### GitHub Pages 优势
- ✅ 完全免费
- ✅ 无需绑定银行卡
- ✅ 自动 SSL 证书
- ✅ GitHub Actions 自动部署

## 📋 Git 常用命令
```bash
git add .
git commit -m "描述"
git push
```

## 🎯 如何用这个模板创建新项目
1. 复制这个项目所有文件到新项目文件夹
2. 修改 package.json 中的 name 和 description
3. 开始开发！
