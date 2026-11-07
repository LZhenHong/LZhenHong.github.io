---
title: VirtualLocation — 技術支援
description: VirtualLocation 技術支援——一款修改連接到 Mac 的 iPhone / iPad 所回報的定位的 macOS 應用程式。
app: VirtualLocation
kind: support
---

# VirtualLocation 技術支援

VirtualLocation 是一款 macOS 應用程式，可修改連接到 Mac 的 iPhone / iPad 所回報的定位——無需越獄，也不需在裝置上安裝任何應用程式。

## 聯絡方式

請寄電子郵件至 [leeden.dev@gmail.com](mailto:leeden.dev@gmail.com)。每封郵件我都會閱讀，請預留幾天的回覆時間。

回報問題時，請附上你的 macOS 版本、裝置的 iOS 版本，以及裝置的連接方式（USB 或 Wi-Fi）。應用程式「輔助說明」選單中的診斷報告是最有用的附件。

## 常見問題

**需要越獄，或在 iPhone 上安裝什麼嗎？**

都不需要。VirtualLocation 透過 Apple 內建的開發者服務，經由可信連線運作，Mac 上也不需安裝 Xcode。裝置只需開啟開發者模式（設定 → 隱私權與安全性，開啟後需重新啟動一次），首次配對必須透過 USB。

**支援哪些裝置與系統？**

Mac 需要 macOS 26 或以上版本；iPhone / iPad 需要 iOS 17.4.1 或以上版本——無論 USB 或 Wi-Fi，Mac 上都不需安裝 Xcode。首次 USB 配對後，裝置可透過 USB 或同一 Wi-Fi 網路連線。

**如何恢復真實定位？**

在應用程式中點按「恢復真實定位」，或直接重新啟動裝置——兩者都能清除虛擬定位。恢復功能永遠免費。

**如何更新？**

應用程式會自動檢查更新，並在你確認後下載及安裝。若透過 Homebrew 安裝，也可以執行 `brew upgrade --cask --greedy virtual-location`。

**解除安裝前要做什麼？**

先恢復所有裝置的定位並結束應用程式。如果曾啟用「這台 Mac」系統元件，請先在應用程式設定中停用並移除。Homebrew 使用者接著執行 `brew uninstall --cask virtual-location`。
