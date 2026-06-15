# 应急科普游戏 - 部署指南

## GitHub Pages 部署步骤

### 第一步：创建 GitHub 仓库

1. 访问 https://github.com 并登录
2. 点击右上角 `+` → `New repository`
3. 填写仓库名称（如 `emergency-game`）
4. 选择 `Private` 或 `Public`
5. 点击 `Create repository`

### 第二步：初始化本地 Git 并推送

在项目目录下执行以下命令：

```bash
# 初始化git
git init

# 添加所有文件
git add .

# 提交
git commit -m "first commit"

# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送
git branch -M main
git push -u origin main
```

### 第三步：启用 GitHub Pages

1. 在 GitHub 仓库页面点击 `Settings`
2. 左侧菜单找到 `Pages`
3. Source 下选择 `Deploy from a branch`
4. Branch 选择 `main` 和 `/ (root)`
5. 点击 `Save`

### 第四步：等待部署

- 等待约 1-2 分钟
- 刷新页面，顶部会显示您的网址：`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### 第五步：安装依赖并部署（可选）

如果您想从本地直接部署：

```bash
# 安装依赖
npm install

# 安装gh-pages
npm install gh-pages

# 部署到GitHub Pages
npm run deploy
```

## 分享给朋友

部署成功后，分享链接给朋友即可：
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## 自定义域名（可选）

如需使用自己的域名：
1. 在 `public` 文件夹下创建 `CNAME` 文件，写入您的域名
2. 在域名服务商处添加 CNAME 记录指向 `YOUR_USERNAME.github.io`
