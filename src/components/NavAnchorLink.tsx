"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string; // e.g. "/#about"
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void; // e.g. () => setOpen(false)
};

export default function NavAnchorLink({ href, children, className, onNavigate }: Props) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // ✅ Always close menu immediately
    onNavigate?.();

    // Smooth-scroll only when already on home and it's a hash link
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();

      const id = href.split("#")[1];
      const el = document.getElementById(id);

      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Update URL hash without jump
      history.pushState(null, "", href);
    }
    // If not on home, allow normal navigation to "/#about"
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
