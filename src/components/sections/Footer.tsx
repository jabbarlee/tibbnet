import { Mail, Phone, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

const FOOTER_LINKS = [
  { text: "Haqqımızda", href: "#haqqimizda" },
  { text: "Necə işləyir?", href: "#nece-isleyir" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">TİBBNET</h3>
            <p className="text-gray-400">Peşəkar Həkimlərin Məkanı</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Keçidlər</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Əlaqə</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@tibbnet.az"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@tibbnet.az</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+994102250303"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+994 10 225 03 03</span>
                </a>
              </li>
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Yüklə</h4>
            <div className="flex flex-col space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all border-0 justify-start"
              >
                <Apple className="w-5 h-5" />
                <span>App Store</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all border-0 justify-start"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span>Google Play</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TİBBNET. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
}
