import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-yellow-500/20 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="KIRI"
            width={130}
            height={44}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 text-sm font-medium text-white">

          <Link
            href="/coordinating"              /*"/platform"*/
            className="transition-colors duration-300 hover:text-yellow-500"
          >
            Platform
          </Link>

          <Link
            href="/coordinating"              /*"/solutions"*/
            className="transition-colors duration-300 hover:text-yellow-500"
          >
            Solutions
          </Link>

          <Link
            href="/coordinating"              /*"/leadership"*/
            className="transition-colors duration-300 hover:text-yellow-500"
          >
            Leadership
          </Link>

          <Link
            href="/coordinating"              /*"/investors" */
            className="transition-colors duration-300 hover:text-yellow-500"
          >
            Investors
          </Link>

          <Link
            href="/coordinating"              /*"/contact" */
            className="transition-colors duration-300 hover:text-yellow-500"
          >
            Contact
          </Link>

          <Link
            href="/mail"
            className="transition-colors duration-300 hover:text-yellow-500"
          >
            Webmail
          </Link>

        </div>

      </div>
    </nav>
  );
}