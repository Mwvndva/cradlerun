import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is included in the $4,500 investment?",
    answer: "The team entry covers the complete 4-day rally experience for a Driver and Co-Driver. This includes elite accommodation references, return flights, vehicle freight and logistics, 24/7 tactical medical support, advanced route clearing, and an exclusive driver's pack with premium merchandise."
  },
  {
    question: "What defines the route?",
    answer: "The Cradle Run 2026 traverses 700+ kilometers of Kenya's most spectacular landscapes. Starting from the urban luxury of Nairobi, we journey through scenic escarpments and savannas, concluding with a grand finale in coastal Malindi. Detailed navigation is provided by our precision team."
  },
  {
    question: "What vehicles are eligible for the rally?",
    answer: "We welcome all performance and luxury vehicles that embody the spirit of the drive. Whether it's a modern supercar, a classic grand tourer, or a performance SUV, your vehicle should be ready for a 700km grand tour. All cars undergo a pre-rally technical inspection."
  },
  {
    question: "How does the charity impact work?",
    answer: "We believe in driving with purpose. 10% of every team's entry fee is donated directly to our charitable partners to support critical medical needs. Additionally, we use our convoy's presence to raise awareness and funds along the route."
  },
  {
    question: "Is this a race?",
    answer: "The Cradle Run is a luxury grand tour, not a timed race. While we appreciate performance, safety and experience are paramount. We travel in a coordinated convoy with pace cars and professional logistics support to ensure a seamless journey."
  },
  {
    question: "What support is provided during the drive?",
    answer: "Your safety and asset integrity are our top priority. The convoy is flanked by a dedicated 'Pit Crew' for mechanical assists, a fully equipped medical unit, and security detail. You focus on the drive; we handle the contingencies."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-white mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-white/70">
            Everything you need to know about CRADLE RUN 2026
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-primary/30 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-white hover:text-primary">
                  <span className="font-bebas text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
