import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, Sun, Moon, GraduationCap, BookOpen, Users, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { departments } from '@/data/departments';

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

export function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/campus-life', label: 'Campus' },
    { path: '/events', label: 'Events' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b'
          : 'bg-transparent'
      )}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container mx-auto px-3 sm:px-4">
        <nav className="flex items-center justify-between h-14 sm:h-16 md:h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
            aria-label="Westbrook University - Home"
          >
            <img
              src="/crest.svg"
              alt=""
              className="h-8 sm:h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden min-[400px]:block">
              <span className="font-serif text-base sm:text-lg md:text-xl font-semibold text-foreground">
                Westbrook
              </span>
              <span className="hidden sm:block text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase">
                University
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {/* Academics Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "flex items-center gap-1 font-medium text-sm px-2.5 xl:px-3",
                    location.pathname.startsWith('/academics') || location.pathname.startsWith('/departments')
                      ? 'text-gold-600 dark:text-gold-400'
                      : ''
                  )}
                >
                  Academics
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-serif font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">
                      Overview
                    </h4>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild>
                        <Link to="/academics" className="flex items-center gap-2 cursor-pointer">
                          <GraduationCap className="h-4 w-4 text-gold-600" />
                          All Programs
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/academics?tab=research" className="flex items-center gap-2 cursor-pointer">
                          <FlaskConical className="h-4 w-4 text-gold-600" />
                          Research
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">
                      Quick Links
                    </h4>
                    <div className="space-y-1">
                      <DropdownMenuItem asChild>
                        <Link to="/academics?degree=Bachelor" className="flex items-center gap-2 cursor-pointer">
                          <BookOpen className="h-4 w-4 text-gold-600" />
                          Undergraduate
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/academics?degree=Master" className="flex items-center gap-2 cursor-pointer">
                          <Users className="h-4 w-4 text-gold-600" />
                          Graduate
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                </div>
                <DropdownMenuSeparator className="my-4" />
                <h4 className="font-serif font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">
                  Departments
                </h4>
                <div className="grid grid-cols-2 gap-1">
                  {departments.slice(0, 6).map((dept) => (
                    <DropdownMenuItem key={dept.id} asChild>
                      <Link
                        to={`/departments/${dept.slug}`}
                        className="text-sm cursor-pointer"
                      >
                        {dept.shortName}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Regular Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-2.5 xl:px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-accent/10 hover:text-gold-600 dark:hover:text-gold-400",
                  isActive(link.path)
                    ? 'text-gold-600 dark:text-gold-400'
                    : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="rounded-full h-8 w-8 sm:h-9 sm:w-9"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>

            {/* Apply Now CTA - Hidden on mobile and tablet */}
            <Link to="/admissions#apply" className="hidden md:block lg:hidden xl:block">
              <Button variant="gold" size="sm" className="text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4">
                Apply Now
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Open menu" className="h-8 w-8 sm:h-9 sm:w-9">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto p-0">
                <SheetHeader className="p-4 sm:p-6 border-b">
                  <SheetTitle className="flex items-center gap-3">
                    <img src="/crest.svg" alt="" className="h-8 sm:h-10 w-auto" />
                    <span className="font-serif text-lg">Westbrook</span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col" aria-label="Mobile navigation">
                  {/* Home Link */}
                  <Link
                    to="/"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center px-4 sm:px-6 py-3 sm:py-4 font-medium transition-colors border-b",
                      isActive('/') ? 'bg-gold-50 dark:bg-gold-900/20 text-gold-600' : 'hover:bg-muted/50'
                    )}
                  >
                    Home
                  </Link>

                  {/* Academics Section */}
                  <div className="border-b">
                    <div className="px-4 sm:px-6 py-3 bg-muted/30">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Academics
                      </span>
                    </div>
                    <Link
                      to="/academics"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-4 sm:px-6 py-3 font-medium transition-colors hover:bg-muted/50"
                    >
                      All Programs
                    </Link>
                    <div className="max-h-48 overflow-y-auto">
                      {departments.map((dept) => (
                        <Link
                          key={dept.id}
                          to={`/departments/${dept.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center px-6 sm:px-8 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                        >
                          {dept.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Other Links */}
                  <div className="border-b">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center px-4 sm:px-6 py-3 sm:py-4 font-medium transition-colors",
                          isActive(link.path) ? 'bg-gold-50 dark:bg-gold-900/20 text-gold-600' : 'hover:bg-muted/50'
                        )}
                      >
                        {link.path === '/campus-life' ? 'Campus Life' : link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Apply Button */}
                  <div className="p-4 sm:p-6">
                    <Link to="/admissions#apply" onClick={() => setMobileOpen(false)}>
                      <Button variant="gold" className="w-full" size="lg">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
