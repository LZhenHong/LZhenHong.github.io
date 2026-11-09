import type { Locale } from '../i18n';

interface FeatureCopy {
  badge: string;
  name: string;
  title: string;
  body: string;
  detail: string;
}

interface FaqCopy {
  question: string;
  answer: string;
}

interface LandingCopy {
  version: {
    preview: string;
    download: string;
    requirements: string;
  };
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    trust: string;
    caption: string;
  };
  steps: {
    kicker: string;
    title: string;
    items: [string, string, string];
    note: string;
  };
  features: {
    kicker: string;
    title: string;
    intro: string;
    teleport: FeatureCopy & { link: string };
    move: FeatureCopy;
    joystick: FeatureCopy;
    batch: FeatureCopy;
  };
  plans: {
    kicker: string;
    title: string;
    intro: string;
    free: {
      label: string;
      intro: string;
      items: [string, string, string, string];
    };
    vip: {
      badge: string;
      priceSuffix: string;
      intro: string;
      items: [string, string, string, string, string, string];
      note: string;
    };
    reassurance: {
      refund: string;
      processor: string;
    };
  };
  faq: {
    kicker: string;
    title: string;
    items: [FaqCopy, FaqCopy, FaqCopy, FaqCopy, FaqCopy];
    refund: {
      question: string;
      requestLabel: string;
      requestDetail: string;
      policyLabel: string;
      policyPeriod: string;
      emailLead: string;
      emailDetail: string;
    };
  };
  closing: {
    kicker: string;
    title: string;
    body: string;
    buy: string;
  };
}

interface LocalizedMedia {
  src: string;
  width: 1400;
  height: 900;
  heroAlt?: string;
  fullAlt?: string;
  alt?: string;
}

export const virtualLocationMedia: Record<Locale, {
  teleport: LocalizedMedia;
  move: LocalizedMedia;
  joystick: LocalizedMedia;
  batch: LocalizedMedia;
}> = {
  en: {
    teleport: {
      src: '/apps/virtual-location/landing/en/teleport.png',
      width: 1400,
      height: 900,
      heroAlt: 'VirtualLocation Teleport window with the Target Location pin on the map and the Teleport Here button.',
      fullAlt: 'Complete VirtualLocation Teleport window showing the Target Location pin, connected devices, saved Places, and the Teleport Here button.',
    },
    move: {
      src: '/apps/virtual-location/landing/en/move.png',
      width: 1400,
      height: 900,
      alt: 'VirtualLocation Move card showing a blue route with numbered stops on the map and the saved Routes list.',
    },
    joystick: {
      src: '/apps/virtual-location/landing/en/joystick.png',
      width: 1400,
      height: 900,
      alt: 'VirtualLocation Joystick card showing the on-screen control disc, steering status, and speed set to 12 km/h.',
    },
    batch: {
      src: '/apps/virtual-location/landing/en/batch-saved.png',
      width: 1400,
      height: 900,
      alt: 'VirtualLocation Batch card showing three checked devices and the saved Places list.',
    },
  },
  'zh-cn': {
    teleport: {
      src: '/apps/virtual-location/landing/zh-cn/teleport.png',
      width: 1400,
      height: 900,
      heroAlt: 'VirtualLocation 简体中文界面，地图中已标出目标位置，并提供传送操作。',
      fullAlt: 'VirtualLocation 简体中文完整窗口，显示目标位置、已连接设备、已保存地点和传送操作。',
    },
    move: {
      src: '/apps/virtual-location/landing/zh-cn/move.png',
      width: 1400,
      height: 900,
      alt: 'VirtualLocation 简体中文移动界面，地图显示蓝色路线和多个站点，以及已保存路线。',
    },
    joystick: {
      src: '/apps/virtual-location/landing/zh-cn/joystick.png',
      width: 1400,
      height: 900,
      alt: 'VirtualLocation 简体中文摇杆界面，显示控制盘、转向状态和 12 公里/时速度。',
    },
    batch: {
      src: '/apps/virtual-location/landing/zh-cn/batch-saved.png',
      width: 1400,
      height: 900,
      alt: 'VirtualLocation 简体中文批量界面，显示三台已勾选设备和已保存地点。',
    },
  },
  'zh-tw': {
    teleport: {
      src: '/apps/virtual-location/landing/zh-tw/teleport.png',
      width: 1400,
      height: 900,
      heroAlt: 'VirtualLocation 繁體中文介面，地圖中已標出目標位置，並提供傳送操作。',
      fullAlt: 'VirtualLocation 繁體中文完整視窗，顯示目標位置、已連接裝置、已儲存地點和傳送操作。',
    },
    move: {
      src: '/apps/virtual-location/landing/zh-tw/move.png',
      width: 1400,
      height: 900,
      alt: 'VirtualLocation 繁體中文移動介面，地圖顯示藍色路線和多個站點，以及已儲存路線。',
    },
    joystick: {
      src: '/apps/virtual-location/landing/zh-tw/joystick.png',
      width: 1400,
      height: 900,
      alt: 'VirtualLocation 繁體中文搖桿介面，顯示控制盤、轉向狀態和 12 公里/小時速度。',
    },
    batch: {
      src: '/apps/virtual-location/landing/zh-tw/batch-saved.png',
      width: 1400,
      height: 900,
      alt: 'VirtualLocation 繁體中文批次介面，顯示三台已勾選裝置和已儲存地點。',
    },
  },
};

