import type { Locale } from '../i18n';

export const guideSlugs = [
  'change-iphone-location-without-xcode',
  'restore-real-location-iphone',
  'virtuallocation-vs-xcode',
] as const;

export type GuideSlug = (typeof guideSlugs)[number];

export type GuideBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'ordered-list'; items: string[] }
  | { type: 'unordered-list'; items: string[] };

export interface GuideSection {
  heading: string;
  blocks: GuideBlock[];
}

export interface GuideCopy {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  sections: GuideSection[];
  ctaLabel: string;
}

export const guides: Record<GuideSlug, Record<Locale, GuideCopy>> = {
  'change-iphone-location-without-xcode': {
    en: {
      seoTitle: 'How to Change iPhone Location Without Xcode or Jailbreak',
      metaDescription: 'Set a virtual location on an iPhone or iPad from your Mac without Xcode or jailbreaking. See requirements, first-pairing steps and how to restore.',
      h1: 'How to change your iPhone’s location without Xcode or jailbreak',
      lead: 'Use VirtualLocation on a Mac with macOS 26 or later. Connect an iPhone or iPad running iOS 17.4.1 or later, complete the first USB pairing, then choose a place on the Mac map and click Teleport. Your Mac does not need Xcode, and your device does not need a jailbreak or an installed app.',
      sections: [
        {
          heading: 'What you need',
          blocks: [
            {
              type: 'unordered-list',
              items: [
                'A Mac with macOS 26 or later.',
                'An iPhone or iPad with iOS 17.4.1 or later.',
                'A USB cable for the first pairing.',
                'Developer Mode enabled on the device.',
              ],
            },
          ],
        },
        {
          heading: '1. Connect and trust',
          blocks: [
            {
              type: 'paragraph',
              text: 'Connect the device over USB and unlock it. When prompted, trust this Mac. On the device, go to Settings → Privacy & Security → Developer Mode, turn it on, then restart and confirm when asked. This is an Apple platform requirement. If you do not see the Developer Mode switch, select the device in VirtualLocation and click Reveal Setting on Device, then enable it on the device and restart.',
            },
          ],
        },
        {
          heading: '2. Choose a place',
          blocks: [
            {
              type: 'paragraph',
              text: 'Open VirtualLocation on your Mac, select the connected device, then search for a place or choose a point on the map.',
            },
          ],
        },
        {
          heading: '3. Teleport',
          blocks: [
            {
              type: 'paragraph',
              text: 'Click Teleport. The connected iPhone or iPad reports the selected location.',
            },
          ],
        },
        {
          heading: '4. Restore your real location',
          blocks: [
            {
              type: 'paragraph',
              text: 'Click Restore Real Location in VirtualLocation, or restart the device. Restore is always free. An app that is already open may show a cached location; reopen it or wait for its next location update.',
            },
          ],
        },
        {
          heading: 'Free and VIP',
          blocks: [
            {
              type: 'paragraph',
              text: 'Teleport is free for one USB-connected device, with no account or email. Wi-Fi Teleport, route movement, Joystick and batch Teleport are VIP features. VIP is US$19.99 once, with up to 3 activated Macs at a time and a 14-day refund policy.',
            },
          ],
        },
      ],
      ctaLabel: 'Download VirtualLocation for Mac',
    },
    'zh-cn': {
      seoTitle: '不装 Xcode、不越狱，怎么修改 iPhone 定位？',
      metaDescription: '在 Mac 上为 iPhone 或 iPad 设置虚拟定位，无需 Xcode 或越狱。查看系统要求、首次配对、传送与恢复真实位置的步骤。',
      h1: '不装 Xcode、不越狱，怎么修改 iPhone 定位？',
      lead: '在装有 macOS 26 或更高版本的 Mac 上使用 VirtualLocation。通过 USB 首次配对运行 iOS 17.4.1 或更高版本的 iPhone / iPad，在 Mac 地图上选好地点后点击「传送」。Mac 无需 Xcode，设备无需越狱或安装应用。',
      sections: [
        {
          heading: '需要准备什么',
          blocks: [
            {
              type: 'unordered-list',
              items: [
                '一台装有 macOS 26 或更高版本的 Mac。',
                '一台装有 iOS 17.4.1 或更高版本的 iPhone / iPad。',
                '一根用于首次配对的 USB 数据线。',
                '设备已开启开发者模式。',
              ],
            },
          ],
        },
        {
          heading: '1. 连接并信任',
          blocks: [
            {
              type: 'paragraph',
              text: '用 USB 连接设备并解锁，在提示时信任这台 Mac。在设备上前往「设置 → 隐私与安全性 → 开发者模式」，开启后按提示重启并确认。这是 Apple 平台的要求。如果看不到开发者模式开关，在 VirtualLocation 中选择该设备，点击「在设备上显示该设置」，再回到设备开启并重启。',
            },
          ],
        },
        {
          heading: '2. 选择地点',
          blocks: [
            {
              type: 'paragraph',
              text: '在 Mac 上打开 VirtualLocation，选择已连接的设备，搜索地名或在地图上选点。',
            },
          ],
        },
        {
          heading: '3. 传送',
          blocks: [
            {
              type: 'paragraph',
              text: '点击「传送」，连接的 iPhone 或 iPad 就会上报所选位置。',
            },
          ],
        },
        {
          heading: '4. 恢复真实位置',
          blocks: [
            {
              type: 'paragraph',
              text: '在 VirtualLocation 中点击「恢复真实位置」，或直接重启设备。恢复始终免费。设备上已打开的 App 可能仍显示缓存位置，可重开该 App 或等待下一次定位更新。',
            },
          ],
        },
        {
          heading: '免费与 VIP',
          blocks: [
            {
              type: 'paragraph',
              text: '一台 USB 连接设备可免费传送，不需要账号或邮箱。Wi-Fi 传送、沿路线移动、摇杆和批量传送属于 VIP。VIP 为 US$19.99 一次性购买，最多同时激活 3 台 Mac，提供 14 天退款政策。',
            },
          ],
        },
      ],
      ctaLabel: '下载 VirtualLocation Mac 版',
    },
    'zh-tw': {
      seoTitle: '不裝 Xcode、不越獄，怎麼修改 iPhone 定位？',
      metaDescription: '在 Mac 上為 iPhone 或 iPad 設定虛擬定位，無需 Xcode 或越獄。查看系統需求、首次配對、傳送與恢復真實位置的步驟。',
      h1: '不裝 Xcode、不越獄，怎麼修改 iPhone 定位？',
      lead: '在裝有 macOS 26 或以上版本的 Mac 上使用 VirtualLocation。透過 USB 首次配對運行 iOS 17.4.1 或以上版本的 iPhone / iPad，在 Mac 地圖上選好地點後點按「傳送」。Mac 無需 Xcode，裝置無需越獄或安裝應用程式。',
      sections: [
        {
          heading: '需要準備什麼',
          blocks: [
            {
              type: 'unordered-list',
              items: [
                '一台裝有 macOS 26 或以上版本的 Mac。',
                '一台裝有 iOS 17.4.1 或以上版本的 iPhone / iPad。',
                '一根用於首次配對的 USB 連接線。',
                '裝置已開啟開發者模式。',
              ],
            },
          ],
        },
        {
          heading: '1. 連接並信任',
          blocks: [
            {
              type: 'paragraph',
              text: '用 USB 連接裝置並解鎖，在提示時信任這台 Mac。在裝置上前往「設定 → 隱私權與安全性 → 開發者模式」，開啟後按提示重新啟動並確認。這是 Apple 平台的要求。如果看不到開發者模式開關，在 VirtualLocation 中選擇該裝置，點按「在裝置上顯示該設定」，再回到裝置開啟並重新啟動。',
            },
          ],
        },
        {
          heading: '2. 選擇地點',
          blocks: [
            {
              type: 'paragraph',
              text: '在 Mac 上開啟 VirtualLocation，選擇已連接的裝置，搜尋地名或在地圖上選點。',
            },
          ],
        },
        {
          heading: '3. 傳送',
          blocks: [
            {
              type: 'paragraph',
              text: '點按「傳送」，連接的 iPhone 或 iPad 就會回報所選位置。',
            },
          ],
        },
        {
          heading: '4. 恢復真實位置',
          blocks: [
            {
              type: 'paragraph',
              text: '在 VirtualLocation 中點按「恢復真實位置」，或直接重新啟動裝置。恢復始終免費。裝置上已開啟的 App 可能仍顯示快取位置，可重新開啟該 App 或等待下一次定位更新。',
            },
          ],
        },
        {
          heading: '免費與 VIP',
          blocks: [
            {
              type: 'paragraph',
              text: '一台 USB 連接裝置可免費傳送，不需要帳號或電子郵件。Wi-Fi 傳送、沿路線移動、搖桿和批次傳送屬於 VIP。VIP 為 US$19.99 一次性購買，最多可同時啟用 3 台 Mac，提供 14 天退款政策。',
            },
          ],
        },
      ],
      ctaLabel: '下載 VirtualLocation Mac 版',
    },
  },
  'restore-real-location-iphone': {
    en: {
      seoTitle: 'How to Restore Your Real Location on iPhone After Spoofing',
      metaDescription: 'Restore your iPhone or iPad’s real location with VirtualLocation or by restarting the device. Restore is always free, including for multiple devices.',
      h1: 'How to restore your real location on iPhone after using a virtual location',
      lead: 'In VirtualLocation, click Restore Real Location. You can also restart the iPhone or iPad. Either method clears the virtual location, and Restore is always free. If an app that is already open still shows the old place, reopen it or wait for its next location update.',
      sections: [
        {
          heading: 'Restore with VirtualLocation',
          blocks: [
            {
              type: 'ordered-list',
              items: [
                'Open VirtualLocation on your Mac.',
                'Select the connected iPhone or iPad.',
                'Click Restore Real Location.',
              ],
            },
            {
              type: 'paragraph',
              text: 'To restore several devices, select them together and use Batch Restore. Single and batch Restore are both free; you do not need VIP.',
            },
          ],
        },
        {
          heading: 'Restore without the app',
          blocks: [
            {
              type: 'paragraph',
              text: 'Restart the iPhone or iPad. Restarting also clears the virtual location.',
            },
          ],
        },
        {
          heading: 'If the old place still appears',
          blocks: [
            {
              type: 'paragraph',
              text: 'An app that was already open may be showing a cached location. Reopen that app or wait for its next location update. This does not mean the virtual location is still active.',
            },
          ],
        },
      ],
      ctaLabel: 'Learn more about VirtualLocation',
    },
    'zh-cn': {
      seoTitle: 'iPhone 虚拟定位后，怎么恢复真实位置？',
      metaDescription: '通过 VirtualLocation 的「恢复真实位置」或重启设备，清除 iPhone / iPad 的虚拟定位。单台与批量恢复始终免费。',
      h1: 'iPhone 使用虚拟定位后，怎么恢复真实位置？',
      lead: '在 VirtualLocation 中点击「恢复真实位置」，或直接重启 iPhone / iPad。两种方法都能清除虚拟定位，恢复始终免费。如果已经打开的 App 仍显示旧位置，可重开该 App 或等待下一次定位更新。',
      sections: [
        {
          heading: '使用 VirtualLocation 恢复',
          blocks: [
            {
              type: 'ordered-list',
              items: [
                '在 Mac 上打开 VirtualLocation。',
                '选择已连接的 iPhone 或 iPad。',
                '点击「恢复真实位置」。',
              ],
            },
            {
              type: 'paragraph',
              text: '如需恢复多台设备，先一起勾选，再使用批量恢复。单台和批量恢复都免费，不需要 VIP。',
            },
          ],
        },
        {
          heading: '不使用应用恢复',
          blocks: [
            {
              type: 'paragraph',
              text: '直接重启 iPhone 或 iPad，也能清除虚拟定位。',
            },
          ],
        },
        {
          heading: '为什么仍显示旧位置？',
          blocks: [
            {
              type: 'paragraph',
              text: '已经打开的 App 可能仍在显示缓存位置。重新打开该 App，或等待它的下一次定位更新即可；这不代表虚拟定位仍在生效。',
            },
          ],
        },
      ],
      ctaLabel: '了解 VirtualLocation',
    },
    'zh-tw': {
      seoTitle: 'iPhone 虛擬定位後，怎麼恢復真實位置？',
      metaDescription: '透過 VirtualLocation 的「恢復真實位置」或重新啟動裝置，清除 iPhone / iPad 的虛擬定位。單台與批次恢復始終免費。',
      h1: 'iPhone 使用虛擬定位後，怎麼恢復真實位置？',
      lead: '在 VirtualLocation 中點按「恢復真實位置」，或直接重新啟動 iPhone / iPad。兩種方法都能清除虛擬定位，恢復始終免費。如果已經開啟的 App 仍顯示舊位置，可重新開啟該 App 或等待下一次定位更新。',
      sections: [
        {
          heading: '使用 VirtualLocation 恢復',
          blocks: [
            {
              type: 'ordered-list',
              items: [
                '在 Mac 上開啟 VirtualLocation。',
                '選擇已連接的 iPhone 或 iPad。',
                '點按「恢復真實位置」。',
              ],
            },
            {
              type: 'paragraph',
              text: '如需恢復多台裝置，先一起勾選，再使用批次恢復。單台和批次恢復都免費，不需要 VIP。',
            },
          ],
        },
        {
          heading: '不使用應用程式恢復',
          blocks: [
            {
              type: 'paragraph',
              text: '直接重新啟動 iPhone 或 iPad，也能清除虛擬定位。',
            },
          ],
        },
        {
          heading: '為什麼仍顯示舊位置？',
          blocks: [
            {
              type: 'paragraph',
              text: '已經開啟的 App 可能仍在顯示快取位置。重新開啟該 App，或等待它的下一次定位更新即可；這不代表虛擬定位仍在生效。',
            },
          ],
        },
      ],
      ctaLabel: '了解 VirtualLocation',
    },
  },
  'virtuallocation-vs-xcode': {
    en: {
      seoTitle: 'VirtualLocation vs Xcode: Which Location Tool Fits?',
      metaDescription: 'Compare setup, cost and everyday use. VirtualLocation needs no Xcode and offers free USB Teleport; Xcode may be enough if it is already part of your workflow.',
      h1: 'VirtualLocation vs Xcode location simulation',
      lead: 'If Xcode is already installed and you only need its built-in development workflow, it may be enough. VirtualLocation is for people who want a standalone Mac app with a map, free USB Teleport, easy Restore, and optional Wi-Fi, routes, Joystick and batch controls.',
      sections: [
        {
          heading: 'Choose Xcode if',
          blocks: [
            {
              type: 'unordered-list',
              items: [
                'Xcode is already part of your development setup.',
                'You only need location simulation inside Apple’s development workflow.',
                'You do not want to add another app.',
              ],
            },
          ],
        },
        {
          heading: 'Choose VirtualLocation if',
          blocks: [
            {
              type: 'unordered-list',
              items: [
                'You do not want to install Xcode just to change a device’s reported location.',
                'You want a standalone map for choosing a place and restoring the real location.',
                'You may later want Wi-Fi Teleport, route movement, a real-time Joystick or batch controls.',
              ],
            },
          ],
        },
        {
          heading: 'Setup and cost',
          blocks: [
            {
              type: 'paragraph',
              text: 'VirtualLocation requires macOS 26+ and iOS 17.4.1+. First pairing requires USB and Developer Mode. One USB-connected device is free forever, with no account or email. VIP is US$19.99 once and adds Wi-Fi, routes, Joystick and batch controls.',
            },
            {
              type: 'paragraph',
              text: 'Xcode is Apple’s development environment. If you already have it and know its location-simulation workflow, using it may cost you nothing extra. VirtualLocation’s advantage is not that it replaces every Xcode feature; it is that location control can be used without installing Xcode.',
            },
          ],
        },
        {
          heading: 'The honest limitation',
          blocks: [
            {
              type: 'paragraph',
              text: 'VirtualLocation does not replace Xcode for building, debugging or profiling apps. It is focused on setting and restoring location.',
            },
          ],
        },
      ],
      ctaLabel: 'Compare the free and VIP features',
    },
    'zh-cn': {
      seoTitle: 'VirtualLocation 与 Xcode 模拟定位：怎么选？',
      metaDescription: '比较安装、成本与日常使用。VirtualLocation 无需 Xcode，提供免费的 USB 传送；如果 Xcode 已是你的开发环境，它可能已经够用。',
      h1: 'VirtualLocation 与 Xcode 模拟定位，怎么选？',
      lead: '如果已经安装 Xcode，而且只需要 Apple 开发流程里的模拟定位，Xcode 可能已经够用。VirtualLocation 更适合想要独立 Mac 应用、地图选点、免费 USB 传送和方便恢复的人；需要时再增加 Wi-Fi、路线、摇杆和批量控制。',
      sections: [
        {
          heading: '适合继续使用 Xcode 的情况',
          blocks: [
            {
              type: 'unordered-list',
              items: [
                'Xcode 已经是你的开发环境。',
                '你只需要 Apple 开发流程里的模拟定位。',
                '你不想另外安装一个应用。',
              ],
            },
          ],
        },
        {
          heading: '适合 VirtualLocation 的情况',
          blocks: [
            {
              type: 'unordered-list',
              items: [
                '你不想只为了修改设备上报的位置而安装 Xcode。',
                '你想用独立地图选点，并方便地恢复真实位置。',
                '你以后可能需要 Wi-Fi 传送、沿路线移动、实时摇杆或批量控制。',
              ],
            },
          ],
        },
        {
          heading: '设置与价格',
          blocks: [
            {
              type: 'paragraph',
              text: 'VirtualLocation 需要 macOS 26+ 和 iOS 17.4.1+。首次配对需要 USB 和开发者模式。一台 USB 设备永久免费，不需要账号或邮箱。VIP 为 US$19.99 一次性购买，增加 Wi-Fi、路线、摇杆和批量控制。',
            },
            {
              type: 'paragraph',
              text: 'Xcode 是 Apple 的开发环境。如果你已经安装并熟悉它的模拟定位流程，继续使用不会增加额外费用。VirtualLocation 的优势不是替代 Xcode 的全部功能，而是让你不安装 Xcode 也能设置和恢复定位。',
            },
          ],
        },
        {
          heading: '它的边界',
          blocks: [
            {
              type: 'paragraph',
              text: 'VirtualLocation 不替代 Xcode 的编译、调试或性能分析，只专注于设置与恢复位置。',
            },
          ],
        },
      ],
      ctaLabel: '比较免费版与 VIP 功能',
    },
    'zh-tw': {
      seoTitle: 'VirtualLocation 與 Xcode 模擬定位：怎麼選？',
      metaDescription: '比較安裝、成本與日常使用。VirtualLocation 無需 Xcode，提供免費的 USB 傳送；如果 Xcode 已是你的開發環境，它可能已經夠用。',
      h1: 'VirtualLocation 與 Xcode 模擬定位，怎麼選？',
      lead: '如果已經安裝 Xcode，而且只需要 Apple 開發流程裡的模擬定位，Xcode 可能已經夠用。VirtualLocation 更適合想要獨立 Mac 應用程式、地圖選點、免費 USB 傳送和方便恢復的人；需要時再增加 Wi-Fi、路線、搖桿和批次控制。',
      sections: [
        {
          heading: '適合繼續使用 Xcode 的情況',
          blocks: [
            {
              type: 'unordered-list',
              items: [
                'Xcode 已經是你的開發環境。',
                '你只需要 Apple 開發流程裡的模擬定位。',
                '你不想另外安裝一個應用程式。',
              ],
            },
          ],
        },
        {
          heading: '適合 VirtualLocation 的情況',
          blocks: [
            {
              type: 'unordered-list',
              items: [
                '你不想只為了修改裝置回報的位置而安裝 Xcode。',
                '你想用獨立地圖選點，並方便地恢復真實位置。',
                '你以後可能需要 Wi-Fi 傳送、沿路線移動、即時搖桿或批次控制。',
              ],
            },
          ],
        },
        {
          heading: '設定與價格',
          blocks: [
            {
              type: 'paragraph',
              text: 'VirtualLocation 需要 macOS 26+ 和 iOS 17.4.1+。首次配對需要 USB 和開發者模式。一台 USB 裝置永久免費，不需要帳號或電子郵件。VIP 為 US$19.99 一次性購買，增加 Wi-Fi、路線、搖桿和批次控制。',
            },
            {
              type: 'paragraph',
              text: 'Xcode 是 Apple 的開發環境。如果你已經安裝並熟悉它的模擬定位流程，繼續使用不會增加額外費用。VirtualLocation 的優勢不是取代 Xcode 的全部功能，而是讓你不安裝 Xcode 也能設定和恢復定位。',
            },
          ],
        },
        {
          heading: '它的邊界',
          blocks: [
            {
              type: 'paragraph',
              text: 'VirtualLocation 不取代 Xcode 的編譯、除錯或效能分析，只專注於設定與恢復位置。',
            },
          ],
        },
      ],
      ctaLabel: '比較免費版與 VIP 功能',
    },
  },
};

