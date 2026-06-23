# 上海市襄阳南路第一幼儿园 - 网站部署说明

## 项目结构

```
xiangyi-school/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # 交互脚本
└── README.md       # 本说明文件
```

## 域名配置

目标域名：`xiangyi.schoolAI.com`

### 部署方式建议

#### 方式一：静态网站托管（推荐）

1. **GitHub Pages**
   - 将本文件夹推送到 GitHub 仓库
   - 在仓库 Settings > Pages 中配置自定义域名
   - 添加 `CNAME` 文件内容为 `xiangyi.schoolAI.com`
   - 在域名 DNS 服务商处添加 CNAME 记录指向 `username.github.io`

2. **Vercel**
   - 导入项目到 Vercel
   - 在 Project Settings > Domains 中添加 `xiangyi.schoolAI.com`
   - 按提示配置 DNS 记录

3. **Netlify**
   - 拖拽上传文件夹或连接 Git 仓库
   - 在 Site Settings > Domain Management 中添加自定义域名

4. **阿里云 OSS / 腾讯云 COS**
   - 创建存储桶并开启静态网站托管
   - 上传文件到存储桶
   - 配置自定义域名和 CDN

#### 方式二：自有服务器部署

1. 将三个文件上传到服务器 Web 目录（如 Nginx 的 `/var/www/xiangyi-school/`）
2. 配置 Nginx 虚拟主机：

```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name xiangyi.schoolAI.com;
    
    root /var/www/xiangyi-school;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # SSL 证书配置（需要申请证书）
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
}
```

3. 在域名 DNS 服务商处添加 A 记录指向服务器 IP

## 功能说明

- 页面包含学校名称、SVG 动画 LOGO、搜索框
- 搜索框支持点击搜索按钮或按回车键触发
- 搜索后跳转至 `https://chat.deepseek.com/sign_in`
- 支持响应式设计，适配手机和电脑
- 支持深色模式自动切换
- 所有 LOGO 元素使用内嵌 SVG，无需外部图片资源

## 后续替换 LOGO

如需替换为真实的 PNG 图片：
1. 将 PNG 图片放入项目文件夹，命名为 `logo.png`
2. 修改 `index.html` 中 `.logo-wrapper` 内的 SVG 代码为：
   ```html
   <img src="logo.png" alt="上海市襄阳南路第一幼儿园" class="school-logo">
   ```
3. 修改 `style.css` 中 `.school-logo` 的宽高为实际图片尺寸
