export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  portfolioUrl: process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
  calendly: {
    monthly: process.env.NEXT_PUBLIC_CALENDLY_MONTHLY ?? "",
    singleVideo: process.env.NEXT_PUBLIC_CALENDLY_SINGLE_VIDEO ?? "",
    photoshoot: process.env.NEXT_PUBLIC_CALENDLY_PHOTOSHOOT ?? "",
    videoPhotoshoot: process.env.NEXT_PUBLIC_CALENDLY_VIDEO_PHOTOSHOOT ?? "",
  },
} as const;