export const virtualLocationLanding: Record<Locale, LandingCopy> = {
  en: {
    version: {
      preview: 'Preview: The no-Xcode workflow and macOS 26 requirements shown here are for the upcoming 0.1.1 release. The current download is 0.1.0 for macOS 14 or later.',
      download: 'Download 0.1.0 (macOS 14+)',
      requirements: '0.1.1 requirements: macOS 26 or later, and an iPhone or iPad with iOS 17.4.1 or later.',
    },
    meta: {
      title: 'VirtualLocation — Change your location from your Mac',
      description:
        'VirtualLocation for Mac: free single-device USB Teleport, with VIP Wi-Fi, movement, joystick and batch controls.',
    },
    hero: {
      eyebrow: 'MAC APP · NO XCODE',
      title: 'Change your iPhone’s location, right from your Mac.',
      body: 'Connect an iPhone or iPad, then choose a place on the map. Teleport one device for free over USB — no Xcode, no jailbreak, and nothing to install on the device.',
      trust: 'Free Teleport for one USB device · No Xcode · Restore always free',
      caption: 'One map, three ways to set location: Teleport, Move, and Joystick.',
    },
    steps: {
      kicker: 'QUICK START',
      title: 'From Mac to a new location in three steps',
      items: [
        'Connect over USB and trust this Mac.',
        'Turn on Developer Mode and restart.',
        'Choose a place and Teleport.',
      ],
      note: 'After USB pairing, Wi-Fi Teleport is available with VIP on the same Wi-Fi network.',
    },
    features: {
      kicker: 'FEATURES',
      title: 'Start with a point. Go further with VIP.',
      intro:
        'Teleport one device free over USB, then add routes, live steering, Wi-Fi Teleport, batch Teleport, or multi-device route movement when you need them.',
      teleport: {
        badge: 'FREE',
        name: 'Teleport',
        title: 'Pick a place. Teleport there.',
        body: 'Search for a place or choose a point on the map. Your connected iPhone or iPad reports that location instead.',
        detail: 'Free for one USB-connected device · Restore always free',
        link: 'See what’s included',
      },
      move: {
        badge: 'VIP',
        name: 'Move',
        title: 'Build a route. Move at your pace.',
        body: 'Add stops on the map or import a GPX file, then follow the route at the speed you choose.',
        detail: 'Choose walking, driving, or a straight line, and adjust speed while moving.',
      },
      joystick: {
        badge: 'VIP',
        name: 'Joystick',
        title: 'Steer the location in real time.',
        body: 'Hold WASD or the arrow keys, or drag the on-screen joystick, to move in any direction.',
        detail: 'Adjust speed as you go, or use Direction Lock to keep moving after you let go.',
      },
      batch: {
        badge: 'VIP',
        name: 'Batch',
        title: 'Control a group of devices together.',
        body: 'Select your connected devices, then teleport them together or move them along the same route.',
        detail: 'Batch Restore is always free, even without VIP.',
      },
    },
    plans: {
      kicker: 'FREE & VIP',
      title: 'Start free. Upgrade when you need more.',
      intro: 'Download the app for free, or unlock advanced features with one VIP purchase.',
      free: {
        label: 'FREE',
        intro: 'The essentials for one USB-connected device.',
        items: [
          'Teleport one device over USB',
          'Restore real location on one or several devices',
          '3 favorite places',
          '10 search history entries',
        ],
      },
      vip: {
        badge: 'ONE-TIME',
        priceSuffix: 'one-time',
        intro: 'Advanced control, without a subscription.',
        items: [
          'Move along routes',
          'Real-time Joystick control',
          'Teleport over Wi-Fi',
          'Batch Teleport and batch route movement',
          'Unlimited favorite places and search history',
          'Up to 3 activated Macs at a time',
        ],
        note: 'One-time purchase. No expiration. Your license works offline after activation.',
      },
      reassurance: {
        refund: '14-day refund policy',
        processor: 'Purchases processed by Dodo Payments',
      },
    },
    faq: {
      kicker: 'FAQ',
      title: 'A few things to know first.',
      items: [
        {
          question: 'Do I need Xcode or a jailbreak?',
          answer: 'No. You do not need Xcode or a jailbreak.',
        },
        {
          question: 'What will I need for 0.1.1?',
          answer:
            'Use a compatible Mac and iPhone or iPad. Pair them over USB for the first time, then unlock the device and trust this Mac. Turn on Developer Mode in Settings → Privacy & Security, restart the device, and confirm Developer Mode after it restarts.',
        },
        {
          question: 'Can I Teleport over Wi-Fi?',
          answer:
            'After USB pairing, connect your Mac and device to the same Wi-Fi network and make sure the device is discoverable. Sleeping or locking may interrupt the connection; wake and unlock the device before retrying. Wi-Fi Teleport requires VIP, while USB Teleport stays free for one device.',
        },
        {
          question: 'How do I get my real location back?',
          answer:
            'Choose Restore in the app or restart your device to clear the virtual location. Single-device Restore and Batch Restore are always free. An app that is already open may show a cached location; reopen it or wait for it to refresh.',
        },
        {
          question: 'Is VIP a subscription?',
          answer:
            'No. VIP is a one-time purchase with no expiration. It covers up to 3 activated Macs at a time, and your license works offline after activation.',
        },
      ],
      refund: {
        question: 'How do I request a refund?',
        requestLabel: 'Request a refund',
        requestDetail: ' within 14 days of purchase and include your Dodo Payments order ID. ',
        policyLabel: 'Read the refund policy',
        policyPeriod: '',
        emailLead: '',
        emailDetail: '',
      },
    },
    closing: {
      kicker: 'VIRTUALLOCATION FOR MAC',
      title: 'Set your first virtual location for free.',
      body: 'Download VirtualLocation for Mac. Teleport one device over USB for free, and upgrade only if you need VIP features.',
      buy: 'Buy VIP',
    },
  },
  'zh-cn': {
    version: {
      preview: '新版本预览：本页展示的免 Xcode 流程和 macOS 26 系统要求属于即将发布的 0.1.1。当前下载仍为 0.1.0，支持 macOS 14 或更高版本。',
      download: '下载 0.1.0（macOS 14+）',
      requirements: '0.1.1 系统要求：macOS 26 或更高版本，以及 iOS 17.4.1 或更高版本的 iPhone / iPad。',
    },
    meta: {
      title: 'VirtualLocation — 在 Mac 上设置 iPhone / iPad 虚拟定位',
      description:
        '在 Mac 上为连接的 iPhone 或 iPad 设置虚拟定位。单台 USB 连接设备免费传送，无需 Xcode 或越狱。',
    },
    hero: {
      eyebrow: 'MAC 应用 · 无需 XCODE',
      title: '在 Mac 上，设置 iPhone 的虚拟定位。',
      body: '连接 iPhone 或 iPad，在地图上选好地点即可。单台 USB 连接设备可免费传送；Mac 无需 Xcode，设备无需越狱或安装应用。',
      trust: '单台 USB 设备免费传送 · 无需 Xcode · 恢复真实位置永远免费',
      caption: '一张地图，三种定位方式：传送、移动和摇杆。',
    },
    steps: {
      kicker: '快速开始',
      title: '从 Mac 到新定位，只需三步',
      items: [
        '通过 USB 连接，解锁设备并信任这台 Mac。',
        '在「设置 → 隐私与安全性」中开启开发者模式，重启设备并确认。',
        '在地图上选好地点并传送。',
      ],
      note: '通过 USB 配对后，VIP 可在设备与 Mac 处于同一 Wi-Fi 网络时使用 Wi-Fi 传送。',
    },
    features: {
      kicker: '功能',
      title: '先免费传送，再按需升级 VIP。',
      intro:
        '单台设备通过 USB 免费传送；需要沿路线移动、实时摇杆、Wi-Fi 传送、批量传送或多设备路线移动时，再升级 VIP。',
      teleport: {
        badge: '免费 · USB',
        name: '传送',
        title: '选好地点，一键传送。',
        body: '搜索地名，或在地图上选点，让连接的 iPhone 或 iPad 上报该处定位。',
        detail: '单台 USB 连接设备免费；恢复真实位置永远免费。',
        link: '查看包含的功能',
      },
      move: {
        badge: 'VIP',
        name: '移动',
        title: '画好路线，按你的速度移动。',
        body: '在地图上放置停靠点，或导入 GPX 文件，再按你设定的速度沿路线移动。',
        detail: '支持步行、驾车和直线路线，移动中也能调整速度。',
      },
      joystick: {
        badge: 'VIP',
        name: '摇杆',
        title: '用摇杆，实时控制定位。',
        body: '按住 WASD 或方向键，或拖动屏幕上的方向盘，让定位向任意方向移动。',
        detail: '移动中可调速；开启方向锁定后，松开按键也会继续前进。',
      },
      batch: {
        badge: 'VIP',
        name: '批量',
        title: '多台设备，一起操作。',
        body: '勾选已连接的 iPhone 和 iPad，一起传送，或沿同一条路线移动。',
        detail: '批量恢复真实位置始终免费，不需要 VIP。',
      },
    },
    plans: {
      kicker: '免费与 VIP',
      title: '先免费使用，再按需升级。',
      intro: '免费下载应用，或通过一次购买解锁 VIP 高级功能。',
      free: {
        label: '免费版',
        intro: '适合单台 USB 连接设备的基础定位。',
        items: [
          '单台设备通过 USB 传送',
          '单台或批量恢复真实位置',
          '3 个地图收藏',
          '10 条搜索历史',
        ],
      },
      vip: {
        badge: '一次性购买',
        priceSuffix: '一次性购买',
        intro: '更多控制方式，不用订阅。',
        items: [
          '沿路线移动',
          '实时摇杆控制',
          '通过 Wi-Fi 传送',
          '批量传送与多设备路线移动',
          '不限数量的地图收藏与搜索历史',
          '最多同时激活 3 台 Mac',
        ],
        note: '一次购买，永不过期。激活后，许可证离线仍有效。',
      },
      reassurance: {
        refund: '14 天退款政策',
        processor: '购买由 Dodo Payments 处理',
      },
    },
    faq: {
      kicker: 'FAQ',
      title: '常见问题',
      items: [
        {
          question: '需要 Xcode 或越狱吗？',
          answer:
            '都不需要。VirtualLocation 通过 Apple 的开发者服务、经可信连接工作。Mac 无需安装 Xcode，设备无需越狱，也不用在设备上安装任何应用。',
        },
        {
          question: '使用 0.1.1 需要准备什么？',
          answer:
            '首次配对请通过 USB 连接，解锁设备并信任这台 Mac。在「设置 → 隐私与安全性」中开启开发者模式，然后重启设备并在开机后确认。',
        },
        {
          question: '可以不用数据线，改用 Wi-Fi 吗？',
          answer:
            '可以。首次通过 USB 配对后，设备与 Mac 需处于同一 Wi-Fi 网络，且 Mac 能发现设备。设备睡眠或锁屏可能中断连接；请唤醒并解锁设备后重试。Wi-Fi 传送属于 VIP 功能，USB 传送保持免费。',
        },
        {
          question: '如何恢复真实位置？',
          answer:
            '在应用里点「恢复真实位置」，或直接重启设备。两者都能清除虚拟定位；无论单台还是批量恢复，都永远免费。设备上已打开的 App 可能仍显示缓存的旧定位，可重开该 App 或等待下一次定位更新。',
        },
        {
          question: 'VIP 是订阅吗？',
          answer:
            '不是。VIP 许可证为 US$19.99 一次性购买，永不过期，最多同时激活 3 台 Mac；激活后离线有效。',
        },
      ],
      refund: {
        question: '如何申请退款？',
        requestLabel: '',
        requestDetail: '',
        policyLabel: '',
        policyPeriod: '购买后 14 天内',
        emailLead: '，发邮件到 ',
        emailDetail: '，并附上你的 Dodo Payments 订单号。退款会经 Dodo Payments 按原支付方式退回。',
      },
    },
    closing: {
      kicker: 'VIRTUALLOCATION MAC 版',
      title: '免费设置第一个虚拟定位。',
      body: '下载 VirtualLocation Mac 版，单台设备通过 USB 免费传送；需要更多功能时，再升级 VIP。',
      buy: '购买 VIP — US$19.99',
    },
  },
  'zh-tw': {
    version: {
      preview: '新版本預覽：本頁展示的免 Xcode 流程和 macOS 26 系統需求屬於即將推出的 0.1.1。目前下載仍為 0.1.0，支援 macOS 14 或以上版本。',
      download: '下載 0.1.0（macOS 14+）',
      requirements: '0.1.1 系統需求：macOS 26 或以上版本，以及 iOS 17.4.1 或以上版本的 iPhone / iPad。',
    },
    meta: {
      title: 'VirtualLocation — 在 Mac 上設定 iPhone / iPad 虛擬定位',
      description:
        '在 Mac 上為連接的 iPhone 或 iPad 設定虛擬定位。單台 USB 連接裝置免費傳送，無需 Xcode 或越獄。',
    },
    hero: {
      eyebrow: 'MAC App · 無需 XCODE',
      title: '在 Mac 上，設定 iPhone 的虛擬定位。',
      body: '連接 iPhone 或 iPad，在地圖上選好地點即可。單台 USB 連接裝置可免費傳送；Mac 無需 Xcode，裝置無需越獄或安裝應用程式。',
      trust: '單台 USB 裝置免費傳送 · 無需 Xcode · 恢復真實位置永遠免費',
      caption: '一張地圖，三種定位方式：傳送、移動和搖桿。',
    },
    steps: {
      kicker: '快速開始',
      title: '從 Mac 到新定位，只需三步',
      items: [
        '透過 USB 連接，解鎖裝置並信任這台 Mac。',
        '在「設定 → 隱私權與安全性」中開啟開發者模式，重新啟動裝置並確認。',
        '在地圖上選好地點並傳送。',
      ],
      note: '透過 USB 配對後，VIP 可在裝置與 Mac 處於同一 Wi-Fi 網路時使用 Wi-Fi 傳送。',
    },
    features: {
      kicker: '功能',
      title: '先免費傳送，再按需升級 VIP。',
      intro:
        '單台裝置透過 USB 免費傳送；需要沿路線移動、即時搖桿、Wi-Fi 傳送、批次傳送或多裝置路線移動時，再升級 VIP。',
      teleport: {
        badge: '免費 · USB',
        name: '傳送',
        title: '選好地點，一鍵傳送。',
        body: '搜尋地名，或在地圖上選點，讓連接的 iPhone 或 iPad 回報該處定位。',
        detail: '單台 USB 連接裝置免費；恢復真實位置永遠免費。',
        link: '查看包含的功能',
      },
      move: {
        badge: 'VIP',
        name: '移動',
        title: '畫好路線，按你的速度移動。',
        body: '在地圖上放置停靠點，或匯入 GPX 檔案，再按你設定的速度沿路線移動。',
        detail: '支援步行、駕車和直線路線，移動中也能調整速度。',
      },
      joystick: {
        badge: 'VIP',
        name: '搖桿',
        title: '用搖桿，即時控制定位。',
        body: '按住 WASD 或方向鍵，或拖動螢幕上的方向盤，讓定位向任意方向移動。',
        detail: '移動中可調速；開啟方向鎖定後，鬆開按鍵也會繼續前進。',
      },
      batch: {
        badge: 'VIP',
        name: '批次',
        title: '多台裝置，一起操作。',
        body: '勾選已連接的 iPhone 和 iPad，一起傳送，或沿同一條路線移動。',
        detail: '批次恢復真實位置始終免費，不需要 VIP。',
      },
    },
    plans: {
      kicker: '免費與 VIP',
      title: '先免費使用，再按需升級。',
      intro: '免費下載應用程式，或透過一次購買解鎖 VIP 進階功能。',
      free: {
        label: '免費版',
        intro: '適合單台 USB 連接裝置的基礎定位。',
        items: [
          '單台裝置透過 USB 傳送',
          '單台或批次恢復真實位置',
          '3 個地圖收藏',
          '10 筆搜尋紀錄',
        ],
      },
      vip: {
        badge: '一次性購買',
        priceSuffix: '一次性購買',
        intro: '更多控制方式，不用訂閱。',
        items: [
          '沿路線移動',
          '即時搖桿控制',
          '透過 Wi-Fi 傳送',
          '批次傳送與多裝置路線移動',
          '不限數量的地圖收藏與搜尋紀錄',
          '最多可同時啟用 3 台 Mac',
        ],
        note: '一次購買，永不過期。啟用後，授權離線仍有效。',
      },
      reassurance: {
        refund: '14 天退款政策',
        processor: '購買由 Dodo Payments 處理',
      },
    },
    faq: {
      kicker: 'FAQ',
      title: '常見問題',
      items: [
        {
          question: '需要 Xcode 或越獄嗎？',
          answer:
            '都不需要。VirtualLocation 透過 Apple 的開發者服務，經由可信連線運作。Mac 無需安裝 Xcode，裝置無需越獄，也不需在裝置上安裝任何應用程式。',
        },
        {
          question: '使用 0.1.1 需要準備什麼？',
          answer:
            '首次配對請透過 USB 連接，解鎖裝置並信任這台 Mac。在「設定 → 隱私權與安全性」中開啟開發者模式，然後重新啟動裝置並在開機後確認。',
        },
        {
          question: '可以不用連接線，改用 Wi-Fi 嗎？',
          answer:
            '可以。首次透過 USB 配對後，裝置與 Mac 需處於同一 Wi-Fi 網路，且 Mac 能找到裝置。裝置睡眠或鎖定螢幕可能中斷連線；請喚醒並解鎖裝置後重試。Wi-Fi 傳送屬於 VIP 功能，USB 傳送保持免費。',
        },
        {
          question: '如何恢復真實位置？',
          answer:
            '在應用程式中點按「恢復真實位置」，或直接重新啟動裝置。兩者都能清除虛擬定位；無論單台或批次恢復，都永遠免費。裝置上已開啟的 App 可能仍顯示快取的舊定位，可重新開啟該 App 或等待下一次定位更新。',
        },
        {
          question: 'VIP 是訂閱嗎？',
          answer:
            '不是。VIP 授權為 US$19.99 一次性購買，永不過期，最多可同時啟用 3 台 Mac；啟用後離線有效。',
        },
      ],
      refund: {
        question: '如何申請退款？',
        requestLabel: '',
        requestDetail: '',
        policyLabel: '',
        policyPeriod: '購買後 14 天內',
        emailLead: '，寄電子郵件至 ',
        emailDetail: '，並附上你的 Dodo Payments 訂單編號。退款會透過 Dodo Payments 按原付款方式退回。',
      },
    },
    closing: {
      kicker: 'VIRTUALLOCATION MAC 版',
      title: '免費設定第一個虛擬定位。',
      body: '下載 VirtualLocation Mac 版，單台裝置透過 USB 免費傳送；需要更多功能時，再升級 VIP。',
      buy: '購買 VIP — US$19.99',
    },
  },
};
