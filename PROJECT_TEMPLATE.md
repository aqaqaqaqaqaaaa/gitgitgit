# 项目模板说明

这是一个完整的前端项目模板，包含：

## 🔧 功能特性
- ✅ Git & GitHub 版本控制
- ✅ Playwright E2E 自动化测试
- ✅ 单元测试
- ✅ 云服务器自动部署
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

## ☁️ 云服务器部署配置

### 配置 GitHub Secrets
在 GitHub 仓库 → Settings → Secrets and variables → Actions → Secrets 中添加：

| Secret 名称 | 说明 | 示例 |
|------------|------|------|
| SSH_PASSWORD | SSH 密码 | your_password |
| REMOTE_HOST | 服务器 IP 地址 | 47.121.140.215 |
| REMOTE_USER | SSH 用户名 | root |
| REMOTE_PORT | SSH 端口 | 22 |
| REMOTE_TARGET | 服务器部署路径 | /var/www/html |

### 你的服务器信息（已配置）
- IP: 47.121.140.215
- 用户: root
- 部署路径: /var/www/html

### 自动部署流程
- 每次 `git push` 到 main 分支
- GitHub Actions 自动运行测试
- 测试通过后自动部署到云服务器

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
