# Git

## 安装

git: https://git-scm.com/downloads

windows<br/>
cmder: https://cmder.net/ (安装full version)

## 命令

### 设置

检查git version

```
git --version
```

设置username
```
git config --global user.name [yourname]
```

设置email
```
git config --global user.email [youremail]
```

查看设置属性
```
git config user.name
git config user.email
```

术语：repo's = repositories（仓库）

术语：commit 提交

术语：modified 被修改 / staging 暂存/ committed 已提交

术语：branch 分支

### 创建仓库（repo)

创建目录->改变路径到目录->初始化git仓库

```
mkdir git1
cd git1
git init
```

查看状态
```
git status
```

暂存文件 staging files
```
git add [filename]
```

提交修改
```
git commit -m "[message]"
```
查看日志
```
git log
git log --oneline
```




