import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-[#5a6871] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="font-semibold text-[#17202a]">
            KI-Agenten für HKLS-Kalkulationen
          </p>
          <p className="mt-1">
            Agentische Workflows für LV, ONLV, Excel und Freigabe.
          </p>
        </div>
        <nav
          aria-label="Rechtliche Links"
          className="flex flex-wrap gap-2"
        >
          <FooterLink href="/impressum">Impressum</FooterLink>
          <FooterLink href="/datenschutz">Datenschutz</FooterLink>
        </nav>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex w-fit items-center justify-center rounded-md border border-[#cbd7dc] bg-[#fbfaf6] px-4 py-2 font-semibold text-[#16476b] transition hover:border-[#9db8c9] hover:bg-[#eef5f8] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
    >
      {children}
    </Link>
  );
}
