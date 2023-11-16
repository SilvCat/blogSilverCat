---
title: git
date: 2023-11-14 11:43:16
cover: https://telegraph-image-766.pages.dev/file/9c238900487f094c64464.jpg
top-img: https://telegraph-image-766.pages.dev/file/9c238900487f094c64464.jpg
swiper_index: 7
---
# 安装Git
百度网盘：链接：https://pan.baidu.com/s/1GwJff8Dk5DpHIWuUmsDypw?pwd=qq8l
提取码：qq8l
下载后安装直接无脑下一步就可以了
# 一、git的基本指令
![](https://telegraph-image-766.pages.dev/file/4c83957c5224082bcdeed.png)
## 1、git init
  初始化新本地 Git 仓库
## 2、git add
  跟踪新文件，或者说将内容从工作目录添加到暂存区,
## 3、git commit "备注"
  将暂存区内容添加到本地仓库中
## 4、git status
  命令用于显示工作目录和暂存区的状态,能看到那些文件被修改，
  哪些文件没有被gittracked到
## 5、git log
  查看提交历史，可以看退回哪个版本
## 6、git push (-u)
  命令用于从将本地的分支版本上传到远程并合并
  指令格式：
```指令
  git push <远程主机名> <本地分支名>:<远程分支名>
```
# 二、git的基本上传
## 1、先初始化项目
```git
  git init --初始化仓库
```
![](https://telegraph-image-766.pages.dev/file/f2b0f89d71c8f4732d53f.png)
## 2、gitee注册一个用户
  注册用户这个不用我教也可以完成吧😁
## 3、创建仓库
  右上角有个+号
  ![](https://telegraph-image-766.pages.dev/file/9e1feb7e71dd11c6cd78d.png)
  创建仓库
  ![](https://telegraph-image-766.pages.dev/file/f02a188c9e5c0b69c5290.png)
  创建好就是这样的
  ![](https://telegraph-image-766.pages.dev/file/d59c0194ff9401448046d.png)
## 4、上传到库
  先Git 全局设置:
  ```git
    git config --global user.name "你的名字"
    git config --global user.email "你的邮箱"
  ```
    将内容从工作目录添加到暂存区
  ```gti
    git add 文件名称
  ```
  暂存区内容添加到本地仓库中
  ```gti
    git commit -m "备注"
  ```
  然后在git中输入
  ```
    git remote add origin "你的地址"
  ```
  上传到gitee仓库master分支
  ```
    git push -u origin "master"
  ```
  在去到gtiee中就可以看到你所上传的文件其中上传的时候会让你输入gitee的账号密码，我这没有出现是因为我一开始已经输入过账号密码
  输入过一次后就不会在让你输入一次
# 三、加密 ssh协议
  公钥登录的原理：首先用户将自己的公钥存储在需要登录的远程机器上面，然后登录的时候，远程主机会向用户发送一段随机字符串，
  接着用户使用自己的私钥加密字符串，并发给远程主机。最后，远程主机使用存储的公钥进行解密,若解密成功，则说明用户可信，
  准许登录，不在提示输入密码
## 1、如何获取公钥和私钥
- 1、win+R打开指令台
  在指令台输入
```
  ssh-keygen -t rsa -C "Gitee SSH Key"
```
- 2、获取密钥
  然后在C盘用户文件夹中找到自己电脑的名称进去后找到.ssh那个就是公钥和私钥所在的文件夹
- 或者在命令符中输入~/.ssh/id_rsa.pub即可看到密钥文件
# 四、公钥添加到git中
  打开gitee的个人设置中
  在安全设置中就可以看到ssh公钥设置
![](https://telegraph-image-766.pages.dev/file/efe6aaf7c7fb8bd75ad43.png)
![](https://telegraph-image-766.pages.dev/file/05c47bcc21424068b4779.png)
# 偷懒指令
## 1、git add和git commit的结合体直接把修改的文件添加到本地仓库
  git commit -am "备注"
  注!:只能添加修改过的文件，如果是新添加的文件要重新add一次
## 2、git add -A
  选择全部添加文件
  
  
  