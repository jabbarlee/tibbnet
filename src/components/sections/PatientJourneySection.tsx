"use client";

import { useState } from "react";
import { Search, Calendar, Stethoscope, Heart, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PATIENT_STEPS = [
  {
    stepNumber: 1,
    title: "HƏKİM SEÇ",
    description:
      "Pasientlər, elastik axtarış imkanı ilə Həkimi rahatlıqla axtarır, detallı profil məlumatları ilə tanış olur, özünə seçilmiş Həkimlər kataloqu formalaşdıra bilir. Həkimlərin xüsusi təklifləri, endirim kuponları kimi Platformanın geniş marketing imkanlarından yararlana bilir.",
    features: [
      "Elastik axtarış mexanizmi",
      "Həkimin ətraflı profil məlumatı",
      "Həkimlərlə daxili yazışma",
      "Aksiyalar, endirim kuponları",
    ],
    icon: Search,
  },
  {
    stepNumber: 2,
    title: "GÖRÜŞ AL",
    description:
      "Pasientlər, Həkimlərin xidmət parametrlərini ətraflı analiz edib, sıra vəya vaxt metodu ilə Həkimlərdən özləri və himayələrində olan yaxınları üçün görüş ala bilir. Şəxsi Portallarından görüş məlumatlarını izləyib, zərurət olduqda redaktə edə bilir.",
    features: [
      "Sıra ilə randevu mexanizmi",
      "Vaxt ilə randevu mexanizmi",
      "Ani bildirişlər (e-mail, sms, mobil)",
      "Şəxsi portaldan izləmə",
    ],
    icon: Calendar,
  },
  {
    stepNumber: 3,
    title: "QƏBULA QATIL",
    description:
      "Pasientlər, əyani və onlayn qəbul prosesinin status vəziyyətini, qəbula bağlı ödəmə məlumatlarını, Qəbul prosesində formalaşan anamnez, şikayət, müayinə və müalicə, resept məlumatlarını portallarından izləyir, xidmətlərə rəy verib dəstək xətti xidmətlərindən yararlana bilir",
    features: [
      "Əyani qəbul mexanizmi",
      "Onlayn qəbul mexanizmi",
      "Rəqəmsal klinik məlumatlar",
      "Rəylər, dəstək xətti",
    ],
    icon: Stethoscope,
  },
  {
    stepNumber: 4,
    title: "SAĞLAM QAL",
    description:
      "Sağlamlığınıza prioritet verin və TİBBNET platforması ilə peşəkar həkimlərlə əlaqə saxlayın.",
    features: [],
    icon: Heart,
  },
];

export function PatientJourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = PATIENT_STEPS[activeStep];
  const Icon = currentStep.icon;

  return (
    <section
      id="pasient-journey"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
          Pasiyentsiniz?
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          TİBBNET Sizə və yaxınlarınıza tibbi xidmətlərdən gözlədiyiniz
          keyfiyyət və rahatlığı verir!
        </p>

        {/* Step Breadcrumb */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          {PATIENT_STEPS.map((step, index) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(index)}
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all ${
                activeStep === index
                  ? "bg-[#4D8875] text-white scale-110"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {step.stepNumber}
            </button>
          ))}
        </div>

        {/* Step Content */}
        <Card className="bg-gradient-to-br from-[#4D8875]/5 to-white rounded-2xl p-8 shadow-xl mb-8">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-[#4D8875]/10 rounded-full">
                  <Icon className="w-12 h-12 text-[#4D8875]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  {currentStep.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {currentStep.description}
                </p>
                {currentStep.features.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {currentStep.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="outline"
                        className="border-[#4D8875] text-[#4D8875]"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#4D8875] text-white hover:bg-[#3d6d5f] px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all"
          >
            Qeydiyyatdan keç/Daxil ol
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-[#4D8875] transition-all"
          >
            <Chrome className="w-5 h-5 mr-2" />
            Google
          </Button>
        </div>
      </div>
    </section>
  );
}
