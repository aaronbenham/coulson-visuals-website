const base = process.env.NEXT_PUBLIC_BLOB_STORE_URL

export const media = {
    about: `${base}/about/coulson_about.jpeg`,
    autoScroll: [
        `${base}/auto-scroll/amg-1.webp`,
        `${base}/auto-scroll/amg-2.webp`,
        `${base}/auto-scroll/brands-hatch-67.webp`,
        `${base}/auto-scroll/car-motogp.webp`,
        `${base}/auto-scroll/drfit-motogp-4.webp`,
        `${base}/auto-scroll/mx5-poster-pic-1.webp`,
        `${base}/auto-scroll/mx5-poster-pic-2.webp`
    ],
    logos: {
        black: `${base}/logos/black-logo.webp`,
        noBackgroundCropped: `${base}/logos/no-background-logo-cropped.webp`,
    },
    video: `${base}/main-video/audi-s3-25fps-1080p.mp4`,
    qualityDial: {
        before: `${base}/quality-dial/before.webp`,
        after: `${base}/quality-dial/after.webp`
    }
  } as const;