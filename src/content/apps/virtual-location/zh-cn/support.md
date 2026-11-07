---
title: VirtualLocation — 支持
description: VirtualLocation 的用户支持——一款修改连接到 Mac 的 iPhone / iPad 所上报定位的 macOS 应用。
app: VirtualLocation
kind: support
---

# 支持

VirtualLocation 是一款 macOS 应用，修改连接到 Mac 的 iPhone / iPad 所上报的定位——无需越狱，设备上无需安装任何应用。

## 联系

邮件 [leeden.dev@gmail.com](mailto:leeden.dev@gmail.com)。每封邮件我都会读，请留出几天的回复时间。

报告问题时，请附上你的 macOS 版本、设备的 iOS 版本，以及设备的连接方式（USB 或 Wi-Fi）。应用「帮助」菜单里的诊断报告是最有用的附件。

## 常见问题

**需要越狱，或在 iPhone 上安装什么吗？**

都不需要。VirtualLocation 通过 Apple 自带的开发者服务、经可信连接工作，Mac 上也无需安装 Xcode。设备只需开启开发者模式（设置 → 隐私与安全性，开启需重启一次），首次配对必须通过 USB。

**支持哪些设备和系统？**

Mac 需要 macOS 26 或更高版本；iPhone / iPad 需要 iOS 17.4.1 或更高版本——无论 USB 还是 Wi-Fi，Mac 上都无需安装 Xcode。首次 USB 配对之后，设备可以走 USB 或同一局域网 Wi-Fi 连接。

**怎么恢复真实定位？**

在应用里点「恢复真实定位」，或者直接重启设备——两者都能清除虚拟定位。恢复永远不收费。

**如何更新？**

应用会自动检查更新，经你确认后下载安装。通过 Homebrew 安装的话，也可以执行 `brew upgrade --cask --greedy virtual-location`。

**卸载前要做什么？**

先恢复所有设备的定位并退出应用。如果启用过「这台 Mac」系统组件，先在应用设置中停用并移除。Homebrew 用户随后执行 `brew uninstall --cask virtual-location`。
