---
title: 无线路由调整，加快 WIFI 速度
date: 2020-09-13
category:
  - 网络
tag:
  - WIFI
order: -29
---

拖慢 WIFI 速度的最大元凶是**无线信号合并**。

「双频合一」、「Smart Connect」听起来很美，信号不好就立刻切换信号更强的频道，速度慢就切换为更快的频道，似乎是个完美的方案。但使用后就知道它们的规则多傻了，速度慢到让你想用手机流量。任何将无线信号合一的功能都不推荐使用。

先关闭路由器的合频功能，然后针对**无线模式、频道带宽、频道/信道**逐步调整，避免 wifi 无故自动断开，提升 wifi 速度和稳定性。

## 无线模式

无线模式其实是选择 wifi 协议，如 802.11b、802.11g、802.11n 等。兼容旧版本协议，会拖慢 wifi 的速度。

建议建议 2.4GHz 频段的频道带宽设为「N only」，5GHz 频段的频道带宽设为「N/AC mixed」。Legacy 模式为兼容模式，适合家里有 10 年前的设备需求。

## 频道带宽

频道带宽一般为 20、40、80MHz，一些厂商如华为有自己的 160MHz。频道带宽越大，wifi 速度越快，但穿透性也随之变弱，覆盖范围变小。

建议 2.4GHz 频段的频道带宽设为「20/40MHz」，5GHz 频段的频道带宽设为「80MHz」。这样可以保证 wifi 近距离的链接速度，同时也保证了 wifi 的覆盖范围。

## 调整信道

无线信道/频道是路由与手机的接收频道，通常家用路由有 161 条信道。当越多设备使用相同信道，会造成信道堵塞，减慢无线速度。

家庭只需要考虑自家和邻居的网络，无线环境较为简单。建议通过「Wifi 分析仪」找到并固定无线信道，避免无线疯狂切换信道，影响无线稳定性。

手机安装「Wifi 分析仪」，点击应用右上角的眼睛，选中「信道评级」。信道评级将显示选中 wifi 的最佳信道选择。切换上方的 wifi 名称，查看其它 wifi 的推荐信道。

![](https://img.gpt-vip.top/20200913134120.jpg?imageMogr2/thumbnail/400x)

找到最佳信道后，在路由器中固定无线网络的信道/频道。目前国内大部分路由都不支持 wifi 信道手工调整，只有华硕等少数路由支持，建议新购路由先跟店家确认是否支持手工调整信道。
