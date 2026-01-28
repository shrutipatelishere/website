import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useScrollPosition, useScrollSpy } from '../../hooks';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { navigationLinks, universityInfo } from '../../data';

function Logo() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="url(#logoGrad)" />
      <path
        d="M20 8L12 28h4l1.5-4h5l1.5 4h4L20 8zm0 8l2 6h-4l2-6z"
        fill="white"
      />
      <circle cx="20" cy="14" r="2" fill="white" opacity="0.8" />
    </svg>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const { isScrolled, scrollDirection } = useScrollPosition();
  const activeSection = useScrollSpy(
    navigationLinks.map((link) => link.id),
    { offset: 120 }
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40
          transition-all duration-300 ease-smooth
          ${isScrolled
            ? 'glass border-b border-neutral-200/50 dark:border-neutral-700/50 shadow-sm'
            : 'bg-transparent'
          }
          ${scrollDirection === 'down' && isScrolled && !isMobileMenuOpen
            ? '-translate-y-full'
            : 'translate-y-0'
          }
        `}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div
            className={`
              flex items-center justify-between
              transition-all duration-300
              ${isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-18 md:h-20'}
            `}
          >
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 sm:gap-3 group"
              aria-label={`${universityInfo.name} - Home`}
            >
              <Logo />
              <div className="hidden xs:block">
                <span className="block text-sm sm:text-base md:text-lg font-semibold text-foreground dark:text-foreground-dark group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Aurora
                </span>
                <span className="block text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 -mt-0.5">
                  International University
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Main navigation">
              {navigationLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`
                    px-3 xl:px-4 py-2 text-sm font-medium rounded-lg
                    transition-colors duration-200
                    ${activeSection === link.id
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-foreground dark:hover:text-foreground-dark hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    }
                  `}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>

              <Button
                as="a"
                href="#contact"
                size="sm"
                className="hidden sm:inline-flex text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
              >
                Apply Now
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 sm:p-2.5 rounded-lg sm:rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`
          fixed inset-0 z-50 lg:hidden
          transition-opacity duration-300
          ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />

        <div
          className={`
            absolute right-0 top-0 h-full w-full max-w-[280px] xs:max-w-xs sm:max-w-sm
            bg-white dark:bg-neutral-900
            shadow-2xl
            transition-transform duration-300 ease-smooth
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-neutral-200 dark:border-neutral-700">
            <span className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground-dark">
              Menu
            </span>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg sm:rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-3 sm:p-4" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`
                      block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium
                      transition-colors duration-200
                      ${activeSection === link.id
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }
                    `}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <Button
                as="a"
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full justify-center text-sm sm:text-base"
              >
                Apply Now
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
