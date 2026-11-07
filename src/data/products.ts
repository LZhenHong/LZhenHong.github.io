import { existsSync } from 'node:fs';
import { locales, type Locale } from '../i18n';

type LocalizedText = Record<Locale, string>;

interface ProductAsset {
  src: string;
  width: number;
  height: number;
}

interface ProductFeature {
  title: LocalizedText;
  description: LocalizedText;
}

interface ProductAction {
  href: string;
  label: LocalizedText;
}

export interface Product {
  slug: 'americano' | 'settingshop' | 'storehop' | 'virtual-location';
  name: string;
  platform: 'macOS' | 'macOS · iOS · iPadOS';
  cardDescription: LocalizedText;
  tagline: LocalizedText;
  icon: ProductAsset;
  screenshot: ProductAsset & { alt: LocalizedText };
  primaryAction: ProductAction;
  secondaryAction?: ProductAction;
  supportUrls?: Record<Locale, string>;
  privacyUrls?: Record<Locale, string>;
  termsUrls?: Record<Locale, string>;
  refundUrls?: Record<Locale, string>;
  features: [ProductFeature, ProductFeature, ProductFeature];
}

// Source order is the curated homepage order; do not alphabetize this list.
const products: Product[] = [
  {
    slug: 'americano',
    name: 'Americano',
    platform: 'macOS',
    cardDescription: {
      en: 'Keep your Mac awake for downloads, presentations, and long tasks.',
      'zh-cn': '让 Mac 在下载、演示和长时间任务中保持唤醒。',
      'zh-tw': '讓 Mac 在下載、簡報和長時間作業中保持喚醒。',
    },
    tagline: {
      en: 'Keep your Mac awake, right from the menu bar.',
      'zh-cn': '从菜单栏让 Mac 保持唤醒。',
      'zh-tw': '從選單列讓 Mac 保持喚醒。',
    },
    icon: { src: '/apps/americano/icon.webp', width: 1024, height: 1024 },
    screenshot: {
      src: '/apps/americano/screenshot-1.jpg',
      width: 1600,
      height: 1000,
      alt: {
        en: 'Americano’s welcome window, with left-click and right-click controls for sleep prevention.',
        'zh-cn': 'Americano 的新手引导窗口，展示通过左键和右键控制防睡眠的方式。',
        'zh-tw': 'Americano 的新手導覽視窗，展示透過左鍵和右鍵控制防睡眠的方式。',
      },
    },
    primaryAction: {
      href: 'https://apps.apple.com/us/app/americano-stay-awake/id6803007478',
      label: {
        en: 'View on the App Store',
        'zh-cn': '在 App Store 查看',
        'zh-tw': '在 App Store 檢視',
      },
    },
    features: [
      {
        title: {
          en: 'Menu bar control',
          'zh-cn': '菜单栏控制',
          'zh-tw': '選單列控制',
        },
        description: {
          en: 'Turn sleep prevention on or off without leaving what you’re doing.',
          'zh-cn': '无需切换窗口，即可开启或关闭防睡眠。',
          'zh-tw': '無需切換視窗，即可開啟或關閉防睡眠。',
        },
      },
      {
        title: {
          en: 'Choose a duration',
          'zh-cn': '按需设置时长',
          'zh-tw': '按需設定時長',
        },
        description: {
          en: 'Pick how long your Mac stays awake for the task at hand.',
          'zh-cn': '根据当前任务，选择 Mac 保持唤醒的时长。',
          'zh-tw': '根據目前作業，選擇 Mac 保持喚醒的時長。',
        },
      },
      {
        title: {
          en: 'Ready for long tasks',
          'zh-cn': '适合长时间任务',
          'zh-tw': '適合長時間作業',
        },
        description: {
          en: 'Useful for downloads, presentations, and other long-running tasks.',
          'zh-cn': '下载、演示或其他长时间运行的任务都适用。',
          'zh-tw': '下載、簡報或其他長時間執行的作業都適用。',
        },
      },
    ],
  },
  {
    slug: 'settingshop',
    name: 'SettingsHop',
    platform: 'macOS',
    cardDescription: {
      en: 'Find and open Mac settings from one quick search panel.',
      'zh-cn': '通过一个搜索面板，快速找到并打开 Mac 系统设置。',
      'zh-tw': '透過一個搜尋面板，快速找到並打開 Mac 系統設定。',
    },
    tagline: {
      en: 'Search System Settings and jump straight to the pane you need.',
      'zh-cn': '搜索系统设置，直达你需要的面板。',
      'zh-tw': '搜尋系統設定，直達你需要的面板。',
    },
    icon: { src: '/apps/settingshop/icon.webp', width: 1024, height: 1024 },
    screenshot: {
      src: '/apps/settingshop/screenshot-1.jpg',
      width: 1600,
      height: 1000,
      alt: {
        en: 'SettingsHop’s search panel, with favorite and recently opened System Settings panes at the top.',
        'zh-cn': 'SettingsHop 搜索面板，收藏和最近打开的系统设置面板位于顶部。',
        'zh-tw': 'SettingsHop 搜尋面板，收藏和最近打開的系統設定面板位於頂部。',
      },
    },
    primaryAction: {
      href: 'https://apps.apple.com/us/app/settingshop/id6805768551',
      label: {
        en: 'View on the App Store',
        'zh-cn': '在 App Store 查看',
        'zh-tw': '在 App Store 檢視',
      },
    },
    features: [
      {
        title: {
          en: 'Search, then jump',
          'zh-cn': '搜索即达',
          'zh-tw': '搜尋即達',
        },
        description: {
          en: 'Find an available settings pane from a single search field.',
          'zh-cn': '在一个搜索框中找到可用的系统设置面板。',
          'zh-tw': '在一個搜尋欄位中找到可用的系統設定面板。',
        },
      },
      {
        title: {
          en: 'A shortcut away',
          'zh-cn': '随时呼出',
          'zh-tw': '隨時呼出',
        },
        description: {
          en: 'Open the search panel from the menu bar or with Option-Space anywhere.',
          'zh-cn': '点击菜单栏图标，或在任意位置按 Option-空格。',
          'zh-tw': '點按選單列圖示，或在任意位置按 Option-空白鍵。',
        },
      },
      {
        title: {
          en: 'Favorites and recents',
          'zh-cn': '收藏与最近使用',
          'zh-tw': '收藏與最近使用',
        },
        description: {
          en: 'Star frequent panes and keep recently opened ones at the top.',
          'zh-cn': '收藏常用面板，最近打开的面板也会排在前面。',
          'zh-tw': '收藏常用面板，最近打開的面板也會排在前面。',
        },
      },
    ],
  },
  {
    slug: 'storehop',
    name: 'StoreHop',
    platform: 'macOS · iOS · iPadOS',
    cardDescription: {
      en: 'Browse other regional App Store storefronts without changing your Apple ID region.',
      'zh-cn': '无需更改 Apple ID 地区，即可浏览其他地区的 App Store 商店。',
      'zh-tw': '無需更改 Apple ID 地區，即可瀏覽其他地區的 App Store 商店。',
    },
    tagline: {
      en: 'Explore App Store storefronts around the world while your Apple ID stays put.',
      'zh-cn': '浏览世界各地的 App Store 商店，Apple ID 地区保持不变。',
      'zh-tw': '瀏覽世界各地的 App Store 商店，Apple ID 地區保持不變。',
    },
    icon: { src: '/apps/storehop/icon.webp', width: 1024, height: 1024 },
    screenshot: {
      src: '/apps/storehop/screenshot-1.jpg',
      width: 736,
      height: 1600,
      alt: {
        en: 'StoreHop on iPhone, showing a searchable grid of App Store countries and regions.',
        'zh-cn': 'iPhone 上的 StoreHop，展示可搜索的 App Store 国家和地区网格。',
        'zh-tw': 'iPhone 上的 StoreHop，顯示可搜尋的 App Store 國家與地區網格。',
      },
    },
    primaryAction: {
      href: 'https://apps.apple.com/us/app/storehop-switch-storefronts/id6803034297',
      label: {
        en: 'View on the App Store',
        'zh-cn': '在 App Store 查看',
        'zh-tw': '在 App Store 檢視',
      },
    },
    features: [
      {
        title: {
          en: 'Browse other regions',
          'zh-cn': '浏览其他地区',
          'zh-tw': '瀏覽其他地區',
        },
        description: {
          en: 'Open another regional storefront without changing your Apple ID’s country or region.',
          'zh-cn': '无需更改 Apple ID 的国家或地区，即可打开其他地区的商店。',
          'zh-tw': '無需更改 Apple ID 的國家或地區，即可打開其他地區的商店。',
        },
      },
      {
        title: {
          en: 'Quick switching',
          'zh-cn': '快速切换',
          'zh-tw': '快速切換',
        },
        description: {
          en: 'Set a Primary storefront and use Recent or Previous Storefront to go back.',
          'zh-cn': '设置常用商店地区，并通过最近记录或“上一个商店地区”返回。',
          'zh-tw': '設定常用商店地區，並透過最近記錄或「上一個商店地區」返回。',
        },
      },
      {
        title: {
          en: 'Where you need it',
          'zh-cn': '多种入口',
          'zh-tw': '多種入口',
        },
        description: {
          en: 'Use Siri, Spotlight, Shortcuts, widgets, and Control Center.',
          'zh-cn': '可通过 Siri、Spotlight、快捷指令、小组件和控制中心使用。',
          'zh-tw': '可透過 Siri、Spotlight、捷徑、小工具和控制中心使用。',
        },
      },
    ],
  },
  {
    slug: 'virtual-location',
    name: 'VirtualLocation',
    platform: 'macOS',
    cardDescription: {
      en: 'Set a virtual location on a connected iPhone or iPad.',
      'zh-cn': '为连接到 Mac 的 iPhone 或 iPad 设置虚拟定位。',
      'zh-tw': '為連接 Mac 的 iPhone 或 iPad 設定虛擬定位。',
    },
    tagline: {
      en: 'Set a virtual location on your iPhone or iPad, right from your Mac.',
      'zh-cn': '在 Mac 上为 iPhone 或 iPad 设置虚拟定位。',
      'zh-tw': '在 Mac 上為 iPhone 或 iPad 設定虛擬定位。',
    },
    icon: { src: '/apps/virtual-location/icon.webp', width: 1024, height: 1024 },
    screenshot: {
      src: '/apps/virtual-location/screenshot-1.jpg',
      width: 1400,
      height: 900,
      alt: {
        en: 'VirtualLocation’s main window, with an East Asia map, a device list, and Teleport controls.',
        'zh-cn': 'VirtualLocation 主窗口，显示东亚地图、设备列表和传送控制。',
        'zh-tw': 'VirtualLocation 主視窗，顯示東亞地圖、裝置列表和傳送控制。',
      },
    },
    primaryAction: {
      href: 'https://checkout.dodopayments.com/buy/pdt_0NqlGfMb75EYgipJrnzOp',
      label: {
        en: 'Buy VIP — US$19.99',
        'zh-cn': '购买 VIP — US$19.99',
        'zh-tw': '購買 VIP — US$19.99',
      },
    },
    secondaryAction: {
      href: 'https://github.com/LZhenHong/LZhenHong.github.io/releases/tag/virtual-location-updates',
      label: {
        en: 'Download for Mac',
        'zh-cn': '下载 Mac 版',
        'zh-tw': '下載 Mac 版',
      },
    },
    supportUrls: {
      en: '/apps/virtual-location/',
      'zh-cn': '/zh-cn/apps/virtual-location/',
      'zh-tw': '/zh-tw/apps/virtual-location/',
    },
    privacyUrls: {
      en: '/apps/virtual-location/privacy/',
      'zh-cn': '/zh-cn/apps/virtual-location/privacy/',
      'zh-tw': '/zh-tw/apps/virtual-location/privacy/',
    },
    termsUrls: {
      en: '/apps/virtual-location/terms/',
      'zh-cn': '/zh-cn/apps/virtual-location/terms/',
      'zh-tw': '/zh-tw/apps/virtual-location/terms/',
    },
    refundUrls: {
      en: '/apps/virtual-location/refund/',
      'zh-cn': '/zh-cn/apps/virtual-location/refund/',
      'zh-tw': '/zh-tw/apps/virtual-location/refund/',
    },
    features: [
      {
        title: {
          en: 'Teleport, for free',
          'zh-cn': '免费传送',
          'zh-tw': '免費傳送',
        },
        description: {
          en: 'Set a location on a connected iPhone or iPad over USB or Wi-Fi — no Xcode needed.',
          'zh-cn': '通过 USB 或 Wi-Fi 为连接的 iPhone 或 iPad 设置虚拟定位，Mac 无需安装 Xcode。',
          'zh-tw': '透過 USB 或 Wi-Fi 為連接的 iPhone 或 iPad 設定虛擬定位，Mac 無需安裝 Xcode。',
        },
      },
      {
        title: {
          en: 'Move or take the joystick',
          'zh-cn': '移动或摇杆控制',
          'zh-tw': '移動或搖桿控制',
        },
        description: {
          en: 'Follow a route with Move, or drive in real time with Joystick — both are VIP features.',
          'zh-cn': '使用「移动」沿路线前进，或用「摇杆」实时控制；两种模式均为 VIP 功能。',
          'zh-tw': '使用「移動」沿路線前進，或用「搖桿」即時控制；兩種模式皆為 VIP 功能。',
        },
      },
      {
        title: {
          en: 'Multiple devices at once',
          'zh-cn': '批量控制多台设备',
          'zh-tw': '批次控制多台裝置',
        },
        description: {
          en: 'Teleport or move a selected group of devices together with VIP batch controls.',
          'zh-cn': '通过 VIP 批量功能，同时传送或移动多台选定的设备。',
          'zh-tw': '透過 VIP 批次功能，同時傳送或移動多台選定的裝置。',
        },
      },
    ],
  },
];

