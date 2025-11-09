import { Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppAvailabilitySection() {
  return (
    <section
      id="app-availability"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4D8875]/10 to-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
          Tibbi Xidmətlərin asan və sərfəli məkanı olan TİBBNET, Sizin də
          ünvanınız olsun!
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* App Store Button */}
          <Button
            variant="outline"
            size="lg"
            className="inline-flex items-center space-x-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all border-0"
          >
            <Apple className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </Button>

          {/* Google Play Button */}
          <Button
            variant="outline"
            size="lg"
            className="inline-flex items-center space-x-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all border-0"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
