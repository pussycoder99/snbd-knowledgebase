import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: 'https://snbdhost.com/privacy-policy.php', label: 'Privacy' },
    { href: 'https://snbdhost.com/terms-of-service.php', label: 'Terms' },
    { href: 'https://snbdhost.com', label: 'snbdhost.com' },
  ];

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {currentYear} SNBD HOST. All rights reserved.
        </p>
        <nav className="flex gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
