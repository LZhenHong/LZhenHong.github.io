---
title: VirtualLocation — Support
description: Support for VirtualLocation, the Mac app that changes the location a connected iPhone or iPad reports.
app: VirtualLocation
kind: support
---

# Support

VirtualLocation is a Mac app that changes the location a connected iPhone or iPad reports — no jailbreak, nothing installed on the device.

## Contact

Email [leeden.dev@gmail.com](mailto:leeden.dev@gmail.com). I read every message; please allow a few days for a reply.

When reporting an issue, please include your macOS version, your device's iOS version, and how the device is connected (USB or Wi-Fi). The diagnostics report from the app's Help menu is the best thing to attach.

## Frequently asked questions

**Do I need to jailbreak, or install anything on the iPhone?**

Neither. VirtualLocation works through Apple's own developer services over a trusted connection, and the Mac needs no Xcode. The device only needs Developer Mode (Settings → Privacy & Security), which asks for one restart, and the first pairing must be over USB.

**Which devices and systems are supported?**

A Mac with macOS 26 or later, and an iPhone or iPad with iOS 17.4.1 or later — no Xcode needed on the Mac, over USB or Wi-Fi. After the first USB pairing, the device can connect over USB or the same Wi-Fi network.

**How do I get my real location back?**

Click Restore in the app, or simply restart the device — either clears the virtual location. Restore is always free.

**How do updates work?**

The app checks for updates itself and installs them after your confirmation. If you installed with Homebrew, you can also run `brew upgrade --cask --greedy virtual-location`.

**What should I do before uninstalling?**

Restore the location on every device and quit the app. If you enabled the "This Mac" component, disable and remove it in the app's Settings first. Homebrew users can then run `brew uninstall --cask virtual-location`.
