'use client';

import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { WalletButton } from './WalletButton';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-fg">Propsperity</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#properties" className="text-fg/80 hover:text-fg transition-colors">
              Properties
            </a>
            <a href="#governance" className="text-fg/80 hover:text-fg transition-colors">
              Governance
            </a>
            <a href="#community" className="text-fg/80 hover:text-fg transition-colors">
              Community
            </a>
            <WalletButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-fg" />
            ) : (
              <Menu className="w-6 h-6 text-fg" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#properties"
                className="text-fg/80 hover:text-fg transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Properties
              </a>
              <a
                href="#governance"
                className="text-fg/80 hover:text-fg transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Governance
              </a>
              <a
                href="#community"
                className="text-fg/80 hover:text-fg transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </a>
              <WalletButton />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
