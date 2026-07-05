export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Trauma & EMDR", href: "/services/emdr-trauma" },
      { label: "IFS Therapy", href: "/services/ifs-therapy" },
      { label: "Couples & Family", href: "/services/couples-family" },
      { label: "Individual Counseling", href: "/services/individual-counseling" },
      { label: "Group Therapy", href: "/services/group-therapy" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "For Professionals", href: "/for-professionals" },
  { label: "Court Services", href: "/court-services" },
  { label: "Podcast", href: "/podcast" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "For Professionals", href: "/for-professionals" },
  { label: "Court Services", href: "/court-services" },
  { label: "Podcast", href: "/podcast" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];
