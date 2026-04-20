"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-is-environmental-racism", label: "What Is It?" },
  { href: "/map-and-charts", label: "Map & Charts" },
  { href: "/case-study", label: "Case Study" },
  { href: "/what-justice-looks-like", label: "What Justice Looks Like" },
  { href: "/works-cited", label: "Works Cited" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-green-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <Link href="/" className="text-xl font-bold leading-tight hover:text-green-200 transition-colors">
          Environmental Justice
        </Link>
        <nav>
          <ul className="flex flex-wrap gap-1 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-3 py-1.5 rounded transition-colors ${
                    pathname === href
                      ? "bg-green-700 text-white font-semibold"
                      : "hover:bg-green-800 text-green-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
