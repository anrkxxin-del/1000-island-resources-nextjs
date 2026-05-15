# GitHub + Vercel 部署指南

## 📍 步骤 1: 在 GitHub 创建新仓库

### 登录或创建 GitHub 账户
1. 访问 [https://github.com](https://github.com)
2. 如果没有账户，点击 "Sign up"
3. 完成账户设置

### 创建新仓库
1. 点击右上角 "+" → "New repository"
2. 填写以下信息：
   - **Repository name**: `1000-island-resources-nextjs`
   - **Description**: `AI-optimized content platform for Philippines English learning`
   - **Visibility**: Public（让 Vercel 能访问）
   - **Initialize this repository with**: 不勾选任何东西
3. 点击 "Create repository"

### 复制仓库 URL
创建后，你会看到一个类似这样的 URL：
```
https://github.com/YOUR_USERNAME/1000-island-resources-nextjs.git
```
**保存这个 URL，下一步会用到。**

---

## 📍 步骤 2: 本地初始化和推送代码

### 在你的电脑上

1. **打开终端** (macOS/Linux) 或 PowerShell (Windows)

2. **进入项目目录**
```bash
cd /Users/bytedance/Documents/Claude/Projects/千岛SEO/1000-island-resources-nextjs
```

3. **初始化 Git**
```bash
git init
git add .
git commit -m "Initial commit: Next.js project setup"
```

4. **添加远程仓库**
```bash
git remote add origin https://github.com/YOUR_USERNAME/1000-island-resources-nextjs.git
```
（把 YOUR_USERNAME 替换成你的 GitHub 用户名）

5. **推送代码到 GitHub**
```bash
git branch -M main
git push -u origin main
```

系统会要求输入 GitHub 凭证。如果提示权限问题，使用 GitHub 的 Personal Access Token:
- [生成 Personal Access Token](https://github.com/settings/tokens)
- 选择 "repo" 权限
- 复制 token 作为密码使用

---

## 📍 步骤 3: 在 Vercel 上部署

### 创建 Vercel 账户
1. 访问 [https://vercel.com](https://vercel.com)
2. 点击 "Sign Up"
3. 选择 "Continue with GitHub"
4. 授权 Vercel 访问你的 GitHub 账户

### 导入项目
1. 登录 Vercel 后，点击 "New Project"
2. 在 "Import Project" 中，搜索并选择 `1000-island-resources-nextjs`
3. 点击 "Import"

### 配置 Vercel 项目

#### 基础设置
- **Framework**: Next.js
- **Root Directory**: ./ (保持默认)
- **Build Command**: `npm run build`
- **Output Directory**: .next

#### 环境变量（可选）
```
NEXT_PUBLIC_SITE_URL=https://1000-island.com
```

点击 "Deploy" 等待构建完成（通常 2-3 分钟）。

---

## 📍 步骤 4: 连接到主域名

### 配置子路径部署

目前应用已部署到 Vercel 的默认域名，比如：
`https://1000-island-resources-nextjs.vercel.app`

但我们需要在主域 `1000-island.com/resource` 下提供服务。

#### 选项 A: 使用 Vercel 的自定义域

1. 在 Vercel Dashboard 找到你的项目
2. 点击 "Settings" → "Domains"
3. 点击 "Add Custom Domain"
4. 输入 `1000-island.com`（不包括 `/resource` 部分）
5. 跟随 DNS 配置指南

#### 选项 B: 在主站点 (NiceBox) 配置反向代理

如果你的 1000-island.com 主站还在 NiceBox 上运行：

1. **在 Vercel 项目中获取 URL**
   - Vercel Dashboard 中的项目 URL，比如 `1000-island-resources-nextjs.vercel.app`

2. **在 NiceBox 中添加重定向**
   - 进入 NiceBox 后台
   - 配置 /resource 路径重定向到 Vercel 应用

3. **或使用 Vercel 中间件**（推荐）
   ```javascript
   // 在 next.config.js 中已配置 basePath: '/resource'
   // 这会自动处理路径
   ```

---

## 📍 步骤 5: 验证部署

### 检查站点是否正常运行

```bash
# 本地测试（可选）
npm run build
npm run start
```

### 访问 Vercel 部署
- 打开 Vercel Dashboard
- 看到 "Production" 部署状态为绿色 ✅
- 访问提供的 URL 验证功能

### SEO 检查

当前设置中：
- robots.txt: Disallow all (不索引)
- Meta: `<meta name="robots" content="noindex, nofollow" />`

**内容验证后更新为**：
```robots.txt
User-agent: *
Allow: /

Sitemap: https://1000-island.com/resource/sitemap.xml
```

---

## 📍 后续工作流

### 本地开发和更新

```bash
# 1. 编辑文件
# 比如在 /content/teacher/ 添加新的 .mdx 文件

# 2. 本地测试
npm run dev

# 3. 推送到 GitHub
git add .
git commit -m "Add new article: [title]"
git push

# 4. Vercel 自动部署
# 无需任何额外操作，Vercel 会自动检测 GitHub 更新并重新构建
```

### 监控部署

在 Vercel Dashboard 中：
- 查看构建日志
- 监控部署状态
- 查看环境变量
- 配置域名和 SSL

---

## 🔗 常用链接

- **GitHub 仓库**: https://github.com/YOUR_USERNAME/1000-island-resources-nextjs
- **Vercel 项目**: https://vercel.com/dashboard
- **Next.js 文档**: https://nextjs.org/docs
- **Vercel 文档**: https://vercel.com/docs

---

## ❓ 常见问题

### Q: 如何在 Vercel 中查看实时日志？
A: 在 Vercel Dashboard 中，打开项目 → "Deployments" → 点击最新部署 → "Logs"

### Q: 部署失败了怎么办？
A: 检查：
1. 是否有 package.json？✓
2. 是否所有依赖都已安装？✓
3. 构建命令是否正确？(npm run build) ✓

### Q: 如何回滚到之前的版本？
A: 在 Vercel Dashboard 中，选择之前的部署，点击 "Redeploy"

### Q: 如何连接自定义域名？
A: 详见上面的"步骤 4: 连接到主域名"部分

---

**现在你可以开始向 GitHub 推送代码了！** 🚀