export const guideFacts: Record<Locale, string> = {
  en: 'VirtualLocation is a macOS app that sets a virtual location on a connected iPhone or iPad. It does not require Xcode, a jailbreak, or an app installed on the device. It requires macOS 26 or later and iOS 17.4.1 or later. First pairing requires USB and Developer Mode. One USB-connected device can use Teleport free forever, with no account or email. Restore Real Location is always free for one or several devices. VIP adds Wi-Fi Teleport, route movement, Joystick, batch Teleport and multi-device routes for US$19.99 once, with up to 3 activated Macs at a time and a 14-day refund policy.',
  'zh-cn': 'VirtualLocation 是一款 macOS 应用，可为连接的 iPhone 或 iPad 设置虚拟定位，无需 Xcode、越狱或在设备上安装应用。需要 macOS 26 或更高版本，以及 iOS 17.4.1 或更高版本；首次配对需要 USB 和开发者模式。一台 USB 设备可永久免费传送，不需要账号或邮箱。单台与批量恢复真实位置始终免费。VIP 为 US$19.99 一次性购买，增加 Wi-Fi 传送、沿路线移动、摇杆、批量传送和多设备路线移动，最多同时激活 3 台 Mac，提供 14 天退款政策。',
  'zh-tw': 'VirtualLocation 是一款 macOS 應用程式，可為連接的 iPhone 或 iPad 設定虛擬定位，無需 Xcode、越獄或在裝置上安裝應用程式。需要 macOS 26 或以上版本，以及 iOS 17.4.1 或以上版本；首次配對需要 USB 和開發者模式。一台 USB 裝置可永久免費傳送，不需要帳號或電子郵件。單台與批次恢復真實位置始終免費。VIP 為 US$19.99 一次性購買，增加 Wi-Fi 傳送、沿路線移動、搖桿、批次傳送和多裝置路線移動，最多可同時啟用 3 台 Mac，提供 14 天退款政策。',
};

export const guideLabels: Record<Locale, { facts: string; related: string }> = {
  en: { facts: 'Facts', related: 'Related guides' },
  'zh-cn': { facts: '事实摘要', related: '相关指南' },
  'zh-tw': { facts: '事實摘要', related: '相關指南' },
};
