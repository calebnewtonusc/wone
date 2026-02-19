// ================================================================
// WONE SITE CONFIGURATION — Edit this file before launch
//
// This is the single source of truth for all site-wide values.
// The Wone team should review every field marked TODO and update
// before going live.
// ================================================================

export const siteConfig = {
  name: "Wone",

  // TODO: Confirm this is the final production domain
  domain: "woneportal.com",
  url: "https://woneportal.com",

  // TODO: Provision app subdomain (separate Next.js app or SaaS login)
  appUrl: "https://app.woneportal.com",

  tagline: "Where SoCal Startups Launch. Where Capital Flows.",
  description:
    "Wone connects Southern California founders with 200+ vetted investors, expert advisors, and AI-powered fundraising tools. Transparent fundraising, real-time scorecards, grant matching, and more. Now in beta.",

  email: {
    // TODO: Verify these inboxes are live and monitored before launch
    hello: "hello@woneportal.com",
    privacy: "privacy@woneportal.com",
    donate: "donate@woneportal.com",
  },

  social: {
    // TODO: Create/claim these accounts and confirm the URLs are correct
    twitterHandle: "@woneportal",
    twitterUrl: "https://twitter.com/woneportal",
    linkedinUrl: "https://linkedin.com/company/wone",
    instagramUrl: "https://instagram.com/woneportal",
  },

  launch: {
    // TODO: Update once beta launch date is confirmed
    betaDate: "Q2 2026",
  },
} as const;
