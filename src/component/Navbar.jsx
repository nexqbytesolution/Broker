"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Map,
  Building2,
  Wrench,
  Phone,
  User,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/rooms", label: "Rooms", icon: Home },
    { href: "/land", label: "Land", icon: Map },
    { href: "/office", label: "Office", icon: Building2 },
    { href: "/services", label: "Services", icon: Wrench },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo with linear */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-linear-to-br from-blue-600 to-blue-700 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Prime<span className="text-blue-600">Broker</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 flex items-center space-x-2 text-sm font-medium group"
              >
                <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-slideDown">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-2 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="block w-full bg-linear-to-r from-blue-600 to-blue-700 text-white text-center px-4 py-3 rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
