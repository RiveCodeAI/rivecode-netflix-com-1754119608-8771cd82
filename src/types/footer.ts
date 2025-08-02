export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterSection {
  links: FooterLink[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    links: [
      { text: "FAQ", href: "/faq" },
      { text: "Help Center", href: "/help" },
      { text: "Account", href: "/account" },
      { text: "Media Center", href: "/media-center" }
    ]
  },
  {
    links: [
      { text: "Investor Relations", href: "/ir" },
      { text: "Jobs", href: "/jobs" },
      { text: "Netflix Shop", href: "/shop" },
      { text: "Redeem Gift Cards", href: "/redeem" }
    ]
  },
  {
    links: [
      { text: "Buy Gift Cards", href: "/gift-cards" },
      { text: "Ways to Watch", href: "/ways-to-watch" },
      { text: "Terms of Use", href: "/terms" },
      { text: "Privacy", href: "/privacy" }
    ]
  },
  {
    links: [
      { text: "Cookie Preferences", href: "/cookies" },
      { text: "Impressum", href: "/impressum" },
      { text: "Contact Us", href: "/contact" },
      { text: "Speed Test", href: "/speedtest" }
    ]
  },
  {
    links: [
      { text: "Legal Guarantee", href: "/legal-guarantee" },
      { text: "Legal Notices", href: "/legal" },
      { text: "Only on Netflix", href: "/only-on-netflix" },
      { text: "Ad Choices", href: "/ad-choices" }
    ]
  }
];