import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCTASection() {
  return (
    <section
      id="contact-cta"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4D8875]/10 to-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Sürətli, effektiv və keyfiyyətli tibbi xidmət lazımdırsa
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Bizimlə əlaqə saxlayın, Sizə uyğun Həkim tapmaqda köməklik edək
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#4D8875] text-white rounded-xl hover:bg-[#3d6d5f] transition-all hover:shadow-xl"
            asChild
          >
            <a href="tel:+994102250303">
              <Phone className="w-5 h-5" />
              <span>+994 10 225 03 03</span>
            </a>
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="p-3 border-2 border-[#4D8875] text-[#4D8875] rounded-xl hover:bg-[#4D8875] hover:text-white transition-all"
            aria-label="Send message"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="p-3 border-2 border-[#4D8875] text-[#4D8875] rounded-xl hover:bg-[#4D8875] hover:text-white transition-all"
            asChild
            aria-label="Send email"
          >
            <a href="mailto:info@tibbnet.az">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
