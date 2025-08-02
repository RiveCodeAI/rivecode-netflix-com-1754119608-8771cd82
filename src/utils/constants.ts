export const SITE_CONFIG = {
  name: 'Netflix',
  domain: 'netflix.com',
  region: 'Germany',
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'de']
};

export const PRICING = {
  startingPrice: '€4.99',
  currency: 'EUR',
  billingPeriod: 'monthly'
};

export const LAYOUT = {
  headerHeight: '80px',
  maxContentWidth: '1200px',
  mobileBreakpoint: '640px',
  tabletBreakpoint: '768px',
  desktopBreakpoint: '1024px'
};

export const URLS = {
  logo: "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1a7-75a7-a8b7-f85133e4c823/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",
  heroBg: "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/DE-en-20250721-TRIFECTA-perspective_dce16a36-990c-42cc-9038-3d76fd400e2a_large.jpg"
};

export const API_ENDPOINTS = {
  signup: '/api/signup',
  login: '/api/login',
  content: '/api/content',
  trending: '/api/trending'
};

export const COOKIE_CONSENT = {
  duration: 365,
  necessary: true,
  analytics: false,
  marketing: false
};