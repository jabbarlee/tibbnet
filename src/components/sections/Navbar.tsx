"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { text: "İmkanlar", href: "#imkanlar" },
  { text: "Necə işləyir?", href: "#nece-isleyir" },
  { text: "Haqqımızda", href: "#haqqimizda" },
];

const LANGUAGES = ["AZ", "EN", "RU"];

export function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("AZ");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-[#4D8875]">
              TİBBNET
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Phone */}
            <a
              href="tel:+994102250303"
              className="flex items-center space-x-1 text-gray-700 hover:text-[#4D8875] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#4D8875]" />
              <span className="text-sm">+994 10 225 03 03</span>
            </a>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#4D8875] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2 border-l pl-6">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={
                    selectedLanguage === lang
                      ? "px-2 py-1 text-sm rounded bg-[#4D8875] text-white"
                      : "px-2 py-1 text-sm rounded text-gray-600 hover:bg-gray-100"
                  }
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Auth Button */}
            <Button className="bg-[#4D8875] text-white hover:bg-[#3d6d5f]">
              Daxil ol
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Nav Links */}
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-700 hover:text-[#4D8875] transition-colors text-lg"
                    >
                      {link.text}
                    </a>
                  ))}

                  {/* Mobile Phone */}
                  <a
                    href="tel:+994102250303"
                    className="flex items-center space-x-2 text-gray-700 hover:text-[#4D8875] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#4D8875]" />
                    <span>+994 10 225 03 03</span>
                  </a>

                  {/* Mobile Language Selector */}
                  <div className="flex items-center space-x-2 pt-4 border-t">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLanguage(lang)}
                        className={
                          selectedLanguage === lang
                            ? "px-3 py-1 text-sm rounded bg-[#4D8875] text-white"
                            : "px-3 py-1 text-sm rounded text-gray-600 hover:bg-gray-100"
                        }
                      >
                        {lang}
                      </button>
                    ))}
                  </div>

                  {/* Mobile Auth Button */}
                  <Button className="w-full bg-[#4D8875] text-white hover:bg-[#3d6d5f]">
                    Daxil ol
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
