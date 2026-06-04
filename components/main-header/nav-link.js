"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${classes.navLink} ${pathname.startsWith(href) ? classes.active : ""}`}
    >
      {children}
    </Link>
  );
}
