export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Domov", href: "/" },
  { label: "Hypotekárna kalkulačka", href: "/#kalkulacka" },
  { label: "O nás", href: "/o-nas" },
  { label: "Blog", href: "/blog" }
];
