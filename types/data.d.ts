interface projectDetails {
  img: string;
  title: string;
  desc: string;
  tech: string[];
  links: string[];
  icons: React.ReactNode[];
}

interface ContactInfoItem {
  title: string;
  value: string;
  icon: React.ReactNode;
}

interface SocialLink {
  url: string;
  icon: React.ReactNode;
  title: string;
}

interface navItems {
  id: number;
  name: string;
  href: string;
}