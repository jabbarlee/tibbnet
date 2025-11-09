import {
  UserCircle,
  Calendar,
  Clock,
  Video,
  Tag,
  Bell,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DOCTOR_FEATURES = [
  {
    title: "Ətraflı Profil Qeydiyyatı",
    icon: UserCircle,
    description: "Həkim profili yaratmaq və idarə etmək",
  },
  {
    title: "Dinamik iş Qrafiki",
    icon: Calendar,
    description: "İş saatlarını asanlıqla tənzimləyin",
  },
  {
    title: "Sıra və Vaxt ilə Görüşlər",
    icon: Clock,
    description: "Görüş sistemini idarə edin",
  },
  {
    title: "Əyani, Onlayn Qəbullar",
    icon: Video,
    description: "Hər iki format üçün qəbul aparın",
  },
  {
    title: "Aksiyalar, Kuponlar",
    icon: Tag,
    description: "Xüsusi təkliflər yaradın",
  },
  {
    title: "Ani Bildirişlər",
    icon: Bell,
    description: "Email, SMS, Mobil bildirişlər",
  },
  {
    title: "Şəxsi portal, Hesabatlar",
    icon: BarChart,
    description: "Detallı statistika və hesabatlar",
  },
];

export function DoctorFeaturesSection() {
  return (
    <section id="hekim-features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
          Həkimsiniz?
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Tibbi Xidmətlərin asan, təhlükəsiz və sərfəli virtual məkanı olan
          TİBBNET Sizin də ünvanınız olsun!
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {DOCTOR_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#4D8875]/30"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-[#4D8875]/10 rounded-full">
                      <Icon className="w-8 h-8 text-[#4D8875]" />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-[#4D8875] text-white hover:bg-[#3d6d5f] px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all"
          >
            Müraciət et
          </Button>
        </div>
      </div>
    </section>
  );
}
