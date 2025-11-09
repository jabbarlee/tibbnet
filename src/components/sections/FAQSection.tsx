import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Qeydiyyatdan necə keçilir?",
    answer:
      'Mobil tətbiq vəya WEB sayt üzərindən qeydiyyatdan keçmək üçün həkim vəya pasient tərəfindən əsas səhifədə yerləşən "Qeydiyyat" düyməsinə basılaraq qeydiyyat ekranına keçid edilir. Məcburi xanalar doldurulur, daxil edilmiş məlumatlar doğru və tamdırsa təsdiq edilərək qeydiyyatdan keçilir. Pasient birbaşa pasient portalına daxil olur, həkim isə qeydiyyat formunu doldurub təsdiq olunması üçün TİBBNET portalına göndərir və təsdiqləndikdən sonra həkim portalına daxil olur.',
  },
  {
    question: "Əyani vəya Onlayn görüş necə alınır?",
    answer:
      "Mobil tətbiq vəya WEB sayt üzərindən görüş alınması üçün lazım olan ixtisasa uyğun olaraq həkim axtarış edilib tapılır. Həkimin profilinə keçid edilib, həkimin iş qrafikinə və görüş metoduna uyğun olaraq istənilən tarix seçilir, sıra vəya dəqiq vaxt metodu ilə pasient özünə vəya himayəsində olan şəxslərə görüş ala bilir.",
  },
  {
    question: "Onlayn görüş necə başladılır?",
    answer:
      'Həkim portaldan vəya pasient portaldan görüşlər menyusunda onlayn görüş sətrində aktiv olan "Onlayn" düyməsinə basılaraq görüş başladıla bilər.',
  },
  {
    question: "Aksiyalara necə baxılır?",
    answer:
      'Mobil tətbiq vəya WEB sayt üzərindən aksiyalara baxmaq üçün əsas səhifənin yuxarı hissəsində yerləşən "Aksiyalar" menyusuna keçid edilib cari aksiyalara baxıla bilər.',
  },
  {
    question: "Həkimlər TİBBNET tərəfindən yoxlanılır mı?",
    answer:
      "Bəli, bizimlə əməkdaşlıq edən bütün Həkimlərin məlumatları TİBBNET tərəfindən yoxlanılır və təsdiqləndikdən sonra həkimlər Mobil tətbiq və WEB sayt üzərindən xidmət verə bilir.",
  },
  {
    question: "Tibbi xidmətləriniz hansılardır?",
    answer:
      "TİBBNET - in göstərdiyi xidmətlərə Mobil tətbiq və WEB sayt üzərindən baxıla bilər vəya detallı məlumat almaq üçün dəstək xətti ilə əlaqə saxlanıla bilər.",
  },
  {
    question: "Ödəniş metodlarınız hansılardır?",
    answer:
      "Ödəniş metodu nəğd və bank kartı ilə mümkündür. Görüş onlayındırsa bank kartı vasitəsi ilə, əyanidirsə nəğd və bank kartı vasitəsi ilə ödəniş edilə bilər.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          TEZ-TEZ Verilən suallar?
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Fərqli tibbi xidmətlərdə ixtisaslaşmış təcrübəli TİBBNET həkim
          kollektivi
        </p>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#4D8875]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
