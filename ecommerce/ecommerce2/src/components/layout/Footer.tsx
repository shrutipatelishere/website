import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Shield,
  Truck,
  RotateCcw,
  CreditCard,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pb-20 md:pb-0">
      {/* Trust strip */}
      <div className="border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center">
                <Shield className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <p className="font-semibold text-sm">100% Genuine</p>
                <p className="text-xs text-clinical-400">Authentic medicines</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center">
                <Truck className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <p className="font-semibold text-sm">Fast Delivery</p>
                <p className="text-xs text-clinical-400">Same day available</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <p className="font-semibold text-sm">Easy Returns</p>
                <p className="text-xs text-clinical-400">15-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <p className="font-semibold text-sm">Secure Payment</p>
                <p className="text-xs text-clinical-400">256-bit encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-display font-bold">MedWell</span>
            </Link>
            <p className="text-sm text-clinical-400 mb-6 max-w-xs">
              Your trusted online pharmacy for genuine medicines, health products, and wellness solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-clinical-400 hover:text-white hover:bg-navy-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-clinical-400 hover:text-white hover:bg-navy-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-clinical-400 hover:text-white hover:bg-navy-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-clinical-400 hover:text-white hover:bg-navy-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/categories" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/upload-prescription" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  Upload Prescription
                </Link>
              </li>
              <li>
                <Link href="/account/orders" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  Offers & Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Customer Care</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/licenses" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  Licenses
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-sm text-clinical-400 hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-clinical-400">
                <Phone className="w-4 h-4 mt-0.5 text-teal-400" />
                <div>
                  <p className="hover:text-white transition-colors cursor-pointer">1800-123-4567</p>
                  <p className="text-xs">Mon-Sat, 8am-10pm</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-clinical-400">
                <Mail className="w-4 h-4 mt-0.5 text-teal-400" />
                <p className="hover:text-white transition-colors cursor-pointer">support@medwell.com</p>
              </li>
              <li className="flex items-start gap-2 text-sm text-clinical-400">
                <MapPin className="w-4 h-4 mt-0.5 text-teal-400" />
                <p>Mumbai, Maharashtra, India</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-clinical-500 text-center md:text-left">
              © {currentYear} MedWell Pharmacy. All rights reserved. Licensed by Drug Control Authority.
            </p>
            <div className="flex items-center gap-4">
              <img src="/images/payment/visa.svg" alt="Visa" className="h-6 opacity-60" />
              <img src="/images/payment/mastercard.svg" alt="Mastercard" className="h-6 opacity-60" />
              <img src="/images/payment/upi.svg" alt="UPI" className="h-6 opacity-60" />
              <img src="/images/payment/paytm.svg" alt="Paytm" className="h-6 opacity-60" />
            </div>
          </div>
          <p className="mt-4 text-xs text-clinical-600 text-center md:text-left">
            Disclaimer: Medicines are sold as per applicable laws. Consult a doctor for medical advice.
            Prescription required where indicated.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
