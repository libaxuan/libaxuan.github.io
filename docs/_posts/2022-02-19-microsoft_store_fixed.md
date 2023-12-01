---
title: Windows 应用商店 (Microsoft store) 打不开？100% 解决方法 - 兼容 Win10、Win11
date: 2022-02-19
category:
  - 系统
tag:
  - Microsoft store
order: -40
---

Microsoft store 页面无法打开，提示需要联网或刷新。多数教程将原因归咎于系统更新或 DNS 设置，但实际上是你的 **IE 设置被更改了**。

![](https://img.gpt-vip.top/2022-05-05-16-48-55.png?imageMogr2/thumbnail/500x)

特别是国内的网银用户，**每次登录建行，U 盾都会修改 Internet 选项**，从而导致 TLS 版本过低无法连接应用商店。

## 解决方法

1. 选择「开始菜单」>「搜索栏」，搜索「Internet 选项」。

   ![](https://img.gpt-vip.top/2022-05-05-17-01-23.png?imageMogr2/thumbnail/400x)

2. Internet 属性中点击「高级」。

   ![](https://img.gpt-vip.top/2022-05-05-17-01-48.png?imageMogr2/thumbnail/400x)

3. 勾选「使用 TLS 1.2」和「使用 TLS 1.3」。

   ![](https://img.gpt-vip.top/2022-05-05-17-02-01.png?imageMogr2/thumbnail/400x)

网银用户会重复出现该问题，重新执行上方步骤勾选 TLS 即可。

## 其他尝试

@果子：取消代理服务器

> ① 除了在[internet 选项]窗口中-[高级]-勾选[TLS1.2 、TSL1.3]，
> ② 要再加一步：在[internet 选项]窗口中-[连接]-[局域网设置]-取消勾选[代理服务器]相关选项。就能打开微软商店了！不过以后要挂梯的时候，好像得把[代理]勾选回来。

@一头愚鹅：不要开代理

如果你依然无法访问，则尝试重置网络连接、DNS、缓存、应用商店设置，操作参考 [Microsoft Store 打不开，代码：0x80131500](https://answers.microsoft.com/zh-hans/windows/forum/all/microsoft/43acd62e-a11e-449c-9fa4-50931ad38565)。

## 解决流程 GIF

![win11-ie 高级设置.gif](https://img.gpt-vip.top/IE_SSL_Setting_win11.webp)
