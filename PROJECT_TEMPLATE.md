# 项目模板说明

这是一个完整的前端项目模板，包含：

## 🔧 功能特性
- ✅ Git & GitHub 版本控制
- ✅ Playwright E2E 自动化测试
- ✅ 单元测试
- ✅ Vercel 自动部署
- ✅ GitHub Actions CI/CD

## 📁 项目结构
```
.
├── index.html              # 主页面
├── package.json            # 项目配置
├── playwright.config.js    # Playwright 配置
├── vercel.json            # Vercel 部署配置
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

## ☁️ Vercel 部署配置

### 方法一：Vercel 自动部署（推荐，最简单！）
1. 访问 https://vercel.com
2. 用 GitHub 账号登录
3. 点击 "Add New" → "Project"
4. 选择你的 GitHub 仓库
5. 点击 "Deploy"
6. 完成！以后每次 push 都会自动部署

### 方法二：GitHub Actions 部署
如果想用 GitHub Actions 部署，需要在 GitHub 仓库设置 Secrets：
- `VERCEL_TOKEN`: 你的 Vercel Token
- `ORG_ID`: 你的 Vercel 组织 ID
- `PROJECT_ID`: 你的 Vercel 项目 ID

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
