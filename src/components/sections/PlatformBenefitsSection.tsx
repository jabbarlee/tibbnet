import { Globe, Monitor, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BENEFITS = [
  {
    title: "Məkan məhdudiyyəti olmayan",
    icon: Globe,
    description: "Harada olursanız olun, xidmətlərdən yararlana bilərsiniz",
  },
  {
    title: "Virtual hiss etdirməyən",
    icon: Monitor,
    description: "Real klinik təcrübəsi kimi keyfiyyətli xidmət",
  },
  {
    title: "İnteraktiv klinik qeydiyyat imkanı ilə",
    icon: FileCheck,
    description: "Rəqəmsal klinik məlumatların idarə edilməsi",
  },
];

export function PlatformBenefitsSection() {
  return (
    <section
      id="platform-benefits"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
          TİBBNET Platformasında
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={benefit.title}
                className="p-8 bg-gradient-to-br from-[#4D8875]/5 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-[#4D8875]/10 rounded-full">
                      <Icon className="w-10 h-10 text-[#4D8875]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
