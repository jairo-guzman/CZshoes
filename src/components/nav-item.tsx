interface NavItemProps {
  href: string;
  label: string;
}

export function NavItem({ href, label }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className="text-foreground-secondary font-medium py-2 relative"
      >
        {label}
      </a>
    </li>
  );
}
