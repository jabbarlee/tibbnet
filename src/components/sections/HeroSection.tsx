import { Monitor, FileText, Video, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FEATURE_BADGES = [
  { text: "İnteraktiv virtual klinika", icon: Monitor },
  { text: "Rəqəmsal klinik məlumatlar", icon: FileText },
  { text: "Əyani və Onlayn xidmətlər", icon: Video },
  { text: "Təhlükəsizlik və anonimlik", icon: Shield },
];

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4D8875]/5 to-white">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Peşəkar Həkimlərin Məkanı!
          </h1>

          <Button
            size="lg"
            className="bg-[#4D8875] text-white hover:bg-[#3d6d5f] px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all"
          >
            Bizə qoşulun
          </Button>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            {FEATURE_BADGES.map((badge) => {
              const Icon = badge.icon;
              return (
                <Badge
                  key={badge.text}
                  variant="secondary"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md text-sm"
                >
                  <Icon className="w-4 h-4 text-[#4D8875]" />
                  <span>{badge.text}</span>
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Right Visual Placeholder */}
        <div className="relative h-96 md:h-full bg-gradient-to-br from-[#4D8875]/10 to-transparent rounded-2xl flex items-center justify-center border-2 border-dashed border-[#4D8875]/20">
          <p className="text-gray-400 text-center px-4">
            Hero illustration/mockup area
          </p>
        </div>
      </div>
    </section>
  );
}
