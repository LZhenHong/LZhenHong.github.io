# VirtualLocation campaign media

The product page uses the reviewed website video and its poster from the
VirtualLocation repository. That repository's `marketing/USAGE.md` defines the
reuse rules, and `marketing/library/assets.json` remains the asset index.
Website files are delivery copies, not new editable masters.

## Placement and playback

`src/components/VirtualLocationProductPage.astro` places one full-width demo
between the hero and setup steps. Its localized copy and media references live
in `src/data/virtualLocationLanding.ts`; styling uses the existing product
page frame and tokens in `src/styles/virtual-location.css`.

The native player starts paused with a poster and `preload="none"`. Playback,
pause, seeking, and fullscreen work without client JavaScript. No video starts
automatically, including when reduced motion is enabled. The original file is
also linked next to the caption for browsers that cannot play it inline.

| Page locale | Video and poster | Caption |
| --- | --- | --- |
| `en` | English promotional text | Identifies demo devices and the Simplified Chinese app interface. |
| `zh-cn` | Simplified Chinese | Identifies the recorded app interface and demo devices. |
| `zh-tw` | Reuses the Simplified Chinese files | Traditional Chinese caption explicitly identifies the Simplified Chinese video and interface. |

The video is a silent overview, not a first-use tutorial or evidence of
physical-device GPS results. The existing localized screenshots and setup
instructions remain available. Historical posters and main campaign films
marked `needs_url_update` are not used here.

## Updating the delivery copies

1. Review the source asset's status and batch instructions in the VirtualLocation
   repository. Update and verify both languages there first.
2. Copy the approved files listed in
   `public/apps/virtual-location/campaign/2026-11-17/manifest.json`. The manifest
   records the source commit, relative source paths, delivery names, sizes, and
   SHA-256 hashes.
3. For a new revision, use a new dated delivery directory and point
   `campaignPath` to it. Update the manifest to match the exact source commit
   and files; do not silently overwrite a previously published URL.
4. Run `npm run build`, then preview the built output. Check all three locale
   routes, narrow and desktop layouts, light/dark appearance, actual playback
   and pause, the direct video link, and no-JavaScript use. Confirm the initial
   page does not fetch the MP4 before playback and has no horizontal overflow.
5. Follow the repository's publication workflow. After publication, check the
   actual page and media responses, then record the site commit and result in
   the source marketing library. A local preview does not prove deployment.

Do not copy private raw recordings, diagnostic logs, credentials, application
builds, or source-machine paths into this public repository.