function validateLocalizedText(product: Product, field: string, value: LocalizedText): void {
  for (const locale of locales) {
    if (!value[locale]?.trim()) {
      throw new Error(`[products] ${product.slug} is missing ${field}.${locale}.`);
    }
  }
}

function validateAsset(product: Product, field: string, asset: ProductAsset): void {
  if (!asset.src || asset.width <= 0 || asset.height <= 0) {
    throw new Error(`[products] ${product.slug} has invalid ${field} data.`);
  }
  if (!existsSync(`public${asset.src}`)) {
    throw new Error(`[products] ${product.slug} is missing ${field}: public${asset.src}.`);
  }
}

/** Validate the static catalog at build time, including its public assets. */
export function getProducts(): Product[] {
  for (const product of products) {
    if (!product.name || !product.platform || !product.primaryAction.href) {
      throw new Error(`[products] ${product.slug} is missing required catalog data.`);
    }
    validateLocalizedText(product, 'cardDescription', product.cardDescription);
    validateLocalizedText(product, 'tagline', product.tagline);
    validateLocalizedText(product, 'primaryAction.label', product.primaryAction.label);
    validateLocalizedText(product, 'screenshot.alt', product.screenshot.alt);
    validateAsset(product, 'icon', product.icon);
    validateAsset(product, 'screenshot', product.screenshot);
    if (product.features.length !== 3) {
      throw new Error(`[products] ${product.slug} must have exactly three features.`);
    }
    product.features.forEach((feature, index) => {
      validateLocalizedText(product, `features.${index}.title`, feature.title);
      validateLocalizedText(product, `features.${index}.description`, feature.description);
    });
    if (product.secondaryAction) {
      if (!product.secondaryAction.href) {
        throw new Error(`[products] ${product.slug} is missing its secondary action URL.`);
      }
      validateLocalizedText(product, 'secondaryAction.label', product.secondaryAction.label);
    }
  }
  return products;
}
