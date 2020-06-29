# Lesson15

## 谷歌的注释建议

![google的注释建议](https://tva1.sinaimg.cn/large/007S8ZIlly1gg4rvhipu2j30h60m877p.jpg)

## localStorage

*注意*：本地存储有上限，当数据达到上限后存储会失败

* [localStorage.setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
* [localStorage.getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
* [localStorage.removeItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem)
* [localStorage.clear](https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear)

## sessionStorage

*sessionStorage和localStorage的区别*

session是一个会话之内有效的，窗口关闭了就失效了；localStorage是长期保存的。

## JSON = JavaScript Object Notation

* [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
* [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

## git

### 回滚
```
git checkout [id/branch]
git checkout master/- # 返回

git revert [id/branch] # 增加了一个commit

git reset --hard [id]
```

### 恢复（放弃）修改

```
git reset / git checkout -- .
git checkout -- <filepath>

git reset --soft HEAD~1
```

### 分支
```
git branch [branch-name] # 创建分支
git branch -a # 列表分支
git branch -D [branch-name] # 删除分支
git checkout -b [branch-name] # 创建（如果不存在的话）并切换到分支

git merge [branch-name] # 合并分支
```

### 处理conflict

### 和线上git数据库同步工作

第一种方法

```
# 推送版本到远端
git push [url] [branch-name]

# 设置远端的别名
git remote add origin [url]
git push origin master
```

第二种方法

```
git clone [url]
git remote -v
git pull [alias] [branch]
```
