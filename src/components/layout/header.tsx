import Link from 'next/link';
import { SnbdLogo } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Header() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#recent-articles', label: 'Articles' },
    { href: 'https://portal.snbdhost.com/submitticket.php', label: 'Contact', target: '_blank' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <SnbdLogo className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">SNBD HOST</span>
              <span className="font-bold font-headline">Knowledgebase</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.target}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <Separator orientation="vertical" className="h-6" />
          <Button asChild>
            <a href="https://portal.snbdhost.com" target="_blank" rel="noopener noreferrer">
              Client Portal
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
