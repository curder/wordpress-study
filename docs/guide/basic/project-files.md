# 项目文件

WordPress 6.0.1 项目初始化之后，使用 `tree` 命令可以看到如下文件和目录结构：

```text {6,11,19}
.
├── index.php              WordPress 核心程序入口文件
├── license.txt            WordPress GPL许可证文件
├── readme.html            WordPress 安装导读文件
├── wp-activate.php        WordPress 用户注册激活文件
├── wp-admin    后台管理目录
├── wp-blog-header.php     WordPress 加载环境和模版
├── wp-comments-post.php   WordPress 接受评论，并将其添加到数据库存储
├── wp-config-sample.php   WordPress 连接到数据库的配置、系统加密密钥以及调试模式设置的模板文件。
├── wp-config.php          WordPress 连接到数据库的配置、系统加密密钥以及调试模式文件，安装后自动生成。
├── wp-content    系统语言、插件、主题和文件上传存储目录
│   ├── index.php          防止对目录窥探
│   ├── languages          多语言配置目录
│   │   ├── admin-zh_CN.mo
│   │   ├── admin-zh_CN.po  后台语言文件，可以使用 poedit 软件进行编辑
│   │   ├── ...
|   |   ├── plugins         插件语言包目录
│   │   ├── themes          主题语言包目录
│   │   ├── ...
│   │   ├── zh_CN.mo
|   │   └── zh_CN.po        前台语言文件，可以使用 poedit 软件进行编辑
│   ├── plugins            插件安装、开发目录
│   ├── themes             主题安装、开发目录
│   ├── upgrade            更新目录
│   └── uploads            文件上传目录
├── wp-cron.php            WordPress 执行定时任务文件
├── wp-includes    类库及核心函数定义目录
│   ├── ...
│   ├── ...
│   ├── post.php           WordPress 文章相关文件
│   ├── post-template.php  WordPress 文章模版相关文件
│   ├── ...
│   ├── wp-db.php           WordPress 数据库增、删、改、查相关操作文件
│   ├── ...
│   └── ...
├── wp-links-opml.php      WordPress 生成OPML格式的链接（通过管理菜单添加）列表
├── wp-load.php            WordPress 加载配合和设置公共变量以及加载类库等
├── wp-login.php           WordPress 定义用户的登录页面逻辑文件
├── wp-mail.php            WordPress 邮件处理逻辑文件
├── wp-settings.php        WordPress 检查安装是否正确，使用辅助函数，应用用户插件，初始化执行计时器等
├── wp-signup.php          WordPress 定义注册新用户账号、多站点账号注册页面文件
├── wp-trackback.php       WordPress 处理trackback请求逻辑文件
└── xmlrpc.php             WordPress 远程发布功能逻辑文件

3 directories, 17 files
```

> 在实际开发中，原则上偶尔会需要修改 `wp-config.php` 中关于数据库的配置，大部分时间都在 `wp-contents`目录下进行开发工作，包括主题开发、插件开发等。
>
> 其他文件和目录，例如：wp-admin 或 wp-includes 基本上不需要修改。
